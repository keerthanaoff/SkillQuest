import React, { useState, useMemo } from 'react';
import { CAREERS, CAREER_CATEGORIES } from '../data/careers.js';
import CareerCard from '../components/CareerCard.jsx';
import EmptyState from '../components/EmptyState.jsx';

export default function CareerExplorerPage({
  savedCareers = [],
  onToggleSaveCareer,
  onStartRoadmap,
  initialSelectedCareerId = null
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [savedOnly, setSavedOnly] = useState(false);
  const [detailModalCareer, setDetailModalCareer] = useState(() => {
    if (initialSelectedCareerId) {
      return CAREERS.find((c) => c.id === initialSelectedCareerId) || null;
    }
    return null;
  });

  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  // Filtered Careers
  const filteredCareers = useMemo(() => {
    return CAREERS.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all') {
        if (!c.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase())) {
          return false;
        }
      }
      // Saved only filter
      if (savedOnly && !savedCareers.includes(c.id)) {
        return false;
      }
      // Search Query filter (checks title, tagline, overview, and skills)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesTag = c.tagline.toLowerCase().includes(q);
        const matchesOverview = c.overview.toLowerCase().includes(q);
        const matchesSkills = c.skillsNeeded.some((s) => s.toLowerCase().includes(q));
        if (!matchesName && !matchesTag && !matchesOverview && !matchesSkills) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, savedOnly, savedCareers]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSavedOnly(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--text-primary)', marginBottom: 8 }}>
          Career Explorer Directory
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 640 }}>
          Browse all 10 technology career paths, discover daily work tasks, explore resume project ideas, and launch custom learning roadmaps.
        </p>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="quest-card" style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Search Input */}
          <div style={{ flex: '1 1 280px', position: 'relative' }}>
            <input
              type="text"
              className="input-field"
              placeholder="Search by role, keyword, or skill (e.g. React, SQL, Cloud)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: 40 }}
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-muted)"
              strokeWidth="2"
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Difficulty Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '10px 14px' }}
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff === 'all' ? 'All Difficulties' : diff}
                </option>
              ))}
            </select>
          </div>

          {/* Saved-Only Checkbox Toggle */}
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)', userSelect: 'none' }}>
            <input
              type="checkbox"
              checked={savedOnly}
              onChange={(e) => setSavedOnly(e.target.checked)}
              style={{ width: 16, height: 16, accentColor: 'var(--accent-purple)' }}
            />
            <span>Saved careers only ({savedCareers.length})</span>
          </label>

          {/* Clear Filters Button */}
          {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all' || savedOnly) && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleClearFilters}
              style={{ fontSize: '0.8rem' }}
            >
              Clear Filters ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
          {CAREER_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'rgba(139, 92, 246, 0.2)' : 'var(--bg-surface)',
                  border: `1px solid ${isSelected ? 'var(--accent-purple)' : 'var(--border-subtle)'}`,
                  color: isSelected ? '#C084FC' : 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 700 : 500,
                  transition: 'all 0.15s'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Career Cards Grid or Empty State */}
      {filteredCareers.length === 0 ? (
        <EmptyState
          icon="search"
          title="No Career Matches Found"
          description="No careers matched your current search criteria or filters. Try adjusting your search term or clearing active filters."
          actionText="Clear All Filters"
          onAction={handleClearFilters}
        />
      ) : (
        <div className="grid-cols-3">
          {filteredCareers.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              isSaved={savedCareers.includes(career.id)}
              onToggleSave={onToggleSaveCareer}
              onViewDetails={(c) => setDetailModalCareer(c)}
              onStartRoadmap={onStartRoadmap}
            />
          ))}
        </div>
      )}

      {/* In-App Career Details Modal */}
      {detailModalCareer && (
        <div className="modal-overlay" onClick={() => setDetailModalCareer(null)} role="dialog" aria-modal="true">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 780, padding: 32 }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span className="badge badge-purple">
                {detailModalCareer.category.replace('-', ' ')}
              </span>
              <button
                type="button"
                className="btn-icon"
                onClick={() => setDetailModalCareer(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: 4 }}>
              {detailModalCareer.name}
            </h2>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 500, marginBottom: 16 }}>
              {detailModalCareer.tagline}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 24 }}>
              {detailModalCareer.overview}
            </p>

            {/* Daily Responsibilities */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
                Day-to-day Responsibilities
              </h3>
              <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {detailModalCareer.dailyTasks.map((t, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Recommended Prerequisites */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
                Recommended Prerequisites & Aptitudes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {detailModalCareer.prerequisites.map((p, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-purple)' }}>•</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills Needed */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
                Required Skill Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {detailModalCareer.skillsNeeded.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Project Ideas */}
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
                Resume-Ready Project Concepts
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {detailModalCareer.projects.map((proj, idx) => (
                  <div key={idx} style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{proj.title}</strong>
                      <div style={{ display: 'flex', gap: 4 }}>
                        {proj.tags.map((tag, tIdx) => (
                          <span key={tIdx} style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>#{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-end', paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onToggleSaveCareer(detailModalCareer.id)}
              >
                {savedCareers.includes(detailModalCareer.id) ? '★ Saved' : '☆ Save Career'}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const targetId = detailModalCareer.id;
                  setDetailModalCareer(null);
                  onStartRoadmap(targetId);
                }}
              >
                Launch Roadmap →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
