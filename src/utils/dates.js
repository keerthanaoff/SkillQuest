// Date & Streak Calculations based on recorded activity timestamps

/**
 * Calculates current active consecutive day streak.
 * @param {Array} activities - array of activity entries with dateString (YYYY-MM-DD)
 * @returns {number} streak in days
 */
export const calculateStreak = (activities = []) => {
  if (!activities || activities.length === 0) return 0;

  // Extract unique sorted dates (descending)
  const uniqueDates = Array.from(new Set(activities.map((a) => a.dateString))).sort().reverse();
  if (uniqueDates.length === 0) return 0;

  const todayStr = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  // Streak continues if active today OR yesterday
  const mostRecent = uniqueDates[0];
  if (mostRecent !== todayStr && mostRecent !== yesterdayStr) {
    return 0; // streak broken
  }

  let streak = 1;
  let currentDate = new Date(mostRecent);

  for (let i = 1; i < uniqueDates.length; i++) {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    const expectedStr = prevDate.toISOString().split('T')[0];

    if (uniqueDates[i] === expectedStr) {
      streak += 1;
      currentDate = prevDate;
    } else {
      break;
    }
  }

  return streak;
};

/**
 * Returns past 7 days array with day name, dateString, and activity count.
 * @param {Array} activities
 * @returns {Array} [{ dayName: 'Mon', dateString: '2026-10-20', count: 3, xp: 120 }, ...]
 */
export const getPast7DaysActivity = (activities = []) => {
  const result = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = dayNames[d.getDay()];

    const matching = activities.filter((a) => a.dateString === dateStr);
    const totalXP = matching.reduce((sum, item) => sum + (item.xp || 0), 0);

    result.push({
      dayName,
      dateString: dateStr,
      count: matching.length,
      xp: totalXP,
      isToday: i === 0
    });
  }

  return result;
};

/**
 * Formats an ISO string to a human friendly relative or short date
 */
export const formatRelativeTime = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;

  const dateStr = date.toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (dateStr === yesterday.toISOString().split('T')[0]) return 'Yesterday';

  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};
