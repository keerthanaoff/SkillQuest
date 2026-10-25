import React from 'react';
import { CAREERS, getCareerById } from '../data/careers.js';

export default function CareerComparisonModal({
  isOpen,
  onClose,
  careerIds = [],
  onStartRoadmap,
  onSelectCareer
}) {
  if (!isOpen) return null;

  const validCareers = careerIds.map((id) => getCareerById(id));

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Career comparison modal">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 960, padding: 28 }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              Side-by-Side Career Comparison
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Compare daily responsibilities, required skills, and sample projects across up to 3 paths.
            </p>
          </div>
          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            aria-label="Close comparison"
          >
            ✕
          </button>
        </div>

        {/* Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${validCareers.length}, 1fr)`,
          gap: 16,
          overflowX: 'auto',
          paddingBottom: 8
        }}>
          {validCareers.map((c) => (
            <div
              key={c.id}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                minWidth: 260
              }}
            >
              {/* Career Title & Badge */}
              <div>
                <span className="badge badge-purple" style={{ marginBottom: 6 }}>
                  {c.category.replace('-', ' ')}
                </span>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: 4 }}>
                  {c.name}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>
                  {c.difficulty}
                </span>
              </div>

              {/* Day-to-Day Activities */}
              <div>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>
                  Typical Daily Tasks
                </h4>
                <ul style={{ paddingLeft: 18, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {c.dailyTasks.slice(0, 3).map((task, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>{task}</li>
                  ))}
                </ul>
              </div>

              {/* Skills Needed */}
              <div>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>
                  Core Skills
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {c.skillsNeeded.slice(0, 5).map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        background: 'var(--bg-surface)',
                        padding: '2px 6px',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Example Project Idea */}
              <div>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
                  Resume Project Idea
                </h4>
                <div style={{
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {c.projects[0]?.title}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                    {c.projects[0]?.description}
                  </p>
                </div>
              </div>

              {/* Start Roadmap CTA */}
              <div style={{ marginTop: 'auto', paddingTop: 10 }}>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                  onClick={() => {
                    onClose();
                    onStartRoadmap(c.id);
                  }}
                >
                  Start {c.shortTitle} Quest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
