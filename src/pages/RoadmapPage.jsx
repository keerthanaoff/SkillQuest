import React, { useState, useRef } from 'react';
import { CAREERS, getCareerById } from '../data/careers.js';
import { getRoadmapForCareer } from '../data/roadmaps.js';
import { triggerConfetti } from '../utils/confetti.js';

export default function RoadmapPage({
  targetCareerId = 'frontend',
  onSelectCareer,
  milestoneState = {},
  onToggleMilestone,
  onSaveMilestoneNote,
  navigate
}) {
  const [selectedCareerId, setSelectedCareerId] = useState(targetCareerId);
  const [expandedNotes, setExpandedNotes] = useState({});
  const milestoneRefs = useRef({});

  const currentCareer = getCareerById(selectedCareerId);
  const roadmap = getRoadmapForCareer(selectedCareerId);

  // Overall calculations across all milestones
  let totalMilestones = 0;
  let completedMilestones = 0;
  let totalHours = 0;

  roadmap.stages.forEach((stage) => {
    totalHours += stage.estimatedHours;
    stage.milestones.forEach((m) => {
      totalMilestones += 1;
      if (milestoneState[m.id]?.completed) {
        completedMilestones += 1;
      }
    });
  });

  const overallProgress = totalMilestones > 0
    ? Math.round((completedMilestones / totalMilestones) * 100)
    : 0;

  // Jump to first incomplete milestone
  const handleContinueQuest = () => {
    for (const stage of roadmap.stages) {
      for (const m of stage.milestones) {
        if (!milestoneState[m.id]?.completed) {
          milestoneRefs.current[m.id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
    }
  };

  const handleMilestoneCheck = (milestoneId) => {
    const isCompleted = !milestoneState[milestoneId]?.completed;
    onToggleMilestone(milestoneId, isCompleted);
    if (isCompleted) {
      triggerConfetti();
    }
  };

  const toggleNoteBox = (milestoneId) => {
    setExpandedNotes({
      ...expandedNotes,
      [milestoneId]: !expandedNotes[milestoneId]
    });
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Header and Career Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(139, 92, 246, 0.15)', color: '#C084FC', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8 }}>
            <span>🗺️</span>
            <span>4-Stage Practical Learning Trajectory</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: 'var(--text-primary)', marginBottom: 4 }}>
            {roadmap.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            {roadmap.description}
          </p>
        </div>

        {/* Career Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Roadmap:</span>
          <select
            value={selectedCareerId}
            onChange={(e) => {
              setSelectedCareerId(e.target.value);
              if (onSelectCareer) onSelectCareer(e.target.value);
            }}
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

      {/* Progress Summary Card */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-subtle)',
        padding: '28px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
      }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
            Roadmap Completion
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 4, marginBottom: 12 }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-cyan)', lineHeight: 1 }}>
              {overallProgress}%
            </span>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              ({completedMilestones} of {totalMilestones} Milestones Completed)
            </span>
          </div>
          <div className="progress-track" style={{ height: 8 }}>
            <div className="progress-fill" style={{ width: `${overallProgress}%` }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              ~{totalHours} hrs
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Estimated Total Effort
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleContinueQuest}
          >
            Continue My Quest →
          </button>
        </div>
      </div>

      {/* The 4 Connected Stages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, position: 'relative' }}>
        {roadmap.stages.map((stage, sIdx) => {
          let stageCompleted = 0;
          stage.milestones.forEach((m) => {
            if (milestoneState[m.id]?.completed) stageCompleted += 1;
          });
          const stagePercent = Math.round((stageCompleted / stage.milestones.length) * 100);

          return (
            <div key={stage.id} style={{ position: 'relative' }}>
              {/* Stage Header Banner */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                marginBottom: 20
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: stagePercent === 100 ? '#10B981' : 'var(--gradient-quest)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stage.stageNumber}
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                      Stage {stage.stageNumber}: {stage.title}
                    </h2>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    ~{stage.estimatedHours} hrs
                  </span>
                  <span className={`badge ${stagePercent === 100 ? 'badge-emerald' : 'badge-purple'}`}>
                    {stageCompleted}/{stage.milestones.length} Done ({stagePercent}%)
                  </span>
                </div>
              </div>

              {/* Milestones Vertical List with Connected Line */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingLeft: 16, borderLeft: '2px solid rgba(139, 92, 246, 0.25)', marginLeft: 16 }}>
                {stage.milestones.map((milestone) => {
                  const isDone = Boolean(milestoneState[milestone.id]?.completed);
                  const savedNote = milestoneState[milestone.id]?.note || '';
                  const isNoteOpen = Boolean(expandedNotes[milestone.id]);

                  // Check if prerequisites are fulfilled
                  const unfulfilledPrereqs = milestone.prerequisiteIds.filter(
                    (pId) => !milestoneState[pId]?.completed
                  );
                  const hasPrereqWarning = unfulfilledPrereqs.length > 0 && !isDone;

                  return (
                    <div
                      key={milestone.id}
                      ref={(el) => (milestoneRefs.current[milestone.id] = el)}
                      className="quest-card"
                      style={{
                        padding: '20px 22px',
                        border: isDone ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid var(--border-subtle)',
                        background: isDone ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)'
                      }}
                    >
                      {/* Milestone Header */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          {/* Checkbox trigger */}
                          <button
                            type="button"
                            onClick={() => handleMilestoneCheck(milestone.id)}
                            aria-label={isDone ? `Reopen ${milestone.title}` : `Mark ${milestone.title} complete`}
                            style={{
                              width: 26,
                              height: 26,
                              borderRadius: '8px',
                              border: `2px solid ${isDone ? '#10B981' : 'var(--border-subtle)'}`,
                              background: isDone ? '#10B981' : 'var(--bg-surface)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              color: '#FFFFFF',
                              transition: 'all 0.18s'
                            }}
                          >
                            {isDone && '✓'}
                          </button>

                          <div>
                            <h3 style={{
                              fontSize: '1.05rem',
                              color: isDone ? '#34D399' : 'var(--text-primary)',
                              textDecoration: isDone ? 'line-through' : 'none'
                            }}>
                              {milestone.title}
                            </h3>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              Est. {milestone.hours} Hours
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => toggleNoteBox(milestone.id)}
                            style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                          >
                            {savedNote ? '📝 Edit Note' : '+ Add Note'}
                          </button>
                        </div>
                      </div>

                      {/* Dependency Warning */}
                      {hasPrereqWarning && (
                        <div style={{
                          marginBottom: 12,
                          padding: '6px 10px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(245, 158, 11, 0.1)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          fontSize: '0.78rem',
                          color: '#FBBF24'
                        }}>
                          ⚡ Note: Recommended to finish earlier milestones in this sequence before attempting this.
                        </div>
                      )}

                      {/* Milestone Tasks Checklist */}
                      <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 12 }}>
                        {milestone.tasks.map((task, tIdx) => (
                          <li key={tIdx} style={{ marginBottom: 4 }}>{task}</li>
                        ))}
                      </ul>

                      {/* Practice Activity Prompt */}
                      <div style={{
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)'
                      }}>
                        <strong style={{ color: 'var(--accent-purple)' }}>Practice Activity:</strong> {milestone.practiceActivity}
                      </div>

                      {/* Personal Notes Drawer */}
                      {isNoteOpen && (
                        <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
                          <label className="input-label" style={{ fontSize: '0.8rem' }}>
                            Your Personal Milestone Reflection / Resource Links:
                          </label>
                          <textarea
                            className="input-field"
                            rows={3}
                            placeholder="Add your study notes, tutorial URLs, or reflections here..."
                            defaultValue={savedNote}
                            onBlur={(e) => onSaveMilestoneNote(milestone.id, e.target.value)}
                            style={{ resize: 'vertical' }}
                          />
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>
                            Notes auto-save when you click away and persist locally.
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
