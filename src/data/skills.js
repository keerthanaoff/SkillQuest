// SkillQuest Curated Skills Catalog for all 10 Career Paths
// Each skill includes practical descriptions, priority levels, practice tasks, and prerequisite notes

export const SKILL_CATALOG = {
  frontend: [
    {
      id: 'fe-html',
      name: 'HTML5 Semantic Architecture',
      importance: 'Critical',
      description: 'Using correct semantic tags (nav, main, article, section) for machine readability, SEO, and screen readers.',
      practiceTask: 'Convert a non-semantic div-soup webpage into a clean, 100% semantic HTML structure.',
      isPrerequisite: true
    },
    {
      id: 'fe-css-layout',
      name: 'CSS Layouts & Responsive Design',
      importance: 'Critical',
      description: 'Mastery of Flexbox, CSS Grid, media queries, clamp(), and fluid responsive layouts across device sizes.',
      practiceTask: 'Build a responsive multi-column dashboard layout that adapts cleanly from 320px mobile to 4K desktop without layout breaks.',
      isPrerequisite: true
    },
    {
      id: 'fe-js-core',
      name: 'JavaScript Fundamentals & DOM',
      importance: 'Critical',
      description: 'Variables, closures, array methods (map, filter, reduce), DOM manipulation, and browser event listeners.',
      practiceTask: 'Create an interactive task board with filtering, sorting, and dynamic DOM manipulation using pure JavaScript.',
      isPrerequisite: true
    },
    {
      id: 'fe-async-fetch',
      name: 'Asynchronous JavaScript & REST APIs',
      importance: 'High',
      description: 'Promises, async/await, fetch API, handling HTTP errors, loading states, and parsing JSON payloads.',
      practiceTask: 'Build an open weather forecast widget with search input, loading skeletons, and graceful error messages.',
      isPrerequisite: false
    },
    {
      id: 'fe-react-core',
      name: 'React Components, Hooks & State',
      importance: 'Critical',
      description: 'Functional component architecture, useState, useEffect, custom hooks, and lifting state cleanly.',
      practiceTask: 'Build a multi-step checkout form preserving state across steps with input validation in React.',
      isPrerequisite: true
    },
    {
      id: 'fe-git',
      name: 'Git Version Control & GitHub',
      importance: 'High',
      description: 'Branching, committing with descriptive messages, rebasing/merging, pull requests, and resolving merge conflicts.',
      practiceTask: 'Initialize a GitHub repo, create feature branches, submit PRs, and merge with clean commit history.',
      isPrerequisite: false
    },
    {
      id: 'fe-a11y',
      name: 'Web Accessibility (WCAG & ARIA)',
      importance: 'High',
      description: 'Keyboard navigation, aria-expanded, aria-modal, focus trapping, screen reader testing, and color contrast ratios.',
      practiceTask: 'Audit a modal dialog using keyboard Tab/Shift+Tab and NVDA/VoiceOver screen reader for 100% compliance.',
      isPrerequisite: false
    },
    {
      id: 'fe-debugging',
      name: 'Browser DevTools & Performance',
      importance: 'Medium',
      description: 'Console debugging, Network tab waterfall analysis, Performance profiler, and Core Web Vitals (LCP, CLS, FID).',
      practiceTask: 'Profile a slow webpage, identify an unnecessary re-render bottleneck, and reduce bundle load time by 30%.',
      isPrerequisite: false
    },
    {
      id: 'fe-deployment',
      name: 'Modern Web Build & Deployment',
      importance: 'Medium',
      description: 'Vite build tooling, environment variables, static site hosting (Vercel, Netlify, GitHub Pages), and DNS.',
      practiceTask: 'Configure automated continuous deployment from a GitHub repository to a live custom URL.',
      isPrerequisite: false
    }
  ],

  fullstack: [
    {
      id: 'fs-frontend',
      name: 'Frontend UI Integration',
      importance: 'Critical',
      description: 'Building clean responsive interfaces in React/HTML/CSS that seamlessly communicate with backend APIs.',
      practiceTask: 'Create a client-side interface that consumes paginated backend search results with debounced inputs.',
      isPrerequisite: true
    },
    {
      id: 'fs-backend-server',
      name: 'Node.js & Express RESTful Server',
      importance: 'Critical',
      description: 'Designing modular Express routers, middleware pipelines, error handlers, and HTTP status code semantics.',
      practiceTask: 'Build an Express CRUD API with input validation middleware and centralized JSON error responses.',
      isPrerequisite: true
    },
    {
      id: 'fs-sql-databases',
      name: 'Relational Database Modeling & SQL',
      importance: 'Critical',
      description: 'Primary/foreign keys, joins, index optimization, migrations, and PostgreSQL/MySQL query execution.',
      practiceTask: 'Design a normalized 4-table relational schema for an e-commerce platform and write queries for top revenue items.',
      isPrerequisite: true
    },
    {
      id: 'fs-auth-security',
      name: 'Authentication & Session Security',
      importance: 'Critical',
      description: 'Password hashing (bcrypt), JSON Web Tokens (JWT), HTTP-only cookies, and role-based access control.',
      practiceTask: 'Implement secure login, registration, password hashing, and protected route middleware.',
      isPrerequisite: false
    },
    {
      id: 'fs-nosql',
      name: 'NoSQL & Document Databases',
      importance: 'Medium',
      description: 'MongoDB / DynamoDB schema design, document embedding vs referencing, and aggregation pipelines.',
      practiceTask: 'Implement a user activity feed using MongoDB aggregation pipelines with date-based grouping.',
      isPrerequisite: false
    },
    {
      id: 'fs-api-testing',
      name: 'API Testing & Documentation',
      importance: 'High',
      description: 'Writing integration tests using Supertest/Jest and publishing OpenAPI/Swagger documentation.',
      practiceTask: 'Write automated integration tests covering happy path and edge-case error statuses for all endpoints.',
      isPrerequisite: false
    },
    {
      id: 'fs-docker',
      name: 'Containerization Basics with Docker',
      importance: 'High',
      description: 'Writing Dockerfiles, multi-stage builds, and Docker Compose files to spin up web apps and databases together.',
      practiceTask: 'Containerize a Node.js + PostgreSQL app using docker-compose.yml with persistent volumes.',
      isPrerequisite: false
    },
    {
      id: 'fs-cicd-deploy',
      name: 'Cloud Deployment & Monitoring',
      importance: 'Medium',
      description: 'Deploying servers and databases to Render, Railway, or AWS, managing environment variables and logs.',
      practiceTask: 'Deploy a full-stack web application with managed cloud database and configure healthcheck endpoints.',
      isPrerequisite: false
    }
  ],

  'data-analyst': [
    {
      id: 'da-excel',
      name: 'Advanced Spreadsheets (Excel / Sheets)',
      importance: 'Critical',
      description: 'Pivot tables, VLOOKUP/XLOOKUP, INDEX-MATCH, conditional formatting, and multi-variable scenario modeling.',
      practiceTask: 'Build a dynamic budget variance model in Excel using XLOOKUP and automated conditional heatmaps.',
      isPrerequisite: true
    },
    {
      id: 'da-sql-queries',
      name: 'SQL Aggregations, Joins & Subqueries',
      importance: 'Critical',
      description: 'INNER/LEFT/OUTER joins, GROUP BY, HAVING, subqueries, and common table expressions (CTEs).',
      practiceTask: 'Query a retail database to find customers with the highest lifetime value and calculate 30-day retention.',
      isPrerequisite: true
    },
    {
      id: 'da-sql-window',
      name: 'SQL Window Functions',
      importance: 'High',
      description: 'ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), and rolling average window calculations.',
      practiceTask: 'Write a SQL query calculating month-over-month revenue growth percentage and running quarterly totals.',
      isPrerequisite: false
    },
    {
      id: 'da-data-cleaning',
      name: 'Data Cleansing & Transformation',
      importance: 'Critical',
      description: 'Handling nulls, deduplication, type casting, string manipulation, and standardizing date formats.',
      practiceTask: 'Clean a messy 5,000-row CSV file with inconsistent dates, missing phone numbers, and duplicate entries in Python.',
      isPrerequisite: true
    },
    {
      id: 'da-statistics',
      name: 'Descriptive & Applied Statistics',
      importance: 'High',
      description: 'Mean, median, standard deviation, interquartile range (IQR), correlation coefficients, and distributions.',
      practiceTask: 'Calculate confidence intervals and test for statistical significance between two conversion test variants.',
      isPrerequisite: false
    },
    {
      id: 'da-bi-viz',
      name: 'BI Tools (Tableau or PowerBI)',
      importance: 'Critical',
      description: 'Connecting data sources, creating calculated fields, interactive filters, and executive dashboard design.',
      practiceTask: 'Build an interactive 3-page PowerBI/Tableau report displaying sales KPIs, geographic maps, and drill-downs.',
      isPrerequisite: false
    },
    {
      id: 'da-python-eda',
      name: 'Python for Data Analysis (Pandas & Seaborn)',
      importance: 'High',
      description: 'DataFrame manipulation, grouping, pivot tables, and statistical plotting with Matplotlib and Seaborn.',
      practiceTask: 'Perform an exploratory data analysis (EDA) on a real dataset and generate a clean Jupyter notebook report.',
      isPrerequisite: false
    },
    {
      id: 'da-storytelling',
      name: 'Data Storytelling & Executive Presentations',
      importance: 'High',
      description: 'Synthesizing charts into clear business recommendations, removing chart junk, and presenting insights.',
      practiceTask: 'Create a 5-slide executive deck translating analytical charts into 3 clear operational recommendations.',
      isPrerequisite: false
    }
  ],

  'uiux-designer': [
    {
      id: 'ui-research',
      name: 'User Research & Problem Definition',
      importance: 'Critical',
      description: 'Conducting user interviews, synthesizing qualitative notes, affinity mapping, and defining problem statements.',
      practiceTask: 'Interview 3 college students on course registration difficulties and create an affinity diagram with insights.',
      isPrerequisite: true
    },
    {
      id: 'ui-journey-persona',
      name: 'Personas & Journey Mapping',
      importance: 'High',
      description: 'Developing representative personas, empathy maps, and documenting emotional highs and lows along user journeys.',
      practiceTask: 'Create an end-to-end user journey map for a student finding and applying for their first internship.',
      isPrerequisite: true
    },
    {
      id: 'ui-wireframing',
      name: 'Information Architecture & Wireframing',
      importance: 'Critical',
      description: 'Sitemaps, user flow diagrams, and low-fidelity grayscale wireframes focused on content hierarchy.',
      practiceTask: 'Sketch low-fidelity mobile wireframes for a 5-screen campus ride-sharing application.',
      isPrerequisite: true
    },
    {
      id: 'ui-figma-mastery',
      name: 'Figma Auto-Layout & Components',
      importance: 'Critical',
      description: 'Auto-layout constraints, nested components, component variants, and interactive prototype animations.',
      practiceTask: 'Design a responsive card component with hover, active, and disabled variants using Figma auto-layout.',
      isPrerequisite: false
    },
    {
      id: 'ui-design-systems',
      name: 'Design Systems & Design Tokens',
      importance: 'High',
      description: 'Color palettes (60-30-10 rule), typographic scales, 8pt spacing systems, elevation, and token naming.',
      practiceTask: 'Build a foundational design token library in Figma specifying primary colors, font scales, and button sizes.',
      isPrerequisite: false
    },
    {
      id: 'ui-usability-testing',
      name: 'Usability Testing & Iteration',
      importance: 'High',
      description: 'Writing usability test scripts, observing unguided user sessions, logging usability severity, and iterating.',
      practiceTask: 'Conduct a think-aloud test on your Figma prototype with 2 users and document 3 high-impact usability fixes.',
      isPrerequisite: false
    },
    {
      id: 'ui-a11y-design',
      name: 'Accessible Design Standards (WCAG)',
      importance: 'High',
      description: 'Color contrast ratio guidelines (4.5:1 text), minimum touch targets (48x48px), and focus states.',
      practiceTask: 'Audit your UI designs with a color contrast plugin to ensure all text meets WCAG AA/AAA compliance.',
      isPrerequisite: false
    },
    {
      id: 'ui-portfolio',
      name: 'Case Study Writing & Presentation',
      importance: 'Medium',
      description: 'Structuring compelling design case studies showing process, research, trade-offs, and measurable outcomes.',
      practiceTask: 'Write a comprehensive 1,500-word case study walking through the research, wireframing, and final design.',
      isPrerequisite: false
    }
  ],

  'ai-ml': [
    {
      id: 'ai-python-core',
      name: 'Python for Scientific Computing',
      importance: 'Critical',
      description: 'Object-oriented Python, NumPy vectorization, matrix operations, and Pandas DataFrame manipulations.',
      practiceTask: 'Implement vector dot products and normalization functions using pure NumPy without explicit loops.',
      isPrerequisite: true
    },
    {
      id: 'ai-math-foundations',
      name: 'Linear Algebra & Probability Foundations',
      importance: 'Critical',
      description: 'Matrix multiplication, eigenvalues, gradients, partial derivatives, Bayes theorem, and normal distributions.',
      practiceTask: 'Compute gradient descent updates by hand on a toy 2-parameter linear regression problem.',
      isPrerequisite: true
    },
    {
      id: 'ai-classical-ml',
      name: 'Supervised Learning Algorithms',
      importance: 'Critical',
      description: 'Linear/Logistic regression, Decision Trees, Random Forests, Support Vector Machines, and hyperparameter tuning.',
      practiceTask: 'Train a Random Forest classifier in Scikit-Learn, perform GridSearch cross-validation, and plot feature importances.',
      isPrerequisite: false
    },
    {
      id: 'ai-feature-engineering',
      name: 'Data Preprocessing & Feature Engineering',
      importance: 'High',
      description: 'StandardScaler, One-Hot Encoding, imputing missing values, handling class imbalance with SMOTE.',
      practiceTask: 'Build a Scikit-Learn Pipeline that combines automated imputation, scaling, and categorical encoding.',
      isPrerequisite: false
    },
    {
      id: 'ai-metrics',
      name: 'Model Evaluation & Validation Metrics',
      importance: 'Critical',
      description: 'Confusion matrices, precision, recall, F1-score, ROC curves, AUC, and stratified k-fold cross-validation.',
      practiceTask: 'Analyze a fraud detection dataset and evaluate why accuracy is misleading compared to precision-recall AUC.',
      isPrerequisite: false
    },
    {
      id: 'ai-deep-learning',
      name: 'Neural Networks & PyTorch Basics',
      importance: 'High',
      description: 'Perceptrons, activation functions (ReLU), backpropagation, loss functions, and PyTorch DataLoader loops.',
      practiceTask: 'Build and train a 3-layer neural network in PyTorch to classify handwritten digits (MNIST) to >95% accuracy.',
      isPrerequisite: false
    },
    {
      id: 'ai-nlp-llm',
      name: 'NLP Fundamentals & LLM Integration',
      importance: 'High',
      description: 'Tokenization, embeddings, vector databases, prompt engineering, and building retrieval-augmented generation (RAG).',
      practiceTask: 'Build a question-answering script that embeds text documents into a vector store and retrieves relevant passages.',
      isPrerequisite: false
    },
    {
      id: 'ai-deployment',
      name: 'Model Serialization & API Serving',
      importance: 'Medium',
      description: 'Exporting models (ONNX, joblib), serving predictions via FastAPI endpoints, and measuring latency.',
      practiceTask: 'Create a FastAPI microservice that receives JSON input, runs inference using a trained model, and returns predictions.',
      isPrerequisite: false
    }
  ],

  cybersecurity: [
    {
      id: 'sec-networking',
      name: 'TCP/IP & Networking Fundamentals',
      importance: 'Critical',
      description: 'OSI model layers, TCP/UDP handshakes, DNS resolution, subnetting, CIDR notation, and routing tables.',
      practiceTask: 'Analyze packet captures in Wireshark to trace a complete DNS lookup and three-way TCP handshake.',
      isPrerequisite: true
    },
    {
      id: 'sec-linux-security',
      name: 'Linux Administration & OS Hardening',
      importance: 'Critical',
      description: 'File permissions (chmod, chown), sudoers configuration, systemd services, SSH keys, and iptables firewall rules.',
      practiceTask: 'Set up an Ubuntu virtual machine, disable root SSH password login, and configure UFW firewall rules.',
      isPrerequisite: true
    },
    {
      id: 'sec-owasp',
      name: 'Web Application Security (OWASP Top 10)',
      importance: 'Critical',
      description: 'SQL injection, Cross-Site Scripting (XSS), CSRF, Broken Object Level Auth (BOLA), and security headers.',
      practiceTask: 'Practice on Juice Shop or WebGoat to identify, exploit, and document fixes for 3 OWASP vulnerabilities.',
      isPrerequisite: false
    },
    {
      id: 'sec-siem-logs',
      name: 'Log Analysis & SIEM Monitoring',
      importance: 'High',
      description: 'Parsing syslog, Windows Event Viewer logs, Splunk searches, correlation rules, and identifying brute-force attempts.',
      practiceTask: 'Write Splunk queries to detect a simulated password spraying attack across 10,000 auth log lines.',
      isPrerequisite: false
    },
    {
      id: 'sec-vuln-assessment',
      name: 'Vulnerability Scanning & Assessment',
      importance: 'High',
      description: 'Using tools like Nmap, Nessus, or OpenVAS to map open ports, detect unpatched software, and score CVSS severity.',
      practiceTask: 'Run an Nmap port and service scan on an authorized local target VM and categorize all discovered vulnerabilities.',
      isPrerequisite: false
    },
    {
      id: 'sec-incident-response',
      name: 'Incident Response & Threat Hunting',
      importance: 'High',
      description: 'The PICERL framework (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned).',
      practiceTask: 'Draft a step-by-step incident response playbook for containing a compromised staff laptop in an organization.',
      isPrerequisite: false
    },
    {
      id: 'sec-cryptography',
      name: 'Applied Cryptography & PKI',
      importance: 'Medium',
      description: 'Symmetric vs asymmetric encryption (AES, RSA), hashing algorithms (SHA-256), SSL/TLS certificates, and keys.',
      practiceTask: 'Generate a private key and self-signed SSL certificate using OpenSSL and inspect its x509 metadata.',
      isPrerequisite: false
    },
    {
      id: 'sec-compliance',
      name: 'Security Frameworks & Governance',
      importance: 'Medium',
      description: 'NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover), ISO 27001, and SOC 2 audits.',
      practiceTask: 'Perform a gap analysis of a mock startup infrastructure against the 5 NIST CSF functions.',
      isPrerequisite: false
    }
  ],

  devops: [
    {
      id: 'do-linux-cli',
      name: 'Linux System Administration & Bash',
      importance: 'Critical',
      description: 'File management, cron jobs, process signals (kill, ps, top), piping, sed/awk, and automated bash scripts.',
      practiceTask: 'Write a Bash script that monitors disk usage, archives old logs to a backup folder, and logs alert warnings.',
      isPrerequisite: true
    },
    {
      id: 'do-git-branching',
      name: 'Git Workflows & Trunk-Based Development',
      importance: 'High',
      description: 'Semantic versioning, release tags, merge strategies, git hooks, and repository governance.',
      practiceTask: 'Configure a pre-commit git hook that automatically prevents committing sensitive API keys or large binaries.',
      isPrerequisite: true
    },
    {
      id: 'do-docker-containers',
      name: 'Docker & Containerization',
      importance: 'Critical',
      description: 'Creating lightweight Docker images, multi-stage builds, volume mounting, and container networking.',
      practiceTask: 'Create an optimized multi-stage Dockerfile for a React+Node app reducing image size by >60%.',
      isPrerequisite: true
    },
    {
      id: 'do-cicd-pipelines',
      name: 'CI/CD Pipelines (GitHub Actions)',
      importance: 'Critical',
      description: 'Workflow triggers, environment secrets, matrix builds, automated test execution, and deployment triggers.',
      practiceTask: 'Create a GitHub Actions workflow that runs test suites on every pull request and blocks merges on failure.',
      isPrerequisite: false
    },
    {
      id: 'do-cloud-compute',
      name: 'Cloud Infrastructure (AWS / GCP)',
      importance: 'High',
      description: 'Virtual machines (EC2/Compute Engine), object storage (S3), Virtual Private Clouds (VPC), and IAM roles.',
      practiceTask: 'Set up an AWS S3 bucket with least-privilege IAM policies, CORS configuration, and server-side encryption.',
      isPrerequisite: false
    },
    {
      id: 'do-iac-terraform',
      name: 'Infrastructure as Code (Terraform)',
      importance: 'High',
      description: 'Declarative configuration, state management, provider configuration, variables, modules, and plan/apply.',
      practiceTask: 'Write Terraform scripts to provision a complete cloud web server, security group, and elastic IP.',
      isPrerequisite: false
    },
    {
      id: 'do-observability',
      name: 'Monitoring, Telemetry & Alerts',
      importance: 'High',
      description: 'Metrics collection (Prometheus), dashboard visualization (Grafana), log aggregation, and alarm thresholds.',
      practiceTask: 'Configure Grafana dashboards tracking CPU, memory saturation, and 5xx error rates with Discord/Slack alert webhooks.',
      isPrerequisite: false
    },
    {
      id: 'do-k8s-basics',
      name: 'Kubernetes Cluster Concepts',
      importance: 'Medium',
      description: 'Pods, Deployments, Services, ConfigMaps, Secrets, Ingress controllers, and horizontal pod autoscaling.',
      practiceTask: 'Deploy a replicated 3-pod web application with a ClusterIP service and Ingress router on Minikube.',
      isPrerequisite: false
    }
  ],

  'qa-engineer': [
    {
      id: 'qa-methodologies',
      name: 'Testing Principles & SDLC Integration',
      importance: 'Critical',
      description: 'Test pyramids, functional vs non-functional testing, positive vs negative testing, and boundary value analysis.',
      practiceTask: 'Write 10 exhaustive test cases for a bank transfer form including negative amounts, overflows, and timeouts.',
      isPrerequisite: true
    },
    {
      id: 'qa-test-planning',
      name: 'Test Planning & Bug Reporting',
      importance: 'Critical',
      description: 'Documenting test plans, writing reproducible bug reports with steps, expected vs actual behavior, and severity.',
      practiceTask: 'Log a professional Jira-style bug ticket detailing a reproduction scenario with console traces and screenshots.',
      isPrerequisite: true
    },
    {
      id: 'qa-api-testing',
      name: 'API Testing with Postman & Newman',
      importance: 'Critical',
      description: 'Testing REST status codes, JSON schema validation, auth headers, and automating test runs via Newman CLI.',
      practiceTask: 'Create an automated Postman test suite validating status 200, response time <500ms, and payload contract schemas.',
      isPrerequisite: false
    },
    {
      id: 'qa-playwright-e2e',
      name: 'E2E Automation with Playwright / Cypress',
      importance: 'Critical',
      description: 'Writing robust browser automation scripts, locator strategies (role, text), async assertions, and headless execution.',
      practiceTask: 'Write a Playwright test script validating user login, item checkout, and order confirmation receipt generation.',
      isPrerequisite: false
    },
    {
      id: 'qa-performance-testing',
      name: 'Load & Performance Testing (k6 / JMeter)',
      importance: 'High',
      description: 'Simulating concurrent users, ramp-up curves, stress thresholds, and measuring p95 and p99 response percentiles.',
      practiceTask: 'Write a k6 script simulating 200 concurrent users hitting an API endpoint and measure throughput degrading points.',
      isPrerequisite: false
    },
    {
      id: 'qa-accessibility-testing',
      name: 'Automated & Manual Accessibility QA',
      importance: 'High',
      description: 'Automated Axe-core integration, tab order auditing, ARIA attribute validation, and color contrast inspection.',
      practiceTask: 'Integrate Axe-core into your Playwright test pipeline to fail builds if WCAG violations are detected.',
      isPrerequisite: false
    },
    {
      id: 'qa-cicd-test-runner',
      name: 'CI/CD Automated Test Pipeline',
      importance: 'High',
      description: 'Running headless test suites inside GitHub Actions or GitLab CI, publishing HTML test artifacts and failure alerts.',
      practiceTask: 'Configure a CI job that runs your test automation on push and uploads an HTML test report artifact.',
      isPrerequisite: false
    },
    {
      id: 'qa-cross-browser',
      name: 'Cross-Browser & Mobile Emulation Testing',
      importance: 'Medium',
      description: 'Testing across Chromium, WebKit (Safari), Firefox, and mobile viewport orientations.',
      practiceTask: 'Execute automated regression tests simultaneously across desktop Chrome, mobile Safari, and Firefox browsers.',
      isPrerequisite: false
    }
  ],

  'product-manager': [
    {
      id: 'pm-problem-discovery',
      name: 'Customer Discovery & Problem Definition',
      importance: 'Critical',
      description: 'Uncovering unarticulated user needs through non-leading interviews,Jobs-To-Be-Done (JTBD), and empathy mapping.',
      practiceTask: 'Conduct 4 JTBD interviews about college study habits and write 3 problem statements using the "How Might We" format.',
      isPrerequisite: true
    },
    {
      id: 'pm-prd-writing',
      name: 'Writing Product Requirement Documents (PRDs)',
      importance: 'Critical',
      description: 'Drafting clear scope, target personas, technical assumptions, user stories with acceptance criteria, and non-goals.',
      practiceTask: 'Write a comprehensive 2-page PRD for a collaborative campus roommate chore coordination feature.',
      isPrerequisite: true
    },
    {
      id: 'pm-metrics-okrs',
      name: 'Product Analytics & Success Metrics',
      importance: 'Critical',
      description: 'Defining North Star metrics, input vs output metrics, Pirate Metrics (AARRR), and quarterly OKRs.',
      practiceTask: 'Define North Star metric and 3 leading indicator metrics for a student job discovery platform.',
      isPrerequisite: true
    },
    {
      id: 'pm-prioritization',
      name: 'Feature Prioritization Frameworks',
      importance: 'High',
      description: 'Applying RICE (Reach, Impact, Confidence, Effort), MoSCoW, and Kano models to negotiate backlog trade-offs.',
      practiceTask: 'Score 12 competing product features in a spreadsheet using the RICE framework and present the ranked backlog.',
      isPrerequisite: false
    },
    {
      id: 'pm-agile-scrum',
      name: 'Agile, Scrum & Sprint Facilitation',
      importance: 'High',
      description: 'Sprint planning, grooming user stories, backlog refinement, standups, and retrospective facilitation.',
      practiceTask: 'Break down a major product initiative into 8 agile user stories with detailed Gherkin acceptance criteria.',
      isPrerequisite: false
    },
    {
      id: 'pm-ab-testing',
      name: 'Experimentation & A/B Testing Design',
      importance: 'High',
      description: 'Formulating testable hypotheses, determining sample sizes, statistical significance, and avoiding peeking bias.',
      practiceTask: 'Design an A/B test plan for an app onboarding flow calculating required sample size and success thresholds.',
      isPrerequisite: false
    },
    {
      id: 'pm-competitive-analysis',
      name: 'Market Research & Competitive Intelligence',
      importance: 'Medium',
      description: 'Feature matrix benchmarking, SWOT analysis, pricing models, and positioning strategy.',
      practiceTask: 'Build a competitive matrix comparing 4 direct competitors and identify an unserved market opportunity.',
      isPrerequisite: false
    },
    {
      id: 'pm-stakeholder-comm',
      name: 'Stakeholder Management & Roadmapping',
      importance: 'High',
      description: 'Aligning executive goals with engineering velocity, building outcome-based roadmaps (Now, Next, Later).',
      practiceTask: 'Create an outcome-oriented "Now / Next / Later" visual product roadmap and pitch it to mock stakeholders.',
      isPrerequisite: false
    }
  ],

  'it-support': [
    {
      id: 'it-os-admin',
      name: 'Operating Systems Administration',
      importance: 'Critical',
      description: 'Windows 10/11 enterprise settings, Registry editing, macOS system management, and Linux command line basics.',
      practiceTask: 'Set up an automated Windows provisioning script via PowerShell to configure display, privacy, and updates.',
      isPrerequisite: true
    },
    {
      id: 'it-networking-support',
      name: 'Networking Troubleshooting & Diagnostics',
      importance: 'Critical',
      description: 'Diagnosing IP conflicts, ping, traceroute, nslookup, DHCP lease renewals, Wi-Fi 6 channels, and VPN tunnels.',
      practiceTask: 'Troubleshoot and fix a simulated office subnet where workstations cannot reach the local default gateway.',
      isPrerequisite: true
    },
    {
      id: 'it-identity-access',
      name: 'Identity & Access Management (Active Directory)',
      importance: 'Critical',
      description: 'User onboarding, Group Policy Objects (GPOs), password resets, security groups, and Google Workspace admin.',
      practiceTask: 'Create an Active Directory test OU with specific password policies, shared folder permissions, and user groups.',
      isPrerequisite: false
    },
    {
      id: 'it-hardware-troubleshooting',
      name: 'Hardware Diagnostics & Peripherals',
      importance: 'High',
      description: 'Motherboard POST codes, RAM diagnostic tests, SSD SMART health status, display interfaces, and driver updates.',
      practiceTask: 'Run MemTest86 and CrystalDiskInfo on a machine to identify failing memory modules and drive wear.',
      isPrerequisite: false
    },
    {
      id: 'it-itsm-ticketing',
      name: 'ITIL Framework & Ticketing Systems',
      importance: 'High',
      description: 'Service level agreements (SLAs), ticket categorization, incident vs problem vs change management, and escalation.',
      practiceTask: 'Configure a free Jira Service Management queue with automated priority assignment and SLA response timers.',
      isPrerequisite: false
    },
    {
      id: 'it-remote-desktop',
      name: 'Remote Assistance & Endpoint Management',
      importance: 'High',
      description: 'Remote desktop protocols (RDP), TeamViewer/AnyDesk sessions, Mobile Device Management (MDM / Intune).',
      practiceTask: 'Configure a remote assistance session to push a software update silently to a target machine.',
      isPrerequisite: false
    },
    {
      id: 'it-backup-recovery',
      name: 'Data Backup & Disaster Recovery',
      importance: 'Medium',
      description: 'Implementing the 3-2-1 backup strategy, disk cloning with Clonezilla, volume shadow copies, and restore drills.',
      practiceTask: 'Perform a full system image backup and restore it to a clean drive verifying partition integrity.',
      isPrerequisite: false
    },
    {
      id: 'it-documentation',
      name: 'Technical Writing & Knowledge Base',
      importance: 'Medium',
      description: 'Writing step-by-step user guides, FAQ solutions for repetitive tickets, and IT operational runbooks.',
      practiceTask: 'Write a non-technical 1-page guide helping new employees set up hardware and authenticate with multi-factor auth.',
      isPrerequisite: false
    }
  ]
};

export const getSkillsForCareer = (careerId) => SKILL_CATALOG[careerId] || SKILL_CATALOG['frontend'];
