// Centralized LocalStorage Utility for SkillQuest
// Uses versioned keys and safe parsing to prevent corrupted state

export const STORAGE_KEYS = {
  PROFILE: 'skillquest:v1:profile',
  QUIZ_PROGRESS: 'skillquest:v1:quiz-progress',
  QUIZ_RESULTS: 'skillquest:v1:quiz-results',
  SKILL_STATUS: 'skillquest:v1:skill-status',
  ROADMAPS: 'skillquest:v1:roadmaps',
  MISSIONS: 'skillquest:v1:missions',
  XP: 'skillquest:v1:xp',
  SAVED_CAREERS: 'skillquest:v1:saved-careers',
  ACTIVITY: 'skillquest:v1:activity',
  SETTINGS: 'skillquest:v1:settings'
};

export const getStorageItem = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === undefined) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[SkillQuest Storage] Error parsing key "${key}":`, err);
    return fallback;
  }
};

export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`[SkillQuest Storage] Error saving key "${key}":`, err);
  }
};

export const removeStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`[SkillQuest Storage] Error removing key "${key}":`, err);
  }
};

// Activity logger to track user quest achievements and compute streaks
export const logActivity = (type, title, xp = 0) => {
  try {
    const existing = getStorageItem(STORAGE_KEYS.ACTIVITY, []);
    const entry = {
      id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      timestamp: new Date().toISOString(),
      dateString: new Date().toISOString().split('T')[0],
      type,
      title,
      xp
    };
    const updated = [entry, ...existing].slice(0, 50); // keep last 50
    setStorageItem(STORAGE_KEYS.ACTIVITY, updated);
    return updated;
  } catch (err) {
    console.warn('[SkillQuest Storage] Error logging activity:', err);
    return [];
  }
};

// Reset all SkillQuest data
export const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach((k) => {
    try {
      localStorage.removeItem(k);
    } catch {
      // ignore
    }
  });
};

// Export all SkillQuest keys as JSON
export const exportAllData = () => {
  const exportPayload = {
    app: 'SkillQuest',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    data: {}
  };

  Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
    exportPayload.data[name] = getStorageItem(key, null);
  });

  return exportPayload;
};

// Import and validate JSON file
export const validateAndImportData = (parsedJSON) => {
  if (!parsedJSON || typeof parsedJSON !== 'object') {
    throw new Error('Invalid JSON format: file must contain a valid JSON object.');
  }

  if (parsedJSON.app !== 'SkillQuest' || !parsedJSON.data) {
    throw new Error('Invalid backup file: file does not match the SkillQuest schema.');
  }

  const { data } = parsedJSON;

  // Restore each known key safely
  Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
    if (data[name] !== undefined && data[name] !== null) {
      setStorageItem(key, data[name]);
    }
  });

  return true;
};
