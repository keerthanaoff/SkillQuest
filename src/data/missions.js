// SkillQuest Missions, Gamification Tiers, and Badges Data

export const XP_LEVELS = [
  { level: 1, title: 'Explorer', minXP: 0, maxXP: 249, badge: '🧭', description: 'Starting your quest, discovering your strengths and tech horizons.' },
  { level: 2, title: 'Skill Builder', minXP: 250, maxXP: 599, badge: '⚡', description: 'Actively acquiring foundational skills and testing practical abilities.' },
  { level: 3, title: 'Project Maker', minXP: 600, maxXP: 1199, badge: '🛠️', description: 'Translating knowledge into concrete, resume-ready software projects.' },
  { level: 4, title: 'Career Ready', minXP: 1200, maxXP: 99999, badge: '🏆', description: 'Mastering case studies, interview readiness, and portfolio excellence.' }
];

export const getLevelForXP = (xp) => {
  const current = XP_LEVELS.slice().reverse().find((lvl) => xp >= lvl.minXP) || XP_LEVELS[0];
  const next = XP_LEVELS.find((lvl) => lvl.level === current.level + 1) || null;
  const progressInLevel = next
    ? Math.min(100, Math.round(((xp - current.minXP) / (next.minXP - current.minXP)) * 100))
    : 100;
  return {
    ...current,
    nextLevel: next,
    progressInLevel,
    xpToNext: next ? next.minXP - xp : 0
  };
};

export const DAILY_MISSIONS_POOL = [
  {
    id: 'dm-quiz',
    title: 'Complete Career Quest Quiz',
    description: 'Answer all 10 questions to unlock personalized career trajectory insights.',
    xp: 60,
    category: 'Discovery',
    actionRoute: 'quiz'
  },
  {
    id: 'dm-skill-update',
    title: 'Evaluate 2 Key Skills',
    description: 'Update the status of at least 2 skills in your target career checklist.',
    xp: 40,
    category: 'Skills',
    actionRoute: 'skills'
  },
  {
    id: 'dm-milestone',
    title: 'Conquer a Roadmap Milestone',
    description: 'Work through and check off an active roadmap milestone in your career journey.',
    xp: 80,
    category: 'Milestones',
    actionRoute: 'roadmap'
  },
  {
    id: 'dm-bookmark',
    title: 'Explore & Save 2 Career Paths',
    description: 'Browse the Career Explorer directory and bookmark 2 intriguing career paths.',
    xp: 35,
    category: 'Exploration',
    actionRoute: 'careers'
  },
  {
    id: 'dm-practice-task',
    title: 'Tackle a Recommended Practice Task',
    description: 'Pick an incomplete skill in your checklist and attempt its practical challenge.',
    xp: 75,
    category: 'Practice',
    actionRoute: 'skills'
  },
  {
    id: 'dm-compare',
    title: 'Compare 2 Competing Careers',
    description: 'Use the Career Comparison matrix to analyze daily tasks and skills required.',
    xp: 40,
    category: 'Strategy',
    actionRoute: 'results'
  },
  {
    id: 'dm-notes',
    title: 'Add a Roadmap Personal Note',
    description: 'Write a reflection or resource link on any active milestone card.',
    xp: 30,
    category: 'Reflection',
    actionRoute: 'roadmap'
  }
];

export const BADGES = [
  {
    id: 'badge-first-quest',
    name: 'First Quest Completed',
    icon: '🧭',
    description: 'Answered all 10 questions in the career discovery quiz.',
    condition: 'Complete the quiz at least once'
  },
  {
    id: 'badge-skill-seeker',
    name: 'Skill Seeker',
    icon: '⚡',
    description: 'Marked at least 3 skills as Learning or Confident.',
    condition: 'Update 3+ skills'
  },
  {
    id: 'badge-milestone-crusher',
    name: 'Milestone Crusher',
    icon: '🎯',
    description: 'Successfully checked off your first practical roadmap milestone.',
    condition: 'Complete 1 roadmap milestone'
  },
  {
    id: 'badge-career-collector',
    name: 'Horizon Scout',
    icon: '🌟',
    description: 'Saved 2 or more career paths to your personal collection.',
    condition: 'Save 2+ careers'
  },
  {
    id: 'badge-streak-pioneer',
    name: 'Consistent Explorer',
    icon: '🔥',
    description: 'Logged activity on 2 or more distinct days.',
    condition: 'Achieve a 2-day activity streak'
  },
  {
    id: 'badge-master-builder',
    name: 'Master Builder',
    icon: '🛠️',
    description: 'Reached Level 2: Skill Builder tier (250+ XP).',
    condition: 'Earn 250+ XP'
  },
  {
    id: 'badge-readiness-champion',
    name: 'Readiness Champion',
    icon: '🏆',
    description: 'Marked at least 5 skills as Confident in your target career.',
    condition: 'Master 5+ skills to Confident'
  },
  {
    id: 'badge-data-steward',
    name: 'Data Steward',
    icon: '💾',
    description: 'Exported your complete learning quest progress backup.',
    condition: 'Export quest data JSON'
  }
];
