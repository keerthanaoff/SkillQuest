// Deterministic Career Matching Engine for SkillQuest Quiz
import { CAREERS, getCareerById } from '../data/careers.js';
import { QUIZ_QUESTIONS } from '../data/quizQuestions.js';

export const ALL_CATEGORY_IDS = [
  'frontend',
  'fullstack',
  'data-analyst',
  'uiux-designer',
  'ai-ml',
  'cybersecurity',
  'devops',
  'qa-engineer',
  'product-manager',
  'it-support'
];

/**
 * Calculates raw points, normalized match percentages, and "why this matches" insights.
 * @param {Object} userAnswers - map of questionId -> optionId (e.g. { 1: '1a', 2: '2c' })
 * @returns {Object} { topThree, allRanked, totalQuestionsAnswered }
 */
export const calculateCareerScores = (userAnswers = {}) => {
  // Initialize zero scores for all 10 categories
  const categoryScores = {};
  ALL_CATEGORY_IDS.forEach((id) => {
    categoryScores[id] = 0;
  });

  // Track the specific question/options that contributed points to each category
  const contributionMap = {};
  ALL_CATEGORY_IDS.forEach((id) => {
    contributionMap[id] = [];
  });

  let answeredCount = 0;

  // Process answers
  Object.entries(userAnswers).forEach(([qIdStr, optId]) => {
    const qId = parseInt(qIdStr, 10);
    const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
    if (!question) return;

    const chosenOption = question.options.find((opt) => opt.id === optId);
    if (!chosenOption || !chosenOption.weights) return;

    answeredCount += 1;

    Object.entries(chosenOption.weights).forEach(([catId, weight]) => {
      if (categoryScores[catId] !== undefined) {
        categoryScores[catId] += weight;
        contributionMap[catId].push({
          questionTitle: question.title,
          optionText: chosenOption.text,
          weight
        });
      }
    });
  });

  // Find max raw score to scale relative match percentages
  const maxScore = Math.max(...Object.values(categoryScores), 1);

  // Compile ranked list with deterministic tie-breaking
  const ranked = ALL_CATEGORY_IDS.map((catId) => {
    const rawScore = categoryScores[catId];
    const career = getCareerById(catId);

    // Calculate a realistic relative match score (60% to 96% range if answered)
    let matchPercentage = 0;
    if (answeredCount > 0 && rawScore > 0) {
      // Relative match formula scaled realistically
      const ratio = rawScore / maxScore;
      matchPercentage = Math.round(55 + ratio * 40);
    } else if (answeredCount > 0) {
      matchPercentage = 45;
    }

    // Generate readable reasons why this matches
    const topContributions = (contributionMap[catId] || [])
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 3);

    const whyMatches = topContributions.map((c) => ({
      context: c.questionTitle,
      reason: c.optionText
    }));

    return {
      careerId: catId,
      career,
      rawScore,
      matchPercentage: Math.min(98, Math.max(0, matchPercentage)),
      whyMatches: whyMatches.length > 0 ? whyMatches : [
        {
          context: 'General Aptitude',
          reason: `Your problem-solving preferences align with the core competencies of ${career.name}.`
        }
      ]
    };
  });

  // Sort descending by rawScore, then matchPercentage, then alphabetical name
  ranked.sort((a, b) => {
    if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
    if (b.matchPercentage !== a.matchPercentage) return b.matchPercentage - a.matchPercentage;
    return a.career.name.localeCompare(b.career.name);
  });

  const topThree = ranked.slice(0, 3);

  return {
    topThree,
    allRanked: ranked,
    totalQuestionsAnswered: answeredCount,
    isComplete: answeredCount >= QUIZ_QUESTIONS.length
  };
};
