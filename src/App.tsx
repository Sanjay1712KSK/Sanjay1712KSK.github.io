import { useEffect, useState } from 'react';
import './App.css';
import JARVISDisplay from './components/JARVISDisplay';
import GithubDiagnostics from './components/GithubDiagnostics';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'media' | 'resume' | 'blog' | 'github'>('home');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    // General scroll observer for fade-ups
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Specific observer for typewriter effect only when scrolled securely into view
    const twObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('typewriter-animate');
        }
      });
    };
    const twObserver = new IntersectionObserver(twObserverCallback, { threshold: 0.5 });
    const twElements = document.querySelectorAll('.typewriter');
    twElements.forEach(el => twObserver.observe(el));

    // Parallax effect for Deep Space Background
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stars1 = document.querySelector('.stars') as HTMLElement;
      const stars2 = document.querySelector('.stars2') as HTMLElement;
      const stars3 = document.querySelector('.stars3') as HTMLElement;
      const galaxy = document.querySelector('.distant-galaxy') as HTMLElement;

      if (stars1) stars1.style.transform = `translateY(${scrollY * -0.1}px)`;
      if (stars2) stars2.style.transform = `translateY(${scrollY * -0.2}px)`;
      if (stars3) stars3.style.transform = `translateY(${scrollY * -0.3}px)`;
      if (galaxy) galaxy.style.transform = `translateY(${scrollY * -0.05}px) rotate(-15deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      twObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab, selectedArticle]);

  const education = {
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "SRM University, KTR, Chennai",
    duration: "2023 – 2027",
    cgpa: "9.46",
    location: "Chennai, India"
  };

  const experience = [
    {
      role: "IT & Systems Support Engineer",
      company: "MEDBE Pharma and Healthcare",
      location: "Cochin, India | Partial Remote",
      date: "June 2025 – August 2026",
      points: [
        "Manage Linux-based IT infrastructure and technical operations for internal organizational systems.",
        "Support RBAC-based Linux environments used in billing, cash management, and operational workflows.",
        "Handle software deployment, system configuration, troubleshooting, and technical support for day-to-day business operations.",
        "Contribute to the development, deployment, and maintenance of medbe.in, the official web presence platform for MedBe Pharmacy."
      ]
    },
    {
      role: "Undergraduate Researcher – SRM UROP Program",
      company: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      date: "November 2025 – Present",
      points: [
        "Develop reinforcement learning policies for autonomous drone navigation using Unreal Engine 5 and Cosys AirSim.",
        "Design reward functions, state representations, and evaluation metrics for simulated navigation tasks.",
        "Optimize simulation runtime performance and environment interaction pipelines.",
        "Conduct experiments on high-fidelity simulation environments for autonomous systems research."
      ]
    }
  ];

  const projects = [
    {
      title: "Frame Generator",
      category: "Computer Vision • GPU Systems • Annotation",
      desc: "Built a high-throughput TrackNet dataset workstation with CUDA/NVDEC extraction, dynamic resource profiling, fault-tolerant resume, persistent jobs, and 1,770+ FPS processing. Developed a 5-state annotation workspace with motion-blur handling, CSV synchronization, range inspection, dataset telemetry, and SAM 2.1 + Docker integration for semi-automatic tracking.",
      techStack: "Python / PySide6 / CUDA (NVDEC) / SAM 2.1 / Docker / FFmpeg / PyInstaller",
      tags: ["Computer Vision", "CUDA / NVDEC", "SAM 2.1", "PySide6", "Docker", "FFmpeg"],
      links: [
        { label: "View on GitHub", url: "https://github.com/Sanjay1712KSK" }
      ]
    },
    {
      title: "Aero-Controllers",
      category: "Reinforcement Learning • Robotics",
      desc: "Developed an RL-based autonomous drone stabilization framework using high-fidelity Unreal Engine simulation, with custom reward functions, state representations, and PPO control policies for GPS-denied environments. Built an interactive research documentation platform covering the simulation, training, and evaluation workflow.",
      techStack: "Unreal Engine 5.5 / Cosys-AirSim / PPO (Stable-Baselines3) / Next.js / React / Three.js",
      tags: ["Reinforcement Learning", "Unreal Engine 5.5", "Cosys-AirSim", "PPO (Stable-Baselines3)", "Three.js"],
      links: [
        { label: "View on GitHub", url: "https://github.com/Sanjay1712KSK/Aero-Controllers" },
        { label: "Live Demo", url: "https://sanjay1712ksk.github.io/Aero-Controllers/", primary: true }
      ]
    },
    {
      title: "LLLMao",
      category: "Local AI • Systems • DevOps",
      desc: "Developing a privacy-first local AI workstation combining local LLM inference, RAG, document ingestion, vector search, FastAPI services, and a Tauri desktop interface. Supports Linux-focused deployment with containerized/local services and Ubuntu Snap packaging.",
      techStack: "React / TypeScript / FastAPI / ChromaDB / Tauri (Rust) / Ollama / SQLite",
      tags: ["Local AI", "FastAPI", "ChromaDB", "Tauri (Rust)", "Ollama", "RAG", "SQLite"],
      links: [
        { label: "View on GitHub", url: "https://github.com/Sanjay1712KSK/LLLMao" }
      ]
    },
    {
      title: "Cattle-Go",
      category: "Computer Vision • Deep Learning",
      desc: "Built an AI livestock breed classification system for Indian cattle using MobileNetV2, with real-time detection, multilingual support, and an Ollama-powered RAG assistant.",
      techStack: "Flutter / FastAPI / TensorFlow-Keras (MobileNetV2) / Firebase / Hugging Face Spaces / Ollama",
      tags: ["Computer Vision", "MobileNetV2", "Flutter", "FastAPI", "Firebase", "Ollama"],
      links: [
        { label: "View on GitHub", url: "https://github.com/Sanjay1712KSK/Cattle-Go" },
        { label: "Live Demo", url: "https://sanjay1712ksk.github.io/Cattle-Go/", primary: true }
      ]
    },
    {
      title: "GigShield (CampTech)",
      category: "Full-Stack • AI/ML",
      desc: "Developed an AI-powered parametric insurance platform using live weather, traffic, and AQI data for dynamic risk assessment, automated claims processing, and fraud detection.",
      techStack: "Flutter / FastAPI / SQLAlchemy / JWT / SQLite / Open-Meteo / OpenWeather AQI / OpenRouteService",
      tags: ["AI / ML", "FastAPI", "Flutter", "SQLAlchemy", "Parametric Insurance", "Open-Meteo"],
      links: [
        { label: "View on GitHub", url: "https://github.com/Sanjay1712KSK/CampTech" }
      ]
    }
  ];

  const technicalSkills = [
    {
      category: "Programming",
      items: "Python, Dart, C, C++, Java, TypeScript"
    },
    {
      category: "Frameworks & Tools",
      items: "React, Vite, Flutter, FastAPI, Linux, Git, Unreal Engine 5, Cosys AirSim, Isaac Sim"
    },
    {
      category: "Systems & Infrastructure",
      items: "Linux System Administration, Performance Optimization, Kernel Fundamentals, UNIX, RBAC Systems"
    },
    {
      category: "AI / ML Specialization",
      items: "Machine Learning, Deep Learning, Reinforcement Learning, Computer Vision"
    }
  ];

  const achievements = [
    {
      title: "SRM SDG Hackathon – 3rd Place",
      organizer: "Organized by SRMIST",
      location: "Chennai",
      date: "Nov 2024"
    },
    {
      title: "NLH AI x Legal Hackathon – 2nd Place",
      organizer: "Madras Institute of Technology (Anna University)",
      location: "Chennai",
      date: "Aug 2025"
    }
  ];

  const certifications = [
    {
      title: "SAP Certified – Generative AI Developer",
      issuer: "SAP",
      date: "2026"
    },
    {
      title: "Course on Python",
      issuer: "LIVEWIRE",
      date: "Sept 2023"
    },
    {
      title: "Course on Java",
      issuer: "LIVEWIRE",
      date: "Aug 2024"
    },
    {
      title: "Linux Programming",
      issuer: "SRMIST",
      date: "Aug 2024"
    }
  ];

  const languages = [
    "English",
    "Tamil",
    "Hindi (Read & Write)",
    "Telugu (Elementary Proficiency)"
  ];

  const interests = [
    "Systems Engineering",
    "Linux Infrastructure",
    "Autonomous Systems",
    "Kernel Development",
    "Performance Optimization",
    "Local AI Systems",
    "Computer Vision"
  ];

  const blogs = [
    {
      id: 1,
      title: "Configuring CUDA Toolkit on Ubuntu 22.04 (Jammy Jellyfish) for Deep Learning",
      category: "Systems / GPU / Deep Learning",
      date: "February 2026",
      summary: "Setting up CUDA on Ubuntu 22.04 (Jammy Jellyfish) is not as straightforward as it seems. While official documentation exists, version mismatches between NVIDIA drivers, CUDA Toolkit, cuDNN, and deep learning frameworks can easily break GPU acceleration.",
      content: (
        <>
          <h3 className="blog-subtitle">Introduction</h3>
          <p className="blog-paragraph text-muted">Setting up CUDA on Ubuntu 22.04 (Jammy Jellyfish) is not as straightforward as it seems. While official documentation exists, version mismatches between NVIDIA drivers, CUDA Toolkit, cuDNN, and deep learning frameworks can easily break GPU acceleration.</p>
          <p className="blog-paragraph text-muted">This article documents the complete setup process and the key issues I encountered while configuring CUDA for deep learning workloads.</p>

          <h3 className="blog-subtitle">System Overview</h3>
          <ul className="blog-list text-muted">
            <li><strong>OS:</strong> Ubuntu 22.04 LTS (Jammy Jellyfish)</li>
            <li><strong>GPU:</strong> NVIDIA GPU</li>
            <li><strong>Use Case:</strong> PyTorch-based deep learning models</li>
          </ul>

          <h3 className="blog-subtitle">Step 1: Installing NVIDIA Drivers</h3>
          <p className="blog-paragraph text-muted">First, verify GPU detection:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>lspci | grep -i nvidia</code></pre>
          <p className="blog-paragraph text-muted">Then install recommended drivers:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>sudo ubuntu-drivers autoinstall</code></pre>
          <p className="blog-paragraph text-muted">Reboot and confirm:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>nvidia-smi</code></pre>
          <p className="blog-paragraph text-muted"><strong>Issue Faced:</strong> After a kernel update, the driver module failed to load.</p>
          <p className="blog-paragraph text-muted"><strong>Resolution:</strong> Reinstalled drivers and ensured correct DKMS module build before rebooting.</p>

          <h3 className="blog-subtitle">Step 2: Installing CUDA Toolkit</h3>
          <ul className="blog-list text-muted">
            <li>Downloaded compatible CUDA version from NVIDIA’s official archive (important to match driver version).</li>
            <li>Installed via local deb installer instead of apt repository to avoid dependency conflicts.</li>
          </ul>
          <p className="blog-paragraph text-muted">Verified installation:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>nvcc --version</code></pre>

          <h3 className="blog-subtitle">Step 3: Setting Environment Variables</h3>
          <p className="blog-paragraph text-muted">Added to .bashrc:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>export PATH=/usr/local/cuda/bin:$PATH{'\n'}export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH</code></pre>
          <p className="blog-paragraph text-muted">Reloaded shell:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>source ~/.bashrc</code></pre>
          <p className="blog-paragraph text-muted"><strong>Issue Faced:</strong> CUDA binaries worked, but PyTorch did not detect GPU.</p>
          <p className="blog-paragraph text-muted"><strong>Root Cause:</strong> Environment variables were not properly loaded in non-interactive shells.</p>
          <p className="blog-paragraph text-muted"><strong>Fix:</strong> Ensured variables were exported system-wide and verified using:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>echo $LD_LIBRARY_PATH</code></pre>

          <h3 className="blog-subtitle">Step 4: Installing cuDNN</h3>
          <ul className="blog-list text-muted">
            <li>Installed version compatible with installed CUDA version.</li>
            <li>Manually copied files to CUDA directories:</li>
          </ul>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>sudo cp cuda/include/cudnn*.h /usr/local/cuda/include{'\n'}sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64</code></pre>
          <p className="blog-paragraph text-muted">Updated permissions accordingly.</p>

          <h3 className="blog-subtitle">Major Challenges Faced</h3>
          <ul className="blog-list text-muted">
            <li>Driver–CUDA version mismatch</li>
            <li>Broken apt dependencies</li>
            <li>Kernel module conflicts after system updates</li>
            <li>PyTorch detecting CPU only</li>
            <li>Inconsistent environment variables</li>
          </ul>
          <p className="blog-paragraph text-muted">The most critical lesson was verifying the compatibility matrix before installing anything.</p>

          <h3 className="blog-subtitle">Final Verification</h3>
          <p className="blog-paragraph text-muted">Tested using PyTorch:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>import torch{'\n'}print(torch.cuda.is_available()){'\n'}print(torch.cuda.get_device_name(0))</code></pre>
          <p className="blog-paragraph text-muted">Output confirmed successful GPU detection.</p>

          <h3 className="blog-subtitle">Key Takeaways</h3>
          <ul className="blog-list text-muted">
            <li>Always verify NVIDIA driver and CUDA compatibility first</li>
            <li>Avoid mixing apt-based and manual installations</li>
            <li>Recheck environment variables carefully</li>
            <li>Test with deep learning framework, not just nvcc</li>
          </ul>
          <p className="blog-paragraph text-muted">Proper CUDA setup requires strict version alignment and careful validation at each step.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Integrating AirSim with Unreal Engine 5 on Windows 11: Setup and Challenges",
      category: "Simulation / Reinforcement Learning",
      date: "February 2026",
      summary: "Step-by-step guide to setting up Microsoft AirSim with Unreal Engine 5 on Windows 11, including common build errors and simulation control issues.",
      content: (
        <>
          <h3 className="blog-subtitle">Introduction</h3>
          <p className="blog-paragraph text-muted">Integrating Microsoft AirSim with Unreal Engine 5 on Windows 11 is a powerful setup for reinforcement learning and autonomous systems research. However, the integration process involves multiple toolchains and strict version compatibility.</p>
          <p className="blog-paragraph text-muted">This article outlines the setup process and the major build and configuration challenges I encountered.</p>

          <h3 className="blog-subtitle">System Overview</h3>
          <ul className="blog-list text-muted">
            <li><strong>OS:</strong> Windows 11</li>
            <li><strong>Engine:</strong> Unreal Engine 5</li>
            <li><strong>Simulator:</strong> Microsoft AirSim</li>
            <li><strong>Development:</strong> Visual Studio (C++ toolchain)</li>
          </ul>

          <h3 className="blog-subtitle">Step 1: Installing Unreal Engine 5</h3>
          <ul className="blog-list text-muted">
            <li>Installed via Epic Games Launcher.</li>
            <li>Created a blank C++ project.</li>
          </ul>

          <h3 className="blog-subtitle">Step 2: Installing Visual Studio</h3>
          <p className="blog-paragraph text-muted">Installed required components:</p>
          <ul className="blog-list text-muted">
            <li>Desktop development with C++</li>
            <li>MSVC v143 toolset</li>
            <li>Windows 10/11 SDK</li>
          </ul>
          <p className="blog-paragraph text-muted"><strong>Issue Faced:</strong> Build errors due to incorrect SDK version.</p>
          <p className="blog-paragraph text-muted"><strong>Resolution:</strong> Installed exact SDK version required by Unreal Engine build configuration.</p>

          <h3 className="blog-subtitle">Step 3: Cloning and Building AirSim</h3>
          <p className="blog-paragraph text-muted">Cloned AirSim repository and executed build script:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>build.cmd</code></pre>
          <p className="blog-paragraph text-muted">Build succeeded after resolving dependency paths.</p>

          <h3 className="blog-subtitle">Step 4: Integrating AirSim Plugin</h3>
          <ul className="blog-list text-muted">
            <li>Copied AirSim plugin folder into Unreal project's Plugins directory.</li>
            <li>Regenerated project files.</li>
            <li>Built solution from Visual Studio.</li>
          </ul>

          <h3 className="blog-subtitle">Major Issues Faced</h3>

          <h4 className="blog-subtitle" style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>1. Plugin Compilation Errors</h4>
          <p className="blog-paragraph text-muted" style={{ marginBottom: '0.5rem' }}><strong>Cause:</strong> Toolchain mismatch</p>
          <p className="blog-paragraph text-muted"><strong>Fix:</strong> Verified MSVC version and rebuilt project files</p>

          <h4 className="blog-subtitle" style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>2. Drone Spawning But No Manual Control</h4>
          <p className="blog-paragraph text-muted" style={{ marginBottom: '0.5rem' }}><strong>Cause:</strong> Incorrect input bindings and missing configuration in settings.json</p>
          <p className="blog-paragraph text-muted"><strong>Fix:</strong> Verified input mappings and updated configuration file</p>

          <h4 className="blog-subtitle" style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>3. Physics Instability in Simulation</h4>
          <p className="blog-paragraph text-muted" style={{ marginBottom: '0.5rem' }}><strong>Cause:</strong> Unreal physics settings conflicting with AirSim defaults</p>
          <p className="blog-paragraph text-muted"><strong>Fix:</strong> Adjusted physics substepping and ensured correct simulation tick rate</p>

          <h4 className="blog-subtitle" style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>4. Plugin Not Loading</h4>
          <p className="blog-paragraph text-muted" style={{ marginBottom: '0.5rem' }}><strong>Cause:</strong> Incorrect folder structure</p>
          <p className="blog-paragraph text-muted"><strong>Fix:</strong> Ensured AirSim plugin was placed inside:</p>
          <pre className="blog-code" style={{ display: 'block', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflowX: 'auto', marginBottom: '1rem' }}><code>ProjectFolder/Plugins/AirSim</code></pre>

          <h3 className="blog-subtitle">Testing and Validation</h3>
          <p className="blog-paragraph text-muted">Tested using:</p>
          <ul className="blog-list text-muted">
            <li>Sample environment</li>
            <li>API control via Python</li>
            <li>Manual keyboard control</li>
          </ul>
          <p className="blog-paragraph text-muted">Verified drone movement, sensor data, and camera feeds.</p>

          <h3 className="blog-subtitle">Key Takeaways</h3>
          <ul className="blog-list text-muted">
            <li>Toolchain alignment is critical (Unreal + Visual Studio + SDK)</li>
            <li>Always test in sample environment before custom maps</li>
            <li>Validate plugin placement carefully</li>
            <li>Troubleshoot incrementally, not all at once</li>
          </ul>
          <p className="blog-paragraph text-muted">Simulation-based RL environments demand precise system-level configuration and debugging discipline.</p>
        </>
      )
    }
  ];

  return (
    <>
      {/* DEEP SPACE BACKGROUND */}
      <div className="deep-space-bg">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="shooting-star"></div>

        {/* DISTANT GALAXY BACKGROUND */}
        <div className="distant-galaxy"></div>
      </div>

      <div className="app-container">

        {/* TOP NAVIGATION / TABS */}
        <nav className="tab-nav mono animate-on-scroll" aria-label="Main Navigation">
          <button
            className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            aria-label="Navigate to Home section"
          >
            ./home
          </button>
          <button
            className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => { setActiveTab('blog'); setSelectedArticle(null); }}
            aria-label="Navigate to Blog section"
          >
            ./blog
          </button>
          <button
            className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
            onClick={() => setActiveTab('media')}
            aria-label="Navigate to Project Demo Media"
          >
            ./project_demo_medias
          </button>
          <button
            className={`tab-btn ${activeTab === 'github' ? 'active' : ''}`}
            onClick={() => setActiveTab('github')}
            aria-label="Navigate to GitHub Activity Diagnostics"
          >
            ./my_github_activity
          </button>
          <button
            className={`tab-btn ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
            aria-label="Navigate to Resume Viewer"
          >
            ./resume_viewer
          </button>
        </nav>

        {activeTab === 'home' && (
          <>
            {/* HEADER / HERO SECTION */}
            <header className="site-header animate-on-scroll hero-landscape">
              <div className="hero-left-col">
                <h1 className="name-header">SANJAY KUMAR S</h1>
                <div className="header-subtitle mono text-muted">
                  <span>AI Systems Engineer</span>
                  <span className="separator">|</span>
                  <span>B.Tech CSE (AI &amp; ML)</span>
                  <span className="separator">|</span>
                  <span>SRM University, Chennai</span>
                  <span className="separator">|</span>
                  <span className="header-cgpa">CGPA: 9.46</span>
                </div>

                <div className="hero-research-tag mono" style={{ marginTop: '0.6rem', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>
                  Undergraduate Researcher – SRM UROP Program
                </div>

                <p className="hero-position-statement mono text-muted" style={{ marginTop: '0.8rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Building AI-driven autonomous and simulation-based systems. Specializing in reinforcement learning control policies, computer vision annotation pipelines, and Linux systems infrastructure.
                </p>

                <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
                  <a href="#projects" className="btn btn-primary">View Selected Work</a>
                  <button onClick={() => { setActiveTab('blog'); setSelectedArticle(null); window.scrollTo(0, 0); }} className="btn btn-secondary">Read My Blog</button>
                  <button onClick={() => { setActiveTab('resume'); window.scrollTo(0, 0); }} className="btn btn-secondary">Resume Viewer</button>
                  <a href="/resume.pdf" download="Sanjay_Kumar_S_CV.pdf" className="btn btn-secondary">Download CV</a>
                  <a href="#contact" className="btn btn-secondary">Connect</a>
                </div>
              </div>
              <div className="hero-right-col">
                <div className="hero-glow"></div>
              </div>
            </header>

            {/* ABOUT SECTION */}
            <section className="section" id="about">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">About</span></span>
              </h2>
              <div className="animate-on-scroll">
                <p className="about-text">
                  Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at SRM University, KTR (CGPA: 9.46). Active researcher developing reinforcement learning control policies for autonomous drone navigation using Unreal Engine 5 and Cosys AirSim. Experienced in systems operations, managing Linux infrastructure and RBAC environments, and engineering high-throughput GPU-accelerated computer vision workstations. Passionate about building robust, verifiable AI systems that scale reliably in simulation and production environments.
                </p>
              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section className="section" id="education">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Education</span></span>
              </h2>
              <div className="education-card animate-on-scroll">
                <div className="edu-degree">{education.degree}</div>
                <div className="edu-institution">{education.institution}</div>
                <div className="edu-meta">
                  <span>Duration: <strong className="mono">{education.duration}</strong></span>
                  <span className="separator mx-2">|</span>
                  <span>Location: <strong className="mono">{education.location}</strong></span>
                  <span className="separator mx-2">|</span>
                  <span className="edu-badge mono">Current CGPA: {education.cgpa}</span>
                </div>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="section" id="experience">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Experience</span></span>
              </h2>
              <div className="experience-list">
                {experience.map((exp, idx) => (
                  <div key={idx} className="experience-item animate-on-scroll">
                    <div className="exp-header">
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-date">
                        <span className="exp-company text-muted">{exp.company}</span>
                        <span className="separator mx-2">|</span>
                        <span className="exp-company text-muted">{exp.location}</span>
                        <span className="separator mx-2">|</span>
                        <span className="exp-date mono">{exp.date}</span>
                      </div>
                    </div>
                    <ul className="exp-points">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CURRENTLY BUILDING SECTION */}
            <section className="section" id="building">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Currently Building</span></span>
              </h2>
              <div className="building-list mono animate-on-scroll">
                <div className="building-item">&gt; Autonomous drone stabilization &amp; obstacle avoidance using PPO policies in Unreal Engine 5.5</div>
                <div className="building-item">&gt; High-throughput TrackNet dataset workstation with CUDA/NVDEC acceleration (1,770+ FPS)</div>
                <div className="building-item">&gt; Privacy-first local AI workstation combining local LLM inference, RAG, and vector search (LLLMao)</div>
                <div className="building-item">&gt; Linux-focused containerized deployments, RBAC infrastructure optimization, and snap packages</div>
              </div>
            </section>

            {/* TECHNICAL FOCUS SECTION */}
            <section className="section" id="focus">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Technical Focus</span></span>
              </h2>
              <div className="focus-grid animate-on-scroll">
                <span className="focus-tag">Reinforcement Learning</span>
                <span className="focus-tag">Autonomous Systems</span>
                <span className="focus-tag">Simulation Environments (UE5 &amp; AirSim)</span>
                <span className="focus-tag">GPU-Accelerated Systems (CUDA/NVDEC)</span>
                <span className="focus-tag">Linux System Administration &amp; RBAC</span>
                <span className="focus-tag">Local AI &amp; RAG Architecture</span>
                <span className="focus-tag">Computer Vision &amp; Deep Learning</span>
                <span className="focus-tag">Kernel Fundamentals &amp; Performance</span>
              </div>
            </section>

            {/* SELECTED WORK (PROJECTS) SECTION */}
            <section className="section" id="projects">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Selected Work</span></span>
              </h2>
              <div className="projects-grid">
                {projects.map((proj, idx) => (
                  <div key={idx} className={`project-card animate-on-scroll delay-${(idx % 2 === 0 ? 100 : 200)}`}>
                    <div className="project-category">{proj.category}</div>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>

                    <div className="project-tech-line">
                      <span className="project-tech-label">Tech Stack:</span>
                      <span>{proj.techStack}</span>
                    </div>

                    <div className="project-tags">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="project-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {proj.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`btn ${link.primary ? 'btn-primary' : 'btn-secondary'}`}
                          style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TECH STACK / CORE TECHNOLOGIES SECTION */}
            <section className="section" id="tech">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Core Technologies</span></span>
              </h2>
              <div className="tech-grid">
                {technicalSkills.map((skill, sIdx) => (
                  <div key={sIdx} className={`tech-card animate-on-scroll delay-${(sIdx + 1) * 100}`}>
                    <div className="tech-category">{skill.category}</div>
                    <div className="tech-items">{skill.items}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ACHIEVEMENTS SECTION */}
            <section className="section" id="achievements">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Achievements</span></span>
              </h2>
              <div className="achievements-list">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="achievement-item animate-on-scroll delay-100">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1 }}>
                      <span className="ach-title">{ach.title}</span>
                      <span className="ach-organizer">{ach.organizer} • {ach.location}</span>
                    </div>
                    <span className="ach-year mono">{ach.date}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CERTIFICATIONS SECTION */}
            <section className="section" id="certifications">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Certifications</span></span>
              </h2>
              <div className="certifications-grid">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="cert-card animate-on-scroll delay-100">
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-date">{cert.date}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* LANGUAGES & INTERESTS SECTION */}
            <section className="section" id="profile-meta">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="animate-on-scroll">
                  <h3 className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '1rem', marginBottom: '0.8rem' }}>Languages</h3>
                  <div className="tags-container">
                    {languages.map((lang, lIdx) => (
                      <span key={lIdx} className="tag-badge">{lang}</span>
                    ))}
                  </div>
                </div>
                <div className="animate-on-scroll delay-100">
                  <h3 className="mono" style={{ color: 'var(--accent-violet)', fontSize: '1rem', marginBottom: '0.8rem' }}>Key Interests</h3>
                  <div className="tags-container">
                    {interests.map((int, iIdx) => (
                      <span key={iIdx} className="tag-badge">{int}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="section" id="contact">
              <h2 className="section-title mono">
                <span className="typewriter-container"><span className="typewriter">Connect</span></span>
              </h2>
              <div className="animate-on-scroll delay-100">
                <p className="text-muted" style={{ marginBottom: '1.5rem', maxWidth: '650px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Open to research collaborations, AI/ML engineering roles, autonomous robotics projects, and systems development discussions.
                </p>
                <div className="contact-links">
                  <a href="mailto:sanjayksk1712@gmail.com" className="contact-link" aria-label="Send email to Sanjay Kumar S">Email: sanjayksk1712@gmail.com</a>
                  <a href="tel:+919487044111" className="contact-link" aria-label="Phone number">+91 94870 44111</a>
                  <a href="https://github.com/Sanjay1712KSK" className="contact-link" target="_blank" rel="noreferrer" aria-label="Visit Sanjay's GitHub Profile">GitHub: https://github.com/Sanjay1712KSK</a>
                  <a href="https://www.linkedin.com/in/sanjaykumarksk/" className="contact-link" target="_blank" rel="noreferrer" aria-label="Visit Sanjay's LinkedIn Profile">LinkedIn: https://www.linkedin.com/in/sanjaykumarksk/</a>
                </div>
                <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  root@portfolio:~$ <span className="blinking-cursor"></span>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'blog' && (
          /* BLOG SECTION */
          <section className="section animate-on-scroll" id="blog">
            <h2 className="section-title mono">
              <span className="typewriter-container"><span className="typewriter">Blog</span></span>
            </h2>

            {selectedArticle === null ? (
              <div className="animate-on-scroll delay-100">
                <p className="about-text" style={{ marginBottom: '2rem' }}>
                  Engineering notes and troubleshooting breakdowns from real-world AI system setup and simulation environments.
                </p>
                <div className="blog-grid">
                  {blogs.map((blog, idx) => (
                    <div key={idx} className={`blog-card animate-on-scroll delay-${(idx % 2 === 0 ? 100 : 200)}`}>
                      <h3 className="blog-title">{blog.title}</h3>
                      <p className="blog-summary">{blog.summary}</p>
                      <div className="blog-meta mono text-muted">
                        <span>{blog.category}</span>
                        <span className="separator mx-2">|</span>
                        <span>{blog.date}</span>
                      </div>
                      <div className="blog-action" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                        <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setSelectedArticle(blog.id)}>Read Article</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="article-view animate-on-scroll">
                <button className="btn btn-secondary mb-4" onClick={() => setSelectedArticle(null)} style={{ marginBottom: '2rem', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                  &lt; Back to Blog
                </button>

                {blogs.filter(b => b.id === selectedArticle).map((blog) => (
                  <div key={blog.id} className="article-content terminal-block-alt">
                    <h2 className="article-title">{blog.title}</h2>
                    <div className="blog-meta mono text-muted" style={{ marginBottom: '2.5rem', marginTop: '0.5rem' }}>
                      <span>{blog.category}</span>
                      <span className="separator mx-2">|</span>
                      <span>{blog.date}</span>
                    </div>
                    <div className="article-body">
                      {blog.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'media' && (
          /* MEDIA / DEMOS SECTION */
          <section className="section animate-on-scroll" id="media-demos" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '4rem' }}>
            <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h2 className="mono" style={{ color: 'var(--accent-blue)', opacity: 0.8, fontSize: '1rem', letterSpacing: '1px', marginBottom: '2rem' }}>
                <span className="typewriter-container"><span className="typewriter">project-demo-media/</span></span>
              </h2>

              <div style={{ width: '100%', margin: '0 auto', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
                <JARVISDisplay />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'resume' && (
          /* RESUME VIEWER SECTION */
          <section className="section animate-on-scroll" id="resume-viewer">
            <h2 className="section-title mono">
              <span className="typewriter-container"><span className="typewriter">Resume Viewer</span></span>
            </h2>
            <div className="resume-container" style={{ marginTop: '2rem' }}>
              <div className="resume-actions" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" aria-label="Open Resume in new tab">Open in New Tab</a>
                <a href="/resume.pdf" download="Sanjay_Kumar_S_CV.pdf" className="btn btn-secondary" aria-label="Download Sanjay Kumar S CV PDF">Download PDF</a>
              </div>
              <div className="resume-wrapper" style={{ width: '100%', height: '80vh', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', overflow: 'hidden', background: 'rgba(0,0,0,0.2)' }}>
                <iframe
                  src="/resume.pdf"
                  title="Sanjay Kumar S CV"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                >
                  <p>Your browser does not support PDFs. <a href="/resume.pdf" download="Sanjay_Kumar_S_CV.pdf">Download the PDF</a>.</p>
                </iframe>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'github' && (
          /* GITHUB HUD SECTION */
          <section className="section animate-on-scroll" id="github-hud">
            <h2 className="section-title mono" style={{ marginBottom: '1rem' }}>
              <span className="typewriter-container"><span className="typewriter">~/ my_github_activity</span></span>
            </h2>
            <div className="mono text-muted" style={{ marginBottom: '2.5rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
              <span>AI Development Diagnostics Console</span>
              <span className="jarvis-cursor" style={{ marginLeft: '6px' }}></span>
            </div>

            <GithubDiagnostics />
          </section>
        )}

        {/* FOOTER */}
        <footer style={{ textAlign: 'center', padding: '2.5rem 0', marginTop: '4rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <p className="mono text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Sanjay Kumar S • AI Systems &amp; Autonomous Systems Engineer
          </p>
          <p className="mono" style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.3)' }}>
            All rights reserved 2026 • Deployed via GitHub Pages
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
