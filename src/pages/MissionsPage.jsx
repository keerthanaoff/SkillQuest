import React, { useState } from 'react';
import { DAILY_MISSIONS_POOL, BADGES, getLevelForXP } from '../data/missions.js';
import { calculateStreak, getPast7DaysActivity, formatRelativeTime } from '../utils/dates.js';

export default function MissionsPage({
  xp = 0,
  missionsState = {},
  onCompleteMission,
  activities = [],
  savedCareers = [],
  quizResults = null,
  skillStatuses = {},
  milestoneState = {},
  navigate
}) {
  const [dailyPoolIndex, setDailyPoolIndex] = useState(0);

  const currentLevelInfo = getLevelForXP(xp);
  const streakDays = calculateStreak(activities);
  const past7Days = getPast7DaysActivity(activities);

  // Active Daily Mission
  const activeMission = DAILY_MISSIONS_POOL[dailyPoolIndex % DAILY_MISSIONS_POOL.length];
  const isMissionDone = Boolean(missionsState[activeMission.id]?.completed);

  const handleNextMission = () => {
    setDailyPoolIndex((prev) => (prev + 1) % DAILY_MISSIONS_POOL.length);
  };

  // Compute Badge Unlock States based on real actual stored progress
  const isBadgeUnlocked = (badgeId) => {
    switch (badgeId) {
      case 'badge-first-quest':
        return Boolean(quizResults && quizResults.topThree);
      case 'badge-skill-seeker': {
        const touched = Object.values(skillStatuses).filter((st) => st === 'learning' || st === 'confident');
        return touched.length >= 3;
      }
      case 'badge-milestone-crusher': {
        const completedMilestones = Object.values(milestoneState).filter((m) => m?.completed);
        return completedMilestones.length >= 1;
      }
      case 'badge-career-collector':
        return savedCareers.length >= 2;
      case 'badge-streak-pioneer':
        return streakDays >= 2;
      case 'badge-master-builder':
        return xp >= 250;
      case 'badge-readiness-champion': {
        const confidentSkills = Object.values(skillStatuses).filter((st) => st === 'confident');
        return confidentSkills.length >= 5;
      }
      case 'badge-data-steward':
        return activities.some((a) => a.type === 'export');
      default:
        return false;
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Header Banner */}
      <div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: 'var(--text-primary)', marginBottom: 6 }}>
          Learning Missions & Quest XP
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          Tackle daily learning objectives, earn experience points, unlock achievement badges, and build your technical momentum.
        </p>
      </div>

      {/* Gamification Level & Streak Status Grid */}
      <div className="grid-cols-3">
        {/* Level Card */}
        <div className="quest-card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            background: 'var(--gradient-quest)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            flexShrink: 0
          }}>
            {currentLevelInfo.badge}
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Current Rank
            </span>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Level {currentLevelInfo.level}: {currentLevelInfo.title}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
              {xp} Total Quest XP
            </div>
          </div>
        </div>

        {/* Streak Indicator */}
        <div className="quest-card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            flexShrink: 0
          }}>
            🔥
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Activity Streak
            </span>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FBBF24' }}>
              {streakDays} {streakDays === 1 ? 'Day' : 'Days'} Active
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {streakDays > 0 ? 'Keep your daily momentum alive!' : 'Complete an activity today'}
            </div>
          </div>
        </div>

        {/* Next Tier Target */}
        <div className="quest-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.82rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Progress to Next Level</span>
            <span style={{ color: 'var(--accent-purple)', fontWeight: 700 }}>{currentLevelInfo.progressInLevel}%</span>
          </div>
          <div className="progress-track" style={{ height: 8, marginBottom: 8 }}>
            <div className="progress-fill" style={{ width: `${currentLevelInfo.progressInLevel}%` }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {currentLevelInfo.nextLevel
              ? `${currentLevelInfo.xpToNext} XP needed for ${currentLevelInfo.nextLevel.title}`
              : 'Max Tier reached! Outstanding accomplishment.'}
          </div>
        </div>
      </div>

      {/* Daily Quest Card & Weekly Goal */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {/* Daily Mission Card */}
        <div className="quest-card" style={{
          border: '1.5px solid rgba(139, 92, 246, 0.4)',
          background: 'linear-gradient(145deg, rgba(22, 30, 60, 0.9), rgba(15, 23, 42, 0.95))',
          padding: '28px 24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span className="badge badge-purple">
              Daily Mission • +{activeMission.xp} XP
            </span>
            <button
              type="button"
              onClick={handleNextMission}
              style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
            >
              Choose Another Mission ↻
            </button>
          </div>

          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: 6 }}>
            {activeMission.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: 20 }}>
            {activeMission.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            {isMissionDone ? (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34D399',
                fontSize: '0.88rem',
                fontWeight: 600
              }}>
                ✓ Mission Completed (+{activeMission.xp} XP Earned)
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onCompleteMission(activeMission)}
              >
                Mark Mission Completed (+{activeMission.xp} XP)
              </button>
            )}

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => navigate(activeMission.actionRoute)}
            >
              Go to {activeMission.category} →
            </button>
          </div>
        </div>

        {/* Weekly Progress Bar Chart */}
        <div className="quest-card" style={{ padding: '28px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                7-Day Activity Velocity
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Recorded learning achievements per day
              </p>
            </div>
            <span className="badge badge-cyan">
              {activities.length} Total Events
            </span>
          </div>

          {/* Inline CSS Bar Chart */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: 120,
            padding: '10px 0 0',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            {past7Days.map((day, idx) => {
              const maxVal = Math.max(...past7Days.map((d) => d.count), 4);
              const barHeight = Math.max(8, Math.round((day.count / maxVal) * 90));
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div
                    title={`${day.dayName}: ${day.count} activities (${day.xp} XP)`}
                    style={{
                      width: '45%',
                      maxWidth: 24,
                      height: `${barHeight}px`,
                      borderRadius: '4px 4px 0 0',
                      background: day.isToday
                        ? 'var(--gradient-quest)'
                        : day.count > 0
                        ? 'rgba(139, 92, 246, 0.6)'
                        : 'rgba(255, 255, 255, 0.06)',
                      transition: 'height 0.4s ease'
                    }}
                  />
                  <span style={{ fontSize: '0.72rem', color: day.isToday ? 'var(--accent-cyan)' : 'var(--text-muted)', marginTop: 8 }}>
                    {day.dayName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievement Badges Section */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              Quest Achievement Badges
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Unlocked based on verified milestones, quiz completion, and activity records.
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
            {BADGES.filter((b) => isBadgeUnlocked(b.id)).length} of {BADGES.length} Unlocked
          </span>
        </div>

        <div className="grid-cols-4">
          {BADGES.map((badge) => {
            const unlocked = isBadgeUnlocked(badge.id);
            return (
              <div
                key={badge.id}
                className="quest-card"
                style={{
                  padding: '20px 16px',
                  textAlign: 'center',
                  border: unlocked ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid var(--border-subtle)',
                  background: unlocked ? 'rgba(139, 92, 246, 0.08)' : 'var(--bg-card)',
                  opacity: unlocked ? 1 : 0.65
                }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: unlocked ? 'var(--bg-surface)' : 'rgba(255, 255, 255, 0.03)',
                  border: `2px solid ${unlocked ? 'var(--accent-purple)' : 'var(--border-subtle)'}`,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: 10,
                  filter: unlocked ? 'none' : 'grayscale(1)'
                }}>
                  {badge.icon}
                </div>
                <h4 style={{ fontSize: '0.95rem', color: unlocked ? 'var(--text-primary)' : 'var(--text-muted)', marginBottom: 4 }}>
                  {badge.name}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: 8 }}>
                  {badge.description}
                </p>
                <span className={`badge ${unlocked ? 'badge-emerald' : 'badge-purple'}`} style={{ fontSize: '0.68rem' }}>
                  {unlocked ? '✓ Unlocked' : 'Locked'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 14 }}>
          Recent Activity Log
        </h3>
        {activities.length === 0 ? (
          <div className="quest-card" style={{ textAlign: 'center', padding: '32px 20px', color: 'var(--text-muted)' }}>
            No recorded activities yet. Take the quest quiz or check off skills to start logging your journey!
          </div>
        ) : (
          <div className="quest-card" style={{ padding: '12px 18px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {activities.slice(0, 8).map((act, idx) => (
                <div
                  key={act.id || idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: idx < Math.min(activities.length, 8) - 1 ? '1px solid var(--border-subtle)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: '1.2rem' }}>
                      {act.type === 'milestone' ? '🎯' : act.type === 'quiz' ? '🧭' : act.type === 'mission' ? '🛡️' : '⚡'}
                    </span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {act.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {formatRelativeTime(act.timestamp)}
                      </div>
                    </div>
                  </div>
                  {act.xp > 0 && (
                    <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
                      +{act.xp} XP
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
