import React, { useState, useRef } from 'react';
import { CAREERS, getCareerById } from '../data/careers.js';
import { getSkillsForCareer } from '../data/skills.js';

export default function SkillGapPage({
  targetCareerId = 'frontend',
  onSelectCareer,
  skillStatuses = {},
  onUpdateSkillStatus,
  onResetSkillStatuses,
  navigate
}) {
  const [selectedCareerId, setSelectedCareerId] = useState(targetCareerId);
  const [highlightedSkillId, setHighlightedSkillId] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const skillRefs = useRef({});

  const currentCareer = getCareerById(selectedCareerId);
  const skills = getSkillsForCareer(selectedCareerId);

  // Status breakdown calculations
  let confidentCount = 0;
  let learningCount = 0;
  let notStartedCount = 0;

  skills.forEach((s) => {
    const status = skillStatuses[s.id] || 'not-started';
    if (status === 'confident') confidentCount += 1;
    else if (status === 'learning') learningCount += 1;
    else notStartedCount += 1;
  });

  const totalSkills = skills.length;
  // Readiness score: Confident = 100%, Learning = 50%
  const readinessPercentage = totalSkills > 0
    ? Math.round(((confidentCount * 1.0 + learningCount * 0.5) / totalSkills) * 100)
    : 0;

  // Missing priority / critical skills
  const missingCriticalSkills = skills.filter((s) => {
    const st = skillStatuses[s.id] || 'not-started';
    return s.importance === 'Critical' && st !== 'confident';
  });

  // Focus on weakest skill logic: pick first Critical or High that is not confident
  const handleFocusWeakest = () => {
    const weakest = skills.find((s) => {
      const st = skillStatuses[s.id] || 'not-started';
      return s.importance === 'Critical' && st === 'not-started';
    }) || skills.find((s) => {
      const st = skillStatuses[s.id] || 'not-started';
      return st !== 'confident';
    });

    if (weakest) {
      setHighlightedSkillId(weakest.id);
      skillRefs.current[weakest.id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => setHighlightedSkillId(null), 3000);
    }
  };

  const handleCareerChange = (newId) => {
    setSelectedCareerId(newId);
    if (onSelectCareer) onSelectCareer(newId);
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Header and Career Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: 'var(--text-primary)', marginBottom: 6 }}>
            Skill Gap Analysis
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Evaluate your technical readiness against industry competencies for <strong style={{ color: 'var(--accent-cyan)' }}>{currentCareer.name}</strong>.
          </p>
        </div>

        {/* Career Switcher Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target Career:</span>
          <select
            value={selectedCareerId}
            onChange={(e) => handleCareerChange(e.target.value)}
            className="input-field"
            style={{ width: 'auto', padding: '10px 14px', fontWeight: 600 }}
          >
            {CAREERS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Readiness Overview Cards */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-subtle)',
        padding: '28px 24px'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
              Overall Skill Readiness
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: readinessPercentage > 50 ? '#34D399' : 'var(--accent-cyan)', lineHeight: 1 }}>
                {readinessPercentage}%
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                calculated from {totalSkills} core competencies
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <button
              type="button"
              className="btn btn-cyan btn-sm"
              onClick={handleFocusWeakest}
            >
              🎯 Focus on My Weakest Skill
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowResetConfirm(true)}
            >
              Reset Statuses
            </button>
          </div>
        </div>

        {/* Progress Fill Bar */}
        <div className="progress-track" style={{ height: 10, marginBottom: 20 }}>
          <div
            className="progress-fill"
            style={{
              width: `${readinessPercentage}%`,
              background: readinessPercentage > 75 ? 'linear-gradient(135deg, #10B981, #34D399)' : 'var(--gradient-quest)'
            }}
          />
        </div>

        {/* Stat Breakdown Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
          <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#34D399' }}>{confidentCount}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Confident (Ready)</div>
          </div>
          <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38BDF8' }}>{learningCount}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Currently Learning</div>
          </div>
          <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{notStartedCount}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Not Started</div>
          </div>
          <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: missingCriticalSkills.length > 0 ? '#FB7185' : '#34D399' }}>
              {missingCriticalSkills.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Missing Critical Skills</div>
          </div>
        </div>
      </div>

      {/* Missing Critical Skills Callout (if any) */}
      {missingCriticalSkills.length > 0 && (
        <div style={{
          padding: '16px 20px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(244, 63, 94, 0.1)',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.25rem' }}>⚠️</span>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FB7185' }}>
                {missingCriticalSkills.length} Critical Prerequisite {missingCriticalSkills.length === 1 ? 'Skill' : 'Skills'} Not Yet Confident
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                Prioritize foundational requirements like <strong>{missingCriticalSkills[0].name}</strong> before advanced portfolio stages.
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleFocusWeakest}
          >
            Go to Next Priority
          </button>
        </div>
      )}

      {/* Skills Checklist List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {skills.map((skill, index) => {
          const currentStatus = skillStatuses[skill.id] || 'not-started';
          const isHighlighted = highlightedSkillId === skill.id;

          const getImportanceBadge = (imp) => {
            if (imp === 'Critical') return <span className="badge badge-rose">Critical Priority</span>;
            if (imp === 'High') return <span className="badge badge-purple">High Priority</span>;
            return <span className="badge badge-cyan">Medium Priority</span>;
          };

          return (
            <div
              key={skill.id}
              ref={(el) => (skillRefs.current[skill.id] = el)}
              className="quest-card"
              style={{
                border: isHighlighted
                  ? '2px solid var(--accent-cyan)'
                  : currentStatus === 'confident'
                  ? '1px solid rgba(16, 185, 129, 0.3)'
                  : currentStatus === 'learning'
                  ? '1px solid rgba(56, 189, 248, 0.3)'
                  : '1px solid var(--border-subtle)',
                boxShadow: isHighlighted ? 'var(--shadow-cyan-glow)' : 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 12 }}>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    {getImportanceBadge(skill.importance)}
                    {skill.isPrerequisite && (
                      <span className="badge badge-amber" style={{ fontSize: '0.72rem' }}>
                        Prerequisite Milestone
                      </span>
                    )}
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      #{index + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: 6 }}>
                    {skill.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    {skill.description}
                  </p>
                </div>

                {/* 3-State Status Selector */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  padding: 4,
                  border: '1px solid var(--border-subtle)'
                }}>
                  <button
                    type="button"
                    onClick={() => onUpdateSkillStatus(skill.id, 'not-started')}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      background: currentStatus === 'not-started' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      color: currentStatus === 'not-started' ? 'var(--text-primary)' : 'var(--text-muted)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Not Started
                  </button>
                  <button
                    type="button"
                    onClick={() => onUpdateSkillStatus(skill.id, 'learning')}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      background: currentStatus === 'learning' ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
                      color: currentStatus === 'learning' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Learning
                  </button>
                  <button
                    type="button"
                    onClick={() => onUpdateSkillStatus(skill.id, 'confident')}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      background: currentStatus === 'confident' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                      color: currentStatus === 'confident' ? '#34D399' : 'var(--text-muted)',
                      transition: 'all 0.15s'
                    }}
                  >
                    ✓ Confident
                  </button>
                </div>
              </div>

              {/* Recommended Practice Task Box */}
              <div style={{
                marginTop: 12,
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12
              }}>
                <span style={{ fontSize: '1rem', marginTop: 1 }}>🛠️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                    Recommended Practice Challenge:
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.5 }}>
                    {skill.practiceTask}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Confirmation Modal for Reset */}
      {showResetConfirm && (
        <div className="modal-overlay" onClick={() => setShowResetConfirm(false)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440, textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: 8 }}>
              Reset Skill Statuses?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>
              Are you sure you want to reset all skills for {currentCareer.name} back to “Not Started”? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ background: 'var(--accent-rose)' }}
                onClick={() => {
                  onResetSkillStatuses(selectedCareerId);
                  setShowResetConfirm(false);
                }}
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Educational Note */}
      <div style={{
        padding: '16px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        textAlign: 'center',
        fontSize: '0.82rem',
        color: 'var(--text-muted)'
      }}>
        ℹ️ <strong>Self-Evaluation Notice:</strong> This skill readiness percentage is derived strictly from your active checklist evaluations and does not represent an accredited certification or formal university exam.
      </div>
    </div>
  );
}
