import React from 'react';
import { CAREERS, getCareerById } from '../data/careers.js';
import { getSkillsForCareer } from '../data/skills.js';
import { getRoadmapForCareer } from '../data/roadmaps.js';
import { getLevelForXP } from '../data/missions.js';
import { getPast7DaysActivity, formatRelativeTime, calculateStreak } from '../utils/dates.js';

export default function DashboardPage({
  targetCareerId = 'frontend',
  onSelectCareer,
  profile,
  xp = 0,
  skillStatuses = {},
  milestoneState = {},
  savedCareers = [],
  activities = [],
  quizResults = null,
  navigate
}) {
  const currentCareer = getCareerById(targetCareerId);
  const currentLevel = getLevelForXP(xp);
  const skills = getSkillsForCareer(targetCareerId);
  const roadmap = getRoadmapForCareer(targetCareerId);
  const streak = calculateStreak(activities);
  const past7Days = getPast7DaysActivity(activities);

  // Roadmap metrics
  let totalMilestones = 0;
  let completedMilestones = 0;
  roadmap.stages.forEach((s) => {
    s.milestones.forEach((m) => {
      totalMilestones += 1;
      if (milestoneState[m.id]?.completed) completedMilestones += 1;
    });
  });
  const roadmapPercent = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

  // Skill metrics
  let confidentSkills = 0;
  let learningSkills = 0;
  skills.forEach((s) => {
    const st = skillStatuses[s.id] || 'not-started';
    if (st === 'confident') confidentSkills += 1;
    else if (st === 'learning') learningSkills += 1;
  });
  const skillReadiness = skills.length > 0
    ? Math.round(((confidentSkills * 1.0 + learningSkills * 0.5) / skills.length) * 100)
    : 0;

  // Cross-category competency summary
  const categoryBreakdown = [
    { name: 'Engineering', count: 0, total: 3 },
    { name: 'Data & AI', count: 0, total: 2 },
    { name: 'Design & UX', count: 0, total: 2 },
    { name: 'Cloud & Ops', count: 0, total: 3 }
  ];

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Top Welcome Bar */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        padding: '30px 28px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
      }}>
        <div>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
            Quest Overview
          </span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--text-primary)', marginTop: 4, marginBottom: 6 }}>
            {profile?.nickname ? `${profile.nickname}’s Dashboard` : 'Your Quest Dashboard'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Primary Goal: <strong style={{ color: 'var(--accent-purple)' }}>{currentCareer.name}</strong> • Pace: {profile?.weeklyHours || '5–7'} hrs/week
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('roadmap')}
          >
            Continue Learning →
          </button>
          <div style={{ position: 'relative' }}>
            <select
              value={targetCareerId}
              onChange={(e) => onSelectCareer(e.target.value)}
              className="input-field"
              style={{ padding: '10px 14px', width: 'auto', fontWeight: 600 }}
              aria-label="Change target career"
            >
              {CAREERS.map((c) => (
                <option key={c.id} value={c.id}>
                  Target: {c.shortTitle}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 4 Key Stat Metrics */}
      <div className="grid-cols-4">
        {/* Metric 1: Roadmap Completion */}
        <div className="quest-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Roadmap</span>
            <span style={{ fontSize: '1.2rem' }}>🗺️</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
            {roadmapPercent}%
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
            {completedMilestones} / {totalMilestones} Milestones Done
          </div>
        </div>

        {/* Metric 2: Skill Readiness */}
        <div className="quest-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Skill Readiness</span>
            <span style={{ fontSize: '1.2rem' }}>⚡</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#34D399' }}>
            {skillReadiness}%
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
            {confidentSkills} Confident • {learningSkills} Learning
          </div>
        </div>

        {/* Metric 3: Quest XP */}
        <div className="quest-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Quest XP</span>
            <span style={{ fontSize: '1.2rem' }}>{currentLevel.badge}</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C084FC' }}>
            {xp} XP
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
            Level {currentLevel.level}: {currentLevel.title}
          </div>
        </div>

        {/* Metric 4: Streak */}
        <div className="quest-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Active Streak</span>
            <span style={{ fontSize: '1.2rem' }}>🔥</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FBBF24' }}>
            {streak} {streak === 1 ? 'Day' : 'Days'}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
            {savedCareers.length} Saved Career {savedCareers.length === 1 ? 'Path' : 'Paths'}
          </div>
        </div>
      </div>

      {/* Two-Column Visual Charts: Weekly Velocity & Career Readiness Comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
        {/* Chart 1: 7-Day Velocity Bar Chart */}
        <div className="quest-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Weekly Activity Heat
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Recorded progress events over the past 7 days
              </p>
            </div>
            <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
              Past 7 Days
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: 140,
            padding: '16px 0 0',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            {past7Days.map((d, i) => {
              const maxCount = Math.max(...past7Days.map((x) => x.count), 4);
              const heightPct = Math.max(10, Math.round((d.count / maxCount) * 100));
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div
                    title={`${d.dayName}: ${d.count} activities`}
                    style={{
                      width: '50%',
                      maxWidth: 24,
                      height: `${heightPct}%`,
                      borderRadius: '4px 4px 0 0',
                      background: d.isToday ? 'var(--gradient-quest)' : d.count > 0 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(255, 255, 255, 0.05)',
                      transition: 'height 0.3s ease'
                    }}
                  />
                  <span style={{ fontSize: '0.75rem', color: d.isToday ? 'var(--accent-cyan)' : 'var(--text-muted)', marginTop: 8 }}>
                    {d.dayName}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Logged milestones, quizzes, and skills</span>
            <span>Total Events: {activities.length}</span>
          </div>
        </div>

        {/* Chart 2: Milestone Stage Distribution */}
        <div className="quest-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Roadmap Stage Progression
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Milestone completion across all 4 sequential stages
              </p>
            </div>
            <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
              {roadmap.stages.length} Stages
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {roadmap.stages.map((stage) => {
              const stageDone = stage.milestones.filter((m) => milestoneState[m.id]?.completed).length;
              const pct = Math.round((stageDone / stage.milestones.length) * 100);
              return (
                <div key={stage.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      Stage {stage.stageNumber}: {stage.title}
                    </span>
                    <span style={{ color: pct === 100 ? '#34D399' : 'var(--text-muted)' }}>
                      {stageDone}/{stage.milestones.length} ({pct}%)
                    </span>
                  </div>
                  <div className="progress-track" style={{ height: 6 }}>
                    <div
                      className="progress-fill"
                      style={{
                        width: `${pct}%`,
                        background: pct === 100 ? '#10B981' : 'var(--gradient-quest)'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Saved Careers Quick Access & Recent Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {/* Saved Careers Panel */}
        <div className="quest-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Saved Career Paths ({savedCareers.length})
            </h3>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => navigate('saved')}
              style={{ fontSize: '0.78rem' }}
            >
              View All →
            </button>
          </div>

          {savedCareers.length === 0 ? (
            <div style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              No saved careers yet.{' '}
              <button
                type="button"
                onClick={() => navigate('careers')}
                style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
              >
                Explore Careers
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {savedCareers.slice(0, 3).map((cId) => {
                const c = getCareerById(cId);
                return (
                  <div
                    key={cId}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {c.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        {c.difficulty}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        onSelectCareer(cId);
                        navigate('roadmap');
                      }}
                      style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                    >
                      Open Roadmap
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Events Feed */}
        <div className="quest-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Recent Quest Achievements
            </h3>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => navigate('missions')}
              style={{ fontSize: '0.78rem' }}
            >
              Missions Hub →
            </button>
          </div>

          {activities.length === 0 ? (
            <div style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              No logged activities yet. Take the quest quiz or check off skills to start building your record!
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {activities.slice(0, 4).map((act, idx) => (
                <div
                  key={act.id || idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-surface)',
                    fontSize: '0.82rem'
                  }}
                >
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    {act.title}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    {formatRelativeTime(act.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
