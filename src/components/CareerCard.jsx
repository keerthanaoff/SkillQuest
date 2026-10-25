import React from 'react';

export default function CareerCard({
  career,
  isSaved,
  onToggleSave,
  onViewDetails,
  onStartRoadmap
}) {
  const getDifficultyBadge = (difficulty) => {
    if (difficulty.includes('Beginner') && !difficulty.includes('Intermediate')) {
      return <span className="badge badge-emerald">Beginner Friendly</span>;
    }
    if (difficulty.includes('Advanced')) {
      return <span className="badge badge-amber">Intermediate to Advanced</span>;
    }
    return <span className="badge badge-cyan">{difficulty}</span>;
  };

  return (
    <div className="quest-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
      {/* Top Header: Category Tag & Save Bookmark */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span className="badge badge-purple">
          {career.category.replace('-', ' ')}
        </span>
        <button
          type="button"
          onClick={() => onToggleSave(career.id)}
          aria-label={isSaved ? `Remove ${career.name} from saved` : `Save ${career.name}`}
          style={{
            background: isSaved ? 'rgba(236, 72, 153, 0.15)' : 'var(--bg-surface)',
            border: `1px solid ${isSaved ? 'rgba(236, 72, 153, 0.4)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-sm)',
            padding: '6px 10px',
            color: isSaved ? '#F472B6' : 'var(--text-muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.8rem',
            fontWeight: 600,
            transition: 'all 0.2s'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>

      {/* Career Title & Tagline */}
      <h3 style={{ fontSize: '1.25rem', marginBottom: 6, color: 'var(--text-primary)' }}>
        {career.name}
      </h3>
      <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 500, marginBottom: 12 }}>
        {career.tagline}
      </p>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: 16, flex: 1 }}>
        {career.overview}
      </p>

      {/* Difficulty and Skills Preview */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 10 }}>
          {getDifficultyBadge(career.difficulty)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {career.skillsNeeded.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                background: 'var(--bg-surface)',
                color: 'var(--text-secondary)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {skill}
            </span>
          ))}
          {career.skillsNeeded.length > 4 && (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
              +{career.skillsNeeded.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => onViewDetails(career)}
          style={{ width: '100%' }}
        >
          View Details
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onStartRoadmap(career.id)}
          style={{ width: '100%' }}
        >
          Start Roadmap
        </button>
      </div>
    </div>
  );
}
