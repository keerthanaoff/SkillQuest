import React, { useState, useRef } from 'react';
import { CAREERS } from '../data/careers.js';
import { exportAllData, validateAndImportData } from '../utils/storage.js';

export default function SettingsPage({
  profile = {},
  onSaveProfile,
  theme,
  toggleTheme,
  reducedMotion,
  onToggleReducedMotion,
  targetCareerId = 'frontend',
  onSelectCareer,
  onResetAllData,
  onShowToast,
  navigate
}) {
  const [nickname, setNickname] = useState(profile?.nickname || 'Explorer');
  const [mainGoal, setMainGoal] = useState(profile?.mainGoal || 'Choose a specialization');
  const [weeklyHours, setWeeklyHours] = useState(profile?.weeklyHours || '5–7');
  const [selectedTarget, setSelectedTarget] = useState(targetCareerId);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetInput, setResetInput] = useState('');
  const fileInputRef = useRef(null);

  const handleSaveProfileForm = (e) => {
    e.preventDefault();
    const updated = {
      ...profile,
      nickname: nickname.trim() || 'Explorer',
      mainGoal,
      weeklyHours
    };
    onSaveProfile(updated);
    if (selectedTarget !== targetCareerId) {
      onSelectCareer(selectedTarget);
    }
    onShowToast('Profile preferences saved successfully!', 'success');
  };

  // Export data as JSON download
  const handleExportData = () => {
    try {
      const data = exportAllData();
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().split('T')[0];
      a.href = url;
      a.download = `skillquest-backup-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      onShowToast('Quest data backup downloaded!', 'success');
    } catch (err) {
      console.error('Export error:', err);
      onShowToast('Failed to export data.', 'warning');
    }
  };

  // Trigger file selection for import
  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  // Handle uploaded JSON backup file
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result;
        const parsed = JSON.parse(text);
        validateAndImportData(parsed);
        onShowToast('Data restored successfully! Refreshing app...', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        console.error('Import validation failed:', err);
        onShowToast(`Import failed: ${err.message}`, 'warning');
      }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
  };

  // Execute full reset
  const handleConfirmReset = () => {
    if (resetInput.trim().toUpperCase() === 'RESET') {
      onResetAllData();
      setShowResetModal(false);
      onShowToast('All local data has been reset.', 'info');
      setTimeout(() => {
        navigate('landing');
      }, 500);
    }
  };

  return (
    <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36, animation: 'fadeIn 0.25s ease-out' }}>
      {/* Page Title */}
      <div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: 'var(--text-primary)', marginBottom: 6 }}>
          Profile & Quest Settings
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          Manage your personal learning goals, interface preferences, and local data backups.
        </p>
      </div>

      {/* Profile & Goals Form */}
      <div className="quest-card" style={{ padding: '30px 28px' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 4 }}>
          Explorer Preferences
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 24 }}>
          These details customize greetings, pacing, and default target trajectories.
        </p>

        <form onSubmit={handleSaveProfileForm} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            <div>
              <label className="input-label" htmlFor="settings-name">First Name or Nickname</label>
              <input
                id="settings-name"
                type="text"
                className="input-field"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength={28}
              />
            </div>

            <div>
              <label className="input-label" htmlFor="settings-target">Primary Career Target</label>
              <select
                id="settings-target"
                className="input-field"
                value={selectedTarget}
                onChange={(e) => setSelectedTarget(e.target.value)}
              >
                {CAREERS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            <div>
              <label className="input-label" htmlFor="settings-goal">Main Quest Goal</label>
              <select
                id="settings-goal"
                className="input-field"
                value={mainGoal}
                onChange={(e) => setMainGoal(e.target.value)}
              >
                <option value="Choose a specialization">Choose a specialization</option>
                <option value="Get a job">Get a job</option>
                <option value="Build projects">Build projects</option>
                <option value="Improve skills">Improve skills</option>
              </select>
            </div>

            <div>
              <label className="input-label" htmlFor="settings-hours">Weekly Available Study Time</label>
              <select
                id="settings-hours"
                className="input-field"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(e.target.value)}
              >
                <option value="2–4">2–4 hours/week (Light)</option>
                <option value="5–7">5–7 hours/week (Steady)</option>
                <option value="8+">8+ hours/week (Intensive)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <button type="submit" className="btn btn-primary">
              Save Preferences
            </button>
          </div>
        </form>
      </div>

      {/* Interface & Accessibility Controls */}
      <div className="quest-card" style={{ padding: '30px 28px' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 4 }}>
          Interface & Accessibility
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 24 }}>
          Adjust visual themes and motion settings for comfortable learning.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Theme Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Theme Appearance
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Current: {theme === 'dark' ? 'Midnight Navy (Dark)' : 'Clean Slate (Light)'}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={toggleTheme}
            >
              Switch to {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          {/* Reduced Motion Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Reduced Motion
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Disable animated transitions, confetti bursts, and orbital micro-animations
              </div>
            </div>
            <button
              type="button"
              className={`btn ${reducedMotion ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              onClick={onToggleReducedMotion}
            >
              {reducedMotion ? 'Enabled (No Motion)' : 'Default (Smooth)'}
            </button>
          </div>
        </div>
      </div>

      {/* Data Management: Export, Import, Reset */}
      <div className="quest-card" style={{ padding: '30px 28px' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 4 }}>
          Local Data Management & Portability
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 24 }}>
          Your data lives 100% in your local browser storage. Export a backup or restore your progress anytime.
        </p>

        {/* Hidden File Input for Import */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {/* Export Button */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleExportData}
            style={{ justifyContent: 'flex-start', padding: '16px' }}
          >
            <span style={{ fontSize: '1.4rem' }}>💾</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Export My Data
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Download JSON backup file
              </div>
            </div>
          </button>

          {/* Import Button */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleImportClick}
            style={{ justifyContent: 'flex-start', padding: '16px' }}
          >
            <span style={{ fontSize: '1.4rem' }}>📥</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Import Backup
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Restore from saved JSON
              </div>
            </div>
          </button>

          {/* Reset All Data Button */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setResetInput('');
              setShowResetModal(true);
            }}
            style={{ justifyContent: 'flex-start', padding: '16px', borderColor: 'rgba(244, 63, 94, 0.3)' }}
          >
            <span style={{ fontSize: '1.4rem' }}>🗑️</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FB7185' }}>
                Reset All Data
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Clear local storage
              </div>
            </div>
          </button>
        </div>

        {/* Privacy Note */}
        <div style={{
          marginTop: 24,
          padding: '12px 16px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5
        }}>
          🔒 <strong>Privacy Assurance:</strong> SkillQuest does not send your data to any external cloud, tracking service, or analytics network. Everything is stored strictly inside your browser’s localStorage.
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showResetModal && (
        <div className="modal-overlay" onClick={() => setShowResetModal(false)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 460, textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
            <h3 style={{ fontSize: '1.3rem', color: '#FB7185', marginBottom: 8 }}>
              Are you sure you want to reset?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: 20 }}>
              This will permanently delete all your quiz answers, evaluated skills, completed roadmap milestones, and earned XP from this browser.
            </p>
            <div style={{ marginBottom: 20 }}>
              <label className="input-label" style={{ fontSize: '0.8rem' }}>
                Type <strong>RESET</strong> below to confirm:
              </label>
              <input
                type="text"
                className="input-field"
                value={resetInput}
                onChange={(e) => setResetInput(e.target.value)}
                placeholder="RESET"
                style={{ textAlign: 'center', fontWeight: 700, letterSpacing: '0.1em' }}
              />
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowResetModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ background: 'var(--accent-rose)' }}
                disabled={resetInput.trim().toUpperCase() !== 'RESET'}
                onClick={handleConfirmReset}
              >
                Permanently Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
