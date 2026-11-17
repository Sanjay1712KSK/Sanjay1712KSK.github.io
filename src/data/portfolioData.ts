export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'research' | 'industry' | 'founder';
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  technicalContribution: string;
  architectureDetails: string[];
  techStack: string[];
  status: string;
  /** Set when the project is published under the Ayan Crafts organisation. */
  org?: 'Ayan Crafts';
  /** Screenshot of the real app or live site, shown instead of the line illustration. */
  image?: string;
  links: ProjectLink[];
  metrics?: { label: string; value: string }[];
}

/** Smaller builds shown as a compact list under the featured projects. */
export interface ExperimentItem {
  title: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
  note?: string;
  /** Live-site screenshot; repos without one fall back to GitHub's social preview card. */
  image?: string;
}

export interface StoryItem {
  title: string;
  subtitle: string;
  date: string;
  publication: string;
  url: string;
  cover: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  award: string;
  organization: string;
  location: string;
  date: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

const GH = 'https://github.com/Sanjay1712KSK';
const ORG = 'https://github.com/Ayan-Crafts';

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sanjay Kumar S',
    title: 'AI & Systems Engineer · Founder, Ayan Crafts',
    location: 'Chennai, India',
    email: 'sanjayksk1712@gmail.com',
    phone: '+91 94870 44111',
    github: GH,
    linkedin: 'https://www.linkedin.com/in/sanjaykumarksk/',
    medium: 'https://medium.com/@sanjayksk1712',
  },

  /** Plain-language narrative used on the homepage. */
  story: {
    about: [
      "I'm a Computer Science (AI & ML) undergraduate at SRM Institute of Science and Technology, Chennai, holding a 9.46 CGPA. Most of my time goes into one idea: take the power of open-source software and turn it into something that feels like a well-crafted, finished product.",
      'That idea became Ayan Crafts, an independent open-source studio I started in July 2026. Its first release, AI Upscaler Studio, packages Real-ESRGAN and RIFE into a one-click NVIDIA desktop app, so nobody has to fight Python environments or CUDA installs just to enhance a video.',
      "Before that, I spent over a year keeping real Linux infrastructure running for a pharmacy business, and built DejOS, a locked-down Ubuntu remaster for their retail counters. It taught me that reliability is a feature. Alongside all of it, I'm an undergraduate researcher in the SRM UROP Program, working on reinforcement learning.",
    ],
    focusAreas: ['GPU & Computer Vision', 'Local AI', 'Linux Systems', 'Open Source', 'Reinforcement Learning'],
  },

  education: {
    institution: 'SRM Institute of Science and Technology (SRMIST)',
    campus: 'Kattankulathur (KTR), Chennai, India',
    degree: 'B.Tech in Computer Science and Engineering with Specialization in AI & ML',
    period: '2023 – 2027',
    cgpa: '9.46',
  },

  experience: [
    {
      role: 'Founder',
      organization: 'Ayan Crafts',
      location: 'India · Remote',
      period: 'July 2026 – Present',
      type: 'founder',
      summary:
        'Started an independent open-source studio that turns powerful open-source foundations into installable, product-quality software. Now a team of four, growing a contributor community.',
      contributions: [
        'Shipped AI Upscaler Studio v1.0.0: a self-contained Windows installer and Ubuntu packages for NVIDIA-accelerated AI video upscaling and frame interpolation.',
        'Released Frame Generator v2.0.0, a GPU-accelerated frame extraction and TrackNet annotation workstation.',
        'Set up reproducible builds, SHA-256-verified releases and GitHub Actions pipelines across the organisation.',
        'Building the community through Discord, r/AyanCrafts and technical write-ups on DevelopersGlobal.',
      ],
      technologies: ['Python', 'PyTorch', 'CUDA', 'PySide6', 'FFmpeg', 'GitHub Actions'],
    },
    {
      role: 'Undergraduate Researcher – SRM UROP Program',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      period: 'November 2025 – Present',
      type: 'research',
      summary:
        'Researching reinforcement learning control in high-fidelity simulation. The work is ongoing, and I will share details once it is ready.',
      contributions: [],
      technologies: ['Python', 'PyTorch', 'Stable-Baselines3', 'Unreal Engine 5'],
    },
    {
      role: 'IT & Systems Support Engineer',
      organization: 'MEDBE Pharma and Healthcare',
      location: 'Cochin, India (Partial Remote)',
      period: 'June 2025 – August 2026',
      type: 'industry',
      summary:
        'Administered internal Linux infrastructure, role-based access control environments, and software operations supporting pharmaceutical billing and retail workflows.',
      contributions: [
        'Designed and deployed DejOS, a remastered Ubuntu 24 LTS system that locks retail terminals down to a single web workflow.',
        'Managed multi-user Linux workstations and servers, implementing Role-Based Access Control (RBAC) across billing and cash reconciliation terminals.',
        'Automated software deployment and system updates across distributed endpoints using custom shell maintenance routines.',
        'Contributed to the deployment, maintenance, and security monitoring of medbe.in, MedBe Pharmacy’s primary web platform.',
      ],
      technologies: ['Linux (Debian/Ubuntu)', 'Bash Scripting', 'RBAC Systems', 'Nginx', 'Network Diagnostics'],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'ai-upscaler',
      title: 'AI Upscaler Studio',
      image: '/media/upscaler-dashboard.png',
      org: 'Ayan Crafts',
      category: 'AI Video · Desktop App',
      tagline: 'Local, NVIDIA-accelerated AI video upscaling and frame interpolation, shipped as a one-click desktop app.',
      problem:
        'Open-source video enhancement models are excellent, but using them means wrestling with Python environments, PyTorch and CUDA versions, and FFmpeg configuration. Most people who just want to enhance an old video never get that far.',
      technicalContribution:
        'Built a native desktop application that combines AI super-resolution and frame interpolation into one configurable workflow, with every dependency bundled. Users only need a supported NVIDIA GPU and driver.',
      architectureDetails: [
        'Integrated Practical-RIFE v4.25 for frame interpolation and Real-ESRGAN x2plus / x4plus for super-resolution, running FP16 CUDA inference with NVENC hardware encoding.',
        'Startup hardware check detects GPU, driver, CUDA runtime, compute capability, VRAM and working NVENC encoders, and explains problems in plain language.',
        'First-run model downloads with progress, exact-size and SHA-256 verification, atomic writes, retries and clean-up of interrupted downloads.',
        'Self-contained Windows installer (no admin rights) and portable ZIP, plus Ubuntu AppImage and .deb, built with pinned, reproducible GitHub Actions pipelines.',
        'Built-in self-test produces a JSON report of runtime, GPU, Qt, FFmpeg and a short end-to-end CUDA job.',
      ],
      techStack: ['Python', 'PyTorch (CUDA FP16)', 'Real-ESRGAN', 'RIFE v4.25', 'PySide6', 'FFmpeg / NVENC', 'GitHub Actions'],
      status: 'v1.0.0 Released',
      metrics: [
        { label: 'Demo result', value: '1080p30 → 1440p60' },
        { label: 'Platforms', value: 'Windows · Ubuntu' },
        { label: 'Licence', value: 'GPL-3.0' },
      ],
      links: [
        { label: 'Download v1.0.0', url: `${ORG}/AI-Video-Upscaler--Powered-by-Nvidia/releases/tag/v1.0.0`, primary: true },
        { label: 'GitHub Repository', url: `${ORG}/AI-Video-Upscaler--Powered-by-Nvidia` },
        { label: 'Read the story', url: 'https://blog.developersglobal.got-a.page/i-wanted-to-upscale-my-old-videos-so-i-built-one-under-ayan-crafts-59e1cb8a089a' },
      ],
    },
    {
      id: 'frame-generator',
      title: 'Frame Generator',
      org: 'Ayan Crafts',
      category: 'Computer Vision · GPU Systems',
      tagline: 'High-throughput TrackNet dataset workstation with NVDEC hardware decoding and SAM 2.1-assisted annotation.',
      problem:
        'Preparing frame-by-frame ball trajectory datasets for sports analysis models (e.g. TrackNet) means extracting millions of frames and accurately marking high-speed motion blur without exhausting disk storage or operator patience.',
      technicalContribution:
        'Engineered an end-to-end desktop workstation that combines hardware-accelerated video decoding, dynamic resource profiling, and deep learning segmentation.',
      architectureDetails: [
        'NVIDIA NVDEC zero-copy decoding via FFmpeg/CUDA filter graphs, sustaining 1,770+ FPS (about 35× realtime).',
        'Zero-occlusion annotation canvas with a 5-tab workflow: annotating, live CSV, ranges, statistics and settings.',
        'Meta Segment Anything (SAM 2.1) integrated through an isolated Docker service for semi-automated multi-frame propagation.',
        'Persistent job queues with fault-tolerant, keyframe-accurate resume for multi-hour extraction runs.',
      ],
      techStack: ['Python', 'PySide6', 'CUDA (NVDEC)', 'SAM 2.1', 'Docker', 'FFmpeg', 'PyInstaller'],
      status: 'v2.0.0 Released',
      metrics: [
        { label: 'Extraction', value: '1,770+ FPS' },
        { label: 'Tracking', value: 'SAM 2.1 (Docker)' },
        { label: 'Licence', value: 'MIT' },
      ],
      links: [{ label: 'GitHub Repository', url: `${ORG}/Frame-Generator`, primary: true }],
    },
    {
      id: 'dejos',
      title: 'DejOS 1.0',
      category: 'Linux Systems · Retail',
      tagline: 'A remastered Ubuntu 24 LTS that lets retail staff use exactly one web app, and nothing else.',
      problem:
        'A pharmacy needed counter terminals where staff could only reach their billing web app: no system settings, no stray software, no USB malware, and no accidental changes. Enterprise device management was overkill for a small team with no dedicated IT.',
      technicalContribution:
        'Designed a purpose-built, pre-configured remaster of Ubuntu 24 LTS Desktop that behaves like a dedicated retail terminal, then delivered and validated it in a real store.',
      architectureDetails: [
        'Role-based Admin and Worker environments with application-level restrictions and locked system settings.',
        'Web app auto-launches full-screen through a controlled interface; USB, Bluetooth and filesystem access are restricted.',
        'Background updates keep terminals stable without staff intervention.',
        'Hardened through 50+ manual test cycles of reinstalls, permission fixes and hardware compatibility checks before deployment.',
      ],
      techStack: ['Ubuntu 24 LTS', 'Bash', 'RBAC', 'systemd', 'Kiosk mode'],
      status: 'Deployed in production',
      metrics: [
        { label: 'Base', value: 'Ubuntu 24 LTS' },
        { label: 'Test cycles', value: '50+' },
        { label: 'Deployment', value: 'Live retail use' },
      ],
      links: [
        {
          label: 'Read the story',
          url: 'https://blog.developersglobal.got-a.page/dejos-1-0-a-remastered-linux-system-for-retail-environments-e76fd928df2e',
          primary: true,
        },
      ],
    },
    {
      id: 'lllmao',
      title: 'LLLMao',
      category: 'Local AI · Desktop',
      tagline: 'A privacy-first, ChatGPT-style local AI assistant with RAG, workspace awareness and live system monitoring.',
      problem:
        'Cloud-hosted LLM services present data leakage risks for proprietary codebases and personal notes, while existing local interfaces are often sluggish or lack native system integration.',
      technicalContribution:
        'Engineered a lightweight desktop AI workstation combining local multi-model LLM execution, semantic vector search, and a native desktop shell.',
      architectureDetails: [
        'Asynchronous FastAPI services talk to local Ollama instances for zero-cloud latency and complete data isolation.',
        'Retrieval-Augmented Generation (RAG) pipeline with ChromaDB for local document indexing and semantic lookup.',
        'Packaged with Tauri (Rust) and React/TypeScript for a far smaller RAM footprint than Electron.',
        'Linux distribution via Snap and Debian packages with sandboxed permissions.',
      ],
      techStack: ['React', 'TypeScript', 'FastAPI', 'ChromaDB', 'Tauri (Rust)', 'Ollama', 'SQLite'],
      status: 'In active development',
      metrics: [
        { label: 'Privacy', value: '100% local / offline' },
        { label: 'Inference', value: 'Ollama + FastAPI' },
        { label: 'Desktop core', value: 'Tauri (Rust)' },
      ],
      links: [
        { label: 'GitHub Repository', url: `${GH}/LLLMao`, primary: true },
        { label: 'Wiki', url: `${GH}/LLLMao/wiki` },
      ],
    },
    {
      id: 'cattle-go',
      title: 'Cattle-Go',
      image: '/media/cattle-go.jpg',
      category: 'Computer Vision · Mobile',
      tagline: 'Indian cattle breed recognition app with a multilingual RAG advisory assistant for farmers.',
      problem:
        'Preserving indigenous cattle lineages and giving farmers veterinary guidance needs instant breed identification that works on ordinary phones with limited connectivity.',
      technicalContribution:
        'Designed and deployed a mobile deep learning classifier paired with a multilingual agricultural advisory assistant.',
      architectureDetails: [
        'Lightweight MobileNetV2 CNN fine-tuned on indigenous Indian cattle breeds, optimised for on-device latency.',
        'Ollama-backed multilingual assistant answers questions on bovine health, nutrition and breed traits.',
        'Cross-platform Flutter client backed by FastAPI microservices on Hugging Face Spaces.',
        'Offline image caching and local state persistence with Firebase.',
      ],
      techStack: ['Flutter', 'FastAPI', 'TensorFlow-Keras', 'MobileNetV2', 'Firebase', 'Hugging Face', 'Ollama'],
      status: 'Completed & deployed',
      metrics: [
        { label: 'Vision model', value: 'MobileNetV2' },
        { label: 'Client', value: 'Flutter' },
        { label: 'Available on', value: 'Web & Android' },
      ],
      links: [
        { label: 'Live Web App', url: 'https://sanjay1712ksk.github.io/Cattle-Go/', primary: true },
        { label: 'GitHub Repository', url: `${GH}/Cattle-Go` },
      ],
    },
    {
      id: 'gigshield',
      title: 'GigShield',
      category: 'Full-Stack · Parametric AI',
      tagline: 'AI-driven parametric insurance for gig delivery workers, paying out automatically when the weather turns.',
      problem:
        'Gig delivery workers lose daily wages during monsoon downpours, heatwaves and pollution alerts, while traditional claims take weeks to inspect and verify.',
      technicalContribution:
        'Architected an automated parametric micro-insurance platform that uses real-time environmental triggers for instant claim settlement.',
      architectureDetails: [
        'Ingestion pipelines poll live weather from Open-Meteo and real-time AQI from OpenWeather.',
        'Rule-based parametric thresholds approve payouts the moment verifiable weather limits are breached.',
        'Asynchronous FastAPI backend with SQLAlchemy, SQLite and JWT authentication.',
        'Flutter mobile app for instant onboarding and transparent payout tracking.',
      ],
      techStack: ['Flutter', 'FastAPI', 'SQLAlchemy', 'JWT', 'SQLite', 'Open-Meteo', 'OpenWeather AQI'],
      status: 'Hackathon prototype',
      metrics: [
        { label: 'Trigger system', value: 'Automated parametric' },
        { label: 'Data sources', value: 'Open-Meteo · OpenWeather' },
        { label: 'Architecture', value: 'FastAPI + Flutter' },
      ],
      links: [{ label: 'GitHub Repository', url: `${GH}/CampTech`, primary: true }],
    },
  ] as ProjectItem[],

  experiments: [
    {
      title: 'C Compiler Visualizer',
      image: '/media/compiler.jpg',
      summary: 'Interactive walkthrough of all six compiler phases for real C code, from tokens and AST to three-address code and target code.',
      stack: ['JavaScript', 'Tree-sitter', 'Monaco Editor'],
      repo: `${GH}/Visualization-of-6-Phases-of-Compiler`,
      demo: 'https://phases-beta.vercel.app/',
    },
    {
      title: 'Satellite Image Change Detection',
      summary: 'Siamese ResNet-18 U-Net with CBAM attention on LEVIR-CD, with RAPIDS-accelerated data steps and Dask full-resolution inference.',
      stack: ['PyTorch', 'RAPIDS', 'Dask'],
      repo: `${GH}/Satellite-Image-Change-Detection-at-Scale`,
    },
    {
      title: 'Smart Door Monitoring',
      summary: 'Arduino + ESP32-CAM door system that recognises faces on a laptop backend and streams live alerts to a web app.',
      stack: ['Arduino', 'ESP32-CAM', 'FastAPI', 'OpenCV'],
      repo: `${GH}/IoT-SMD`,
    },
    {
      title: 'Cypher Guard',
      summary: 'FastAPI security toolkit: AES-GCM file encryption, URL safety checks, IP lookup and a legal chatbot.',
      stack: ['Python', 'FastAPI', 'Cryptography'],
      repo: `${GH}/Cypher_Guard`,
      note: 'NLH AI × Legal Hackathon · 2nd place',
    },
    {
      title: 'Padayappa Paarvai',
      image: '/media/padayappa.jpg',
      summary: 'Fully client-side repository visualiser: upload a folder-structure JSON and explore it as a searchable tree.',
      stack: ['React', 'TypeScript', 'Vite'],
      repo: `${GH}/Padayappa-Paarvai`,
      demo: 'https://sanjay1712ksk.github.io/Padayappa-Paarvai/',
    },
    {
      title: 'ParkSRM',
      image: '/media/parksrm.jpg',
      summary: 'Timetable-linked campus parking prototype with reservations, a demo wallet and a sustainability calculator.',
      stack: ['React', 'TypeScript', 'Capacitor', 'Supabase'],
      repo: `${GH}/ParkSRM`,
      demo: 'https://sanjay1712ksk.github.io/ParkSRM/',
      note: 'Work in progress',
    },
  ] as ExperimentItem[],

  writing: [
    {
      title: 'I Wanted to Upscale My Old Videos. So I Built One Under Ayan Crafts.',
      subtitle: 'An idea from 2018, brought to life in 2026: building AI Upscaler Studio, powered by NVIDIA.',
      date: 'Nov 2026',
      publication: 'DevelopersGlobal',
      url: 'https://blog.developersglobal.got-a.page/i-wanted-to-upscale-my-old-videos-so-i-built-one-under-ayan-crafts-59e1cb8a089a',
      cover: 'https://cdn-images-1.medium.com/max/1024/1*-CxYoGGQp6sM2BSMik5Qrg.png',
      tags: ['AI', 'Open Source'],
    },
    {
      title: 'The Discipline of Software Craftsmanship: Introducing Ayan Crafts',
      subtitle: 'Why we are building an independent engineering studio focused on open-source tooling and system software.',
      date: 'Jul 2026',
      publication: 'DevelopersGlobal',
      url: 'https://blog.developersglobal.got-a.page/the-discipline-of-software-craftsmanship-introducing-ayan-crafts-54b4729e9411',
      cover: 'https://cdn-images-1.medium.com/max/1024/1*CBZevO2ezAeH4vBdeJt8ug.jpeg',
      tags: ['FOSS', 'Engineering'],
    },
    {
      title: 'DejOS 1.0: A Remastered Linux System for Retail Environments',
      subtitle: 'Building a retail-focused Linux system shaped by trial, error and real-world deployment.',
      date: 'Apr 2026',
      publication: 'DevelopersGlobal',
      url: 'https://medium.com/developersglobal/dejos-1-0-a-remastered-linux-system-for-retail-environments-e76fd928df2e',
      cover: 'https://cdn-images-1.medium.com/max/813/1*IyyqMjPHmFCg23_Uby-Srw.jpeg',
      tags: ['Linux', 'DevOps'],
    },
  ] as StoryItem[],

  skills: [
    {
      category: 'Programming Languages',
      description: 'Core languages for systems software, deep learning and cross-platform clients.',
      skills: ['Python', 'C', 'C++', 'Java', 'Dart', 'TypeScript', 'Kotlin', 'Bash / Shell'],
    },
    {
      category: 'AI, ML & Computer Vision',
      description: 'Frameworks and models for perception, video enhancement, learning and local inference.',
      skills: ['PyTorch', 'TensorFlow-Keras', 'Real-ESRGAN', 'RIFE', 'OpenCV', 'Meta SAM 2.1', 'Stable-Baselines3', 'RAG Systems', 'Ollama'],
    },
    {
      category: 'GPU, Systems & Linux',
      description: 'Hardware acceleration, Linux administration and OS-level customisation.',
      skills: ['CUDA & NVDEC / NVENC', 'FFmpeg', 'Linux Administration', 'Ubuntu Remastering', 'RBAC Architecture', 'Docker', 'Unreal Engine 5'],
    },
    {
      category: 'Apps, Web & Delivery',
      description: 'Shipping software people can actually install and use.',
      skills: ['PySide6 / Qt', 'React & Vite', 'Flutter', 'FastAPI', 'Tauri', 'GitHub Actions', 'Packaging (Installer, AppImage, .deb)', 'Git'],
    },
  ] as SkillCategory[],

  achievements: [
    {
      title: 'SRM SDG Hackathon',
      award: '3rd Place Winner',
      organization: 'SRM Institute of Science and Technology (SRMIST)',
      location: 'Chennai, India',
      date: 'November 2024',
    },
    {
      title: 'NLH AI x Legal Hackathon',
      award: '2nd Place Winner',
      organization: 'Madras Institute of Technology (Anna University)',
      location: 'Chennai, India',
      date: 'August 2025',
    },
  ] as AchievementItem[],

  certifications: [
    { title: 'SAP Certified – Generative AI Developer', issuer: 'SAP', date: '2026' },
    { title: 'Course on Python', issuer: 'LIVEWIRE', date: 'September 2023' },
    { title: 'Course on Java', issuer: 'LIVEWIRE', date: 'August 2024' },
    { title: 'Linux Programming', issuer: 'SRMIST', date: 'August 2024' },
  ] as CertificationItem[],
};

/** Ayan Crafts: the open-source studio page. */
export const AYAN_CRAFTS = {
  name: 'Ayan Crafts',
  founded: 'July 2026',
  teamSize: 4,
  github: ORG,
  discord: 'https://discord.com/invite/5nuS7EyTa',
  reddit: 'https://www.reddit.com/r/AyanCrafts/',
  tagline: 'An independent software studio building open-source tools and system software, from architecture to live deployment.',
  philosophy:
    'Take the power of open-source software and turn it into an experience that feels like using a well-crafted commercial product, with as little overhead as possible for the user.',
  nameMeaning: [
    {
      glyph: 'அயன்',
      image: '/media/ayan-17-landscape.png',
      title: 'The Creator',
      body: 'In Tamil, “Ayan” means the Creator: a nod to the craft of architecting software systems from the ground up.',
    },
    {
      glyph: '2009',
      title: 'Deliver, without fail',
      body: 'From the film Ayan: relentless execution under pressure, pushing through every checkpoint so the payload arrives intact.',
    },
    {
      glyph: '⛨',
      title: 'Strict gatekeeping',
      body: 'Like the film’s fight against contraband, we treat security as a barrier: intercept vulnerabilities, prevent leaks, strip out bloat.',
    },
  ],
  pillars: [
    {
      glyph: '{ }',
      title: 'Open-source tooling',
      body: 'Developer tools, state-management experiments and modular UI/UX design systems, released and maintained in the open.',
    },
    {
      glyph: '>_',
      title: 'System software',
      body: 'Linux workstation ecosystems, security architectures and intelligent automation, built for real-world reliability and scale.',
    },
  ],
  tribute: {
    title: 'Named after a film that refused to cut corners.',
    body: [
      'Ayan (2009) was directed by K. V. Anand, a photojournalist turned National Award-winning cinematographer whose camera shaped films like Mudhalvan and Sivaji. As a director, he brought that same eye, and that same refusal to settle, to everything he made.',
      'In 2009 he took on a scale few Tamil films had attempted: shooting on the freezing dunes of Namibia’s Namib-Naukluft and Deadvlei, in Zanzibar, Botswana, Zimbabwe, Malaysia and Cape Town, building a full airport set at Binny Mills, and sitting with real customs officers to get every detail of the story right. Delivering all of that, intact and on screen, is the kind of craft Ayan Crafts is named after.',
    ],
    facts: [
      { n: '6+', l: 'Countries abroad, from Namibian dunes to Zanzibar' },
      { n: '10', l: 'Different looks for Suriya, the most for an actor at the time' },
      { n: '12', l: 'Filmfare Awards South nominations, the most that year' },
    ],
    memorial: [
      'Sir, you left us far too soon. Every frame you shot carried patience, courage and an eye that never stopped searching for something better. Ayan was the film that made me believe the impossible could be planned, shot and delivered.',
      'This studio carries its name, and with it a small piece of your spirit. Whatever we build here, we build hoping it would have made you proud.',
    ],
  },
  released: ['ai-upscaler', 'frame-generator'],
  inDevelopment: [
    { title: 'Linux workstation management', body: 'Unified tools for organisations to manage workstations and handle remote administration.' },
    { title: 'Anomaly & security monitoring', body: 'Defence-grade interfaces for watching endpoints and catching issues early.' },
    { title: 'UI/UX design system', body: 'A modular component and layout system extracted from our own apps.' },
    { title: 'AI Upscaler Studio V2', body: 'Next version of the upscaler, plus Linux performance verification for V1.' },
  ],
  lookingFor: ['System architecture', 'UI/UX & design systems', 'Backend scalability', 'Linux tooling', 'GPU / AI pipelines', 'Docs & community'],
  stories: [
    'https://blog.developersglobal.got-a.page/the-discipline-of-software-craftsmanship-introducing-ayan-crafts-54b4729e9411',
    'https://blog.developersglobal.got-a.page/i-wanted-to-upscale-my-old-videos-so-i-built-one-under-ayan-crafts-59e1cb8a089a',
  ],
};

/** Creative influences: the films, games and engineering stories behind how I build. */
export interface InspirationItem {
  title: string;
  year?: string;
  poster: string;
}

export const INSPIRATIONS = {
  intro:
    'Innovation rarely begins with equations. It begins with imagination. These works shaped the mindset behind everything I build, reinforcing that complex systems can be built, broken and rebuilt through persistence.',
  groups: [
    {
      title: 'Aerospace & Engineering',
      description: 'Stories of engineers and entrepreneurs who refused to accept technical limitations.',
      items: [
        { title: 'Rocketry: The Nambi Effect', year: '2022', poster: '/media/inspirations/rocketry-the-nambi-effect.jpg' },
        { title: 'Soorarai Pottru', year: '2020', poster: '/media/inspirations/soorarai-pottru.jpg' },
        { title: 'Simply Fly: The Deccan Air Odyssey', poster: '/media/inspirations/simply-fly-deccan-air-odyssey.jpg' },
        { title: 'F1', year: '2025', poster: '/media/inspirations/f1-2025.jpg' },
      ],
    },
    {
      title: 'Systems, Simulation & Worldbuilding',
      description: 'Large-scale simulations and elegant complex systems.',
      items: [
        { title: 'Death Stranding Series', poster: '/media/inspirations/death-stranding-series.jpg' },
        { title: 'The Matrix Awakens: An Unreal Engine 5 Experience', poster: '/media/inspirations/matrix-awakens-ue5.jpg' },
        { title: 'Decima Engine Performance', poster: '/media/inspirations/decima-engine-updated.jpg' },
      ],
    },
    {
      title: 'Human + Machine Ambition',
      description: 'Where engineering meets courage and technology becomes personal.',
      items: [
        { title: 'Top Gun: Maverick', year: '2022', poster: '/media/inspirations/top-gun-maverick-2022.jpg' },
        { title: 'Enthiran', year: '2010', poster: '/media/inspirations/enthiran-2010.jpg' },
        { title: 'Mission: Impossible – Dead Reckoning', year: '2023', poster: '/media/inspirations/mission-impossible-dead-reckoning-2023.jpg' },
      ],
    },
  ] as { title: string; description: string; items: InspirationItem[] }[],
  statement: 'Hard problems are not barriers. They are invitations.',
  closing: [
    "We don't build by watching. We build by trying.",
    'There were phases where things failed repeatedly. In those hours, Anirudh’s music helped maintain flow, reminding me that persistence has rhythm.',
    'Confidence is built the same way as control systems: one iteration at a time.',
  ],
};
