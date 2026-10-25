// SkillQuest Career Paths Catalog
// 10 Comprehensive Technology & Product Career Paths

export const CAREER_CATEGORIES = [
  { id: 'all', label: 'All Careers' },
  { id: 'engineering', label: 'Engineering & Development' },
  { id: 'data-ai', label: 'Data & Artificial Intelligence' },
  { id: 'design-product', label: 'Design & Product Strategy' },
  { id: 'security-ops', label: 'Cloud, Ops & Security' }
];

export const CAREERS = [
  {
    id: 'frontend',
    category: 'engineering',
    name: 'Frontend Developer',
    shortTitle: 'Frontend Dev',
    tagline: 'Crafting responsive, intuitive, and visually stunning web interfaces',
    difficulty: 'Beginner to Intermediate',
    accentColor: '#38BDF8',
    gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
    overview: 'Frontend developers transform design ideas and user needs into responsive, interactive browser experiences using modern HTML, CSS, JavaScript, and UI frameworks.',
    dailyTasks: [
      'Translating design wireframes into responsive and accessible HTML/CSS components',
      'Developing stateful user interfaces using modern JavaScript/React workflows',
      'Integrating RESTful APIs and optimizing rendering performance',
      'Collaborating with UI/UX designers to refine interaction states and micro-animations',
      'Testing cross-browser compatibility and debugging client-side issues'
    ],
    skillsNeeded: [
      'HTML5 Semantic Architecture',
      'Modern CSS3 (Flexbox, Grid, Custom Properties)',
      'JavaScript (ES6+, DOM, Asynchronous execution)',
      'React.js Component Architecture & State Management',
      'Responsive Web Design & Mobile Optimization',
      'Web Accessibility (WCAG & ARIA standards)',
      'Git Version Control & GitHub Workflows',
      'REST API Integration & JSON data handling'
    ],
    prerequisites: [
      'Basic familiarity with web browsers and text editors',
      'Enthusiasm for visual details and user interactions',
      'Patience with debugging styling and layout behavior'
    ],
    projects: [
      {
        title: 'Interactive Travel Destination Planner',
        description: 'A responsive single-page web app with search filters, interactive maps, weather forecasts, and itinerary saving via localStorage.',
        tags: ['React', 'CSS Grid', 'REST API', 'localStorage']
      },
      {
        title: 'Accessible Component Design System',
        description: 'A reusable UI library featuring modals, tabsets, accordions, and toasts built with strict keyboard navigation and ARIA attributes.',
        tags: ['Accessibility', 'Vanilla CSS', 'Component Architecture']
      },
      {
        title: 'Real-time Crypto & Finance Dashboard',
        description: 'A dark-mode analytics dashboard showing live ticker data, interactive SVG charts, currency calculators, and responsive cards.',
        tags: ['JavaScript', 'Async/Await', 'Data Visualization']
      }
    ]
  },
  {
    id: 'fullstack',
    category: 'engineering',
    name: 'Full-Stack Developer',
    shortTitle: 'Full-Stack Dev',
    tagline: 'Bridging elegant user interfaces with robust backend architectures',
    difficulty: 'Intermediate',
    accentColor: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #6D28D9, #A78BFA)',
    overview: 'Full-stack developers understand the entire application lifecycle, from database design and server-side API development to browser client architecture.',
    dailyTasks: [
      'Designing relational and document database schemas',
      'Building secure, RESTful and GraphQL backend endpoints',
      'Implementing user authentication, role-based authorization, and session security',
      'Connecting client-side interfaces to backend microservices',
      'Managing deployment pipelines, environment variables, and cloud hosting'
    ],
    skillsNeeded: [
      'Frontend Foundations (HTML, CSS, JavaScript/React)',
      'Backend Frameworks (Node.js/Express, Python/FastAPI, or Java)',
      'Database Modeling (SQL PostgreSQL/MySQL & NoSQL MongoDB)',
      'API Design (RESTful standards, status codes, payload validation)',
      'Authentication (JWT tokens, password hashing, OAuth)',
      'Server Architecture & Asynchronous Message Queues',
      'Deployment & Containerization (Docker basics, CI/CD)'
    ],
    prerequisites: [
      'Solid programming fundamentals in at least one language',
      'Understanding of client-server request/response cycles',
      'Familiarity with command line environments'
    ],
    projects: [
      {
        title: 'Campus Peer Tutoring Marketplace',
        description: 'A full-stack booking portal where college students find tutors, schedule sessions, leave reviews, and manage availability slots.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth']
      },
      {
        title: 'Collaborative Markdown Note Vault',
        description: 'A cloud notebook application featuring tag organization, full-text search, live markdown preview, and real-time auto-saving.',
        tags: ['Full-Stack', 'REST API', 'Database Indexing']
      },
      {
        title: 'Task Orchestration & Kanban Platform',
        description: 'A team productivity board supporting drag-and-drop task movement, activity feeds, audit logs, and webhooks.',
        tags: ['Express', 'SQL', 'State Synchronization']
      }
    ]
  },
  {
    id: 'data-analyst',
    category: 'data-ai',
    name: 'Data Analyst',
    shortTitle: 'Data Analyst',
    tagline: 'Transforming raw datasets into actionable insights and strategic decisions',
    difficulty: 'Beginner to Intermediate',
    accentColor: '#10B981',
    gradient: 'linear-gradient(135deg, #059669, #34D399)',
    overview: 'Data analysts inspect, cleanse, transform, and model data to discover useful patterns, inform business decisions, and produce compelling visual reports.',
    dailyTasks: [
      'Extracting and aggregating business records using advanced SQL queries',
      'Cleaning messy datasets and handling missing or anomalous values',
      'Designing dynamic dashboards and KPI scorecards in BI tools',
      'Performing exploratory data analysis and statistical validation',
      'Presenting findings and strategic recommendations to non-technical stakeholders'
    ],
    skillsNeeded: [
      'Advanced SQL (Joins, Window Functions, CTEs, Aggregations)',
      'Spreadsheets Mastery (Pivot tables, VLOOKUP/XLOOKUP, index-match)',
      'Data Visualization & BI Tools (Tableau, PowerBI, or Metabase)',
      'Exploratory Data Analysis in Python or R (Pandas, NumPy)',
      'Descriptive & Inferential Statistics',
      'Data Storytelling & Executive Presentation',
      'Data Cleaning & Quality Assurance'
    ],
    prerequisites: [
      'Curiosity for uncovering patterns in numbers',
      'Comfort with structured spreadsheets and basic arithmetic',
      'Strong communication skills for explaining technical findings'
    ],
    projects: [
      {
        title: 'E-Commerce Customer Retention & Churn Analysis',
        description: 'An end-to-end analytical report identifying factors influencing churn rates using cohort analysis and customer segmentation.',
        tags: ['SQL', 'Python Pandas', 'Cohort Analysis']
      },
      {
        title: 'University Career Placement Trends Dashboard',
        description: 'An interactive executive dashboard showing graduation hiring timelines, compensation percentiles, and regional demand.',
        tags: ['PowerBI', 'Data Cleaning', 'KPI Metrics']
      },
      {
        title: 'Global Supply Chain Logistics Optimization',
        description: 'A statistical study evaluating shipping delays, vendor reliability scores, and cost saving opportunities across global routes.',
        tags: ['Tableau', 'Statistical Analysis', 'Forecasting']
      }
    ]
  },
  {
    id: 'uiux-designer',
    category: 'design-product',
    name: 'UI/UX Designer',
    shortTitle: 'UI/UX Designer',
    tagline: 'Designing seamless user journeys, intuitive interfaces, and delightful systems',
    difficulty: 'Beginner',
    accentColor: '#EC4899',
    gradient: 'linear-gradient(135deg, #DB2777, #F472B6)',
    overview: 'UI/UX designers focus on user satisfaction by improving usability, accessibility, and visual elegance across digital applications and websites.',
    dailyTasks: [
      'Conducting user research, interviews, and competitive benchmark studies',
      'Creating user personas, empathy maps, and end-to-end journey maps',
      'Wireframing low-fidelity concepts and iterating through interactive prototypes',
      'Building scalable design systems, typography scales, and component libraries',
      'Running usability tests and refining designs based on user feedback'
    ],
    skillsNeeded: [
      'User Research & Usability Testing Methodologies',
      'Figma & Modern Design Tool Proficiency',
      'Information Architecture & Wireframing',
      'Interaction Design & Micro-animations',
      'Design Systems & Component Tokens',
      'Visual Design (Color theory, typography hierarchy, whitespace)',
      'Accessibility Standards (WCAG contrast, touch targets)'
    ],
    prerequisites: [
      'High empathy for user frustration and cognitive load',
      'Appreciation for clean aesthetics and visual consistency',
      'Willingness to seek critique and iterate rapidly'
    ],
    projects: [
      {
        title: 'Mental Wellness & Habit Tracking Mobile App',
        description: 'A complete case study featuring user interviews, journey maps, low-to-high fidelity Figma prototypes, and usability testing.',
        tags: ['Figma', 'User Research', 'Design System']
      },
      {
        title: 'Campus Food Pantry & Meal Sharing Platform',
        description: 'An accessible tablet and mobile interface addressing food insecurity on college campuses with empathetic UX flows.',
        tags: ['Wireframing', 'Accessibility', 'Mobile UX']
      },
      {
        title: 'B2B SaaS Analytics Design System',
        description: 'A comprehensive design token library with 40+ atomic components, dark/light variations, and documented usage guidelines.',
        tags: ['Design Tokens', 'Design System', 'Prototyping']
      }
    ]
  },
  {
    id: 'ai-ml',
    category: 'data-ai',
    name: 'AI / Machine Learning Beginner Path',
    shortTitle: 'AI / ML Engineer',
    tagline: 'Building intelligent algorithms, predictive models, and data-driven systems',
    difficulty: 'Intermediate to Advanced',
    accentColor: '#06B6D4',
    gradient: 'linear-gradient(135deg, #0891B2, #22D3EE)',
    overview: 'AI and Machine Learning practitioners train computational models to identify complex patterns, make predictions, automate reasoning, and interact via natural language.',
    dailyTasks: [
      'Preparing training datasets, feature engineering, and normalization',
      'Selecting, fine-tuning, and evaluating machine learning models',
      'Testing algorithmic accuracy using precision, recall, and ROC-AUC metrics',
      'Deploying models as inferencing microservices via REST APIs',
      'Monitoring model drift, data bias, and inference latency'
    ],
    skillsNeeded: [
      'Python Programming & Scientific Stack (NumPy, Pandas, Scikit-Learn)',
      'Linear Algebra, Calculus & Probability Foundations',
      'Supervised & Unsupervised Machine Learning Algorithms',
      'Neural Networks Fundamentals (PyTorch or TensorFlow)',
      'Natural Language Processing (NLP) & LLM Prompt Engineering',
      'Model Evaluation, Cross-Validation & Metric Selection',
      'API Deployment for ML (FastAPI, ONNX, Flask)'
    ],
    prerequisites: [
      'Comfort with programming logic and variables',
      'Interest in mathematical modeling and statistics',
      'Systematic mindset for scientific experimentation'
    ],
    projects: [
      {
        title: 'Student Course Recommendation Engine',
        description: 'A content-based and collaborative filtering model that suggests relevant college electives based on student history.',
        tags: ['Scikit-Learn', 'Recommender Systems', 'Python']
      },
      {
        title: 'Medical Imaging Pneumonia Detection Classifier',
        description: 'A convolutional neural network (CNN) trained on open chest X-ray scans with Grad-CAM heatmap explainability.',
        tags: ['PyTorch', 'Computer Vision', 'Deep Learning']
      },
      {
        title: 'Automated Resume Skill Extractor using NLP',
        description: 'A text processing pipeline that parses PDF resumes, extracts core skills, and calculates cosine similarity to job postings.',
        tags: ['NLP', 'Spacy', 'Embeddings']
      }
    ]
  },
  {
    id: 'cybersecurity',
    category: 'security-ops',
    name: 'Cybersecurity Analyst',
    shortTitle: 'Security Analyst',
    tagline: 'Defending networks, securing applications, and neutralizing digital threats',
    difficulty: 'Intermediate',
    accentColor: '#F43F5E',
    gradient: 'linear-gradient(135deg, #E11D48, #FB7185)',
    overview: 'Cybersecurity analysts monitor computer networks for security breaches, audit systems for vulnerabilities, install security software, and respond to incidents.',
    dailyTasks: [
      'Monitoring SIEM dashboards and intrusion detection system logs',
      'Investigating anomalous network traffic and potential malware indicators',
      'Performing vulnerability scans and penetration testing audits',
      'Creating incident response plans and coordinating remediation procedures',
      'Educating engineering teams on secure coding principles (OWASP Top 10)'
    ],
    skillsNeeded: [
      'Networking Fundamentals (TCP/IP, DNS, Subnetting, Firewalls)',
      'Operating System Security (Linux hardening & Windows internals)',
      'SIEM Tools & Log Analysis (Splunk, Wireshark, ELK stack)',
      'Application Security & OWASP Top 10 Vulnerabilities',
      'Threat Modeling & Vulnerability Management',
      'Incident Response Protocols & Digital Forensics',
      'Security Compliance Frameworks (NIST, ISO 27001)'
    ],
    prerequisites: [
      'Analytical curiosity and passion for problem defense',
      'Understanding of basic computer networking concepts',
      'High ethics and commitment to security standards'
    ],
    projects: [
      {
        title: 'Home Lab Security Onion Network Monitoring',
        description: 'A configured virtualized lab running Suricata, Zeek, and Elasticsearch to capture and analyze simulated network attack vectors.',
        tags: ['Wireshark', 'Suricata', 'Network Security']
      },
      {
        title: 'Web Application Penetration Test Report',
        description: 'A comprehensive security audit of a vulnerable demo application documenting XSS, SQLi, and CSRF vulnerabilities with remediations.',
        tags: ['OWASP Top 10', 'Burp Suite', 'Audit Report']
      },
      {
        title: 'Automated Phishing Email Detection Script',
        description: 'A Python tool that inspects email headers, SPF/DKIM verification, and suspicious domain patterns to score phishing likelihood.',
        tags: ['Python', 'Threat Intel', 'Email Security']
      }
    ]
  },
  {
    id: 'devops',
    category: 'security-ops',
    name: 'Cloud / DevOps Engineer',
    shortTitle: 'DevOps Engineer',
    tagline: 'Automating infrastructure, scaling cloud platforms, and accelerating release cycles',
    difficulty: 'Intermediate to Advanced',
    accentColor: '#F59E0B',
    gradient: 'linear-gradient(135deg, #D97706, #FBBF24)',
    overview: 'Cloud and DevOps engineers bridge software development and IT operations by building automated pipelines, managing cloud infrastructure, and ensuring high uptime.',
    dailyTasks: [
      'Automating continuous integration and deployment (CI/CD) pipelines',
      'Provisioning infrastructure as code (IaC) using Terraform or CloudFormation',
      'Configuring container orchestration with Docker and Kubernetes',
      'Setting up centralized observability, telemetry, and alarm systems',
      'Optimizing cloud architecture costs and disaster recovery plans'
    ],
    skillsNeeded: [
      'Linux Administration & Bash/Shell Scripting',
      'Cloud Providers (AWS, Google Cloud, or Microsoft Azure)',
      'Containerization (Docker, container registries, multi-stage builds)',
      'CI/CD Automation (GitHub Actions, GitLab CI, or Jenkins)',
      'Infrastructure as Code (Terraform, Ansible)',
      'Observability & Monitoring (Prometheus, Grafana, CloudWatch)',
      'Kubernetes Cluster Architecture Basics'
    ],
    prerequisites: [
      'Comfort working in terminal / command line interfaces',
      'Understanding of basic software release lifecycles',
      'Discipline regarding system reliability and automation'
    ],
    projects: [
      {
        title: 'Automated Multi-Stage CI/CD GitHub Actions Pipeline',
        description: 'A production pipeline that runs automated linting, unit tests, Docker container builds, security scans, and deployment to cloud.',
        tags: ['GitHub Actions', 'Docker', 'Automation']
      },
      {
        title: 'Cloud Infrastructure as Code with Terraform',
        description: 'Terraform blueprints provisioning a secure VPC, load balancers, auto-scaling compute instances, and encrypted storage buckets.',
        tags: ['Terraform', 'AWS', 'IaC']
      },
      {
        title: 'Kubernetes Microservices Cluster with Monitoring',
        description: 'A containerized microservices deployment orchestrated with Kubernetes, configured with Prometheus metrics and Grafana alerts.',
        tags: ['Kubernetes', 'Prometheus', 'Grafana']
      }
    ]
  },
  {
    id: 'qa-engineer',
    category: 'engineering',
    name: 'Software Tester / QA Engineer',
    shortTitle: 'QA Engineer',
    tagline: 'Ensuring bulletproof software reliability, user trust, and flawless test automation',
    difficulty: 'Beginner to Intermediate',
    accentColor: '#14B8A6',
    gradient: 'linear-gradient(135deg, #0D9488, #2DD4BF)',
    overview: 'QA and software test engineers design testing strategies, write automated test suites, verify edge cases, and ensure products perform reliably under all conditions.',
    dailyTasks: [
      'Writing test plans, test cases, and edge-case validation matrices',
      'Developing automated end-to-end (E2E) browser tests and API tests',
      'Conducting regression, load, and performance testing',
      'Logging clear bug reports with reproducible steps and console traces',
      'Working with developers to integrate automated testing into CI pipelines'
    ],
    skillsNeeded: [
      'Test Methodologies (Black-box, White-box, Integration, E2E, Unit)',
      'Automated Testing Frameworks (Playwright, Cypress, Selenium)',
      'API Testing Tools (Postman, Newman, REST-assured)',
      'Bug Tracking & Test Case Management (Jira, TestRail)',
      'Performance & Load Testing (JMeter, k6)',
      'Version Control & CI/CD Integration',
      'Attention to Detail & Root Cause Analysis'
    ],
    prerequisites: [
      'Natural skepticism and passion for finding broken edge cases',
      'Methodical note-taking and documentation habits',
      'Basic scripting knowledge in JavaScript or Python'
    ],
    projects: [
      {
        title: 'Automated E2E Test Suite with Playwright',
        description: 'An automated testing repository validating user authentication, shopping cart workflows, checkout errors, and mobile responsiveness.',
        tags: ['Playwright', 'JavaScript', 'E2E Testing']
      },
      {
        title: 'Comprehensive REST API Postman Collection',
        description: 'A test suite with 50+ validated API assertions, dynamic environment variables, pre-request scripts, and Newman CI reporting.',
        tags: ['Postman', 'API Testing', 'Automation']
      },
      {
        title: 'Load & Stress Benchmarking with k6',
        description: 'A performance testing project simulating 500 concurrent users to identify database bottlenecks and response degradation.',
        tags: ['k6', 'Performance', 'Benchmarking']
      }
    ]
  },
  {
    id: 'product-manager',
    category: 'design-product',
    name: 'Digital Product Manager',
    shortTitle: 'Product Manager',
    tagline: 'Aligning user empathy, engineering feasibility, and business strategy to build impactful products',
    difficulty: 'Intermediate',
    accentColor: '#F97316',
    gradient: 'linear-gradient(135deg, #EA580C, #FB923C)',
    overview: 'Product managers define the vision, roadmap, and feature set for digital products, aligning cross-functional teams of engineers, designers, and marketers toward high-impact goals.',
    dailyTasks: [
      'Gathering customer feedback and identifying high-value problem statements',
      'Writing detailed Product Requirement Documents (PRDs) and user stories',
      'Prioritizing feature backlogs using frameworks like RICE or MoSCoW',
      'Defining product success metrics (OKRs, North Star metrics, retention)',
      'Facilitating sprint planning, stakeholder updates, and product launches'
    ],
    skillsNeeded: [
      'Product Strategy & Vision Formulation',
      'User Story Writing & Acceptance Criteria',
      'Agile / Scrum Project Methodologies',
      'Data-Driven Decision Making & Product Analytics',
      'Feature Prioritization Frameworks (RICE, Kano)',
      'Stakeholder Communication & Conflict Resolution',
      'Market & Competitive Intelligence'
    ],
    prerequisites: [
      'Strong leadership, empathy, and listening capabilities',
      'Ability to articulate trade-offs between speed, cost, and quality',
      'General appreciation of technology and user psychology'
    ],
    projects: [
      {
        title: 'Zero-to-One PRD for Student Collab Platform',
        description: 'A professional Product Requirement Document complete with user personas, user journey stories, technical scope, and KPI definitions.',
        tags: ['PRD', 'Agile', 'Product Strategy']
      },
      {
        title: 'Feature Prioritization Matrix & Go-to-Market Plan',
        description: 'A strategic prioritization analysis using RICE scoring on 20 backlog features, accompanied by a product release roadmap.',
        tags: ['RICE Framework', 'GTM Strategy', 'Roadmapping']
      },
      {
        title: 'A/B Testing Hypothesis & Experiment Design',
        description: 'An experimentation document outlining an onboarding conversion funnel experiment with sample size calculations and metrics.',
        tags: ['Analytics', 'Experimentation', 'Conversion Funnel']
      }
    ]
  },
  {
    id: 'it-support',
    category: 'security-ops',
    name: 'Technical Support / IT Operations',
    shortTitle: 'IT Operations',
    tagline: 'Empowering organizations through reliable hardware, software systems, and problem-solving',
    difficulty: 'Beginner',
    accentColor: '#6366F1',
    gradient: 'linear-gradient(135deg, #4F46E5, #818CF8)',
    overview: 'Technical Support and IT Operations specialists maintain organizational computing systems, troubleshoot hardware and software issues, manage access controls, and ensure smooth technological operations.',
    dailyTasks: [
      'Diagnosing and resolving hardware, OS, and network connectivity problems',
      'Managing user directory accounts, email provision, and access permissions',
      'Deploying software images, security patches, and system upgrades',
      'Maintaining IT asset inventories, license compliance, and peripheral devices',
      'Writing troubleshooting runbooks and internal knowledge base articles'
    ],
    skillsNeeded: [
      'Operating Systems (Windows 11, macOS, Linux desktop/server)',
      'Identity & Access Management (Active Directory, Google Workspace, Okta)',
      'Networking Fundamentals (DHCP, DNS, VPNs, Wi-Fi routing, VLANs)',
      'Hardware Troubleshooting & Peripheral Configuration',
      'IT Service Management (ITIL principles, ticketing systems)',
      'Remote Desktop Tools & Terminal Command Line',
      'Customer Service & Clear Technical Translation'
    ],
    prerequisites: [
      'Patience when helping non-technical colleagues resolve roadblocks',
      'Curiosity about computer hardware, operating systems, and connectivity',
      'Logical process-of-elimination troubleshooting mindset'
    ],
    projects: [
      {
        title: 'IT Helpdesk Ticketing System & Runbook',
        description: 'A configured internal support portal with automated ticket routing, SLA tiers, and 15 documented troubleshooting procedures.',
        tags: ['ITIL', 'Documentation', 'Ticketing']
      },
      {
        title: 'Automated Device Onboarding Script',
        description: 'A PowerShell and Bash script that configures developer workstations, installs necessary software packages, and applies security policies.',
        tags: ['PowerShell', 'Automation', 'System Admin']
      },
      {
        title: 'Secure Remote Work Infrastructure Blueprint',
        description: 'A guide detailing VPN setup, multi-factor authentication (MFA) enforcement, and endpoint backup protocols for hybrid teams.',
        tags: ['VPN', 'MFA Security', 'IT Ops']
      }
    ]
  }
];

export const getCareerById = (id) => CAREERS.find((c) => c.id === id) || CAREERS[0];
