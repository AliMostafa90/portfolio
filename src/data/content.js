// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every piece of copy and data on the site.
// Edit here — no component needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ali Mostafa',
  roles: ['AI Engineer', 'AI Automation Engineer'],
  tagline:
    'I design and ship production AI systems — multi-agent platforms, LLM applications, RAG pipelines, and automation that replaces manual operations end to end.',
  location: 'Cairo, Egypt',
  email: 'alimu7420@gmail.com',
  phone: '+20 1016182803',
  phoneHref: 'tel:+201016182803',
  photo: '/ali.jpeg',
  cv: '/Ali_Mostafa_CV.pdf',
  github: 'https://github.com',        // TODO: replace with your real GitHub profile URL
  linkedin: 'https://www.linkedin.com/in/ali-mostafa-4023bb252/?locale=en',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '10+', label: 'Systems shipped' },
  { value: '2', label: 'Engineering internships' },
  { value: '6', label: 'Featured projects' },
  { value: '2027', label: 'B.Sc. Computer Eng.' },
];

// Nodes rendered in the animated hero diagram.
export const heroNodes = [
  { id: 'llm', label: 'LLM', x: 50, y: 14, tone: 'primary' },
  { id: 'agt', label: 'Agents', x: 81.2, y: 32, tone: 'secondary' },
  { id: 'mcp', label: 'MCP', x: 81.2, y: 68, tone: 'accent' },
  { id: 'api', label: 'APIs', x: 50, y: 86, tone: 'primary' },
  { id: 'cld', label: 'Cloud', x: 18.8, y: 68, tone: 'secondary' },
  { id: 'auto', label: 'Automation', x: 18.8, y: 32, tone: 'accent' },
];

export const about = {
  heading: 'Engineering AI that runs in production, not in notebooks',
  body: [
    'I build the layer between large language models and real business operations: agent orchestration, retrieval pipelines, tool and API integration, and the automation that ties them together.',
    'My work spans multi-agent research systems, RAG platforms over private document sets, fine-tuned dialect models, and n8n automation that removed the majority of manual steps from live business workflows.',
    'I am a Computer Engineering student at Modern Academy for Engineering and Technology, graduating in 2027, and I have shipped AI systems in two engineering internships alongside my degree.',
  ],
  highlights: [
    'Multi-agent orchestration and tool routing',
    'Retrieval-augmented generation over private data',
    'LLM fine-tuning and evaluation',
    'Workflow automation and API integration',
  ],
};

// ── Tech stack ───────────────────────────────────────────────────────────────
// These are the technologies evidenced by your CV, skills list, and projects.
// To add more (FastAPI, Docker, PostgreSQL, TypeScript, CrewAI, …), append to
// the relevant group — but only add what you can speak to in an interview.
export const techStack = [
  {
    group: 'AI & LLM',
    items: ['OpenAI APIs', 'LangChain', 'LangGraph', 'LangSmith', 'Hugging Face', 'Ollama', 'RAG', 'Prompt Engineering', 'Fine-tuning'],
  },
  {
    group: 'Machine Learning',
    items: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Predictive Modelling'],
  },
  {
    group: 'Automation & Integration',
    items: ['n8n', 'REST APIs', 'Web Scraping', 'Workflow Automation', 'Webhooks'],
  },
  {
    group: 'Data & Visualisation',
    items: ['SQL', 'Vector Databases', 'Plotly', 'Matplotlib', 'Seaborn', 'Power BI'],
  },
  {
    group: 'Platform & Tooling',
    items: ['Git & GitHub', 'Streamlit', 'React', 'Jupyter', 'Google Colab'],
  },
];

export const projects = [
  {
    title: 'AI Resume Optimizer',
    category: 'LLM Product',
    desc: 'AI recruitment platform with ATS resume analysis, resume building, cover letter generation, interview prep, and a career assistant.',
    tech: ['Python', 'LLMs', 'LangChain', 'RAG', 'React'],
    github: '#',
    demo: '#',
    image: '/ai-resume-cover.png',
    bullets: [
      'Developed a full-stack AI-powered recruitment platform to enhance resumes and career preparation.',
      'Built ATS Resume Analyzer, Smart Resume Builder, Cover Letter Generator, Interview Preparation, and Career Advice Assistant.',
      'Implemented modular AI services for resume analysis, skill extraction, and job description matching.',
      'Improved user experience through optimized workflows and interactive UI components.',
    ],
  },
  {
    title: 'Vitality RAG',
    category: 'Retrieval System',
    desc: 'Retrieval-augmented generation system combining vector search with contextual LLM responses for scalable, grounded answers.',
    tech: ['RAG', 'LangChain', 'Vector DB', 'LLMs'],
    github: '#',
    demo: '#',
    image: '/ragph.png',
    bullets: [
      'Built a Retrieval-Augmented Generation system using vector databases for fast semantic search.',
      'Combined custom context retrieval with state-of-the-art LLMs to produce accurate, context-aware responses.',
      'Optimized document chunking, embedding generation, and query retrieval latency by 40%.',
      'Designed a frontend interface for real-time document interaction.',
    ],
  },
  {
    title: 'Research Agents',
    category: 'Multi-Agent System',
    desc: 'Multi-agent research platform that plans queries, searches across sources, adversarially verifies claims, and synthesizes cited reports.',
    tech: ['LangGraph', 'Multi-Agent', 'LLMs', 'Web Search', 'Python'],
    github: '#',
    demo: '#',
    image: '/research-agents.svg',
    bullets: [
      'Designed a multi-agent pipeline where planner, searcher, and synthesizer agents collaborate on open-ended research questions.',
      'Implemented parallel source retrieval and deduplication to broaden coverage while cutting redundant lookups.',
      'Added an adversarial verification step where agents cross-check each claim against retrieved sources before it reaches the report.',
      'Generated structured, fully cited reports with traceable source links for every finding.',
    ],
  },
  {
    title: 'AI Automation Workflows',
    category: 'Automation',
    desc: 'Intelligent automation workflows integrating APIs, AI agents, and RAG systems to remove manual steps from business processes.',
    tech: ['n8n', 'OpenAI APIs', 'Automation', 'AI Agents'],
    github: '#',
    demo: '#',
    image: '/automation.png',
    bullets: [
      'Built intelligent automation workflows integrating APIs, AI agents, and RAG systems using n8n.',
      'Automated complex business workflows, reducing manual operations by over 80%.',
      'Created smart multi-agent decision routing based on user input and API feedback.',
      'Integrated webhook handlers and messaging channels like Slack and Discord for real-time notifications.',
    ],
  },
  {
    title: 'Egyptian Arabic Assistant',
    category: 'Fine-tuned Model',
    desc: 'Fine-tuned Egyptian Arabic assistant built for dialect-aware conversation, local expressions, and cultural context.',
    tech: ['Fine-tuning', 'Egyptian Arabic', 'LLMs', 'Conversational AI'],
    github: '#',
    demo: '#',
    image: '/egpine.png',
    bullets: [
      'Fine-tuned a language model on Egyptian Arabic dialogue and colloquial expressions.',
      'Built a conversational assistant that understands local dialect, slang, and cultural context.',
      'Optimized prompts and dataset quality for more natural, relevant responses.',
      'Integrated the assistant into a clean UI for testing and demonstration.',
    ],
  },
  {
    title: 'Weather Prediction App',
    category: 'Machine Learning',
    desc: 'ML web app for rain prediction and next-day temperature forecasting from historical weather data and live APIs.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly'],
    github: '#',
    demo: '#',
    image: '/wethphoto.png',
    bullets: [
      'Developed a web app predicting next-day rain and temperature from historical weather data.',
      'Integrated the OpenWeatherMap API to fetch real-time weather data for any city.',
      'Implemented RandomForestClassifier for rain prediction and RandomForestRegressor for temperature forecasting.',
      'Created interactive Plotly dashboards for temperature, humidity, pressure, and rain distribution.',
      'Deployed with Streamlit, enabling dynamic city selection and weather insights.',
    ],
  },
];

// ── Timeline ─────────────────────────────────────────────────────────────────
export const timeline = [
  {
    kind: 'work',
    org: 'Evunity',
    role: 'AI Engineer',
    period: '2025 – Present',
    points: [
      'Developed automation solutions that streamlined repetitive operational tasks.',
      'Built RAG systems for intelligent, data-grounded responses.',
      'Integrated APIs and AI workflows for business process optimization.',
    ],
  },
  {
    kind: 'work',
    org: 'AMIT',
    role: 'Machine Learning & Deep Learning Intern',
    period: '2025',
    points: [
      'Applied machine learning and deep learning techniques to real-world datasets.',
      'Cleaned and analyzed data using Python, Pandas, and NumPy.',
      'Built predictive models, neural network architectures, and supporting visualizations.',
    ],
  },
  {
    kind: 'education',
    org: 'Modern Academy for Engineering and Technology',
    role: 'B.Sc. Computer Engineering',
    period: 'Expected 2027',
    points: [
      'Advanced computing systems, software engineering, and machine learning methodology.',
      'Data structures, algorithms, and microprocessors.',
      'Generative AI integration coursework and independent research.',
    ],
  },
];

export const certifications = [
  { title: 'Associate Data Scientist in Python', issuer: 'DataCamp' },
  { title: 'Data Analysis in Python', issuer: 'DataCamp' },
  { title: 'Machine Learning Course', issuer: 'Personal Learning' },
  { title: 'SQL Bootcamp: MySQL Beginner to Advanced', issuer: 'Udemy' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Proficient' },
];

export const softSkills = [
  'Problem Solving',
  'Time Management',
  'Fast Learning',
  'Team Collaboration',
  'Technical Writing',
];
