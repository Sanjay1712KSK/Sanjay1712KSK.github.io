import React from 'react';

export const ResearchDiagram: React.FC = () => {
  return (
    <div className="research-schematic-wrapper" aria-label="RL Flight Simulation Architecture Diagram">
      <div className="schematic-header">
        <span className="schematic-tag">SYSTEM ARCHITECTURE</span>
        <span className="schematic-title">Closed-Loop Reinforcement Learning Flight Control in Simulation</span>
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
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            <marker
              id="arrow-muted"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
            </marker>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#grid)" rx="8" />

          {/* LAYER 1: Physics & Environment Simulation */}
          <g className="node-group">
            <rect x="40" y="40" width="260" height="170" rx="6" fill="#14171d" stroke="#262c36" strokeWidth="1.5" />
            <text x="60" y="70" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">01 / SIMULATION ENGINE</text>
            <text x="60" y="96" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="sans-serif">Unreal Engine 5.5</text>
            <text x="60" y="118" fill="#64748b" fontSize="12" fontFamily="sans-serif">+ Cosys AirSim Plugin</text>
            
            <line x1="60" y1="134" x2="280" y2="134" stroke="#1e242e" strokeWidth="1" />
            
            <text x="60" y="156" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• 200 Hz Physics Substepping</text>
            <text x="60" y="174" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Ground Effect Aerodynamics</text>
            <text x="60" y="192" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• GPS-Denied Indoor Geometry</text>
          </g>

          {/* LAYER 2: Synthetic Sensor Pipeline */}
          <g className="node-group">
            <rect x="360" y="40" width="250" height="170" rx="6" fill="#14171d" stroke="#262c36" strokeWidth="1.5" />
            <text x="380" y="70" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">02 / SENSOR SUITE</text>
            <text x="380" y="96" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="sans-serif">Sensor Simulation</text>
            <text x="380" y="118" fill="#64748b" fontSize="12" fontFamily="sans-serif">Synthetic Telemetry Stream</text>
            
            <line x1="380" y1="134" x2="590" y2="134" stroke="#1e242e" strokeWidth="1" />
            
            <text x="380" y="156" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• 6-DoF Accelerometer &amp; Gyro</text>
            <text x="380" y="174" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Downward Optical Flow</text>
            <text x="380" y="192" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Stochastic Noise Injection</text>
          </g>

          {/* LAYER 3: Observation Normalizer */}
          <g className="node-group">
            <rect x="670" y="40" width="250" height="170" rx="6" fill="#14171d" stroke="#262c36" strokeWidth="1.5" />
            <text x="690" y="70" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">03 / STATE FORMULATION</text>
            <text x="690" y="96" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="sans-serif">State Vector Assembly</text>
            <text x="690" y="118" fill="#64748b" fontSize="12" fontFamily="sans-serif">16-Dimensional Observation</text>
            
            <line x1="690" y1="134" x2="900" y2="134" stroke="#1e242e" strokeWidth="1" />
            
            <text x="690" y="156" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Position Error Vector Δp</text>
            <text x="690" y="174" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Quaternion Orientation q</text>
            <text x="690" y="192" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Linear/Angular Rates v, ω</text>
          </g>

          {/* Connectors Row 1 */}
          <path d="M 300 125 L 360 125" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M 610 125 L 670 125" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* LAYER 4: PPO Policy Network (Bottom Right) */}
          <g className="node-group">
            <rect x="670" y="270" width="250" height="170" rx="6" fill="#14171d" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
            <text x="690" y="300" fill="#38bdf8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">04 / POLICY NETWORK</text>
            <text x="690" y="326" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="sans-serif">Continuous PPO Agent</text>
            <text x="690" y="348" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">Stable-Baselines3 + PyTorch</text>
            
            <line x1="690" y1="364" x2="900" y2="364" stroke="#1e242e" strokeWidth="1" />
            
            <text x="690" y="386" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Actor-Critic Architecture</text>
            <text x="690" y="404" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Generalized Advantage (GAE)</text>
            <text x="690" y="422" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Continuous Thrust Actions</text>
          </g>

          {/* Connector Down */}
          <path d="M 795 210 L 795 270" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* LAYER 5: Reward Shaping & Objective (Bottom Middle) */}
          <g className="node-group">
            <rect x="360" y="270" width="250" height="170" rx="6" fill="#14171d" stroke="#262c36" strokeWidth="1.5" />
            <text x="380" y="300" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">05 / REWARD OPTIMIZATION</text>
            <text x="380" y="326" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="sans-serif">Reward Function</text>
            <text x="380" y="348" fill="#64748b" fontSize="12" fontFamily="sans-serif">Multi-Objective Penalties</text>
            
            <line x1="380" y1="364" x2="590" y2="364" stroke="#1e242e" strokeWidth="1" />
            
            <text x="380" y="386" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Target Distance Decay r_dist</text>
            <text x="380" y="404" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Angular Stability r_att</text>
            <text x="380" y="422" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Control Effort Regularization</text>
          </g>

          {/* LAYER 6: Motor Mixer & Flight Dynamics (Bottom Left) */}
          <g className="node-group">
            <rect x="40" y="270" width="260" height="170" rx="6" fill="#14171d" stroke="#262c36" strokeWidth="1.5" />
            <text x="60" y="300" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">06 / CONTROL ACTUATION</text>
            <text x="60" y="326" fill="#f1f5f9" fontSize="16" fontWeight="600" fontFamily="sans-serif">Rotor Actuation</text>
            <text x="60" y="348" fill="#64748b" fontSize="12" fontFamily="sans-serif">4-Rotor Thrust Commands</text>
            
            <line x1="60" y1="364" x2="280" y2="364" stroke="#1e242e" strokeWidth="1" />
            
            <text x="60" y="386" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Individual Motor PWMs [T1-T4]</text>
            <text x="60" y="404" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Yaw/Pitch/Roll Torque Mixing</text>
            <text x="60" y="422" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">• Simulated Aerodynamic Drag</text>
          </g>

          {/* Connectors Bottom Row */}
          <path d="M 670 355 L 610 355" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M 360 355 L 300 355" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Feedback loop back to Simulation */}
          <path d="M 170 270 L 170 210" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="178" y="244" fill="#38bdf8" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.5">STATE FEEDBACK (50 Hz)</text>
        </svg>
      </div>

      <div className="schematic-caption">
        <span className="caption-bullet">■</span>
        <span>
          <strong>Architecture Summary:</strong> Unreal Engine 5.5 executes high-fidelity aerodynamic substepping at 200 Hz. Cosys AirSim publishes noisy sensor states via RPC to a Python client running a continuous PPO actor-critic network at 50 Hz, iteratively optimizing rotor RPM commands against multi-objective trajectory reward penalties.
        </span>
      </div>
    </div>
  );
};
