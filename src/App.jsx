import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import Toast from './components/Toast.jsx';
import ServerInspector from './components/ServerInspector.jsx';

// Section Components
import LandingPage from './pages/LandingPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import CareerExplorerPage from './pages/CareerExplorerPage.jsx';
import SkillGapPage from './pages/SkillGapPage.jsx';
import RoadmapPage from './pages/RoadmapPage.jsx';
import MissionsPage from './pages/MissionsPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import SavedCareersPage from './pages/SavedCareersPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

// Utilities & Data
import {
  STORAGE_KEYS,
  getStorageItem,
  setStorageItem,
  logActivity,
  clearAllData
} from './utils/storage.js';
import { getCareerById } from './data/careers.js';
import { getLevelForXP } from './data/missions.js';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // App persistent states from localStorage
  const [profile, setProfile] = useState(() =>
    getStorageItem(STORAGE_KEYS.PROFILE, {
      nickname: 'Explorer',
      educationLevel: 'College student',
      confidenceLevel: 'Exploring',
      mainGoal: 'Choose a specialization',
      weeklyHours: '5–7',
      interests: ['Web Development'],
      completedOnboarding: true
    })
  );

  const [quizAnswers, setQuizAnswers] = useState(() =>
    getStorageItem(STORAGE_KEYS.QUIZ_PROGRESS, {})
  );

  const [quizResults, setQuizResults] = useState(() =>
    getStorageItem(STORAGE_KEYS.QUIZ_RESULTS, null)
  );

  const [skillStatuses, setSkillStatuses] = useState(() =>
    getStorageItem(STORAGE_KEYS.SKILL_STATUS, {})
  );

  const [milestoneState, setMilestoneState] = useState(() =>
    getStorageItem(STORAGE_KEYS.ROADMAPS, {})
  );

  const [missionsState, setMissionsState] = useState(() =>
    getStorageItem(STORAGE_KEYS.MISSIONS, {})
  );

  const [xp, setXp] = useState(() =>
    getStorageItem(STORAGE_KEYS.XP, 50)
  );

  const [savedCareers, setSavedCareers] = useState(() =>
    getStorageItem(STORAGE_KEYS.SAVED_CAREERS, [])
  );

  const [activities, setActivities] = useState(() =>
    getStorageItem(STORAGE_KEYS.ACTIVITY, [])
  );

  const [settings, setSettings] = useState(() =>
    getStorageItem(STORAGE_KEYS.SETTINGS, {
      theme: 'dark',
      reducedMotion: false,
      targetCareerId: 'frontend'
    })
  );

  // Derive target career
  const targetCareerId = settings.targetCareerId || (quizResults?.topThree?.[0]?.careerId) || 'frontend';
  const targetCareer = getCareerById(targetCareerId);
  const userLevel = getLevelForXP(xp);

  // Smooth in-page navigation handler
  const navigate = useCallback((targetId) => {
    const idMap = {
      landing: 'hero',
      home: 'hero',
      quiz: 'quiz',
      results: 'results',
      matches: 'results',
      careers: 'careers',
      skills: 'skills',
      roadmap: 'roadmap',
      missions: 'missions',
      dashboard: 'dashboard',
      saved: 'saved',
      server: 'server',
      settings: 'settings'
    };

    const cleanId = idMap[targetId] || targetId;
    setActiveSection(cleanId);
    window.location.hash = `#/${cleanId === 'hero' ? '' : cleanId}`;

    const targetEl = document.getElementById(cleanId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Listen to hash on initial load
  useEffect(() => {
    const initialHash = window.location.hash.replace('#/', '').replace('#', '');
    if (initialHash) {
      setTimeout(() => {
        navigate(initialHash);
      }, 150);
    }
  }, [navigate]);

  // Listen to global Ctrl+K / Cmd+K for Command Palette
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Apply theme & reduced motion attributes to <html> root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme || 'dark');
    if (settings.reducedMotion) {
      document.documentElement.classList.add('manual-reduced-motion');
    } else {
      document.documentElement.classList.remove('manual-reduced-motion');
    }
  }, [settings.theme, settings.reducedMotion]);

  // Toast Helper
  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
  }, []);

  // Award XP safely
  const awardXP = useCallback((amount, reason) => {
    setXp((prevXP) => {
      const newXP = prevXP + amount;
      setStorageItem(STORAGE_KEYS.XP, newXP);
      return newXP;
    });
    const updatedActivities = logActivity('xp', reason, amount);
    setActivities(updatedActivities);
    showToast(`+${amount} XP Earned: ${reason}`, 'xp');
  }, [showToast]);

  // Save Profile Handler
  const handleSaveProfile = useCallback((updatedProfile) => {
    setProfile(updatedProfile);
    setStorageItem(STORAGE_KEYS.PROFILE, updatedProfile);
    showToast('Explorer profile updated!', 'success');
  }, [showToast]);

  // Save In-Progress Quiz Answers
  const handleSaveQuizProgress = useCallback((newAnswers) => {
    setQuizAnswers(newAnswers);
    setStorageItem(STORAGE_KEYS.QUIZ_PROGRESS, newAnswers);
  }, []);

  // Complete Quiz Handler
  const handleCompleteQuiz = useCallback((calculatedResults) => {
    setQuizResults(calculatedResults);
    setStorageItem(STORAGE_KEYS.QUIZ_RESULTS, calculatedResults);

    if (calculatedResults.topThree?.[0]) {
      const topId = calculatedResults.topThree[0].careerId;
      setSettings((prev) => {
        const next = { ...prev, targetCareerId: topId };
        setStorageItem(STORAGE_KEYS.SETTINGS, next);
        return next;
      });
    }

    awardXP(80, 'Completed Career Discovery Quest Quiz');
    navigate('results');
  }, [awardXP, navigate]);

  // Toggle Save Career
  const handleToggleSaveCareer = useCallback((careerId) => {
    setSavedCareers((prev) => {
      let next;
      if (prev.includes(careerId)) {
        next = prev.filter((id) => id !== careerId);
        showToast('Removed from saved careers.', 'info');
      } else {
        next = [...prev, careerId];
        awardXP(25, `Bookmarked ${getCareerById(careerId).shortTitle}`);
      }
      setStorageItem(STORAGE_KEYS.SAVED_CAREERS, next);
      return next;
    });
  }, [awardXP, showToast]);

  // Select Target Career
  const handleSelectCareer = useCallback((careerId) => {
    setSettings((prev) => {
      const updated = { ...prev, targetCareerId: careerId };
      setStorageItem(STORAGE_KEYS.SETTINGS, updated);
      return updated;
    });
    showToast(`Target career set to ${getCareerById(careerId).name}`, 'success');
  }, [showToast]);

  // Update Individual Skill Status
  const handleUpdateSkillStatus = useCallback((skillId, newStatus) => {
    setSkillStatuses((prev) => {
      const updated = { ...prev, [skillId]: newStatus };
      setStorageItem(STORAGE_KEYS.SKILL_STATUS, updated);
      return updated;
    });

    if (newStatus === 'confident') {
      awardXP(30, 'Mastered skill competency to Confident');
    } else if (newStatus === 'learning') {
      awardXP(15, 'Started learning new skill competency');
    }
  }, [awardXP]);

  // Reset Skills for Career
  const handleResetSkillStatuses = useCallback((careerId) => {
    setSkillStatuses((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((k) => {
        if (k.startsWith(careerId.substring(0, 3))) {
          delete updated[k];
        }
      });
      setStorageItem(STORAGE_KEYS.SKILL_STATUS, updated);
      return updated;
    });
    showToast('Skill evaluations for this career have been reset.', 'info');
  }, [showToast]);

  // Toggle Roadmap Milestone
  const handleToggleMilestone = useCallback((milestoneId, isCompleted) => {
    setMilestoneState((prev) => {
      const existing = prev[milestoneId] || {};
      const updated = {
        ...prev,
        [milestoneId]: {
          ...existing,
          completed: isCompleted,
          completedAt: isCompleted ? new Date().toISOString() : null
        }
      };
      setStorageItem(STORAGE_KEYS.ROADMAPS, updated);
      return updated;
    });

    if (isCompleted) {
      awardXP(50, 'Completed practical roadmap milestone');
    }
  }, [awardXP]);

  // Save Milestone Reflection Note
  const handleSaveMilestoneNote = useCallback((milestoneId, noteText) => {
    setMilestoneState((prev) => {
      const existing = prev[milestoneId] || {};
      const updated = {
        ...prev,
        [milestoneId]: {
          ...existing,
          note: noteText,
          updatedAt: new Date().toISOString()
        }
      };
      setStorageItem(STORAGE_KEYS.ROADMAPS, updated);
      return updated;
    });
    showToast('Milestone note saved.', 'info');
  }, [showToast]);

  // Complete Mission Handler
  const handleCompleteMission = useCallback((mission) => {
    if (missionsState[mission.id]?.completed) return;

    setMissionsState((prev) => {
      const updated = {
        ...prev,
        [mission.id]: {
          completed: true,
          completedAt: new Date().toISOString()
        }
      };
      setStorageItem(STORAGE_KEYS.MISSIONS, updated);
      return updated;
    });

    awardXP(mission.xp, `Completed Daily Mission: ${mission.title}`);
  }, [missionsState, awardXP]);

  // Theme Toggle
  const toggleTheme = useCallback(() => {
    setSettings((prev) => {
      const newTheme = prev.theme === 'dark' ? 'light' : 'dark';
      const updated = { ...prev, theme: newTheme };
      setStorageItem(STORAGE_KEYS.SETTINGS, updated);
      return updated;
    });
  }, []);

  // Reduced Motion Toggle
  const toggleReducedMotion = useCallback(() => {
    setSettings((prev) => {
      const updated = { ...prev, reducedMotion: !prev.reducedMotion };
      setStorageItem(STORAGE_KEYS.SETTINGS, updated);
      return updated;
    });
  }, []);

  // Reset All Local Data
  const handleResetAllData = useCallback(() => {
    clearAllData();
    setProfile({
      nickname: 'Explorer',
      educationLevel: 'College student',
      confidenceLevel: 'Exploring',
      mainGoal: 'Choose a specialization',
      weeklyHours: '5–7',
      interests: ['Web Development'],
      completedOnboarding: true
    });
    setQuizAnswers({});
    setQuizResults(null);
    setSkillStatuses({});
    setMilestoneState({});
    setMissionsState({});
    setXp(50);
    setSavedCareers([]);
    setActivities([]);
    setSettings({
      theme: 'dark',
      reducedMotion: false,
      targetCareerId: 'frontend'
    });
    showToast('All local quest data has been reset.', 'info');
  }, [showToast]);

  return (
    <div className="app-container">
      {/* Top Sticky Header */}
      <Navbar
        currentRoute={activeSection}
        navigate={navigate}
        theme={settings.theme || 'dark'}
        toggleTheme={toggleTheme}
        openCommandPalette={() => setIsCommandPaletteOpen(true)}
        savedCount={savedCareers.length}
        userLevel={userLevel}
        xp={xp}
      />

      {/* Main Single Page: All Sections Unified Directly On This Page! */}
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
        {/* Section 1: Hero & Constellation Orbit */}
        <section id="hero" style={{ scrollMarginTop: 90 }}>
          <LandingPage
            navigate={navigate}
            quizTaken={Boolean(quizResults)}
            targetCareerName={targetCareer.name}
          />
        </section>

        {/* Section 2: Live Node.js HTTP Server Inspector (server.js routes verification) */}
        <section id="server" style={{ scrollMarginTop: 90 }}>
          <ServerInspector />
        </section>

        {/* Section 3: Interactive Career Discovery Quiz */}
        <section id="quiz" style={{ scrollMarginTop: 90 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-purple)', fontWeight: 700 }}>
              Interactive Assessment
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--text-primary)', marginTop: 4 }}>
              Career Discovery Quest Quiz
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: 560, margin: '6px auto 0' }}>
              Answer these 10 targeted questions to reveal your top 3 matching technology career paths.
            </p>
          </div>
          <QuizPage
            savedAnswers={quizAnswers}
            onSaveProgress={handleSaveQuizProgress}
            onCompleteQuiz={handleCompleteQuiz}
            navigate={navigate}
          />
        </section>

        {/* Section 4: Personalized Career Results & Comparison */}
        <section id="results" style={{ scrollMarginTop: 90 }}>
          <ResultsPage
            results={quizResults}
            profile={profile}
            savedCareers={savedCareers}
            onToggleSaveCareer={handleToggleSaveCareer}
            onStartRoadmap={(cId) => {
              handleSelectCareer(cId);
              navigate('roadmap');
            }}
            navigate={navigate}
          />
        </section>

        {/* Section 5: Career Explorer Directory (All 10 Careers) */}
        <section id="careers" style={{ scrollMarginTop: 90 }}>
          <CareerExplorerPage
            savedCareers={savedCareers}
            onToggleSaveCareer={handleToggleSaveCareer}
            onStartRoadmap={(cId) => {
              handleSelectCareer(cId);
              navigate('roadmap');
            }}
            initialSelectedCareerId={targetCareerId}
          />
        </section>

        {/* Section 6: Skill Gap Analysis */}
        <section id="skills" style={{ scrollMarginTop: 90 }}>
          <SkillGapPage
            targetCareerId={targetCareerId}
            onSelectCareer={handleSelectCareer}
            skillStatuses={skillStatuses}
            onUpdateSkillStatus={handleUpdateSkillStatus}
            onResetSkillStatuses={handleResetSkillStatuses}
            navigate={navigate}
          />
        </section>

        {/* Section 7: 4-Stage Career Roadmap */}
        <section id="roadmap" style={{ scrollMarginTop: 90 }}>
          <RoadmapPage
            targetCareerId={targetCareerId}
            onSelectCareer={handleSelectCareer}
            milestoneState={milestoneState}
            onToggleMilestone={handleToggleMilestone}
            onSaveMilestoneNote={handleSaveMilestoneNote}
            navigate={navigate}
          />
        </section>

        {/* Section 8: Daily Learning Missions & XP Hub */}
        <section id="missions" style={{ scrollMarginTop: 90 }}>
          <MissionsPage
            xp={xp}
            missionsState={missionsState}
            onCompleteMission={handleCompleteMission}
            activities={activities}
            savedCareers={savedCareers}
            quizResults={quizResults}
            skillStatuses={skillStatuses}
            milestoneState={milestoneState}
            navigate={navigate}
          />
        </section>

        {/* Section 9: Progress Dashboard & Charts */}
        <section id="dashboard" style={{ scrollMarginTop: 90 }}>
          <DashboardPage
            targetCareerId={targetCareerId}
            onSelectCareer={handleSelectCareer}
            profile={profile}
            xp={xp}
            skillStatuses={skillStatuses}
            milestoneState={milestoneState}
            savedCareers={savedCareers}
            activities={activities}
            quizResults={quizResults}
            navigate={navigate}
          />
        </section>

        {/* Section 10: Saved Careers Collection */}
        <section id="saved" style={{ scrollMarginTop: 90 }}>
          <SavedCareersPage
            savedCareers={savedCareers}
            onToggleSaveCareer={handleToggleSaveCareer}
            onStartRoadmap={(cId) => {
              handleSelectCareer(cId);
              navigate('roadmap');
            }}
            navigate={navigate}
          />
        </section>

        {/* Section 11: Settings & Data Management */}
        <section id="settings" style={{ scrollMarginTop: 90 }}>
          <SettingsPage
            profile={profile}
            onSaveProfile={handleSaveProfile}
            theme={settings.theme || 'dark'}
            toggleTheme={toggleTheme}
            reducedMotion={Boolean(settings.reducedMotion)}
            onToggleReducedMotion={toggleReducedMotion}
            targetCareerId={targetCareerId}
            onSelectCareer={handleSelectCareer}
            onResetAllData={handleResetAllData}
            onShowToast={showToast}
            navigate={navigate}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        navigate={navigate}
        onSelectCareer={(cId) => {
          handleSelectCareer(cId);
          navigate('careers');
        }}
      />

      {/* Interactive Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
