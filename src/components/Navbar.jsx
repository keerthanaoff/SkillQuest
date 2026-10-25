import React, { useState } from 'react';

export default function Navbar({
  currentRoute,
  navigate,
  theme,
  toggleTheme,
  openCommandPalette,
  savedCount = 0,
  userLevel = { level: 1, title: 'Explorer', badge: '🧭' },
  xp = 0,
  viewMode = 'all-in-one',
  onToggleViewMode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'quiz', label: 'Quest Quiz' },
    { id: 'results', label: 'Matches' },
    { id: 'careers', label: 'Explore Careers' },
    { id: 'skills', label: 'Skill Gap' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'missions', label: 'Missions' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'saved', label: `Saved (${savedCount})` },
    { id: 'server', label: 'Server Test' },
    { id: 'settings', label: 'Settings' }
  ];

  const handleNavClick = (sectionId) => {
    navigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand Logo & Compass */}
        <div 
          className="brand-logo" 
          onClick={() => handleNavClick('hero')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')}
          aria-label="SkillQuest Home"
        >
          <div style={{
            width: 38,
            height: 38,
            borderRadius: '10px',
            background: 'var(--gradient-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(124, 58, 237, 0.45)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.4" />
              <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" fill="rgba(255, 255, 255, 0.2)" />
              <circle cx="12" cy="12" r="2" fill="#38BDF8" stroke="#FFFFFF" />
            </svg>
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Skill<span style={{ color: 'var(--accent-cyan)' }}>Quest</span></span>
            <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1 }}>Career Adventure</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" style={{ display: 'none' }} className="desktop-nav-container">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${currentRoute === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={currentRoute === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side controls: Search, XP Pill, Theme toggle, Mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Quick Search / Command Palette Button */}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={openCommandPalette}
            aria-label="Open command search"
            style={{ padding: '6px 12px', fontSize: '0.82rem', gap: 6 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="search-key-hint" style={{ color: 'var(--text-muted)' }}>Ctrl+K</span>
          </button>

          {/* User Level / XP Badge */}
          <div 
            onClick={() => handleNavClick('missions')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              padding: '4px 10px',
              fontSize: '0.8rem',
              fontWeight: 600
            }}
            title={`${xp} Total XP - Click to view missions and achievements`}
          >
            <span>{userLevel.badge}</span>
            <span style={{ color: 'var(--accent-purple)' }}>{xp} XP</span>
          </div>

          {/* Dark / Light Theme Toggle Button */}
          <button
            type="button"
            className="btn-icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '16px 0 8px',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: 12,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: currentRoute === item.id ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
                    color: currentRoute === item.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    fontWeight: currentRoute === item.id ? 700 : 500,
                    fontSize: '0.95rem'
                  }}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsive styling */}
      <style>{`
        @media (min-width: 1100px) {
          .desktop-nav-container {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .search-key-hint {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
