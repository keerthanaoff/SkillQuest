import React, { useState, useEffect, useRef } from 'react';
import { CAREERS } from '../data/careers.js';

export default function CommandPalette({ isOpen, onClose, navigate, onSelectCareer }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Define searchable items
  const staticItems = [
    { type: 'page', id: 'landing', title: 'Home / Landing Page', subtitle: 'Platform overview, constellation, and features', route: 'landing', icon: '🏠' },
    { type: 'page', id: 'onboarding', title: 'Student Onboarding', subtitle: 'Set your nickname, education level, and goals', route: 'onboarding', icon: '🚀' },
    { type: 'page', id: 'quiz', title: 'Career Discovery Quiz', subtitle: '10 interactive multi-choice exploratory questions', route: 'quiz', icon: '🧭' },
    { type: 'page', id: 'results', title: 'Career Match Results', subtitle: 'View top recommendations and match percentages', route: 'results', icon: '🎯' },
    { type: 'page', id: 'careers', title: 'Career Explorer Directory', subtitle: 'Browse all 10 tech careers with filters and search', route: 'careers', icon: '🔍' },
    { type: 'page', id: 'skills', title: 'Skill Gap Analysis', subtitle: 'Track readiness percentage and missing priorities', route: 'skills', icon: '⚡' },
    { type: 'page', id: 'roadmap', title: '4-Stage Career Roadmap', subtitle: 'Foundations, Core, Projects, and Career Prep', route: 'roadmap', icon: '🗺️' },
    { type: 'page', id: 'missions', title: 'Learning Missions & XP', subtitle: 'Daily quests, achievement badges, and streaks', route: 'missions', icon: '🛡️' },
    { type: 'page', id: 'dashboard', title: 'Progress Dashboard', subtitle: 'Weekly activity chart, skill distribution, and stats', route: 'dashboard', icon: '📊' },
    { type: 'page', id: 'saved', title: 'Saved Careers Collection', subtitle: 'Quick comparison of bookmarked career paths', route: 'saved', icon: '⭐' },
    { type: 'page', id: 'settings', title: 'Settings & Data Management', subtitle: 'Export/import JSON backup and privacy options', route: 'settings', icon: '⚙️' }
  ];

  // Career search items
  const careerItems = CAREERS.map((c) => ({
    type: 'career',
    id: `career-${c.id}`,
    title: c.name,
    subtitle: `${c.difficulty} • ${c.tagline}`,
    careerId: c.id,
    icon: '💼'
  }));

  const allItems = [...staticItems, ...careerItems];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q)
        );
      });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        executeItem(filteredItems[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const executeItem = (item) => {
    onClose();
    if (item.type === 'page') {
      navigate(item.route);
    } else if (item.type === 'career') {
      if (onSelectCareer) onSelectCareer(item.careerId);
      navigate('careers');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Command search palette">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 580, padding: 0, overflow: 'hidden' }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="input-field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a page, career, or skill..."
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              fontSize: '1rem',
              boxShadow: 'none'
            }}
          />
          <kbd style={{
            fontSize: '0.75rem',
            padding: '3px 8px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px',
            color: 'var(--text-muted)'
          }}>ESC</kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: 380, overflowY: 'auto', padding: '8px' }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No matches found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => executeItem(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  background: selectedIndex === idx ? 'rgba(139, 92, 246, 0.14)' : 'transparent',
                  border: selectedIndex === idx ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid transparent',
                  transition: 'background 0.15s'
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.subtitle}
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                  {item.type}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <span>Use <strong>↑</strong> <strong>↓</strong> to navigate</span>
          <span>Press <strong>Enter</strong> to open</span>
        </div>
      </div>
    </div>
  );
}
