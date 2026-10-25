import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-secondary)',
      padding: '48px 24px 36px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 36
      }}>
        {/* Brand Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: 'var(--gradient-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="12" cy="12" r="2" fill="#38BDF8" stroke="#FFFFFF" />
              </svg>
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>Skill<span style={{ color: 'var(--accent-cyan)' }}>Quest</span></span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>
            “Your future. Your skills. Your next move.”
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>
            An interactive career discovery adventure helping college students find their direction, analyze skill gaps, and build realistic learning roadmaps.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
            Quest Navigation
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem' }}>
            <li>
              <button type="button" onClick={() => navigate('quiz')} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                Career Discovery Quiz
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigate('careers')} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                Explore 10 Tech Careers
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigate('skills')} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                Skill Gap Checklist
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigate('roadmap')} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                4-Stage Practical Roadmaps
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigate('missions')} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                Daily Learning Missions & XP
              </button>
            </li>
          </ul>
        </div>

        {/* Platform Integrity & Privacy */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
            Data Privacy & Standards
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 12 }}>
            SkillQuest is 100% client-side. Your quiz answers, skill evaluations, roadmap progress, and XP are stored exclusively in your browser’s local storage.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#34D399',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No external tracking or server storage
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1240,
        margin: '36px auto 0',
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        fontSize: '0.82rem',
        color: 'var(--text-muted)'
      }}>
        <span>SkillQuest Educational Career Exploration Project • Built for College Students</span>
        <span>Version 1.0.0 • Local Offline First</span>
      </div>
    </footer>
  );
}
