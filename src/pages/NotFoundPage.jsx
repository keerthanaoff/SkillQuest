import React from 'react';

export default function NotFoundPage({ navigate }) {
  return (
    <div style={{
      maxWidth: 600,
      margin: '60px auto',
      textAlign: 'center',
      animation: 'fadeIn 0.25s ease-out'
    }}>
      <div className="quest-card" style={{ padding: '48px 32px' }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(139, 92, 246, 0.15)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          marginBottom: 20
        }}>
          🌌
        </div>

        <h1 style={{ fontSize: '2rem', marginBottom: 10, color: 'var(--text-primary)' }}>
          404 — Cosmic Void Encountered
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 28 }}>
          The path you are looking for has drift out of the known constellation. Return to the home station to continue your quest.
        </p>

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => navigate('landing')}
        >
          Return to Quest Home →
        </button>
      </div>
    </div>
  );
}
