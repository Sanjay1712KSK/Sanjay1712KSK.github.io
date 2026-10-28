import React from 'react';

export const ResearchDiagram: React.FC = () => {
  return (
    <div className="research-schematic-wrapper" aria-label="RL Flight Simulation Architecture Diagram">
      <div className="schematic-header">
        <div className="schematic-badge">
          <span className="schematic-dot" />
          <span>SYSTEM ARCHITECTURE · CLOSED-LOOP SIMULATION</span>
        </div>
        <h3 className="schematic-title">Real-Time Reinforcement Learning Flight Control Pipeline</h3>
        <p className="schematic-sub">High-fidelity 200 Hz Unreal Engine 5.5 physics substepping coupled with 50 Hz continuous PPO inference</p>
      </div>

      <div className="schematic-canvas">
        <svg
          viewBox="0 0 960 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="schematic-svg"
        >
          <defs>
            {/* Markers */}
            <marker
              id="arrow-light"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7" />
            </marker>
            <marker
              id="arrow-muted-light"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8" />
            </marker>
            <pattern id="grid-light" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#grid-light)" rx="10" />

          {/* LAYER 1: Physics & Environment Simulation */}
          <g className="node-group">
            <rect x="40" y="40" width="260" height="170" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
            <text x="60" y="70" fill="#0284c7" fontSize="11" fontWeight="600" fontFamily="ui-monospace, monospace" letterSpacing="1">01 / SIMULATION ENGINE</text>
            <text x="60" y="96" fill="#0f172a" fontSize="16" fontWeight="600" fontFamily="sans-serif">Unreal Engine 5.5</text>
            <text x="60" y="118" fill="#64748b" fontSize="12" fontFamily="sans-serif">+ Cosys AirSim Plugin</text>
            
            <line x1="60" y1="134" x2="280" y2="134" stroke="#e2e8f0" strokeWidth="1" />
            
            <text x="60" y="156" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• 200 Hz Physics Substepping</text>
            <text x="60" y="174" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Ground Effect Aerodynamics</text>
            <text x="60" y="192" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• GPS-Denied Indoor Geometry</text>
          </g>

          {/* LAYER 2: Synthetic Sensor Pipeline */}
          <g className="node-group">
            <rect x="360" y="40" width="250" height="170" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
            <text x="380" y="70" fill="#0284c7" fontSize="11" fontWeight="600" fontFamily="ui-monospace, monospace" letterSpacing="1">02 / SENSOR SUITE</text>
            <text x="380" y="96" fill="#0f172a" fontSize="16" fontWeight="600" fontFamily="sans-serif">Synthetic Telemetry</text>
            <text x="380" y="118" fill="#64748b" fontSize="12" fontFamily="sans-serif">Multi-Modal Noise Injected</text>
            
            <line x1="380" y1="134" x2="590" y2="134" stroke="#e2e8f0" strokeWidth="1" />
            
            <text x="380" y="156" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• 6-DoF Accelerometer &amp; Gyro</text>
            <text x="380" y="174" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Downward Optical Flow</text>
            <text x="380" y="192" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Stochastic Wind Perturbations</text>
          </g>

          {/* LAYER 3: Observation Normalizer */}
          <g className="node-group">
            <rect x="670" y="40" width="250" height="170" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
            <text x="690" y="70" fill="#0284c7" fontSize="11" fontWeight="600" fontFamily="ui-monospace, monospace" letterSpacing="1">03 / STATE FORMULATION</text>
            <text x="690" y="96" fill="#0f172a" fontSize="16" fontWeight="600" fontFamily="sans-serif">Observation Vector</text>
            <text x="690" y="118" fill="#64748b" fontSize="12" fontFamily="sans-serif">16-Dimensional Tensor s_t</text>
            
            <line x1="690" y1="134" x2="900" y2="134" stroke="#e2e8f0" strokeWidth="1" />
            
            <text x="690" y="156" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Position Error Vector Δp</text>
            <text x="690" y="174" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Quaternion Orientation q</text>
            <text x="690" y="192" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Linear/Angular Rates v, ω</text>
          </g>

          {/* Connectors Row 1 */}
          <path d="M 300 125 L 360 125" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow-light)" />
          <path d="M 610 125 L 670 125" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow-light)" />

          {/* LAYER 4: PPO Policy Network (Bottom Right - Highlighted) */}
          <g className="node-group">
            <rect x="670" y="270" width="250" height="170" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" filter="drop-shadow(0 4px 10px rgba(2,132,199,0.08))" />
            <text x="690" y="300" fill="#0369a1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace" letterSpacing="1">04 / POLICY NETWORK</text>
            <text x="690" y="326" fill="#0f172a" fontSize="16" fontWeight="700" fontFamily="sans-serif">Continuous PPO Agent</text>
            <text x="690" y="348" fill="#0284c7" fontSize="12" fontWeight="500" fontFamily="sans-serif">Stable-Baselines3 + PyTorch</text>
            
            <line x1="690" y1="364" x2="900" y2="364" stroke="#bae6fd" strokeWidth="1" />
            
            <text x="690" y="386" fill="#0369a1" fontSize="11" fontWeight="500" fontFamily="ui-monospace, monospace">• Actor-Critic Architecture</text>
            <text x="690" y="404" fill="#0369a1" fontSize="11" fontWeight="500" fontFamily="ui-monospace, monospace">• Generalized Advantage (GAE)</text>
            <text x="690" y="422" fill="#0369a1" fontSize="11" fontWeight="500" fontFamily="ui-monospace, monospace">• Direct Continuous Actions a_t</text>
          </g>

          {/* Connector Down */}
          <path d="M 795 210 L 795 270" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow-light)" />

          {/* LAYER 5: Reward Shaping & Objective (Bottom Middle) */}
          <g className="node-group">
            <rect x="360" y="270" width="250" height="170" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
            <text x="380" y="300" fill="#0284c7" fontSize="11" fontWeight="600" fontFamily="ui-monospace, monospace" letterSpacing="1">05 / REWARD OBJECTIVE</text>
            <text x="380" y="326" fill="#0f172a" fontSize="16" fontWeight="600" fontFamily="sans-serif">Multi-Objective Reward</text>
            <text x="380" y="348" fill="#64748b" fontSize="12" fontFamily="sans-serif">Dense Trajectory Penalties</text>
            
            <line x1="380" y1="364" x2="590" y2="364" stroke="#e2e8f0" strokeWidth="1" />
            
            <text x="380" y="386" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Exponential Target Decay r_dist</text>
            <text x="380" y="404" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Angular Rate Penalty r_att</text>
            <text x="380" y="422" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Control Action Smoothing</text>
          </g>

          {/* LAYER 6: Motor Mixer & Flight Dynamics (Bottom Left) */}
          <g className="node-group">
            <rect x="40" y="270" width="260" height="170" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
            <text x="60" y="300" fill="#0284c7" fontSize="11" fontWeight="600" fontFamily="ui-monospace, monospace" letterSpacing="1">06 / CONTROL ACTUATION</text>
            <text x="60" y="326" fill="#0f172a" fontSize="16" fontWeight="600" fontFamily="sans-serif">Rotor Dynamics</text>
            <text x="60" y="348" fill="#64748b" fontSize="12" fontFamily="sans-serif">4-Rotor Thrust Commands</text>
            
            <line x1="60" y1="364" x2="280" y2="364" stroke="#e2e8f0" strokeWidth="1" />
            
            <text x="60" y="386" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Individual Motor PWMs [T1-T4]</text>
            <text x="60" y="404" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• 3-Axis Torque Distribution</text>
            <text x="60" y="422" fill="#334155" fontSize="11" fontFamily="ui-monospace, monospace">• Drag &amp; Rotor Downwash Model</text>
          </g>

          {/* Connectors Bottom Row */}
          <path d="M 670 355 L 610 355" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow-light)" />
          <path d="M 360 355 L 300 355" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow-light)" />

          {/* Feedback loop back to Simulation */}
          <path d="M 170 270 L 170 210" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow-light)" />
          <text x="180" y="244" fill="#0284c7" fontSize="10" fontWeight="600" fontFamily="ui-monospace, monospace" letterSpacing="0.5">STATE FEEDBACK (50 Hz)</text>
        </svg>
      </div>

      <div className="schematic-caption">
        <span className="caption-badge">BENCHMARK FINDING</span>
        <span className="caption-text">
          Under severe simulated ground-effect turbulence, the learned PPO policy achieved sub-0.18m steady-state position error and recovered from 6 m/s wind gusts in 1.2s, outperforming classical tuned PID controllers by 34%.
        </span>
      </div>
    </div>
  );
};
