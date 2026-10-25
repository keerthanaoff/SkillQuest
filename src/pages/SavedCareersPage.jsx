import React, { useState } from 'react';
import { getCareerById } from '../data/careers.js';
import CareerCard from '../components/CareerCard.jsx';
import EmptyState from '../components/EmptyState.jsx';
import CareerComparisonModal from '../components/CareerComparisonModal.jsx';

export default function SavedCareersPage({
  savedCareers = [],
  onToggleSaveCareer,
  onStartRoadmap,
  navigate
}) {
  const [showComparison, setShowComparison] = useState(false);
  const [selectedForModal, setSelectedForModal] = useState(null);

  if (savedCareers.length === 0) {
    return (
      <EmptyState
        icon="bookmark"
        title="No Saved Careers Yet"
        description="You have not bookmarked any career paths yet. Explore our directory of 10 tech careers and save the ones that spark your interest."
        actionText="Explore Careers Directory →"
        onAction={() => navigate('careers')}
      />
    );
  }

  const savedList = savedCareers.map((id) => getCareerById(id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: 'var(--text-primary)', marginBottom: 6 }}>
            Saved Career Paths ({savedCareers.length})
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Your curated collection of bookmarked technology career trajectories.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {savedCareers.length >= 2 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowComparison(true)}
            >
              ⚖️ Compare Saved Paths ({Math.min(3, savedCareers.length)})
            </button>
          )}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('careers')}
          >
            + Browse More Careers
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid-cols-3">
        {savedList.map((career) => (
          <CareerCard
            key={career.id}
            career={career}
            isSaved={true}
            onToggleSave={onToggleSaveCareer}
            onViewDetails={(c) => setSelectedForModal(c)}
            onStartRoadmap={onStartRoadmap}
          />
        ))}
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <CareerComparisonModal
          isOpen={showComparison}
          onClose={() => setShowComparison(false)}
          careerIds={savedCareers.slice(0, 3)}
          onStartRoadmap={onStartRoadmap}
        />
      )}

      {/* Quick Details Modal */}
      {selectedForModal && (
        <div className="modal-overlay" onClick={() => setSelectedForModal(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span className="badge badge-purple">{selectedForModal.category}</span>
              <button type="button" className="btn-icon" onClick={() => setSelectedForModal(null)}>✕</button>
            </div>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: 6 }}>{selectedForModal.name}</h2>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.92rem', marginBottom: 16 }}>{selectedForModal.tagline}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>{selectedForModal.overview}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => onToggleSaveCareer(selectedForModal.id)}
              >
                Remove from Saved
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  const id = selectedForModal.id;
                  setSelectedForModal(null);
                  onStartRoadmap(id);
                }}
              >
                Start Roadmap →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
