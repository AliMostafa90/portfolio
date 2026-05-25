import React, { useEffect, useState } from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'AI Resume Optimizer',
      desc:
        'AI-powered recruitment platform featuring ATS Resume Analyzer, Resume Builder, Cover Letter Generator, Interview Preparation, and Career Assistant tools.',
      tech: ['Python', 'LLMs', 'LangChain', 'RAG', 'React'],
      github: '#',
      demo: '#',
      image: '/ai-resume-cover.png',
      bullets: [
        'Developed a full-stack AI-powered recruitment platform to enhance resumes and career preparation.',
        'Built intelligent tools including ATS Resume Analyzer, Smart Resume Builder, Cover Letter Generator, Interview Preparation, and Career Advice Assistant.',
        'Implemented modular AI services for resume analysis, skill extraction, and job description matching.',
        'Improved user experience through optimized workflows and interactive UI components.'
      ]
    },
    {
      title: 'RAG Project',
      desc:
        'Retrieval-augmented generation system that combines vector search with contextual LLM responses for smarter, scalable AI workflows.',
      tech: ['RAG', 'LangChain', 'Vector DB', 'LLMs'],
      github: '#',
      demo: '#',
      image: '/ragph.png',
      bullets: [
        'Built a robust Retrieval-Augmented Generation system using Vector Databases for fast, semantic information search.',
        'Combined custom context retrieval with state-of-the-art LLMs to produce accurate, context-aware responses.',
        'Optimized document chunking, embedding generation, and query retrieval latency by 40%.',
        'Designed a user-friendly frontend interface for seamless real-time document interaction.'
      ]
    },
    {
      title: 'Egyptian Arabic Assistant',
      desc:
        'Fine-tuned Egyptian Arabic assistant designed for dialect-aware conversations, local expressions, and contextual responses.',
      tech: ['Fine-tuning', 'Egyptian Arabic', 'LLMs', 'Conversational AI'],
      github: '#',
      demo: '#',
      image: '/egpine.png',
      bullets: [
        'Fine-tuned a language model on Egyptian Arabic dialogue and colloquial expressions.',
        'Built a conversational assistant that understands local dialect, slang, and cultural context.',
        'Optimized prompts and dataset quality for more natural, relevant responses.',
        'Integrated the assistant into a clean UI for testing and demonstration.'
      ]
    },
    {
      title: 'Weather Prediction App',
      desc:
        'Machine learning web app for rain prediction and next-day temperature forecasting using historical weather data and real-time APIs.',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly'],
      github: '#',
      demo: '#',
      image: '/wethphoto.png',
      bullets: [
        'Developed a web app that predicts rain for tomorrow and next-day temperature using historical weather data and machine learning models.',
        'Integrated OpenWeatherMap API to fetch real-time weather data for any city.',
        'Implemented RandomForestClassifier for rain prediction and RandomForestRegressor for temperature forecasting.',
        'Created interactive dashboards with Plotly to visualize temperature trends, humidity, pressure, and rain distribution.',
        'Deployed the app with Streamlit, enabling user-friendly input for city selection and dynamic weather insights.'
      ]
    },
    {
      title: 'AI Automation Workflows',
      desc:
        'Built intelligent automation workflows integrating APIs, AI agents, and RAG systems to automate business processes.',
      tech: ['n8n', 'OpenAI APIs', 'Automation', 'AI Agents'],
      github: '#',
      demo: '#',
      image: '/automation.png',
      bullets: [
        'Built intelligent automation workflows integrating APIs, AI agents, and RAG systems using n8n.',
        'Automated complex business workflows, reducing manual operations by over 80%.',
        'Created smart multi-agent decision routing based on user input and API feedback.',
        'Integrated webhook handlers and messaging channels like Slack and Discord for real-time notifications.'
      ]
    },
  ];

  const skills = {
    'Generative AI': [
      'Large Language Models (LLMs)',
      'RAG Systems',
      'Prompt Engineering',
      'AI Agents',
      'Semantic Search',
      'Text Generation',
      'Image Generation',
      'Open-Source LLMs',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'Hugging Face',
      'Ollama',
    ],

    'Machine Learning': [
      'Scikit-learn',
      'Machine Learning Models',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Training',
      'Predictive Analytics',
      'Data Analysis',
      'Pandas',
      'NumPy',
    ],

    'AI Automation': [
      'n8n',
      'Workflow Automation',
      'API Integration',
      'Web Scraping',
      'AI Automation',
      'Business Process Automation',
      'Automation Pipelines',
    ],

    'Data Visualization': [
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Power BI',
      'Interactive Dashboards',
    ],

    'Programming & Tools': [
      'Python',
      'SQL',
      'Git & GitHub',
      'Jupyter Notebook',
      'Google Colab',
      'Streamlit',
      'REST APIs',
    ],
  };

  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const onScroll = () => {
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
      // Check if at the absolute bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        current = 'contact';
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth relative">
      {/* Navbar */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center h-20">
            <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 text-[12px] sm:text-[14px] md:text-base font-semibold">
              <a
                href="#home"
                onClick={() => setActiveSection('home')}
                className={`relative group transition ${activeSection === 'home' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                Home
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>

              <a
                href="#about"
                onClick={() => setActiveSection('about')}
                className={`relative group transition ${activeSection === 'about' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                About
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>

              <a
                href="#skills"
                onClick={() => setActiveSection('skills')}
                className={`relative group transition ${activeSection === 'skills' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                Skills
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'skills' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>

              <a
                href="#projects"
                onClick={() => setActiveSection('projects')}
                className={`relative group transition ${activeSection === 'projects' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                Projects
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>

              <a
                href="#experience"
                onClick={() => setActiveSection('experience')}
                className={`relative group transition ${activeSection === 'experience' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                Experience
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'experience' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>

              <a
                href="#education"
                onClick={() => setActiveSection('education')}
                className={`relative group transition ${activeSection === 'education' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                Education
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'education' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>

              <a
                href="#contact"
                onClick={() => setActiveSection('contact')}
                className={`relative group transition ${activeSection === 'contact' ? 'text-violet-400' : 'text-zinc-300 hover:text-violet-400'}`}>
                Contact
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden border-b border-white/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-black to-cyan-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 pt-0 lg:pt-0 pb-28 lg:pb-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-4">
                AI Engineer Portfolio
              </div>

              <img
                src="/myphh.jpeg"
                alt="Ali Mostafa"
                className="mx-auto mb-6 h-64 w-64 md:h-80 md:w-80 rounded-full object-cover border-4 border-violet-500/30 shadow-2xl"
              />

              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
                Ali Mostafa
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold text-zinc-300 mb-6">
                Generative AI Engineer | Machine Learning Engineer | Data Scientist
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-10">
                Computer Engineering student specializing in building AI-powered products, RAG systems,
                intelligent automation workflows, and predictive machine learning models.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ali-mostafa-4023bb252/?locale=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="/Ali_Mostafa_CV.pdf"
                  download="Ali_Mostafa_CV.pdf"
                  className="rounded-2xl border border-violet-500/40 bg-violet-500/10 px-6 py-3 font-semibold text-violet-300 hover:bg-violet-500/20 transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-[40px] blur-3xl opacity-20" />

              <div className="relative rounded-[32px] border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-3xl bg-zinc-800/60 p-6">
                    <h3 className="text-4xl font-black text-violet-400 mb-2">10+</h3>
                    <p className="text-zinc-400">AI Projects</p>
                  </div>

                  <div className="rounded-3xl bg-zinc-800/60 p-6">
                    <h3 className="text-4xl font-black text-cyan-400 mb-2">RAG</h3>
                    <p className="text-zinc-400">AI Systems</p>
                  </div>

                  <div className="rounded-3xl bg-zinc-800/60 p-6">
                    <h3 className="text-4xl font-black text-pink-400 mb-2">LLMs</h3>
                    <p className="text-zinc-400">AI Agents</p>
                  </div>

                  <div className="rounded-3xl bg-zinc-800/60 p-6">
                    <h3 className="text-4xl font-black text-green-400 mb-2">ML</h3>
                    <p className="text-zinc-400">Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-24">
        <div className="rounded-[40px] border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-10 lg:p-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
              About Me
            </div>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Passionate About Building AI-Powered Solutions
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed mb-8">
              Computer Engineering student focused on Generative AI, Machine Learning,
              AI Automation, and intelligent systems that solve real-world problems.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Experienced in developing AI-powered applications, RAG systems,
              automation workflows, AI agents, and scalable machine learning solutions
              using Python, LangChain, modern LLM frameworks, and automation tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4">
                <h3 className="text-3xl font-black text-violet-400">10+</h3>
                <p className="text-zinc-400 mt-1">Projects Built</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4">
                <h3 className="text-3xl font-black text-cyan-400">2</h3>
                <p className="text-zinc-400 mt-1">Internships</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4">
                <h3 className="text-3xl font-black text-pink-400">AI</h3>
                <p className="text-zinc-400 mt-1">Automation Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
              Technical Skills
            </div>

            <h2 className="text-5xl font-black mb-4">Skills & Technologies</h2>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Technologies, frameworks, and tools I use to build AI-powered systems,
              automation workflows, and scalable machine learning applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-[32px] border border-white/10 bg-zinc-900 p-8 hover:border-violet-500/30 transition"
              >
                <h3 className="text-2xl font-bold mb-6 text-violet-300">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-zinc-300 hover:border-violet-500/30 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
              Featured Work
            </div>
            <h2 className="text-5xl font-black mb-4">Featured Projects</h2>
            <p className="text-zinc-400 text-lg">
              Real-world AI products, ML applications, and automation systems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card__header">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-card__image" />
                  ) : (
                    <div className="project-card__placeholder">AI</div>
                  )}
                </div>

                <div className="project-card__body">
                  <h3>{project.title}</h3>

                  <p>{project.desc}</p>

                  <div className="project-card__tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    <a href={project.github}>GitHub</a>
                    <a href={project.demo}>Live Demo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 p-8 shadow-2xl animate-scaleUp">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 rounded-full bg-violet-600/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 -ml-20 -mb-20 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-white/5 border border-white/10 p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {selectedProject.image && (
                <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 h-48 bg-zinc-900">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                {selectedProject.desc}
              </p>

              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-zinc-500 font-bold mb-3">Key Highlights & Work Done</h4>
                <ul className="space-y-2 text-zinc-400">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-zinc-500 font-bold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 text-sm text-violet-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  className="flex-1 text-center rounded-2xl border border-white/10 py-3.5 hover:bg-white/10 transition font-semibold"
                >
                  View Code on GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  className="flex-1 text-center rounded-2xl bg-violet-600 py-3.5 hover:bg-violet-500 transition font-semibold"
                >
                  Launch Live App / Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14 text-center md:text-left">
          <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
            Career Pathway
          </div>
          <h2 className="text-5xl font-black mb-4">Experience</h2>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">
              <div>
                <h3 className="text-2xl font-bold">Evunity</h3>
                <p className="text-violet-300 mt-2">
                  AI Automation Intern / Junior AI Automation Engineer
                </p>
              </div>

              <span className="text-zinc-500 mt-3 lg:mt-0">2025</span>
            </div>

            <ul className="space-y-3 text-zinc-400">
              <li>• Developed automation solutions to streamline repetitive tasks.</li>
              <li>• Built RAG systems for intelligent data-driven responses.</li>
              <li>• Integrated APIs and AI workflows for business optimization.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">
              <div>
                <h3 className="text-2xl font-bold">AMIT</h3>
                <p className="text-cyan-300 mt-2">Machine Learning Intern</p>
              </div>

              <span className="text-zinc-500 mt-3 lg:mt-0">2025</span>
            </div>

            <ul className="space-y-3 text-zinc-400">
              <li>• Applied machine learning techniques on real datasets.</li>
              <li>• Cleaned and analyzed data using Python & Pandas.</li>
              <li>• Built predictive models and visualizations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section id="education" className="scroll-mt-24 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
              Academic & Certifications
            </div>
            <h2 className="text-5xl font-black mb-4">Education & Credentials</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              My formal academic background, verified industry certifications, and key competencies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Education & Languages */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-black mb-6 text-white flex items-center gap-3">
                  <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7"></path>
                  </svg>
                  Education
                </h3>

                <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-8 relative overflow-hidden group hover:border-violet-500/30 transition duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white">Modern Academy for Engineering and Technology</h4>
                      <p className="text-violet-400 font-semibold mt-1">Bachelor of Computer Engineering</p>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-zinc-400 mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Expected Graduation: 2027
                  </div>

                  <p className="text-zinc-400 leading-relaxed">
                    Focusing on advanced computing systems, generative AI integrations, software engineering principles,
                    machine learning methodologies, data structures, algorithms, and microprocessors.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-6 text-white flex items-center gap-3">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.5M14 22c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                  Languages
                </h3>

                <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-8 grid grid-cols-2 gap-4 hover:border-cyan-500/30 transition duration-300">
                  <div className="rounded-2xl bg-black/35 p-5 border border-white/5 text-center">
                    <span className="text-sm text-zinc-500 block uppercase tracking-wider font-bold mb-1">Arabic</span>
                    <span className="text-xl font-bold text-cyan-400">Native</span>
                  </div>
                  <div className="rounded-2xl bg-black/35 p-5 border border-white/5 text-center">
                    <span className="text-sm text-zinc-500 block uppercase tracking-wider font-bold mb-1">English</span>
                    <span className="text-xl font-bold text-violet-400">Proficient</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Certifications & Soft Skills */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-black mb-6 text-white flex items-center gap-3">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Certifications
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Associate Data Scientist in Python", issuer: "DataCamp" },
                    { title: "Data Analysis in Python", issuer: "DataCamp" },
                    { title: "Machine Learning Course", issuer: "Personal Learning" },
                    { title: "SQL Bootcamp: MySQL Beginner to Advanced", issuer: "Udemy" }
                  ].map((cert, index) => (
                    <div key={index} className="rounded-3xl border border-white/10 bg-zinc-900 p-6 relative overflow-hidden group hover:border-violet-400/40 transition duration-300">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-2xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-zinc-500 group-hover:text-violet-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h4 className="text-base font-bold text-white pr-4 group-hover:text-violet-300 transition leading-snug">{cert.title}</h4>
                      <p className="text-zinc-500 text-xs mt-3 font-semibold uppercase tracking-wider">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-6 text-white flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Soft Skills
                </h3>

                <div className="rounded-[32px] border border-white/10 bg-zinc-900 p-8 hover:border-green-500/30 transition duration-300">
                  <div className="flex flex-wrap gap-3">
                    {["Problem Solving", "Time Management", "Fast Learning", "Team Collaboration", "Technical Writing"].map((skill) => (
                      <span key={skill} className="rounded-full bg-green-500/10 border border-green-500/20 px-5 py-3 text-sm text-green-300 font-semibold shadow-inner">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-black mb-6">Let’s Build AI Products</h2>

          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Open to AI internships, freelance opportunities, collaborations,
            and innovative AI projects.
          </p>

          {/* Detailed contact cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-14 text-left">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 flex items-center gap-4 hover:border-violet-500/30 transition duration-300">
              <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <span className="text-zinc-500 text-xs block uppercase font-bold tracking-wider">Email Me</span>
                <a href="mailto:alimu7420@gmail.com" className="text-white hover:text-violet-400 transition font-medium">alimu7420@gmail.com</a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 flex items-center gap-4 hover:border-cyan-500/30 transition duration-300">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.996.808H12a1 1 0 01.8.4l2.5 2.5a1 1 0 01.4.8v1.6a1 1 0 01-.8.996l-2.2.548a1 1 0 00-.808.996V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
              </div>
              <div>
                <span className="text-zinc-500 text-xs block uppercase font-bold tracking-wider">Call Me</span>
                <a href="tel:+201016182803" className="text-white hover:text-cyan-400 transition font-medium">+20 1016182803</a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 flex items-center gap-4 hover:border-pink-500/30 transition duration-300">
              <div className="rounded-xl bg-pink-500/10 p-3 text-pink-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <span className="text-zinc-500 text-xs block uppercase font-bold tracking-wider">Location</span>
                <span className="text-white font-medium">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:alimu7420@gmail.com"
              className="rounded-2xl bg-white text-black px-7 py-4 font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/ali-mostafa-4023bb252/?locale=en"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 px-7 py-4 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

