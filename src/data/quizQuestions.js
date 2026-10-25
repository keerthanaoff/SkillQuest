// SkillQuest Interactive Career Discovery Quiz
// 10 Thoughtful, Balanced Questions mapping exploratory preferences to 10 Career Paths

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: 'When working on a digital project, which phase sparks your excitement the most?',
    subtitle: 'Think about where your energy naturally flows when starting something new.',
    encouragement: 'Every great quest begins with understanding your natural instincts!',
    options: [
      {
        id: '1a',
        text: 'Designing how it looks, crafting colors, layouts, and micro-interactions that feel delightful to touch.',
        weights: { 'uiux-designer': 3, 'frontend': 2, 'product-manager': 1 }
      },
      {
        id: '1b',
        text: 'Writing clean code that brings components to life and seeing immediate visual changes in the browser.',
        weights: { 'frontend': 3, 'fullstack': 2, 'uiux-designer': 1 }
      },
      {
        id: '1c',
        text: 'Connecting databases, orchestrating APIs, and building the behind-the-scenes engine that powers the app.',
        weights: { 'fullstack': 3, 'devops': 2, 'cybersecurity': 1 }
      },
      {
        id: '1d',
        text: 'Exploring data to find what users actually do, uncovering trends, and shaping the product roadmap.',
        weights: { 'data-analyst': 3, 'product-manager': 2, 'ai-ml': 1 }
      }
    ]
  },
  {
    id: 2,
    title: 'How do you prefer to tackle a complex, open-ended problem?',
    subtitle: 'Consider how you organize your thoughts and choose your approach.',
    encouragement: 'Knowing your problem-solving style is a superpower in tech.',
    options: [
      {
        id: '2a',
        text: 'Visualizing it through diagrams, user journey flows, and wireframes to ensure clarity for people.',
        weights: { 'uiux-designer': 3, 'product-manager': 2, 'frontend': 1 }
      },
      {
        id: '2b',
        text: 'Digging into datasets, checking statistical distributions, and letting quantitative evidence lead the way.',
        weights: { 'data-analyst': 3, 'ai-ml': 3, 'qa-engineer': 1 }
      },
      {
        id: '2c',
        text: 'Stress-testing the system, searching for vulnerabilities, edge cases, and unexpected points of failure.',
        weights: { 'cybersecurity': 3, 'qa-engineer': 3, 'it-support': 1 }
      },
      {
        id: '2d',
        text: 'Automating the workflow, creating reliable scripts, and streamlining the deployment process.',
        weights: { 'devops': 3, 'fullstack': 2, 'it-support': 2 }
      }
    ]
  },
  {
    id: 3,
    title: 'Which type of tangible work output brings you the deepest satisfaction?',
    subtitle: 'Imagine completing a hard project and showing your accomplishments.',
    encouragement: 'You are 30% through the quest — great progress!',
    options: [
      {
        id: '3a',
        text: 'A sleek, snappy web application that anyone can open on their phone and immediately enjoy using.',
        weights: { 'frontend': 3, 'uiux-designer': 2, 'fullstack': 1 }
      },
      {
        id: '3b',
        text: 'A predictive algorithm or intelligent machine learning model that learns from examples and makes smart forecasts.',
        weights: { 'ai-ml': 4, 'data-analyst': 2 }
      },
      {
        id: '3c',
        text: 'An airtight, impenetrable network architecture and zero-incident security monitoring shield.',
        weights: { 'cybersecurity': 4, 'it-support': 2, 'devops': 1 }
      },
      {
        id: '3d',
        text: 'A seamless CI/CD cloud pipeline where code merges automatically build, test, and deploy in seconds.',
        weights: { 'devops': 4, 'fullstack': 2, 'qa-engineer': 1 }
      }
    ]
  },
  {
    id: 4,
    title: 'If you had to pick a core focus for the next 6 months, which appeals to you most?',
    subtitle: 'Which domain sounds most intriguing to dive into daily?',
    encouragement: 'Your distinct path is starting to crystallize.',
    options: [
      {
        id: '4a',
        text: 'Human-computer interaction: user psychology, typography, Figma prototyping, and design systems.',
        weights: { 'uiux-designer': 4, 'product-manager': 2, 'frontend': 1 }
      },
      {
        id: '4b',
        text: 'Full software architecture: building end-to-end features spanning React interfaces and SQL databases.',
        weights: { 'fullstack': 4, 'frontend': 2, 'devops': 1 }
      },
      {
        id: '4c',
        text: 'Quality and reliability: mastering automated test suites, edge-case coverage, and regression prevention.',
        weights: { 'qa-engineer': 4, 'devops': 2, 'cybersecurity': 1 }
      },
      {
        id: '4d',
        text: 'IT infrastructure: operating systems, networking routers, hardware troubleshooting, and identity access.',
        weights: { 'it-support': 4, 'cybersecurity': 2, 'devops': 1 }
      }
    ]
  },
  {
    id: 5,
    title: 'What aspect of cutting-edge technology excites you the most?',
    subtitle: 'Think about the tech news or breakthroughs that make you lean forward.',
    encouragement: 'Halfway milestone reached! Keep the momentum going.',
    options: [
      {
        id: '5a',
        text: 'Generative AI, neural networks, natural language processing, and autonomous intelligence.',
        weights: { 'ai-ml': 4, 'data-analyst': 2 }
      },
      {
        id: '5b',
        text: 'Defending privacy, ethical hacking, digital forensics, and neutralizing cyber adversaries.',
        weights: { 'cybersecurity': 4, 'it-support': 1, 'devops': 1 }
      },
      {
        id: '5c',
        text: 'Interactive web experiences, fluid 3D graphics (Canvas/WebGL), and responsive mobile-first web apps.',
        weights: { 'frontend': 4, 'uiux-designer': 2 }
      },
      {
        id: '5d',
        text: 'Product innovation: shaping how real people solve daily problems through well-crafted digital tools.',
        weights: { 'product-manager': 4, 'uiux-designer': 2, 'data-analyst': 1 }
      }
    ]
  },
  {
    id: 6,
    title: 'How do you feel about debugging and troubleshooting?',
    subtitle: 'Everyone encounters bugs. What kind of puzzle do you like untangling?',
    encouragement: 'Technical problem-solving comes in many different flavors.',
    options: [
      {
        id: '6a',
        text: 'I love hunting down mysterious visual quirks, CSS layout shifts, and responsive breakpoint misalignments.',
        weights: { 'frontend': 3, 'uiux-designer': 2, 'qa-engineer': 1 }
      },
      {
        id: '6b',
        text: 'I enjoy tracking down why a database query is slow or resolving a 500 server error across API logs.',
        weights: { 'fullstack': 3, 'devops': 2, 'data-analyst': 1 }
      },
      {
        id: '6c',
        text: 'I thrive on inspecting packet captures, firewall alerts, and investigating suspicious login anomalies.',
        weights: { 'cybersecurity': 3, 'it-support': 2, 'devops': 2 }
      },
      {
        id: '6d',
        text: 'I prefer helping colleagues directly solve OS crashes, driver conflicts, and connection issues.',
        weights: { 'it-support': 4, 'qa-engineer': 1 }
      }
    ]
  },
  {
    id: 7,
    title: 'Which type of teamwork setting makes you feel most energized?',
    subtitle: 'Think about the kind of collaboration conversations you enjoy having.',
    encouragement: 'Only 3 questions left on your career discovery quest!',
    options: [
      {
        id: '7a',
        text: 'Collaborating closely with designers, copywriters, and front-of-house creators to polish the experience.',
        weights: { 'frontend': 3, 'uiux-designer': 3, 'product-manager': 1 }
      },
      {
        id: '7b',
        text: 'Facilitating cross-functional teams: listening to customers, rallying engineers, and defining priorities.',
        weights: { 'product-manager': 4, 'data-analyst': 1, 'uiux-designer': 1 }
      },
      {
        id: '7c',
        text: 'Partnering with software developers to write test plans, uncover edge cases, and elevate code quality.',
        weights: { 'qa-engineer': 4, 'devops': 2, 'fullstack': 1 }
      },
      {
        id: '7d',
        text: 'Working with system engineers and operations teams to maintain 99.99% cloud platform uptime.',
        weights: { 'devops': 3, 'cybersecurity': 2, 'it-support': 2 }
      }
    ]
  },
  {
    id: 8,
    title: 'How do you prefer to interact with data and numbers in your work?',
    subtitle: 'Choose the way numbers make the most sense in your mind.',
    encouragement: 'Almost there! The results are coming together.',
    options: [
      {
        id: '8a',
        text: 'I like cleaning datasets, writing SQL queries, building charts, and presenting findings to business teams.',
        weights: { 'data-analyst': 4, 'product-manager': 2 }
      },
      {
        id: '8b',
        text: 'I want to build mathematical models, train algorithms, and optimize neural loss functions.',
        weights: { 'ai-ml': 4, 'data-analyst': 2 }
      },
      {
        id: '8c',
        text: 'I care about data when it measures performance metrics like TTFB, bundle size, and frame rate (FPS).',
        weights: { 'frontend': 3, 'devops': 2, 'qa-engineer': 1 }
      },
      {
        id: '8d',
        text: 'I care about data when it tracks product adoption, conversion funnels, user retention, and churn.',
        weights: { 'product-manager': 4, 'data-analyst': 2, 'uiux-designer': 1 }
      }
    ]
  },
  {
    id: 9,
    title: 'When learning something new, what format gives you the biggest confidence boost?',
    subtitle: 'Think about what makes you feel like you truly "get it".',
    encouragement: 'Question 9 of 10 — one final stretch!',
    options: [
      {
        id: '9a',
        text: 'Building a working visual project from scratch that I can show my friends immediately.',
        weights: { 'frontend': 3, 'uiux-designer': 2, 'fullstack': 2 }
      },
      {
        id: '9b',
        text: 'Setting up a realistic home lab, virtual machine, or local server cluster and testing real scenarios.',
        weights: { 'it-support': 3, 'cybersecurity': 3, 'devops': 2 }
      },
      {
        id: '9c',
        text: 'Writing an automated script or test that catches an elusive bug and proves mathematical correctness.',
        weights: { 'qa-engineer': 3, 'ai-ml': 2, 'fullstack': 2 }
      },
      {
        id: '9d',
        text: 'Interviewing real people about their pain points and synthesizing insights into a practical solution plan.',
        weights: { 'product-manager': 3, 'uiux-designer': 3, 'data-analyst': 1 }
      }
    ]
  },
  {
    id: 10,
    title: 'If you could be known as the “go-to expert” on a team, what title would you be proudest of?',
    subtitle: 'Pick the reputation that resonates deepest with your personal vision.',
    encouragement: 'Final question complete! Let us synthesize your custom quest report.',
    options: [
      {
        id: '10a',
        text: '“The one who creates intuitive, beautiful digital experiences that people adore using.”',
        weights: { 'frontend': 3, 'uiux-designer': 4 }
      },
      {
        id: '10b',
        text: '“The versatile architect who can ship any end-to-end product from database to client.”',
        weights: { 'fullstack': 4, 'devops': 2 }
      },
      {
        id: '10c',
        text: '“The data and intelligence wizard who unlocks predictive insights and powers smart features.”',
        weights: { 'ai-ml': 3, 'data-analyst': 3 }
      },
      {
        id: '10d',
        text: '“The guardian of reliability and defense who keeps our cloud platforms fast, resilient, and safe.”',
        weights: { 'cybersecurity': 3, 'devops': 3, 'qa-engineer': 2, 'it-support': 1 }
      }
    ]
  }
];
