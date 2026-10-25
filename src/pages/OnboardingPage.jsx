import React, { useState } from 'react';

export default function OnboardingPage({ profile, onSaveProfile, navigate }) {
  const [nickname, setNickname] = useState(profile?.nickname || '');
  const [educationLevel, setEducationLevel] = useState(profile?.educationLevel || 'College student');
  const [confidenceLevel, setConfidenceLevel] = useState(profile?.confidenceLevel || 'Exploring');
  const [mainGoal, setMainGoal] = useState(profile?.mainGoal || 'Choose a specialization');
  const [weeklyHours, setWeeklyHours] = useState(profile?.weeklyHours || '5–7');
  const [selectedInterests, setSelectedInterests] = useState(profile?.interests || ['Web Development', 'Design']);

  const availableInterests = [
    'Web Development',
    'Full-Stack Systems',
    'Data Analytics',
    'UI/UX Design',
    'Artificial Intelligence',
    'Cybersecurity',
    'Cloud & DevOps',
    'Software Testing',
    'Product Management',
    'IT Operations'
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    const updated = {
      nickname: nickname.trim() || 'Adventurer',
      educationLevel,
      confidenceLevel,
      mainGoal,
      weeklyHours,
      interests: selectedInterests,
      completedOnboarding: true,
      updatedAt: new Date().toISOString()
    };
    onSaveProfile(updated);
    navigate('quiz');
  };

  const handleSkip = () => {
    const defaultProfile = {
      nickname: 'Adventurer',
      educationLevel: 'College student',
      confidenceLevel: 'Exploring',
      mainGoal: 'Choose a specialization',
      weeklyHours: '5–7',
      interests: ['Web Development'],
      completedOnboarding: true,
      updatedAt: new Date().toISOString()
    };
    onSaveProfile(defaultProfile);
    navigate('quiz');
  };

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', animation: 'fadeIn 0.25s ease-out' }}>
      <div className="quest-card" style={{ padding: '36px 32px' }}>
        {/* Onboarding Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 52,
            height: 52,
            borderRadius: '16px',
            background: 'var(--gradient-accent)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            marginBottom: 14,
            boxShadow: 'var(--shadow-glow)'
          }}>
            🚀
          </div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: 8, color: 'var(--text-primary)' }}>
            Welcome to SkillQuest
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Set up your explorer profile to personalize your career roadmaps and milestones. No passwords or registration needed.
          </p>
        </div>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Question 1: Nickname */}
          <div>
            <label className="input-label" htmlFor="onboard-nickname">
              First name or explorer nickname <span style={{ color: 'var(--text-muted)' }}>(Optional)</span>
            </label>
            <input
              id="onboard-nickname"
              type="text"
              className="input-field"
              placeholder="e.g. Alex, Sam, TechExplorer"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={28}
            />
          </div>

          {/* Question 2: Education Level */}
          <div>
            <label className="input-label">Current education level</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
              {['College student', 'Graduate', 'Beginner'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setEducationLevel(level)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: educationLevel === level ? 'rgba(139, 92, 246, 0.18)' : 'var(--bg-surface)',
                    border: `1px solid ${educationLevel === level ? 'var(--accent-purple)' : 'var(--border-subtle)'}`,
                    color: educationLevel === level ? '#C084FC' : 'var(--text-secondary)',
                    fontWeight: educationLevel === level ? 700 : 500,
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    transition: 'all 0.18s'
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Current Confidence Level */}
          <div>
            <label className="input-label">Current technical confidence level</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
              {[
                { id: 'Exploring', label: 'Exploring Options', desc: 'Curious about what fits' },
                { id: 'Learning', label: 'Actively Learning', desc: 'Taking courses / tutorials' },
                { id: 'Building projects', label: 'Building Projects', desc: 'Hands-on practice' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setConfidenceLevel(item.id)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: confidenceLevel === item.id ? 'rgba(6, 182, 212, 0.18)' : 'var(--bg-surface)',
                    border: `1px solid ${confidenceLevel === item.id ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    color: confidenceLevel === item.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    textAlign: 'left',
                    transition: 'all 0.18s'
                  }}
                >
                  <div style={{ fontWeight: confidenceLevel === item.id ? 700 : 600, fontSize: '0.88rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Question 4: Primary Goal */}
          <div>
            <label className="input-label">Primary quest objective</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
              {['Choose a specialization', 'Get a job', 'Build projects', 'Improve skills'].map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setMainGoal(goal)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    background: mainGoal === goal ? 'rgba(139, 92, 246, 0.18)' : 'var(--bg-surface)',
                    border: `1px solid ${mainGoal === goal ? 'var(--accent-purple)' : 'var(--border-subtle)'}`,
                    color: mainGoal === goal ? '#C084FC' : 'var(--text-secondary)',
                    fontWeight: mainGoal === goal ? 700 : 500,
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    transition: 'all 0.18s'
                  }}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Question 5: Weekly Learning Time */}
          <div>
            <label className="input-label">Preferred weekly study time</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {[
                { id: '2–4', label: '2–4 hours/wk', sub: 'Light pace' },
                { id: '5–7', label: '5–7 hours/wk', sub: 'Steady pace' },
                { id: '8+', label: '8+ hours/wk', sub: 'Intensive' }
              ].map((time) => (
                <button
                  key={time.id}
                  type="button"
                  onClick={() => setWeeklyHours(time.id)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: weeklyHours === time.id ? 'rgba(16, 185, 129, 0.18)' : 'var(--bg-surface)',
                    border: `1px solid ${weeklyHours === time.id ? '#10B981' : 'var(--border-subtle)'}`,
                    color: weeklyHours === time.id ? '#34D399' : 'var(--text-secondary)',
                    textAlign: 'center',
                    transition: 'all 0.18s'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{time.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{time.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question 6: Career Interests (Pills) */}
          <div>
            <label className="input-label">
              Interest areas <span style={{ color: 'var(--text-muted)' }}>(Select all that intrigue you)</span>
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {availableInterests.map((interest) => {
                const isChecked = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: isChecked ? 'rgba(56, 189, 248, 0.18)' : 'var(--bg-surface)',
                      border: `1px solid ${isChecked ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                      color: isChecked ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: isChecked ? 600 : 400,
                      transition: 'all 0.15s'
                    }}
                  >
                    {isChecked ? '✓ ' : '+ '}
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleSkip}
            >
              Skip for Now
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Save & Start Quest →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
