// SkillQuest 4-Stage Practical Roadmaps for all 10 Career Paths
// Logical progression: Foundations -> Core Skills -> Build Projects -> Career Preparation

export const ROADMAPS = {
  frontend: {
    careerId: 'frontend',
    title: 'Frontend Developer Roadmap',
    description: 'A realistic, project-backed trajectory from HTML/CSS/JS fundamentals to shipping accessible, performant React applications.',
    stages: [
      {
        id: 'fe-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Understand the building blocks of the web: semantic structure, styling engines, and modern JavaScript syntax.',
        estimatedHours: 45,
        milestones: [
          {
            id: 'fe-m1',
            title: 'Semantic HTML & Web Standards',
            hours: 12,
            prerequisiteIds: [],
            tasks: [
              'Master semantic elements (<header>, <nav>, <main>, <article>, <section>, <footer>)',
              'Understand document structure, meta tags, and OpenGraph headers',
              'Learn web accessibility basics: alt text, headings hierarchy, and form labels'
            ],
            practiceActivity: 'Build a semantic, content-rich personal biography page without any div tags.'
          },
          {
            id: 'fe-m2',
            title: 'Modern CSS Layouts (Flexbox & Grid)',
            hours: 18,
            prerequisiteIds: ['fe-m1'],
            tasks: [
              'Understand the CSS box model, margin collapsing, and border-box sizing',
              'Master 1D alignment with Flexbox (justify-content, align-items, flex-wrap)',
              'Master 2D layouts with CSS Grid (grid-template-columns, minmax, auto-fit)',
              'Implement mobile-first responsive breakpoints with media queries'
            ],
            practiceActivity: 'Create a responsive 3-column product pricing card grid with mobile collapsible tabs.'
          },
          {
            id: 'fe-m3',
            title: 'JavaScript Essentials & DOM',
            hours: 15,
            prerequisiteIds: ['fe-m2'],
            tasks: [
              'Learn variables (let/const), data types, template literals, and arrow functions',
              'Practice array methods: map, filter, reduce, find, some, every',
              'Learn DOM manipulation: querySelector, createElement, classList, and event listeners'
            ],
            practiceActivity: 'Build an interactive calculator with keyboard support and history log in vanilla JS.'
          }
        ]
      },
      {
        id: 'fe-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Level up with asynchronous web programming, modern React component architecture, and design system tokens.',
        estimatedHours: 65,
        milestones: [
          {
            id: 'fe-m4',
            title: 'Asynchronous JS, Fetch & REST APIs',
            hours: 18,
            prerequisiteIds: ['fe-m3'],
            tasks: [
              'Understand Promises, event loops, call stack, and async/await syntax',
              'Fetch data from public REST APIs with error handling and try/catch',
              'Store user preferences with browser localStorage and sessionStorage'
            ],
            practiceActivity: 'Build a live GitHub user profile inspector that displays repos, followers, and activity.'
          },
          {
            id: 'fe-m5',
            title: 'React Fundamentals & Component Architecture',
            hours: 25,
            prerequisiteIds: ['fe-m4'],
            tasks: [
              'Understand JSX, component props, and conditional rendering',
              'Master the useState and useEffect hooks for lifecycle state',
              'Handle forms, controlled inputs, and custom validation errors',
              'Lift state up and create custom reusable hooks'
            ],
            practiceActivity: 'Build an interactive Kanban board where cards can be added, edited, moved, and saved.'
          },
          {
            id: 'fe-m6',
            title: 'Web Accessibility & Performance Audits',
            hours: 22,
            prerequisiteIds: ['fe-m5'],
            tasks: [
              'Implement keyboard navigation focus trapping for dialogs and modals',
              'Add correct ARIA roles, states, and properties (aria-expanded, aria-live)',
              'Run Lighthouse audits and optimize images, fonts, and script loading'
            ],
            practiceActivity: 'Audit an existing web application and achieve a 95+ accessibility and performance score in Lighthouse.'
          }
        ]
      },
      {
        id: 'fe-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Synthesize your skills by building polished, full-scale portfolio applications with state management and rich UX.',
        estimatedHours: 70,
        milestones: [
          {
            id: 'fe-m7',
            title: 'Build: Real-Time Analytics Dashboard',
            hours: 24,
            prerequisiteIds: ['fe-m6'],
            tasks: [
              'Implement dark/light theme switching with CSS variables',
              'Render interactive SVG/Canvas charts and data filter controls',
              'Add search bar with debounced input and responsive drawer navigation'
            ],
            practiceActivity: 'Complete and deploy a feature-complete finance or habit-tracking dashboard app.'
          },
          {
            id: 'fe-m8',
            title: 'Build: Accessible Component Library',
            hours: 22,
            prerequisiteIds: ['fe-m7'],
            tasks: [
              'Build reusable Accordion, Modal, Tooltip, and Toast components',
              'Document component props, usage examples, and keyboard shortcuts',
              'Ensure strict WCAG 2.1 AA compliance and smooth micro-animations'
            ],
            practiceActivity: 'Publish your component design system with an interactive documentation playground.'
          },
          {
            id: 'fe-m9',
            title: 'State Architecture & Offline Resilience',
            hours: 24,
            prerequisiteIds: ['fe-m8'],
            tasks: [
              'Organize complex state using reducer patterns or context providers',
              'Implement optimistic UI updates and resilient offline caching',
              'Handle network failure states with friendly user notifications'
            ],
            practiceActivity: 'Add offline mode and synchronized local storage to an existing web app.'
          }
        ]
      },
      {
        id: 'fe-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'Prepare for frontend interviews, assemble a clean GitHub portfolio, and master technical communication.',
        estimatedHours: 40,
        milestones: [
          {
            id: 'fe-m10',
            title: 'Portfolio Website & Project Case Studies',
            hours: 15,
            prerequisiteIds: ['fe-m9'],
            tasks: [
              'Design a clean, memorable personal portfolio website',
              'Write 3 detailed project case studies highlighting technical challenges solved',
              'Include live deployed demos and clean GitHub repository links'
            ],
            practiceActivity: 'Deploy your portfolio on a custom domain with automated GitHub Actions CI.'
          },
          {
            id: 'fe-m11',
            title: 'Frontend Interview Challenges & Clean Code',
            hours: 15,
            prerequisiteIds: ['fe-m10'],
            tasks: [
              'Practice DOM manipulation and vanilla JS algorithm questions',
              'Review core concepts: closures, event delegation, hoisting, prototype chain',
              'Complete 5 live coding challenges (e.g. autocomplete, infinite scroll)'
            ],
            practiceActivity: 'Code an accessible autocomplete combobox from scratch under a 45-minute timed practice session.'
          },
          {
            id: 'fe-m12',
            title: 'Resume & Behavioral Storytelling',
            hours: 10,
            prerequisiteIds: ['fe-m11'],
            tasks: [
              'Format resume with STAR method impact bullets (Situation, Task, Action, Result)',
              'Prepare answers for cross-functional collaboration and conflict resolution',
              'Conduct mock behavioral and technical screening interviews'
            ],
            practiceActivity: 'Participate in a peer mock interview and refine your 90-second developer introduction.'
          }
        ]
      }
    ]
  },

  fullstack: {
    careerId: 'fullstack',
    title: 'Full-Stack Developer Roadmap',
    description: 'Master both ends of the wire: server architecture, database modeling, RESTful APIs, and frontend integration.',
    stages: [
      {
        id: 'fs-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Establish core programming fluency, client-server models, and command-line comfort.',
        estimatedHours: 50,
        milestones: [
          {
            id: 'fs-m1',
            title: 'Web Architecture & HTTP Protocols',
            hours: 14,
            prerequisiteIds: [],
            tasks: ['Understand DNS, IP addresses, TCP, and HTTP request/response methods', 'Learn headers, status codes, cookies, and CORS', 'Get comfortable in Linux terminal and Git commands'],
            practiceActivity: 'Use cURL to inspect raw HTTP headers, cookies, and status codes of various web servers.'
          },
          {
            id: 'fs-m2',
            title: 'JavaScript Runtime & Node.js Core',
            hours: 18,
            prerequisiteIds: ['fs-m1'],
            tasks: ['Understand Node.js asynchronous event loop, streams, and buffers', 'Learn CommonJS and ES Modules import/export syntax', 'Build command-line utility tools in Node'],
            practiceActivity: 'Write a Node CLI utility that scans a directory, counts file types, and outputs a summary.'
          },
          {
            id: 'fs-m3',
            title: 'Relational Database Foundations (SQL)',
            hours: 18,
            prerequisiteIds: ['fs-m2'],
            tasks: ['Learn SQL syntax: SELECT, INSERT, UPDATE, DELETE', 'Understand primary keys, foreign keys, and indexes', 'Write JOIN queries and aggregation functions'],
            practiceActivity: 'Design and query a relational database for a university course catalog.'
          }
        ]
      },
      {
        id: 'fs-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Build robust REST APIs, handle user authentication, and model relational data.',
        estimatedHours: 70,
        milestones: [
          {
            id: 'fs-m4',
            title: 'Express Server & RESTful API Design',
            hours: 24,
            prerequisiteIds: ['fs-m3'],
            tasks: ['Structure modular routes, controllers, and middleware', 'Validate request payloads with schemas (Joi or Zod)', 'Implement centralized error handling and logging'],
            practiceActivity: 'Create an Express API for a blog platform with input validation and pagination.'
          },
          {
            id: 'fs-m5',
            title: 'Authentication & Session Security',
            hours: 24,
            prerequisiteIds: ['fs-m4'],
            tasks: ['Hash passwords with bcrypt before persistence', 'Implement JWT authentication with refresh token rotation', 'Create protected routes and role-based permissions'],
            practiceActivity: 'Build a secure authentication service with email verification and password reset tokens.'
          },
          {
            id: 'fs-m6',
            title: 'ORM / Query Builders & Migrations',
            hours: 22,
            prerequisiteIds: ['fs-m5'],
            tasks: ['Use an ORM (Prisma, Drizzle, or Sequelize)', 'Manage schema migrations and rollbacks', 'Prevent SQL injection and N+1 query performance traps'],
            practiceActivity: 'Write migration scripts and relational queries using an ORM for an e-commerce platform.'
          }
        ]
      },
      {
        id: 'fs-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Connect your backend APIs to modern frontend clients with full CRUD capability.',
        estimatedHours: 75,
        milestones: [
          {
            id: 'fs-m7',
            title: 'Full-Stack Integration (React + API)',
            hours: 26,
            prerequisiteIds: ['fs-m6'],
            tasks: ['Connect React client to backend Express server', 'Manage authentication state and token headers on client', 'Handle optimistic updates and mutation error rollback'],
            practiceActivity: 'Build an end-to-end task collaboration tool with comments and notifications.'
          },
          {
            id: 'fs-m8',
            title: 'Containerization with Docker',
            hours: 24,
            prerequisiteIds: ['fs-m7'],
            tasks: ['Write multi-stage Dockerfiles for client and server', 'Compose multi-container environments with Docker Compose', 'Persist database volumes and manage environment variables'],
            practiceActivity: 'Spin up a multi-container stack (React + Node + PostgreSQL) using a single docker compose up command.'
          },
          {
            id: 'fs-m9',
            title: 'Automated Testing (Unit & Integration)',
            hours: 25,
            prerequisiteIds: ['fs-m8'],
            tasks: ['Write unit tests for business logic functions', 'Write Supertest integration tests for all API endpoints', 'Mock external services and test error conditions'],
            practiceActivity: 'Achieve >85% test coverage on your backend API endpoints.'
          }
        ]
      },
      {
        id: 'fs-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'System design basics, deployment pipelines, and full-stack technical interview readiness.',
        estimatedHours: 45,
        milestones: [
          {
            id: 'fs-m10',
            title: 'Production Deployment & Cloud Hosting',
            hours: 15,
            prerequisiteIds: ['fs-m9'],
            tasks: ['Deploy application to cloud provider (Render, Railway, or AWS)', 'Configure automated CI/CD pipeline with GitHub Actions', 'Set up error monitoring with Sentry or CloudWatch'],
            practiceActivity: 'Deploy your full-stack project live with custom domain and automated CI/CD.'
          },
          {
            id: 'fs-m11',
            title: 'System Design Fundamentals',
            hours: 15,
            prerequisiteIds: ['fs-m10'],
            tasks: ['Understand horizontal vs vertical scaling and load balancers', 'Learn caching strategies with Redis', 'Study message queues (RabbitMQ/Kafka) for asynchronous jobs'],
            practiceActivity: 'Diagram the system architecture for a scalable URL shortener handling 10M visits/day.'
          },
          {
            id: 'fs-m12',
            title: 'Technical Portfolio & Interview Prep',
            hours: 15,
            prerequisiteIds: ['fs-m11'],
            tasks: ['Document 2 flagship full-stack repositories with architectural diagrams', 'Practice full-stack whiteboard questions', 'Prepare behavioral responses focused on technical trade-offs'],
            practiceActivity: 'Conduct a peer mock interview walking through your full-stack repository code architecture.'
          }
        ]
      }
    ]
  },

  'data-analyst': {
    careerId: 'data-analyst',
    title: 'Data Analyst Roadmap',
    description: 'Transform spreadsheets into high-impact business narratives using SQL, Python, BI dashboards, and statistical models.',
    stages: [
      {
        id: 'da-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Excel mastery, data hygiene, and basic descriptive statistics.',
        estimatedHours: 40,
        milestones: [
          {
            id: 'da-m1',
            title: 'Spreadsheet Modeling & Advanced Formulas',
            hours: 14,
            prerequisiteIds: [],
            tasks: ['Master XLOOKUP, INDEX/MATCH, and nested IFs', 'Create dynamic Pivot Tables and Calculated Fields', 'Learn conditional formatting and data validation checks'],
            practiceActivity: 'Build a dynamic 12-month financial forecasting spreadsheet with scenario toggles.'
          },
          {
            id: 'da-m2',
            title: 'Descriptive Statistics & Probability',
            hours: 14,
            prerequisiteIds: ['da-m1'],
            tasks: ['Calculate measures of central tendency (mean, median, mode)', 'Understand variance, standard deviation, and IQR', 'Learn normal distributions and skewness'],
            practiceActivity: 'Analyze a dataset of 1,000 real estate transactions and compute dispersion metrics.'
          },
          {
            id: 'da-m3',
            title: 'Data Hygiene & Cleansing Principles',
            hours: 12,
            prerequisiteIds: ['da-m2'],
            tasks: ['Detect and treat missing or corrupted values', 'Deduplicate records and standardize date/time formats', 'Validate data integrity and document transformations'],
            practiceActivity: 'Clean an unformatted customer sales record CSV and document your step-by-step audit trail.'
          }
        ]
      },
      {
        id: 'da-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Master relational SQL querying, data extraction, and business intelligence reporting.',
        estimatedHours: 65,
        milestones: [
          {
            id: 'da-m4',
            title: 'Advanced SQL Querying',
            hours: 24,
            prerequisiteIds: ['da-m3'],
            tasks: ['Master complex joins and Common Table Expressions (CTEs)', 'Use Window Functions (ROW_NUMBER, RANK, LAG, LEAD)', 'Calculate running totals, moving averages, and cohort retention'],
            practiceActivity: 'Write a comprehensive SQL script calculating 30-day user retention cohorts.'
          },
          {
            id: 'da-m5',
            title: 'Interactive BI Dashboards (PowerBI / Tableau)',
            hours: 22,
            prerequisiteIds: ['da-m4'],
            tasks: ['Model star schemas and table relationships', 'Create calculated measures (DAX in PowerBI or calculated fields in Tableau)', 'Design user-friendly KPI cards and drill-through charts'],
            practiceActivity: 'Build an executive sales dashboard with interactive date slicers and regional heatmaps.'
          },
          {
            id: 'da-m6',
            title: 'Python for Data Analysis (Pandas & NumPy)',
            hours: 19,
            prerequisiteIds: ['da-m5'],
            tasks: ['Load and manipulate DataFrames with Pandas', 'Filter, group, and aggregate multidimensional datasets', 'Handle missing data and merge disparate datasets programmatically'],
            practiceActivity: 'Conduct exploratory data analysis in a Jupyter notebook on a public healthcare dataset.'
          }
        ]
      },
      {
        id: 'da-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Complete end-to-end analytical case studies addressing real business questions.',
        estimatedHours: 70,
        milestones: [
          {
            id: 'da-m7',
            title: 'Case Study: Customer Churn & Cohort Analysis',
            hours: 24,
            prerequisiteIds: ['da-m6'],
            tasks: ['Extract and clean subscription records using SQL and Pandas', 'Identify top indicators contributing to customer churn', 'Create visual churn cohort charts and actionable retention tactics'],
            practiceActivity: 'Publish a complete churn analysis project with code, visualizations, and summary findings.'
          },
          {
            id: 'da-m8',
            title: 'Case Study: E-Commerce Funnel Optimization',
            hours: 24,
            prerequisiteIds: ['da-m7'],
            tasks: ['Analyze multi-step checkout drop-off rates', 'Segment user behavior by traffic source and device category', 'Formulate testable conversion optimization recommendations'],
            practiceActivity: 'Produce an executive presentation deck detailing funnel bottlenecks and projected ROI.'
          },
          {
            id: 'da-m9',
            title: 'Automated Data Pipeline & Reporting',
            hours: 22,
            prerequisiteIds: ['da-m8'],
            tasks: ['Automate periodic CSV extraction and cleaning script', 'Generate automated PDF summary reports using Python', 'Schedule script executions with cron or task scheduler'],
            practiceActivity: 'Build a Python script that emails an automated weekly performance report with charts.'
          }
        ]
      },
      {
        id: 'da-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'Build your analytical portfolio, practice SQL technical interviews, and master business presentation skills.',
        estimatedHours: 40,
        milestones: [
          {
            id: 'da-m10',
            title: 'Analytical Portfolio & GitHub Repository',
            hours: 15,
            prerequisiteIds: ['da-m9'],
            tasks: ['Document 3 comprehensive case studies on GitHub with executive summaries', 'Embed interactive Tableau Public / PowerBI web reports', 'Explain methodology, limitations, and business implications'],
            practiceActivity: 'Publish your online portfolio featuring clean write-ups and interactive dashboard links.'
          },
          {
            id: 'da-m11',
            title: 'SQL Live Coding Interview Drills',
            hours: 15,
            prerequisiteIds: ['da-m10'],
            tasks: ['Solve 30 medium/hard SQL challenges on LeetCode/StrataScratch', 'Practice writing syntactically correct SQL on a whiteboard or blank editor', 'Explain trade-offs between CTEs, subqueries, and temporary tables'],
            practiceActivity: 'Complete a timed 45-minute SQL assessment without auto-complete or documentation.'
          },
          {
            id: 'da-m12',
            title: 'Executive Stakeholder Presentation Prep',
            hours: 10,
            prerequisiteIds: ['da-m11'],
            tasks: ['Learn how to communicate findings to non-technical business leaders', 'Practice the "bottom line up front" (BLUF) presentation methodology', 'Prepare for situational questions about data ambiguities'],
            practiceActivity: 'Deliver a 5-minute video pitch presenting your top case study recommendations.'
          }
        ]
      }
    ]
  },

  // Templates for the remaining 7 careers to ensure every career has a fully navigable roadmap
  'uiux-designer': {
    careerId: 'uiux-designer',
    title: 'UI/UX Designer Roadmap',
    description: 'From empathetic user research and wireframing to atomic design systems and interactive high-fidelity prototypes.',
    stages: [
      {
        id: 'ui-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Visual hierarchy, typography, color theory, and user empathy basics.',
        estimatedHours: 40,
        milestones: [
          { id: 'ui-m1', title: 'Design Principles & Visual Hierarchy', hours: 12, prerequisiteIds: [], tasks: ['Master contrast, alignment, repetition, proximity', 'Learn the 8pt spatial grid system', 'Understand typographic scales and line-height'], practiceActivity: 'Redesign a confusing mobile homepage wireframe applying strict visual hierarchy.' },
          { id: 'ui-m2', title: 'User Research & Personas', hours: 14, prerequisiteIds: ['ui-m1'], tasks: ['Conduct semi-structured user interviews', 'Synthesize findings with affinity mapping', 'Create actionable user personas and empathy maps'], practiceActivity: 'Interview 3 peers about an annoying daily app and map their user frustrations.' },
          { id: 'ui-m3', title: 'Information Architecture & User Flows', hours: 14, prerequisiteIds: ['ui-m2'], tasks: ['Create hierarchical sitemaps', 'Map detailed user task flows and decision trees', 'Sketch low-fidelity paper wireframes'], practiceActivity: 'Map the complete user flow for a student booking an on-campus study room.' }
        ]
      },
      {
        id: 'ui-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Figma proficiency, interactive prototyping, and design systems.',
        estimatedHours: 65,
        milestones: [
          { id: 'ui-m4', title: 'Figma Mastery & Auto-Layout', hours: 22, prerequisiteIds: ['ui-m3'], tasks: ['Master responsive auto-layout constraints', 'Build reusable components with property variants', 'Organize typography and color style libraries'], practiceActivity: 'Build a fully responsive navigation bar and hero card using Figma auto-layout.' },
          { id: 'ui-m5', title: 'Interactive Prototyping & Micro-Interactions', hours: 22, prerequisiteIds: ['ui-m4'], tasks: ['Create smart-animate screen transitions', 'Design interactive button and dropdown states', 'Build realistic mobile scroll and modal overlays'], practiceActivity: 'Create an interactive prototype simulating an e-commerce checkout flow.' },
          { id: 'ui-m6', title: 'Usability Testing & Accessibility (WCAG)', hours: 21, prerequisiteIds: ['ui-m5'], tasks: ['Ensure minimum 4.5:1 text color contrast', 'Design for 48x48px minimum touch targets', 'Conduct unmoderated usability tests and document feedback'], practiceActivity: 'Run usability tests with 3 users on your prototype and log actionable fixes.' }
        ]
      },
      {
        id: 'ui-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Complete comprehensive design case studies that showcase your design thinking.',
        estimatedHours: 70,
        milestones: [
          { id: 'ui-m7', title: 'Case Study: Mobile Health & Wellness App', hours: 25, prerequisiteIds: ['ui-m6'], tasks: ['Document problem statement, research, and ideation', 'Build low-fidelity to high-fidelity Figma files', 'Conduct user testing and detail iterative revisions'], practiceActivity: 'Publish a 10-screen high-fidelity mobile wellness app prototype.' },
          { id: 'ui-m8', title: 'Case Study: Web SaaS Dashboard', hours: 25, prerequisiteIds: ['ui-m7'], tasks: ['Design complex data tables, filtering, and chart cards', 'Create dark and light mode UI themes', 'Document component states: hover, active, empty, error'], practiceActivity: 'Design a desktop analytics platform with 5 unique interconnected pages.' },
          { id: 'ui-m9', title: 'Atomic Design System Documentation', hours: 20, prerequisiteIds: ['ui-m8'], tasks: ['Define design tokens (colors, spacing, shadows)', 'Build 30+ atomic and molecular UI components', 'Write usage guidelines and accessibility notes'], practiceActivity: 'Document a complete Figma UI kit ready for developer handoff.' }
        ]
      },
      {
        id: 'ui-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'Polish your portfolio case studies, prepare for app critiques, and master design interviews.',
        estimatedHours: 40,
        milestones: [
          { id: 'ui-m10', title: 'UX Portfolio Website & Storytelling', hours: 15, prerequisiteIds: ['ui-m9'], tasks: ['Write 2-3 in-depth case studies with process visuals', 'Articulate technical and business constraints faced', 'Build and deploy a responsive portfolio site'], practiceActivity: 'Publish your design portfolio and request feedback from working designers.' },
          { id: 'ui-m11', title: 'App Critique & Whiteboard Challenges', hours: 15, prerequisiteIds: ['ui-m10'], tasks: ['Practice systematic app critique on popular products', 'Tackle 5 timed whiteboard design prompts', 'Master the framework: Users, Problems, Solutions, Metrics'], practiceActivity: 'Record a 10-minute app critique of Spotify or Airbnb explaining UX trade-offs.' },
          { id: 'ui-m12', title: 'Interview Presentations & Behavioral Drills', hours: 10, prerequisiteIds: ['ui-m11'], tasks: ['Build a dedicated slide deck for your flagship case study', 'Prepare stories on collaboration with developers', 'Practice answering tough design critique questions gracefully'], practiceActivity: 'Present your flagship case study deck in a 20-minute mock design interview.' }
        ]
      }
    ]
  },

  'ai-ml': {
    careerId: 'ai-ml',
    title: 'AI / Machine Learning Beginner Roadmap',
    description: 'From Python and linear algebra to training classical ML models, neural networks, and deploying inference microservices.',
    stages: [
      {
        id: 'ai-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Scientific Python, linear algebra, calculus, and probability.',
        estimatedHours: 50,
        milestones: [
          { id: 'ai-m1', title: 'Python Scientific Stack (NumPy & Pandas)', hours: 18, prerequisiteIds: [], tasks: ['Master NumPy array operations and broadcasting', 'Manipulate datasets with Pandas DataFrames', 'Plot distributions with Matplotlib and Seaborn'], practiceActivity: 'Process and analyze a multi-gigabyte dataset using NumPy and Pandas.' },
          { id: 'ai-m2', title: 'Math for ML: Linear Algebra & Calculus', hours: 18, prerequisiteIds: ['ai-m1'], tasks: ['Understand vectors, matrices, dot products, eigenvalues', 'Learn derivatives, partial derivatives, and gradients', 'Study probability distributions and Bayes Theorem'], practiceActivity: 'Implement matrix multiplication and gradient descent from scratch in Python.' },
          { id: 'ai-m3', title: 'Data Preprocessing & Exploratory Analysis', hours: 14, prerequisiteIds: ['ai-m2'], tasks: ['Handle missing values, outliers, and skewness', 'Perform feature scaling (StandardScaler, MinMaxScaler)', 'One-hot encode categorical features'], practiceActivity: 'Prepare a raw census dataset for machine learning ingestion.' }
        ]
      },
      {
        id: 'ai-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Supervised and unsupervised learning with Scikit-Learn.',
        estimatedHours: 70,
        milestones: [
          { id: 'ai-m4', title: 'Supervised Learning Algorithms', hours: 24, prerequisiteIds: ['ai-m3'], tasks: ['Train Linear & Logistic Regression models', 'Build Decision Trees, Random Forests, and Gradient Boosting', 'Tune hyperparameters with GridSearchCV'], practiceActivity: 'Train a tree-based model to predict house prices with low RMSE.' },
          { id: 'ai-m5', title: 'Model Evaluation & Cross-Validation', hours: 22, prerequisiteIds: ['ai-m4'], tasks: ['Master confusion matrix, precision, recall, F1-score', 'Analyze ROC-AUC curves and handle class imbalance', 'Implement k-fold stratified cross-validation'], practiceActivity: 'Evaluate a credit card fraud detection model on imbalanced data.' },
          { id: 'ai-m6', title: 'Unsupervised Learning & Clustering', hours: 24, prerequisiteIds: ['ai-m5'], tasks: ['Apply K-Means clustering and elbow method', 'Reduce dimensionality with Principal Component Analysis (PCA)', 'Identify customer segments in unlabeled data'], practiceActivity: 'Segment customer transaction data into 4 distinct behavioral clusters.' }
        ]
      },
      {
        id: 'ai-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Neural networks with PyTorch and production model deployment.',
        estimatedHours: 75,
        milestones: [
          { id: 'ai-m7', title: 'Deep Learning with PyTorch', hours: 26, prerequisiteIds: ['ai-m6'], tasks: ['Build multi-layer perceptrons (MLP) in PyTorch', 'Understand activation functions, backpropagation, and loss', 'Train an image classifier on CIFAR-10'], practiceActivity: 'Train a convolutional neural network (CNN) on image classification.' },
          { id: 'ai-m8', title: 'NLP & LLM Prompt Pipelines', hours: 25, prerequisiteIds: ['ai-m7'], tasks: ['Tokenization, TF-IDF, and word embeddings', 'Vector databases and similarity search (Cosine similarity)', 'Build a Retrieval-Augmented Generation (RAG) assistant'], practiceActivity: 'Build a document Q&A application using embeddings and vector search.' },
          { id: 'ai-m9', title: 'Model Serving with FastAPI & Docker', hours: 24, prerequisiteIds: ['ai-m8'], tasks: ['Serialize models with ONNX or Joblib', 'Wrap model inference in a high-performance FastAPI server', 'Containerize the API with Docker for scalable inference'], practiceActivity: 'Deploy a live machine learning prediction microservice to cloud hosting.' }
        ]
      },
      {
        id: 'ai-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'Showcase ML projects, explain mathematical trade-offs, and master ML interviews.',
        estimatedHours: 40,
        milestones: [
          { id: 'ai-m10', title: 'Reproducible Machine Learning Portfolio', hours: 15, prerequisiteIds: ['ai-m9'], tasks: ['Document 2 flagship projects with README and metrics tables', 'Include interactive demo interfaces (Gradio or Streamlit)', 'Highlight error analysis, data limitations, and trade-offs'], practiceActivity: 'Host a live Streamlit/Gradio model demo on Hugging Face Spaces.' },
          { id: 'ai-m11', title: 'ML Theory & Coding Technical Interviews', hours: 15, prerequisiteIds: ['ai-m10'], tasks: ['Practice explaining bias-variance trade-off clearly', 'Derive mathematical cost functions on a whiteboard', 'Solve algorithmic Python problems on LeetCode'], practiceActivity: 'Conduct a mock technical interview answering ML theory questions.' },
          { id: 'ai-m12', title: 'Resume & Project Walkthrough Drills', hours: 10, prerequisiteIds: ['ai-m11'], tasks: ['Highlight quantitative project results on resume', 'Prepare structured walkthroughs for model architectures', 'Practice discussing ethical AI considerations and data bias'], practiceActivity: 'Deliver a 10-minute presentation explaining an end-to-end ML project.' }
        ]
      }
    ]
  },

  cybersecurity: {
    careerId: 'cybersecurity',
    title: 'Cybersecurity Analyst Roadmap',
    description: 'From TCP/IP protocols and Linux system security to SIEM threat hunting, penetration testing, and incident response.',
    stages: [
      {
        id: 'sec-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Computer networking, operating system internals, and security fundamentals.',
        estimatedHours: 45,
        milestones: [
          { id: 'sec-m1', title: 'Networking Architecture (TCP/IP & OSI)', hours: 15, prerequisiteIds: [], tasks: ['Understand OSI 7-layer model and TCP/UDP sockets', 'Master subnetting, CIDR, DNS, and DHCP', 'Analyze packet captures using Wireshark'], practiceActivity: 'Capture and inspect HTTP vs HTTPS traffic packets in Wireshark.' },
          { id: 'sec-m2', title: 'Linux System Administration & Hardening', hours: 15, prerequisiteIds: ['sec-m1'], tasks: ['Master permissions, chmod/chown, and sudoers', 'Configure UFW/iptables firewalls and SSH keys', 'Inspect running services and systemd audit logs'], practiceActivity: 'Harden an Ubuntu server against unauthorized SSH password attempts.' },
          { id: 'sec-m3', title: 'Applied Cryptography & Security Fundamentals', hours: 15, prerequisiteIds: ['sec-m2'], tasks: ['Understand CIA triad: Confidentiality, Integrity, Availability', 'Learn symmetric vs asymmetric encryption (AES, RSA)', 'Understand hashing, digital signatures, and SSL/TLS certificates'], practiceActivity: 'Generate and verify digital signatures and encrypted files with GPG.' }
        ]
      },
      {
        id: 'sec-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Vulnerability assessment, web security, and SIEM monitoring.',
        estimatedHours: 65,
        milestones: [
          { id: 'sec-m4', title: 'Web Application Security (OWASP Top 10)', hours: 24, prerequisiteIds: ['sec-m3'], tasks: ['Understand SQL Injection, XSS, CSRF, and SSRF', 'Learn secure session management and authorization checks', 'Use Burp Suite proxy to intercept and analyze HTTP requests'], practiceActivity: 'Complete 10 vulnerability challenge rooms on OWASP Juice Shop.' },
          { id: 'sec-m5', title: 'Vulnerability Scanning & Network Auditing', hours: 21, prerequisiteIds: ['sec-m4'], tasks: ['Master Nmap host discovery, port scanning, and OS detection', 'Run vulnerability scanners like Nessus or OpenVAS', 'Analyze CVSS vulnerability scoring metrics'], practiceActivity: 'Conduct a comprehensive authorized vulnerability scan on a vulnerable VM.' },
          { id: 'sec-m6', title: 'SIEM Tools & Threat Detection', hours: 20, prerequisiteIds: ['sec-m5'], tasks: ['Collect syslog and Windows Event Viewer logs into Splunk/ELK', 'Write search queries to detect suspicious login bursts', 'Create alert correlation rules for brute-force attacks'], practiceActivity: 'Build a Splunk dashboard monitoring failed authentication attempts.' }
        ]
      },
      {
        id: 'sec-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Hands-on home labs, penetration test reports, and incident playbooks.',
        estimatedHours: 70,
        milestones: [
          { id: 'sec-m7', title: 'Security Onion / Home SOC Lab', hours: 25, prerequisiteIds: ['sec-m6'], tasks: ['Set up virtualized Security Onion with Zeek and Suricata', 'Generate simulated attacks and inspect intrusion alerts', 'Tune detection rules to eliminate false positives'], practiceActivity: 'Document your home SOC lab architecture and alert investigation workflow.' },
          { id: 'sec-m8', title: 'Web App Penetration Test Report', hours: 25, prerequisiteIds: ['sec-m7'], tasks: ['Perform an authorized security assessment on a target app', 'Document findings with executive summary, severity, and POC', 'Provide clear remediation recommendations for developers'], practiceActivity: 'Write a professional 8-page penetration testing assessment report.' },
          { id: 'sec-m9', title: 'Incident Response Playbook Design', hours: 20, prerequisiteIds: ['sec-m8'], tasks: ['Draft containment procedures for ransomware outbreak', 'Define evidence preservation and chain of custody rules', 'Conduct a mock tabletop incident response exercise'], practiceActivity: 'Create an actionable incident response playbook for an enterprise team.' }
        ]
      },
      {
        id: 'sec-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'Security certification alignment (Security+, CySA+), portfolio, and SOC interview drills.',
        estimatedHours: 40,
        milestones: [
          { id: 'sec-m10', title: 'Security Portfolio & Lab Documentation', hours: 15, prerequisiteIds: ['sec-m9'], tasks: ['Publish lab walkthroughs and sanitized audit reports on GitHub', 'Write technical blogs explaining vulnerability remediation', 'Showcase continuous learning via TryHackMe or HackTheBox rank'], practiceActivity: 'Publish your cybersecurity portfolio website with lab write-ups.' },
          { id: 'sec-m11', title: 'CompTIA Security+ Exam Readiness', hours: 15, prerequisiteIds: ['sec-m10'], tasks: ['Review core domains: threats, architecture, operations', 'Take practice exams scoring >85%', 'Clarify enterprise governance frameworks (NIST CSF, ISO 27001)'], practiceActivity: 'Score >85% on a full 90-question Security+ practice test.' },
          { id: 'sec-m12', title: 'SOC Analyst Technical & Scenario Interviews', hours: 10, prerequisiteIds: ['sec-m11'], tasks: ['Practice investigating simulated alert scenarios under pressure', 'Explain how to handle high-stress security incidents calmly', 'Review common attack vectors (phishing, malware, insider threat)'], practiceActivity: 'Complete a mock SOC analyst interview explaining an alert triage process.' }
        ]
      }
    ]
  },

  devops: {
    careerId: 'devops',
    title: 'Cloud / DevOps Engineer Roadmap',
    description: 'Automate infrastructure, scale containers with Kubernetes, and build bulletproof CI/CD cloud pipelines.',
    stages: [
      {
        id: 'do-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Linux systems, networking, shell scripting, and Git pipelines.',
        estimatedHours: 45,
        milestones: [
          { id: 'do-m1', title: 'Linux Administration & Bash Scripting', hours: 15, prerequisiteIds: [], tasks: ['Master file operations, processes, pipes, and cron jobs', 'Write automated Bash scripts for system maintenance', 'Manage systemd services and user access controls'], practiceActivity: 'Write an automated server healthcheck script that reports CPU/disk alerts.' },
          { id: 'do-m2', title: 'Git Workflows & Trunk-Based Development', hours: 14, prerequisiteIds: ['do-m1'], tasks: ['Understand branch protection and semantic versioning', 'Configure Git pre-commit hooks for linting and security scans', 'Manage multi-developer merge strategies'], practiceActivity: 'Configure husky pre-commit hooks to block secrets and lint errors.' },
          { id: 'do-m3', title: 'Cloud Fundamentals (AWS / GCP)', hours: 16, prerequisiteIds: ['do-m2'], tasks: ['Understand virtual machines, VPCs, and subnets', 'Configure object storage (S3) with IAM least privilege', 'Manage cloud billing alerts and security groups'], practiceActivity: 'Deploy a secure static website on AWS S3 with CloudFront CDN.' }
        ]
      },
      {
        id: 'do-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Docker containerization, CI/CD automation, and Terraform IaC.',
        estimatedHours: 70,
        milestones: [
          { id: 'do-m4', title: 'Docker Containerization Mastery', hours: 24, prerequisiteIds: ['do-m3'], tasks: ['Write multi-stage Dockerfiles for minimal image size', 'Configure volume mounts, networks, and environment variables', 'Orchestrate multi-service apps with Docker Compose'], practiceActivity: 'Containerize a web app reducing the image footprint from 800MB to 70MB.' },
          { id: 'do-m5', title: 'CI/CD Pipelines (GitHub Actions)', hours: 24, prerequisiteIds: ['do-m4'], tasks: ['Automate test suites on every pull request', 'Build and push Docker images to registries (GHCR/DockerHub)', 'Automate zero-downtime deployment triggers'], practiceActivity: 'Build an end-to-end GitHub Actions pipeline deploying to cloud on merge.' },
          { id: 'do-m6', title: 'Infrastructure as Code (Terraform)', hours: 22, prerequisiteIds: ['do-m5'], tasks: ['Write declarative HCL configuration files', 'Manage remote state locking with S3 and DynamoDB', 'Structure reusable Terraform modules'], practiceActivity: 'Provision a complete cloud VPC, EC2 instance, and security group via Terraform.' }
        ]
      },
      {
        id: 'do-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Kubernetes orchestration, monitoring stacks, and production resilience.',
        estimatedHours: 75,
        milestones: [
          { id: 'do-m7', title: 'Kubernetes Orchestration & Helm', hours: 26, prerequisiteIds: ['do-m6'], tasks: ['Deploy Pods, Deployments, and Services', 'Configure Ingress controllers and TLS certificates', 'Package applications into manageable Helm charts'], practiceActivity: 'Deploy a microservices application on Kubernetes with auto-scaling.' },
          { id: 'do-m8', title: 'Observability (Prometheus & Grafana)', hours: 24, prerequisiteIds: ['do-m7'], tasks: ['Instrument applications with Prometheus metrics', 'Design Grafana dashboards for latency and error rates', 'Configure automated alert notifications to Discord/Slack'], practiceActivity: 'Build a production monitoring dashboard with Grafana alerts.' },
          { id: 'do-m9', title: 'Zero-Downtime Deployment & Canary Releases', hours: 25, prerequisiteIds: ['do-m8'], tasks: ['Implement blue/green and canary deployment strategies', 'Automate database migration steps during rollouts', 'Configure automated rollback triggers on error rate spikes'], practiceActivity: 'Execute a zero-downtime blue/green deployment under simulated user load.' }
        ]
      },
      {
        id: 'do-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'DevOps portfolio, cloud certifications (AWS SAA), and technical interview readiness.',
        estimatedHours: 40,
        milestones: [
          { id: 'do-m10', title: 'DevOps GitHub Portfolio & Architecture Diagrams', hours: 15, prerequisiteIds: ['do-m9'], tasks: ['Document Terraform and Kubernetes repos with visual diagrams', 'Provide clear instructions for running locally via Docker Compose', 'Highlight cost optimization and security measures taken'], practiceActivity: 'Publish your cloud portfolio repository with clean architectural documentation.' },
          { id: 'do-m11', title: 'Cloud Certification Study (AWS SAA / CKA)', hours: 15, prerequisiteIds: ['do-m10'], tasks: ['Review high-availability architecture questions', 'Practice hands-on Kubernetes troubleshooting tasks', 'Understand disaster recovery RTO and RPO objectives'], practiceActivity: 'Complete a timed practice exam for AWS Solutions Architect Associate.' },
          { id: 'do-m12', title: 'SRE & DevOps Technical Interview Drills', hours: 10, prerequisiteIds: ['do-m11'], tasks: ['Practice incident post-mortem and root-cause analysis scenarios', 'Explain how to debug a failing Kubernetes pod in real-time', 'Discuss security best practices (DevSecOps)'], practiceActivity: 'Conduct a mock technical interview answering cloud troubleshooting questions.' }
        ]
      }
    ]
  },

  'qa-engineer': {
    careerId: 'qa-engineer',
    title: 'Software Tester / QA Engineer Roadmap',
    description: 'Ensure software quality through test automation, performance benchmarking, API contracts, and CI regression suites.',
    stages: [
      {
        id: 'qa-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Testing theory, bug documentation, and exploratory testing methodologies.',
        estimatedHours: 40,
        milestones: [
          { id: 'qa-m1', title: 'Software Testing Fundamentals & SDLC', hours: 14, prerequisiteIds: [], tasks: ['Understand test pyramid (Unit, Integration, E2E)', 'Learn black-box vs white-box testing strategies', 'Master equivalence partitioning and boundary value analysis'], practiceActivity: 'Write 12 exhaustive test cases for a multi-field signup form.' },
          { id: 'qa-m2', title: 'Professional Bug Reporting & Jira', hours: 12, prerequisiteIds: ['qa-m1'], tasks: ['Document reproducible steps, actual vs expected results', 'Assign accurate severity and priority ratings', 'Capture network requests, console logs, and video traces'], practiceActivity: 'Log 3 detailed Jira-style bug reports on an open-source web application.' },
          { id: 'qa-m3', title: 'Manual Exploratory Testing Strategies', hours: 14, prerequisiteIds: ['qa-m2'], tasks: ['Design test charters and time-boxed exploratory sessions', 'Test extreme edge cases, overflows, and special characters', 'Perform accessibility and keyboard navigation audits'], practiceActivity: 'Conduct a 45-minute exploratory testing session on a target web app.' }
        ]
      },
      {
        id: 'qa-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Automated browser testing with Playwright, and REST API testing with Postman.',
        estimatedHours: 65,
        milestones: [
          { id: 'qa-m4', title: 'API Testing with Postman & Newman', hours: 22, prerequisiteIds: ['qa-m3'], tasks: ['Test HTTP status codes, headers, and JSON responses', 'Write automated JavaScript assertions in Postman tests', 'Run collection suites in CLI using Newman'], practiceActivity: 'Build an automated Postman test collection with 30 assertions.' },
          { id: 'qa-m5', title: 'E2E Browser Automation with Playwright', hours: 25, prerequisiteIds: ['qa-m4'], tasks: ['Use robust user-facing locators (getByRole, getByText)', 'Handle asynchronous actions, popups, and timeouts cleanly', 'Implement Page Object Model (POM) architecture'], practiceActivity: 'Automate a complete e-commerce checkout flow in Playwright.' },
          { id: 'qa-m6', title: 'Cross-Browser & Visual Regression Testing', hours: 18, prerequisiteIds: ['qa-m5'], tasks: ['Run tests concurrently across Chrome, Firefox, and WebKit', 'Implement visual screenshot comparison assertions', 'Test mobile responsive viewports and touch gestures'], practiceActivity: 'Configure visual regression tests that catch unexpected CSS changes.' }
        ]
      },
      {
        id: 'qa-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'CI/CD pipeline test integration and load benchmarking.',
        estimatedHours: 70,
        milestones: [
          { id: 'qa-m7', title: 'CI/CD Automated Test Pipeline', hours: 24, prerequisiteIds: ['qa-m6'], tasks: ['Integrate Playwright tests into GitHub Actions workflows', 'Publish automated HTML test reports and video traces on failure', 'Configure pull request status checks to block buggy code'], practiceActivity: 'Set up an automated CI workflow that tests every pull request.' },
          { id: 'qa-m8', title: 'Performance & Load Testing with k6', hours: 24, prerequisiteIds: ['qa-m7'], tasks: ['Write load testing scripts simulating user traffic curves', 'Measure p90, p95, and p99 response times under stress', 'Identify server and database saturation points'], practiceActivity: 'Run a 300-user load test script with k6 and publish the bottleneck report.' },
          { id: 'qa-m9', title: 'Automated Accessibility (a11y) QA Suite', hours: 22, prerequisiteIds: ['qa-m8'], tasks: ['Integrate Axe-core into automated test pipelines', 'Catch color contrast and missing label violations automatically', 'Generate automated compliance reports'], practiceActivity: 'Build an automated test suite verifying WCAG compliance across 10 pages.' }
        ]
      },
      {
        id: 'qa-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'Automation portfolio, ISTQB preparation, and QA technical interview readiness.',
        estimatedHours: 40,
        milestones: [
          { id: 'qa-m10', title: 'QA Automation Portfolio on GitHub', hours: 15, prerequisiteIds: ['qa-m9'], tasks: ['Document testing framework architecture in a clear README', 'Include live execution videos and HTML test report artifacts', 'Explain testing strategy and risk-based prioritization'], practiceActivity: 'Publish your test automation framework repository on GitHub.' },
          { id: 'qa-m11', title: 'ISTQB Foundation Preparation', hours: 15, prerequisiteIds: ['qa-m10'], tasks: ['Review ISTQB terminology and testing lifecycle principles', 'Study defect density, test estimation, and test metrics', 'Score >85% on practice certification exams'], practiceActivity: 'Complete an ISTQB practice exam with full question reviews.' },
          { id: 'qa-m12', title: 'QA Technical & Coding Interview Drills', hours: 10, prerequisiteIds: ['qa-m11'], tasks: ['Practice live coding for locator and DOM assertions', 'Explain how to prioritize testing when time is constrained', 'Conduct mock interviews handling challenging developer scenarios'], practiceActivity: 'Do a mock technical interview answering automated test design questions.' }
        ]
      }
    ]
  },

  'product-manager': {
    careerId: 'product-manager',
    title: 'Digital Product Manager Roadmap',
    description: 'Lead products from concept to launch through customer research, PRDs, backlog prioritization, and analytics.',
    stages: [
      {
        id: 'pm-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Product thinking, user discovery interviews, and empathy-driven problem definition.',
        estimatedHours: 40,
        milestones: [
          { id: 'pm-m1', title: 'Product Thinking & Customer Discovery', hours: 14, prerequisiteIds: [], tasks: ['Understand user problems vs feature ideas', 'Conduct non-leading customer discovery interviews', 'Apply the Jobs-To-Be-Done (JTBD) framework'], practiceActivity: 'Conduct 3 customer interviews and identify an unserved need.' },
          { id: 'pm-m2', title: 'Writing Product Requirement Documents (PRDs)', hours: 14, prerequisiteIds: ['pm-m1'], tasks: ['Define target user personas and user stories', 'Write clear acceptance criteria in Gherkin format', 'Outline technical assumptions, risks, and non-goals'], practiceActivity: 'Draft a complete 2-page PRD for a college rideshare feature.' },
          { id: 'pm-m3', title: 'Agile & Scrum Methodologies', hours: 12, prerequisiteIds: ['pm-m2'], tasks: ['Learn sprint planning, backlog grooming, and standups', 'Estimate story points using planning poker', 'Facilitate productive sprint retrospectives'], practiceActivity: 'Organize a mock sprint backlog with 10 prioritized user stories.' }
        ]
      },
      {
        id: 'pm-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Prioritization frameworks, product analytics, and A/B experimentation.',
        estimatedHours: 65,
        milestones: [
          { id: 'pm-m4', title: 'Feature Prioritization Frameworks', hours: 22, prerequisiteIds: ['pm-m3'], tasks: ['Master RICE (Reach, Impact, Confidence, Effort) scoring', 'Apply MoSCoW (Must, Should, Could, Wont) method', 'Balance technical debt with new customer features'], practiceActivity: 'Score and rank a 15-feature product roadmap using RICE in Excel.' },
          { id: 'pm-m5', title: 'Product Analytics & North Star Metrics', hours: 22, prerequisiteIds: ['pm-m4'], tasks: ['Define North Star metrics and leading indicators', 'Analyze conversion funnels and drop-off points', 'Calculate retention cohorts, LTV, and CAC'], practiceActivity: 'Define metrics framework and dashboard KPIs for a student platform.' },
          { id: 'pm-m6', title: 'A/B Testing & Experimentation Design', hours: 21, prerequisiteIds: ['pm-m5'], tasks: ['Formulate clear testable product hypotheses', 'Determine required sample size and statistical power', 'Analyze experiment results and make launch decisions'], practiceActivity: 'Design an A/B test plan for an app onboarding redesign.' }
        ]
      },
      {
        id: 'pm-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Zero-to-one product case studies and go-to-market strategies.',
        estimatedHours: 70,
        milestones: [
          { id: 'pm-m7', title: 'Zero-to-One Product Concept Case Study', hours: 25, prerequisiteIds: ['pm-m6'], tasks: ['Identify an underserved market opportunity', 'Develop product vision, wireframes, and launch roadmap', 'Define business model and monetization strategy'], practiceActivity: 'Publish a comprehensive product launch case study from idea to GTM.' },
          { id: 'pm-m8', title: 'Go-To-Market (GTM) Launch Strategy', hours: 25, prerequisiteIds: ['pm-m7'], tasks: ['Coordinate marketing, sales, and support enablement', 'Plan alpha/beta customer feedback loops', 'Draft customer announcement emails and release notes'], practiceActivity: 'Write a comprehensive Go-To-Market plan for a new digital product.' },
          { id: 'pm-m9', title: 'Competitive Intelligence & Positioning Deck', hours: 20, prerequisiteIds: ['pm-m8'], tasks: ['Build a competitive feature matrix and pricing analysis', 'Identify unique product differentiators', 'Present positioning recommendations to leadership'], practiceActivity: 'Create a competitive intelligence slide deck analyzing 4 competitors.' }
        ]
      },
      {
        id: 'pm-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'PM portfolio, product design interview frameworks (CIRCLES), and behavioral leadership.',
        estimatedHours: 40,
        milestones: [
          { id: 'pm-m10', title: 'Product Management Portfolio & Case Studies', hours: 15, prerequisiteIds: ['pm-m9'], tasks: ['Publish 2 detailed PRD case studies with metrics impact', 'Highlight collaboration trade-offs with engineering', 'Showcase wireframes, data models, and user research'], practiceActivity: 'Publish your online PM portfolio featuring detailed case studies.' },
          { id: 'pm-m11', title: 'Product Sense & Design Interview Drills', hours: 15, prerequisiteIds: ['pm-m10'], tasks: ['Master the CIRCLES framework for product design questions', 'Practice answering: "How would you improve Google Maps?"', 'Learn estimation questions and market sizing techniques'], practiceActivity: 'Record a 15-minute video practicing a CIRCLES design prompt.' },
          { id: 'pm-m12', title: 'Leadership & Behavioral Interview Prep', hours: 10, prerequisiteIds: ['pm-m11'], tasks: ['Prepare stories of influencing without authority', 'Explain how you handled an unpopular product pivot', 'Demonstrate empathy for both users and developers'], practiceActivity: 'Complete a mock PM interview answering behavioral conflict questions.' }
        ]
      }
    ]
  },

  'it-support': {
    careerId: 'it-support',
    title: 'Technical Support / IT Operations Roadmap',
    description: 'Master hardware, operating systems, networking diagnostics, Active Directory, and enterprise IT service management.',
    stages: [
      {
        id: 'it-s1',
        stageNumber: 1,
        title: 'Foundations',
        description: 'Computer hardware, operating system architectures, and troubleshooting logic.',
        estimatedHours: 40,
        milestones: [
          { id: 'it-m1', title: 'Computer Hardware & Peripheral Diagnostics', hours: 14, prerequisiteIds: [], tasks: ['Understand CPU, RAM, motherboards, storage, and power supplies', 'Diagnose hardware failures using BIOS/UEFI POST codes', 'Identify hardware bottlenecks and upgrade options'], practiceActivity: 'Diagnose and document a simulated failing workstation drive.' },
          { id: 'it-m2', title: 'Windows & macOS Operating System Support', hours: 14, prerequisiteIds: ['it-m1'], tasks: ['Navigate Windows Registry, Device Manager, and Services', 'Use Windows Event Viewer to trace system crash BSODs', 'Manage macOS terminal commands and permission settings'], practiceActivity: 'Configure an automated PowerShell script setting up a clean workstation.' },
          { id: 'it-m3', title: 'Troubleshooting Mindset & Process of Elimination', hours: 12, prerequisiteIds: ['it-m2'], tasks: ['Apply structured troubleshooting: identify, isolate, resolve, test', 'Document root causes and create reproducible tickets', 'Communicate technical steps empathetically to end users'], practiceActivity: 'Write a step-by-step diagnostic tree for resolving "no internet" issues.' }
        ]
      },
      {
        id: 'it-s2',
        stageNumber: 2,
        title: 'Core Skills',
        description: 'Networking diagnostics, Active Directory, and ITIL ticketing systems.',
        estimatedHours: 65,
        milestones: [
          { id: 'it-m4', title: 'Networking Fundamentals & Diagnostics', hours: 22, prerequisiteIds: ['it-m3'], tasks: ['Understand IP addressing, subnets, DHCP, and DNS', 'Diagnose connectivity with ping, traceroute, and nslookup', 'Troubleshoot Wi-Fi channel interference and VPNs'], practiceActivity: 'Configure and test a small office router with VLANs and guest Wi-Fi.' },
          { id: 'it-m5', title: 'Identity & Access (Active Directory / Google)', hours: 22, prerequisiteIds: ['it-m4'], tasks: ['Create user accounts, groups, and reset credentials', 'Apply Group Policy Objects (GPOs) to enforce security', 'Manage Google Workspace / Microsoft 365 cloud users'], practiceActivity: 'Set up an Active Directory lab and configure a secure password policy.' },
          { id: 'it-m6', title: 'ITIL ITSM & Helpdesk Ticketing Workflows', hours: 21, prerequisiteIds: ['it-m5'], tasks: ['Understand Incident, Problem, and Change Management', 'Manage Service Level Agreements (SLAs) and ticket priorities', 'Write internal knowledge base articles and user runbooks'], practiceActivity: 'Configure a Jira Service Desk project with 5 automated workflow rules.' }
        ]
      },
      {
        id: 'it-s3',
        stageNumber: 3,
        title: 'Build Projects',
        description: 'Automated provisioning, backup strategies, and enterprise endpoint management.',
        estimatedHours: 70,
        milestones: [
          { id: 'it-m7', title: 'Automated Workstation Deployment Scripts', hours: 24, prerequisiteIds: ['it-m6'], tasks: ['Automate software installation via Chocolatey / Winget', 'Configure network printers, VPN profiles, and certificates', 'Deploy standardized developer environments programmatically'], practiceActivity: 'Write a one-click workstation setup script reducing setup from 2h to 10m.' },
          { id: 'it-m8', title: 'Data Backup & Disaster Recovery Drill', hours: 24, prerequisiteIds: ['it-m7'], tasks: ['Implement 3-2-1 backup strategy for critical systems', 'Perform bare-metal system image restores and verify integrity', 'Document recovery time objective (RTO) metrics'], practiceActivity: 'Perform a successful full system restore drill from an encrypted backup.' },
          { id: 'it-m9', title: 'Secure Remote Work Architecture Guide', hours: 22, prerequisiteIds: ['it-m8'], tasks: ['Enforce Multi-Factor Authentication (MFA) across all endpoints', 'Configure Mobile Device Management (MDM / Intune) policies', 'Implement remote wipe procedures for lost hardware'], practiceActivity: 'Write an enterprise policy and setup guide for secure remote employees.' }
        ]
      },
      {
        id: 'it-s4',
        stageNumber: 4,
        title: 'Career Preparation',
        description: 'CompTIA A+ / Network+ certification readiness, IT portfolio, and interview simulations.',
        estimatedHours: 40,
        milestones: [
          { id: 'it-m10', title: 'IT Operations Portfolio & Knowledge Base', hours: 15, prerequisiteIds: ['it-m9'], tasks: ['Publish PowerShell automation scripts on GitHub', 'Write 5 professional troubleshooting knowledge base guides', 'Document home lab network topology and Active Directory setup'], practiceActivity: 'Publish an IT documentation portal with searchable troubleshooting guides.' },
          { id: 'it-m11', title: 'CompTIA A+ / Network+ Exam Preparation', hours: 15, prerequisiteIds: ['it-m10'], tasks: ['Review hardware specifications and port numbers', 'Practice cable crimping and network troubleshooting questions', 'Score >85% on practice certification exams'], practiceActivity: 'Score >85% on a full CompTIA A+ practice test.' },
          { id: 'it-m12', title: 'Customer Service & Scenario Interview Drills', hours: 10, prerequisiteIds: ['it-m11'], tasks: ['Practice handling frustrated users with patience and clarity', 'Answer technical troubleshooting scenario questions', 'Demonstrate passion for helping colleagues and continuous learning'], practiceActivity: 'Do a mock helpdesk interview resolving a high-stress outage ticket.' }
        ]
      }
    ]
  }
};

export const getRoadmapForCareer = (careerId) => ROADMAPS[careerId] || ROADMAPS['frontend'];
