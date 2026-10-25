import React from 'react';

export default function EmptyState({
  icon = 'compass',
  title = 'No items found',
  description = 'Start your career quest to unlock personalized insights and tracking.',
  actionText,
  onAction
}) {
  const renderIcon = () => {
    switch (icon) {
      case 'compass':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
            <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" fill="rgba(139, 92, 246, 0.15)" />
            <circle cx="12" cy="12" r="2" fill="var(--accent-cyan)" />
          </svg>
        );
      case 'bookmark':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="rgba(6, 182, 212, 0.1)" />
            <line x1="12" y1="7" x2="12" y2="13" />
            <line x1="9" y1="10" x2="15" y2="10" />
          </svg>
        );
      case 'search':
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pink)" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" fill="rgba(236, 72, 153, 0.1)" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        );
      case 'trophy':
      default:
        return (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" strokeWidth="1.5">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
            <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" fill="rgba(245, 158, 11, 0.12)" />
          </svg>
        );
    }
  };

  return (
    <div className="quest-card" style={{
      textAlign: 'center',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dashed',
      borderColor: 'var(--border-subtle)'
    }}>
      <div style={{
        width: 96,
        height: 96,
        borderRadius: '50%',
        background: 'var(--bg-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        boxShadow: 'var(--shadow-sm)'
      }}>
        {renderIcon()}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: 8, color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 440, fontSize: '0.92rem', marginBottom: 24 }}>
        {description}
      </p>
      {actionText && onAction && (
        <button type="button" className="btn btn-primary" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
}
