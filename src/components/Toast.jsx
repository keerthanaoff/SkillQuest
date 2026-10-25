import React, { useEffect } from 'react';

export default function Toast({ message, type = 'info', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const typeConfig = {
    success: { icon: '✨', border: 'rgba(16, 185, 129, 0.4)', bg: 'rgba(6, 78, 59, 0.9)', text: '#34D399' },
    xp: { icon: '⚡', border: 'rgba(139, 92, 246, 0.5)', bg: 'rgba(76, 29, 149, 0.9)', text: '#C084FC' },
    info: { icon: 'ℹ️', border: 'rgba(6, 182, 212, 0.4)', bg: 'rgba(12, 74, 96, 0.9)', text: '#38BDF8' },
    warning: { icon: '⚠️', border: 'rgba(245, 158, 11, 0.4)', bg: 'rgba(120, 53, 15, 0.9)', text: '#FBBF24' }
  };

  const cfg = typeConfig[type] || typeConfig.info;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 20px',
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        borderRadius: 'var(--radius-md)',
        color: '#FFFFFF',
        fontSize: '0.9rem',
        fontWeight: 500,
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(10px)',
        animation: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        maxWidth: 380
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>{cfg.icon}</span>
      <span style={{ flex: 1 }}>{message}</span>
      <button
        type="button"
        onClick={onClose}
        style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1.1rem',
          padding: 2,
          lineHeight: 1
        }}
        aria-label="Dismiss toast"
      >
        ×
      </button>
    </div>
  );
}
