import React from 'react';

/**
 * Visual Frame 1: Frame Generator
 * High-Throughput TrackNet Annotation & NVDEC Hardware Decoding Rig
 */
export const FrameGeneratorVisual: React.FC = () => {
  return (
    <div className="product-visual-card framegen-visual" aria-label="Frame Generator Hardware Video Pipeline Interface">
      <div className="visual-top-bar">
        <div className="window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="window-title">Frame Generator • NVDEC GPU Acceleration &amp; SAM 2.1 Workspace</span>
        <span className="window-tag">CUDA 12.2</span>
      </div>

      <div className="visual-display-body">
        {/* Synthetic Video Canvas Overlay */}
        <div className="video-viewport-mockup">
          <div className="viewport-grid-lines" />
          
          {/* Tracking Box Overlay */}
          <div className="tracking-box-mockup">
            <span className="box-tag">Ball [0.985]</span>
            <div className="reticle-center" />
            <div className="velocity-vector" />
          </div>

          <div className="viewport-hud-top">
            <span className="hud-metric">FRAME: 004812 / 024000</span>
            <span className="hud-metric hud-highlight">DECODE: 1,770 FPS</span>
          </div>

          <div className="viewport-hud-bottom">
            <span>RES: 1920×1080 @ 120 FPS</span>
            <span>MODEL: SAM 2.1 Containerized</span>
          </div>
        </div>

        {/* Real-Time Processing Telemetry Strip */}
        <div className="visual-telemetry-row">
          <div className="telemetry-stat">
            <span className="telemetry-lbl">Hardware Engine</span>
            <span className="telemetry-val">NVIDIA NVDEC (FFmpeg)</span>
          </div>
          <div className="telemetry-stat">
            <span className="telemetry-lbl">Batch Latency</span>
            <span className="telemetry-val highlight-val">0.56 ms / frame</span>
          </div>
          <div className="telemetry-stat">
            <span className="telemetry-lbl">Annotation Sync</span>
            <span className="telemetry-val">Sub-pixel CSV Coords</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Visual Frame 2: Aero-Controllers
 * Autonomous Drone 3D Trajectory Telemetry in UE5.5 + Cosys AirSim
 */
export const AeroControllersVisual: React.FC = () => {
  return (
    <div className="product-visual-card aero-visual" aria-label="Aero-Controllers 3D Trajectory Telemetry Visualizer">
      <div className="visual-top-bar">
        <div className="window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="window-title">Aero-Controllers • Real-Time Flight Telemetry (UE5.5 + Cosys AirSim)</span>
        <span className="window-tag live-tag">● 50 Hz RPC STREAM</span>
      </div>

      <div className="visual-display-body">
        <div className="flight-telemetry-grid">
          {/* 3D Wireframe Trajectory Canvas */}
          <div className="flight-path-display">
            <svg viewBox="0 0 460 220" fill="none" className="flight-path-svg">
              {/* Floor grid */}
              <path d="M 30 180 L 230 210 L 430 180 L 230 150 Z" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />
              <line x1="130" y1="165" x2="330" y2="195" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="330" y1="165" x2="130" y2="195" stroke="#cbd5e1" strokeWidth="1" />

              {/* Waypoints */}
              <circle cx="80" cy="140" r="4" fill="#64748b" />
              <circle cx="180" cy="80" r="4" fill="#64748b" />
              <circle cx="280" cy="110" r="4" fill="#64748b" />
              <circle cx="380" cy="60" r="5" fill="#0284c7" />
              
              {/* Desired Flight Trajectory (Dashed) */}
              <path d="M 80 140 Q 130 60 180 80 T 280 110 T 380 60" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              
              {/* Actual PPO Policy Flight Trajectory (Smooth Cyan/Blue) */}
              <path d="M 80 140 Q 132 64 182 82 T 279 108 T 376 62" stroke="#0284c7" strokeWidth="2.5" fill="none" />
              
              {/* Active Quadrotor Indicator */}
              <g transform="translate(376, 62)">
                <circle cx="0" cy="0" r="7" fill="#0284c7" fillOpacity="0.2" />
                <circle cx="0" cy="0" r="3" fill="#0284c7" />
                <line x1="-12" y1="-8" x2="12" y2="8" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="-12" y1="8" x2="12" y2="-8" stroke="#0f172a" strokeWidth="1.5" />
                <circle cx="-12" cy="-8" r="3" fill="#0284c7" />
                <circle cx="12" cy="8" r="3" fill="#0284c7" />
                <circle cx="-12" cy="8" r="3" fill="#0284c7" />
                <circle cx="12" cy="-8" r="3" fill="#0284c7" />
              </g>

              <text x="395" y="66" fill="#0284c7" fontSize="10" fontWeight="600" fontFamily="ui-monospace, monospace">UAV Pos [12.44, -8.18, 3.97m]</text>
              <text x="70" y="160" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Takeoff (0, 0, 0)</text>
            </svg>
          </div>

          {/* Real-time State Vector Telemetry Column */}
          <div className="flight-stats-column">
            <div className="state-stat-row">
              <span className="state-lbl">Steady-State Error</span>
              <span className="state-val highlight-val">&lt; 0.18 m</span>
            </div>
            <div className="state-stat-row">
              <span className="state-lbl">Attitude Quaternion</span>
              <span className="state-val mono-val">[0.998, 0.012, 0.004, 0.051]</span>
            </div>
            <div className="state-stat-row">
              <span className="state-lbl">Wind Gust Recovery</span>
              <span className="state-val highlight-val">1.2 s (@ 6 m/s)</span>
            </div>
            <div className="state-stat-row">
              <span className="state-lbl">Motor PWM Actuation</span>
              <span className="state-val mono-val">[8420, 8390, 8450, 8410]</span>
            </div>
            <div className="state-stat-row">
              <span className="state-lbl">Benchmark vs PID</span>
              <span className="state-val highlight-val">+34% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Visual Frame 3: LLLMao
 * Privacy-First Local Desktop AI Workstation (Ollama + ChromaDB + Tauri)
 */
export const LLLMaoVisual: React.FC = () => {
  return (
    <div className="product-visual-card lllmao-visual" aria-label="LLLMao Local AI Architecture Workspace">
      <div className="visual-top-bar">
        <div className="window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="window-title">LLLMao • Local Desktop AI Engine (Air-Gapped Privacy)</span>
        <span className="window-tag safe-tag">OFFLINE SECURED</span>
      </div>

      <div className="visual-display-body">
        <div className="lllmao-diagram-mockup">
          <div className="sys-box client-box">
            <span className="box-badge">SHELL</span>
            <span className="box-name">Tauri (Rust) + React</span>
            <span className="box-detail">44 MB RAM Footprint</span>
          </div>

          <div className="flow-arrow">→</div>

          <div className="sys-box api-box">
            <span className="box-badge">BACKEND</span>
            <span className="box-name">FastAPI Core</span>
            <span className="box-detail">Local Socket IPC</span>
          </div>

          <div className="flow-arrow">→</div>

          <div className="sys-box model-box">
            <span className="box-badge">LOCAL INFERENCE</span>
            <span className="box-name">Ollama Engine</span>
            <span className="box-detail">Mistral / Llama 4-bit</span>
          </div>

          <div className="flow-down-arrow">↓</div>

          <div className="sys-box rag-box">
            <span className="box-badge">VECTOR STORE</span>
            <span className="box-name">ChromaDB Local RAG</span>
            <span className="box-detail">384-Dim Local Embeddings</span>
          </div>
        </div>

        <div className="visual-telemetry-row">
          <div className="telemetry-stat">
            <span className="telemetry-lbl">Network Policy</span>
            <span className="telemetry-val highlight-val">Zero Outbound Telemetry</span>
          </div>
          <div className="telemetry-stat">
            <span className="telemetry-lbl">Target Platform</span>
            <span className="telemetry-val">Ubuntu Snap &amp; Desktop</span>
          </div>
          <div className="telemetry-stat">
            <span className="telemetry-lbl">Retrieval Latency</span>
            <span className="telemetry-val">&lt; 14 ms Vector Cosine</span>
          </div>
        </div>
      </div>
    </div>
  );
};
