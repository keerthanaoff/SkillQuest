import React, { useState } from 'react';

export default function Constellation({ onSelectNode }) {
  const [activeNode, setActiveNode] = useState('coding');

  const nodes = [
    {
      id: 'coding',
      name: 'Coding',
      category: 'Software Architecture',
      x: 200,
      y: 80,
      color: '#38BDF8',
      role: 'Frontend, Full-Stack, QA',
      description: 'Writing maintainable code, translating requirements into logic, and building interactive software.'
    },
    {
      id: 'design',
      name: 'Design',
      category: 'User Experience',
      x: 320,
      y: 160,
      color: '#EC4899',
      role: 'UI/UX Design, Frontend',
      description: 'Crafting responsive layouts, intuitive design systems, typography hierarchies, and delightful UX.'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      category: 'Data Science & Metrics',
      x: 270,
      y: 290,
      color: '#10B981',
      role: 'Data Analyst, AI/ML',
      description: 'Extracting patterns from numbers, statistical reasoning, SQL queries, and predictive modeling.'
    },
    {
      id: 'systems',
      name: 'Systems',
      category: 'Cloud & Infrastructure',
      x: 130,
      y: 290,
      color: '#F59E0B',
      role: 'Cloud/DevOps, IT Ops, Security',
      description: 'Orchestrating container pipelines, defending network perimeters, and scaling cloud platforms.'
    },
    {
      id: 'strategy',
      name: 'Strategy',
      category: 'Product & Leadership',
      x: 80,
      y: 160,
      color: '#A78BFA',
      role: 'Product Management, Agile',
      description: 'Defining product roadmaps, aligning engineering trade-offs, and solving high-value customer needs.'
    }
  ];

  // Central Core Node
  const coreNode = { x: 200, y: 195, name: 'You' };

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div style={{
      background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(11, 16, 32, 0) 70%)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      padding: '24px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Starry Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.35,
        pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, position: 'relative', zIndex: 2 }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-cyan)' }}>
          Interactive Skill Orbit
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Hover nodes to explore connections
        </span>
      </div>

      {/* SVG Orbit and Constellation Paths */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <svg viewBox="0 0 400 370" style={{ width: '100%', maxWidth: 400, height: 'auto', overflow: 'visible' }}>
          {/* Orbital guide rings */}
          <circle cx="200" cy="195" r="135" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 4" />
          <circle cx="200" cy="195" r="75" fill="none" stroke="rgba(139, 92, 246, 0.12)" />

          {/* Connected Constellation Lines between surrounding nodes */}
          <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[2].x} y2={nodes[2].y} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[3].x} y2={nodes[3].y} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <line x1={nodes[3].x} y1={nodes[3].y} x2={nodes[4].x} y2={nodes[4].y} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <line x1={nodes[4].x} y1={nodes[4].y} x2={nodes[0].x} y2={nodes[0].y} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

          {/* Radiating lines from Center Core */}
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <line
                key={`line-${node.id}`}
                x1={coreNode.x}
                y1={coreNode.y}
                x2={node.x}
                y2={node.y}
                stroke={isSelected ? node.color : 'rgba(139, 92, 246, 0.25)'}
                strokeWidth={isSelected ? 2.5 : 1}
                strokeDasharray={isSelected ? 'none' : '2 3'}
                style={{ transition: 'all 0.3s' }}
              />
            );
          })}

          {/* Central Star Core */}
          <g>
            <circle cx={coreNode.x} cy={coreNode.y} r="22" fill="url(#coreGradient)" />
            <circle cx={coreNode.x} cy={coreNode.y} r="26" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
            <text x={coreNode.x} y={coreNode.y + 4} textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
              YOU
            </text>
          </g>

          {/* Interactive Node Elements */}
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <g
                key={node.id}
                onClick={() => {
                  setActiveNode(node.id);
                  if (onSelectNode) onSelectNode(node.id);
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Outer Glow Halo on Active */}
                {isSelected && (
                  <circle cx={node.x} cy={node.y} r="26" fill={node.color} opacity="0.25" />
                )}
                {/* Node Body */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill="var(--bg-surface)"
                  stroke={node.color}
                  strokeWidth={isSelected ? 3 : 1.5}
                  style={{ transition: 'all 0.2s' }}
                />
                <circle cx={node.x} cy={node.y} r="6" fill={node.color} />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + 32}
                  textAnchor="middle"
                  fill={isSelected ? '#FFFFFF' : 'var(--text-secondary)'}
                  fontSize="11"
                  fontWeight={isSelected ? 700 : 500}
                >
                  {node.name}
                </text>
              </g>
            );
          })}

          <defs>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#7C3AED" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Dynamic Node Detail Card */}
      <div style={{
        marginTop: 16,
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: `1px solid ${currentNode.color}44`,
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: currentNode.color }}>
            {currentNode.name} • {currentNode.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Associated Roles: {currentNode.role}
          </span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {currentNode.description}
        </p>
      </div>
    </div>
  );
}
