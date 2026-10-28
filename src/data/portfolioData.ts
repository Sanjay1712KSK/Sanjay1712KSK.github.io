export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'research' | 'industry';
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface ResearchTopic {
  title: string;
  leadStatement: string;
  problem: string;
  technicalApproach: string[];
  simulationEnvironment: {
    engine: string;
    simulator: string;
    sensorSuite: string[];
    physicsRate: string;
  };
  measuredResults: string[];
  currentLimitations: string[];
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
  links: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
  metrics?: { label: string; value: string }[];
}

export interface EngineeringNote {
  id: string;
  title: string;
  category: string;
  date: string;
  synopsis: string;
  overview: string;
  steps: {
    title: string;
    explanation: string;
    codeSnippet?: string;
    criticalInsight?: string;
  }[];
  takeaways: string[];
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

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sanjay Kumar S',
    title: 'AI Systems & Autonomous Robotics Engineer',
    headline: 'Engineering autonomous flight policies in simulation, high-throughput GPU vision pipelines, and resilient Linux infrastructure.',
    shortBio: 'B.Tech in Computer Science and Engineering (AI & ML) at SRM University, Chennai (CGPA 9.46). Active researcher at the SRM UROP Program developing deep reinforcement learning policies for autonomous drone navigation in GPS-denied environments using Unreal Engine 5 and Cosys AirSim.',
    location: 'Chennai, India',
    email: 'sanjayksk1712@gmail.com',
    phone: '+91 94870 44111',
    github: 'https://github.com/Sanjay1712KSK',
    linkedin: 'https://www.linkedin.com/in/sanjaykumarksk/',
  },

  education: {
    institution: 'SRM Institute of Science and Technology (SRMIST)',
    campus: 'Kattankulathur (KTR), Chennai, India',
    degree: 'B.Tech in Computer Science and Engineering with Specialization in AI & ML',
    period: '2023 – 2027',
    cgpa: '9.46',
    verifiedNote: 'Verified via official Academic Transcript (Semesters 1 through 6 completed; Sem 6 SGPA: 9.60).',
    coreSubjects: [
      'Data Structures & Algorithms',
      'Machine Learning & Deep Learning',
      'Accelerated Data Science',
      'Operating Systems & Kernel Fundamentals',
      'Robotics & Autonomous Systems',
      'Compiler Design',
      'Computer Networks',
      'Discrete Mathematics & Linear Algebra'
    ]
  },

  experience: [
    {
      role: 'Undergraduate Researcher – SRM UROP Program',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      period: 'November 2025 – Present',
      type: 'research',
      summary: 'Conducting research on reinforcement learning control policies for autonomous quadrotor navigation in GPS-denied environments within high-fidelity simulation frameworks.',
      contributions: [
        'Formulated custom state representations (quaternion attitudes, angular velocity vectors, relative displacement vectors) and dense multi-objective reward shaping functions for autonomous flight.',
        'Implemented Proximal Policy Optimization (PPO) policies using Stable-Baselines3, training agents to execute stable hover, trajectory tracking, and obstacle circumvention.',
        'Integrated Cosys AirSim with Unreal Engine 5.5, optimizing physics step rates (200 Hz) and Python RPC messaging pipelines to minimize sensor-action latency.',
        'Established quantitative benchmarking suites to measure crosswind perturbation recovery, settling time, and trajectory tracking root-mean-square error (RMSE).'
      ],
      technologies: ['Unreal Engine 5.5', 'Cosys AirSim', 'PPO (Stable-Baselines3)', 'Python', 'PyTorch', 'Isaac Sim', 'Git']
    },
    {
      role: 'IT & Systems Support Engineer',
      organization: 'MEDBE Pharma and Healthcare',
      location: 'Cochin, India (Partial Remote)',
      period: 'June 2025 – August 2026',
      type: 'industry',
      summary: 'Administered internal Linux infrastructure, role-based access control environments, and software operations supporting mission-critical pharmaceutical billing and retail workflows.',
      contributions: [
        'Managed and configured multi-user Linux workstations and server environments, implementing strict Role-Based Access Control (RBAC) across retail billing and cash reconciliation terminals.',
        'Automated software deployment and system updates across distributed endpoints using custom shell maintenance routines.',
        'Contributed to the deployment, ongoing maintenance, and security monitoring of medbe.in, MedBe Pharmacy’s primary web platform.',
        'Conducted root-cause diagnostics on network outages, service bottlenecks, and hardware peripherals to ensure continuous daily retail operations.'
      ],
      technologies: ['Linux (Debian/Ubuntu)', 'Bash Scripting', 'RBAC Systems', 'System Administration', 'Nginx', 'Network Diagnostics']
    }
  ] as ExperienceItem[],

  research: {
    title: 'Autonomous Drone Navigation in GPS-Denied Environments',
    leadStatement: 'Deep reinforcement learning flight control policies operating over high-fidelity Unreal Engine 5 and Cosys AirSim physics simulation.',
    problem: 'Autonomous aerial vehicles operating in GPS-denied settings—such as underground facilities, deep warehouses, and urban tunnels—suffer severe cumulative dead-reckoning drift. Standard proportional-integral-derivative (PID) controllers and geometric methods struggle to maintain stability when subjected to sudden aerodynamic ground-effects and unmodeled sensor noise.',
    technicalApproach: [
      'Policy Formulation: Implemented continuous Proximal Policy Optimization (PPO) using generalized advantage estimation (GAE) to learn direct motor mixing commands.',
      'State Formulation: Structured a 16-dimensional observation space comprising 3-axis position error, 3-axis linear velocity, 4-quaternion orientation, 3-axis angular rates, and previous motor thrust actions.',
      'Reward Shaping: Designed an exponential Euclidean distance reward combined with cosine heading alignment, penalized by angular acceleration spikes and control effort chattering to ensure energy-efficient, smooth trajectory convergence.',
      'Domain Randomization: Injected stochastic wind gusts, variable payload mass (±15%), and Gaussian noise into simulated IMU accelerometer and gyroscope channels during training.'
    ],
    simulationEnvironment: {
      engine: 'Unreal Engine 5.5',
      simulator: 'Cosys AirSim (Advanced fork of Microsoft AirSim)',
      sensorSuite: ['6-DoF IMU (Accelerometer & Gyroscope)', 'Downward Optical Flow', 'Distance Sensor / LiDAR', 'Monocular Depth Camera'],
      physicsRate: '200 Hz simulation substepping with 50 Hz client policy RPC rate'
    },
    measuredResults: [
      'Trajectory Convergence: Policy achieves sub-0.18m steady-state position error during simulated indoor hovering.',
      'Perturbation Recovery: Counteracted simulated instantaneous wind gusts up to 6 m/s, stabilizing within 1.2 seconds.',
      'Cross-Model Benchmark: Outperformed classical tuned PID baseline in trajectory tracking accuracy under severe ground effect turbulence by 34%.'
    ],
    currentLimitations: [
      'Sim-to-Real Transfer: High-fidelity simulation dynamics require fine-tuning for brushless motor latency and battery voltage sag curves prior to hardware deployment.',
      'Computational Footprint: Ongoing work evaluates actor network quantization (INT8) for real-time onboard inference on companion compute units (e.g., NVIDIA Jetson Orin Nano).'
    ]
  } as ResearchTopic,

  projects: [
    {
      id: 'frame-generator',
      title: 'Frame Generator',
      category: 'Computer Vision & GPU Systems',
      tagline: 'High-throughput TrackNet dataset workstation with hardware NVDEC acceleration and semi-automatic tracking.',
      problem: 'Preparing dense, frame-by-frame ball trajectory datasets for sports analysis models (e.g., TrackNet) requires extracting millions of video frames and accurately marking high-speed motion blur without exhausting disk storage or operator patience.',
      technicalContribution: 'Engineered an end-to-end desktop annotation workstation that integrates hardware-accelerated video decoding, dynamic resource profiling, and deep learning segmentation.',
      architectureDetails: [
        'Integrated NVIDIA NVDEC hardware-accelerated extraction via FFmpeg/CUDA bindings, achieving sustained decoding throughput of 1,770+ FPS.',
        'Architected a 5-state annotation workspace featuring automatic motion-blur handling, sub-pixel range inspection, and CSV coordinate synchronization.',
        'Integrated Meta Segment Anything Model (SAM 2.1) through an isolated containerized Docker service for semi-automated multi-frame object propagation.',
        'Engineered persistent job queues with fault-tolerant checkpointing to allow seamless resumes during multi-hour batch extraction runs.'
      ],
      techStack: ['Python', 'PySide6', 'CUDA (NVDEC)', 'SAM 2.1', 'Docker', 'FFmpeg', 'PyInstaller'],
      status: 'Active Engineering Project',
      metrics: [
        { label: 'Extraction Throughput', value: '1,770+ FPS' },
        { label: 'Tracking Framework', value: 'SAM 2.1 Dockerized' },
        { label: 'Packaging', value: 'Windows x64 Native' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Sanjay1712KSK' }
      ]
    },
    {
      id: 'aero-controllers',
      title: 'Aero-Controllers',
      category: 'Reinforcement Learning & Robotics',
      tagline: 'Deep reinforcement learning quadrotor stabilization framework with interactive research telemetry docs.',
      problem: 'Evaluating RL drone stabilization policies requires transparent inspection of reward convergence, flight trajectories, and real-time state vectors under varying environmental constraints.',
      technicalContribution: 'Developed a comprehensive research and control platform coupling Unreal Engine simulated PPO flight models with a dedicated interactive Three.js 3D telemetry visualization suite.',
      architectureDetails: [
        'Formulated PPO flight controllers in Unreal Engine 5.5 and Cosys AirSim to stabilize drones subjected to simulated sensor dropouts.',
        'Constructed custom reward functions penalizing aggressive attitude excursions and rotor jerk while incentivizing waypoint interception.',
        'Built a 3D browser-based research documentation platform using Three.js and React to visualize 3D flight paths, state telemetry, and policy benchmark comparisons.',
        'Designed reproducible training pipelines compatible with Stable-Baselines3 and PyTorch.'
      ],
      techStack: ['Unreal Engine 5.5', 'Cosys-AirSim', 'PPO (Stable-Baselines3)', 'Next.js', 'React', 'Three.js'],
      status: 'Active Research Project',
      metrics: [
        { label: 'Control Policy', value: 'PPO Continuous' },
        { label: 'Simulation Environment', value: 'Unreal Engine 5.5' },
        { label: 'Live Telemetry', value: 'Three.js 3D View' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Sanjay1712KSK/Aero-Controllers' },
        { label: 'Interactive Live Demo', url: 'https://sanjay1712ksk.github.io/Aero-Controllers/', primary: true }
      ]
    },
    {
      id: 'lllmao',
      title: 'LLLMao',
      category: 'Local AI & Systems Engineering',
      tagline: 'Privacy-first on-device AI workstation with local LLM inference, vector retrieval, and desktop integration.',
      problem: 'Cloud-hosted LLM services present data leakage risks for proprietary engineering codebases and sensitive personal notes, while existing local interfaces are often sluggish or lack native system integration.',
      technicalContribution: 'Engineered a lightweight, privacy-preserving desktop AI workstation combining local multi-model LLM execution, semantic vector search, and a native system desktop shell.',
      architectureDetails: [
        'Configured asynchronous FastAPI services communicating with local Ollama inference instances for zero-cloud latency and complete data isolation.',
        'Built a high-performance Retrieval-Augmented Generation (RAG) pipeline utilizing ChromaDB for local document vectorization and semantic lookup.',
        'Packaged the application using Tauri (Rust) and React/TypeScript for minimal RAM footprint compared to standard Electron wrappers.',
        'Prepared native Linux deployment pipelines targeting Ubuntu Snap packaging with sandboxed permissions.'
      ],
      techStack: ['React', 'TypeScript', 'FastAPI', 'ChromaDB', 'Tauri (Rust)', 'Ollama', 'SQLite'],
      status: 'In Active Development',
      metrics: [
        { label: 'Privacy Tier', value: '100% Local / Offline' },
        { label: 'Inference Engine', value: 'Ollama + FastAPI' },
        { label: 'Desktop Core', value: 'Tauri (Rust)' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Sanjay1712KSK/LLLMao' }
      ]
    },
    {
      id: 'cattle-go',
      title: 'Cattle-Go',
      category: 'Computer Vision & Deep Learning',
      tagline: 'Indigenous Indian cattle breed classification mobile system with multilingual RAG advisory assistant.',
      problem: 'Preserving indigenous cattle genetic lineages and providing agricultural veterinary guidance requires immediate breed identification that rural farmers can use on standard mobile hardware with limited connectivity.',
      technicalContribution: 'Designed and deployed a mobile deep learning classifier paired with an intelligent multilingual agricultural advisory assistant.',
      architectureDetails: [
        'Trained a lightweight MobileNetV2 convolutional neural network fine-tuned on indigenous Indian cattle breeds, optimizing weights for on-device inference latency.',
        'Integrated an Ollama-backed multilingual conversational assistant to answer farmer queries regarding bovine health, nutrition, and breed characteristics.',
        'Built cross-platform client interfaces using Flutter, connecting to serverless FastAPI microservices on Hugging Face Spaces.',
        'Implemented offline image caching and localized state persistence using Firebase.'
      ],
      techStack: ['Flutter', 'FastAPI', 'TensorFlow-Keras', 'MobileNetV2', 'Firebase', 'Hugging Face', 'Ollama'],
      status: 'Completed & Deployed',
      metrics: [
        { label: 'Vision Model', value: 'MobileNetV2' },
        { label: 'Client Framework', value: 'Flutter Cross-Platform' },
        { label: 'Live Showcase', value: 'Web & Android APK' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Sanjay1712KSK/Cattle-Go' },
        { label: 'Live Web Platform', url: 'https://sanjay1712ksk.github.io/Cattle-Go/', primary: true }
      ]
    },
    {
      id: 'gigshield',
      title: 'GigShield (CampTech)',
      category: 'Full-Stack & Parametric AI/ML',
      tagline: 'AI-driven parametric insurance platform for gig delivery workers with live weather and risk telemetry.',
      problem: 'Gig delivery workers lose critical daily wages during extreme monsoon downpours, severe heatwaves, and pollution alerts, with traditional claims processes taking weeks to inspect and verify.',
      technicalContribution: 'Architected an automated parametric micro-insurance platform that leverages real-time environmental API triggers for instant, automated claim settlements.',
      architectureDetails: [
        'Built automated ingestion pipelines polling live weather conditions via Open-Meteo and real-time Air Quality Index (AQI) via OpenWeather.',
        'Implemented rule-based parametric risk thresholds that instantly execute payout approvals when verifiable weather thresholds are breached.',
        'Developed an asynchronous FastAPI backend backed by SQLAlchemy and SQLite with JWT authentication.',
        'Designed an intuitive mobile interface using Flutter for instant policy onboarding and transparent payout telemetry.'
      ],
      techStack: ['Flutter', 'FastAPI', 'SQLAlchemy', 'JWT', 'SQLite', 'Open-Meteo', 'OpenWeather AQI'],
      status: 'Hackathon Award Winning Prototype',
      metrics: [
        { label: 'Trigger System', value: 'Automated Parametric' },
        { label: 'Data Sources', value: 'Open-Meteo & OpenWeather' },
        { label: 'Architecture', value: 'FastAPI + Flutter' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Sanjay1712KSK/CampTech' }
      ]
    }
  ] as ProjectItem[],

  engineeringNotes: [
    {
      id: 'cuda-ubuntu',
      title: 'Configuring CUDA Toolkit & cuDNN on Ubuntu 22.04 LTS for Deep Learning Workloads',
      category: 'Systems & GPU Engineering',
      date: 'February 2026',
      synopsis: 'A pragmatic troubleshooting breakdown resolving NVIDIA driver mismatches, DKMS kernel build failures, and non-interactive shell environment variable propagation.',
      overview: 'Setting up CUDA acceleration on Linux is frequently destabilized by silent version misalignments between the host Linux kernel, DKMS driver modules, the CUDA toolkit compiler (nvcc), and PyTorch runtime binaries. This note details the exact procedural sequence that guarantees stable GPU acceleration.',
      steps: [
        {
          title: '1. Verifying Hardware & Kernel Driver Handshake',
          explanation: 'Before installing the CUDA toolkit, verify the PCIe bridge detects the GPU and execute DKMS driver compilation cleanly:',
          codeSnippet: 'lspci | grep -i nvidia\nsudo ubuntu-drivers autoinstall\nnvidia-smi',
          criticalInsight: 'Kernel updates often desynchronize previously installed proprietary NVIDIA drivers. Always verify that DKMS automatically rebuilds the driver kernel module before restarting.'
        },
        {
          title: '2. Local Deb Installation vs. Distribution Repositories',
          explanation: 'Distribution package managers often introduce packaging conflicts. Using NVIDIA\'s official local runfile or pinned deb archive prevents unintended driver overrides:',
          codeSnippet: 'nvcc --version',
          criticalInsight: 'Never mix package-managed CUDA runtimes with manual runfile installations in the same `/usr/local/` tree.'
        },
        {
          title: '3. Shell Environment Persistence & cuDNN Linking',
          explanation: 'Export CUDA paths globally and ensure non-interactive daemon shells load library directories without failure:',
          codeSnippet: 'export PATH=/usr/local/cuda/bin:$PATH\nexport LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH',
          criticalInsight: 'PyTorch failures that show CUDA available as False despite nvcc working are almost always caused by `/etc/ld.so.conf.d/` missing the CUDA runtime path.'
        }
      ],
      takeaways: [
        'Always consult NVIDIA\'s compute capability and driver version compatibility matrix before upgrading.',
        'Verify GPU availability through python runtime (`torch.cuda.is_available()`), not merely through CLI tools.'
      ]
    },
    {
      id: 'airsim-ue5',
      title: 'Integrating AirSim with Unreal Engine 5 on Windows 11: Toolchain Alignment',
      category: 'Robotics & Simulation',
      date: 'February 2026',
      synopsis: 'Technical notes on aligning MSVC toolsets, configuring Unreal Engine physics substepping, and establishing low-latency RPC sensor interfaces.',
      overview: 'Connecting Microsoft/Cosys AirSim to Unreal Engine 5 provides an exceptional environment for autonomous robotics research, but demands strict alignment across Visual Studio C++ toolsets, Unreal project build targets, and RPC API bindings.',
      steps: [
        {
          title: '1. MSVC Toolchain & Windows SDK Synchronization',
          explanation: 'Unreal Engine 5 requires exact MSVC toolset versions (v143) and specific Windows SDK headers to compile complex simulation plugins:',
          codeSnippet: 'build.cmd # AirSim native build script with Visual Studio 2022 toolchain',
          criticalInsight: 'Build errors referencing missing standard template libraries indicate mismatches between the Visual Studio MSVC compiler toolset and Unreal Engine\'s build configuration target.'
        },
        {
          title: '2. Physics Substepping and Tick Rate Configuration',
          explanation: 'Quadrotor aerodynamics simulated in AirSim require strict physics tick rates to prevent instability in simulated IMU readings:',
          codeSnippet: '{\n  "SettingsVersion": 2.0,\n  "SimMode": "Multirotor",\n  "ClockSpeed": 1.0\n}',
          criticalInsight: 'Unreal\'s default variable frame rate introduces non-deterministic physics. Enable substepping in Project Settings > Physics with a maximum substep delta time of 0.005s (200 Hz).'
        }
      ],
      takeaways: [
        'Always validate vehicle dynamics in a standardized sandbox environment prior to loading heavy custom photorealistic level assets.',
        'Isolate plugin compilation by regenerating visual studio project files whenever Unreal Engine minor updates occur.'
      ]
    }
  ] as EngineeringNote[],

  skills: [
    {
      category: 'Programming Languages',
      description: 'Core languages used for systems software, deep learning, and cross-platform clients.',
      skills: ['Python', 'C', 'C++', 'Java', 'Dart', 'TypeScript', 'Bash / Shell']
    },
    {
      category: 'AI, ML & Computer Vision',
      description: 'Frameworks and architectures for autonomous perception, reinforcement learning, and local inference.',
      skills: ['PyTorch', 'TensorFlow-Keras', 'Stable-Baselines3 (PPO)', 'OpenCV', 'Meta SAM 2.1', 'MobileNetV2', 'RAG Systems', 'Ollama']
    },
    {
      category: 'Robotics & Simulation',
      description: 'Simulation engines, sensor models, and dynamic flight control testbeds.',
      skills: ['Unreal Engine 5.5', 'Cosys-AirSim', 'NVIDIA Isaac Sim', '6-DoF Sensor Modeling (IMU, Optical Flow, LiDAR)', 'Drone Kinematics']
    },
    {
      category: 'Systems, DevOps & Infrastructure',
      description: 'Low-level Linux administration, hardware acceleration, and containerized deployments.',
      skills: ['Linux Administration (Debian/Ubuntu)', 'RBAC Architecture', 'CUDA & NVDEC Hardware Acceleration', 'Docker', 'FastAPI', 'React & Vite', 'Flutter', 'Git']
    }
  ] as SkillCategory[],

  achievements: [
    {
      title: 'SRM SDG Hackathon',
      award: '3rd Place Winner',
      organization: 'SRM Institute of Science and Technology (SRMIST)',
      location: 'Chennai, India',
      date: 'November 2024'
    },
    {
      title: 'NLH AI x Legal Hackathon',
      award: '2nd Place Winner',
      organization: 'Madras Institute of Technology (Anna University)',
      location: 'Chennai, India',
      date: 'August 2025'
    }
  ] as AchievementItem[],

  certifications: [
    {
      title: 'SAP Certified – Generative AI Developer',
      issuer: 'SAP',
      date: '2026'
    },
    {
      title: 'Course on Python',
      issuer: 'LIVEWIRE',
      date: 'September 2023'
    },
    {
      title: 'Course on Java',
      issuer: 'LIVEWIRE',
      date: 'August 2024'
    },
    {
      title: 'Linux Programming',
      issuer: 'SRMIST',
      date: 'August 2024'
    }
  ] as CertificationItem[]
};
