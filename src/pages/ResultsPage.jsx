import React, { useState } from 'react';
import EmptyState from '../components/EmptyState.jsx';
import CareerComparisonModal from '../components/CareerComparisonModal.jsx';
import { getSkillsForCareer } from '../data/skills.js';

export default function ResultsPage({
  results,
  profile,
  savedCareers = [],
  onToggleSaveCareer,
  onStartRoadmap,
  navigate
}) {
  const [showComparison, setShowComparison] = useState(false);

  // If user hasn't taken the quiz yet, show polished empty state
  if (!results || !results.topThree || results.topThree.length === 0) {
    return (
      <EmptyState
        icon="compass"
        title="No Career Matches Yet"
        description="You have not taken the Career Discovery Quest quiz yet. Complete the 10 questions to unlock personalized matches and roadmap recommendations."
        actionText="Start Quest Quiz →"
        onAction={() => navigate('quiz')}
      />
    );
  }

  const topMatch = results.topThree[0];
  const runnerUps = results.topThree.slice(1, 3);
  const userName = profile?.nickname || 'Explorer';
  const topCareerSkills = getSkillsForCareer(topMatch.careerId);

  const isTopSaved = savedCareers.includes(topMatch.careerId);

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', animation: 'fadeIn 0.25s ease-out', display: 'flex', flexDirection: 'column', gap: 36 }}>
      {/* Personalized Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid rgba(139, 92, 246, 0.35)',
        padding: '36px 32px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 12 }}>
            <span>🎯</span>
            <span>Quest Results Computed</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: 8 }}>
            Greetings, <span className="gradient-text">{userName}</span>!
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 580 }}>
            Based on your problem-solving style, preferred work outputs, and interests, here are your top 3 career trajectories.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowComparison(true)}
          >
            ⚖️ Compare Top 3
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => navigate('quiz')}
          >
            🔄 Retake Quiz
          </button>
        </div>
      </div>

      {/* #1 Top Recommended Career: Featured Hero Card */}
      <div className="quest-card" style={{
        padding: '36px 32px',
        border: '1.5px solid rgba(56, 189, 248, 0.45)',
        boxShadow: 'var(--shadow-cyan-glow)',
        background: 'linear-gradient(145deg, rgba(22, 30, 60, 0.9), rgba(15, 23, 42, 0.95))'
      }}>
        {/* Top Badges Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              background: 'linear-gradient(135deg, #0284C7, #38BDF8)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.82rem',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.04em'
            }}>
              🏆 #1 TOP RECOMMENDATION
            </span>
            <span className="badge badge-purple">
              {topMatch.career.category.replace('-', ' ')}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onToggleSaveCareer(topMatch.careerId)}
            style={{
              background: isTopSaved ? 'rgba(236, 72, 153, 0.15)' : 'var(--bg-surface)',
              border: `1px solid ${isTopSaved ? 'rgba(236, 72, 153, 0.4)' : 'var(--border-subtle)'}`,
              borderRadius: 'var(--radius-md)',
              padding: '8px 14px',
              color: isTopSaved ? '#F472B6' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all 0.2s'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill={isTopSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            {isTopSaved ? 'Saved in Collection' : 'Save Career'}
          </button>
        </div>

        {/* Title, Tagline & Match Score Ring */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--text-primary)', marginBottom: 6 }}>
              {topMatch.career.name}
            </h2>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 500 }}>
              {topMatch.career.tagline}
            </p>
          </div>

          {/* Match Score Display */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '12px 20px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-surface)',
            border: '1px solid rgba(56, 189, 248, 0.3)'
          }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38BDF8', lineHeight: 1 }}>
                {topMatch.matchPercentage}%
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Relative Alignment
              </div>
            </div>
            <div style={{ width: 44, height: 44 }}>
              {/* Circular SVG Progress Ring */}
              <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3.5"
                  strokeDasharray={`${topMatch.matchPercentage}, 100`}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Overview Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65, marginBottom: 24 }}>
          {topMatch.career.overview}
        </p>

        {/* Dynamic "Why This Matches Your Answers" Section */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          padding: '20px',
          marginBottom: 28
        }}>
          <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-purple)', marginBottom: 12 }}>
            💡 Why this matches your quest answers:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {topMatch.whyMatches.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '1rem', marginTop: 2 }}>✓</span>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>{item.context}:</strong> “{item.reason}”
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Daily Tasks & Example Projects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 28 }}>
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
              What you will do day-to-day:
            </h4>
            <ul style={{ paddingLeft: 18, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {topMatch.career.dailyTasks.map((task, i) => (
                <li key={i} style={{ marginBottom: 6 }}>{task}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
              Resume-Ready Project Ideas:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {topMatch.career.projects.slice(0, 2).map((proj, i) => (
                <div key={i} style={{ padding: '10px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {proj.title}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => onStartRoadmap(topMatch.careerId)}
          >
            <span>🗺️ Start {topMatch.career.shortTitle} Roadmap</span>
            <span>→</span>
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => navigate('skills')}
          >
            <span>Check Skill Readiness ({topCareerSkills.length} Skills)</span>
          </button>
        </div>
      </div>

      {/* Runner-Up Career Matches (2nd and 3rd) */}
      <div>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: 16 }}>
          Additional High-Alignment Paths
        </h3>

        <div className="grid-cols-2">
          {runnerUps.map((match, idx) => {
            const rankNum = idx + 2;
            const isSaved = savedCareers.includes(match.careerId);
            return (
              <div key={match.careerId} className="quest-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="badge badge-purple">
                      #{rankNum} Match • {match.matchPercentage}% Alignment
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onToggleSaveCareer(match.careerId)}
                    style={{ fontSize: '0.8rem', color: isSaved ? '#F472B6' : 'var(--text-muted)' }}
                  >
                    {isSaved ? '★ Saved' : '☆ Save'}
                  </button>
                </div>

                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: 4 }}>
                  {match.career.name}
                </h4>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', marginBottom: 12 }}>
                  {match.career.tagline}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: 18, flex: 1 }}>
                  {match.career.overview}
                </p>

                {/* Match Reason Snippet */}
                <div style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  marginBottom: 16
                }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Key Affinity:</strong> {match.whyMatches[0]?.reason || match.career.difficulty}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 'auto' }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => onStartRoadmap(match.careerId)}
                  >
                    View Roadmap
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      onStartRoadmap(match.careerId);
                      navigate('roadmap');
                    }}
                  >
                    Set as Target
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <CareerComparisonModal
          isOpen={showComparison}
          onClose={() => setShowComparison(false)}
          careerIds={results.topThree.map((m) => m.careerId)}
          onStartRoadmap={onStartRoadmap}
        />
      )}

      {/* Disclaimer Banner */}
      <div style={{
        padding: '16px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        textAlign: 'center',
        fontSize: '0.82rem',
        color: 'var(--text-muted)',
        lineHeight: 1.5
      }}>
        ℹ️ <strong>Educational Note:</strong> Quiz match scores represent relative preference alignment synthesized from your 10 quiz selections. They are intended for self-reflection and exploratory study planning, not as guaranteed forecasts of professional hiring or fixed career limits.
      </div>
    </div>
  );
}
