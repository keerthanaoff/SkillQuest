import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions.js';
import { calculateCareerScores } from '../utils/scoring.js';

export default function QuizPage({
  savedAnswers = {},
  onSaveProgress,
  onCompleteQuiz,
  navigate
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState(savedAnswers);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync initial question index based on how many questions were already answered
  useEffect(() => {
    const answeredCount = Object.keys(savedAnswers || {}).length;
    if (answeredCount > 0 && answeredCount < QUIZ_QUESTIONS.length) {
      setCurrentIdx(answeredCount);
    }
  }, []);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const progressPercent = Math.round(((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100);
  const selectedOptionId = answers[currentQ.id];

  // Keyboard navigation listener (Keys 1-4, Left/Right arrow, Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // 1-4 keys to select options
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        if (currentQ.options[optIdx]) {
          handleSelectOption(currentQ.options[optIdx].id);
        }
      } else if (e.key === 'Enter') {
        if (selectedOptionId) {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' && currentIdx > 0) {
        handleBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx, selectedOptionId, answers]);

  const handleSelectOption = (optId) => {
    setErrorMsg('');
    const updated = { ...answers, [currentQ.id]: optId };
    setAnswers(updated);
    onSaveProgress(updated);
  };

  const handleNext = () => {
    if (!selectedOptionId) {
      setErrorMsg('Please select an option to continue your quest.');
      return;
    }

    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setErrorMsg('');
    } else {
      // Final question submitted!
      const results = calculateCareerScores(answers);
      onCompleteQuiz(results);
      navigate('results');
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setErrorMsg('');
    }
  };

  const handleRestart = () => {
    if (window.confirm('Restart quest quiz from Question 1? Your progress will be reset.')) {
      setAnswers({});
      setCurrentIdx(0);
      onSaveProgress({});
    }
  };

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', animation: 'fadeIn 0.25s ease-out' }}>
      {/* Top Header: Progress Bar & Question Counter */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="badge badge-purple" style={{ fontSize: '0.82rem' }}>
              Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              ({progressPercent}% Complete)
            </span>
          </div>
          <button
            type="button"
            onClick={handleRestart}
            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
          >
            Restart Quiz
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progress-track" aria-label={`Quiz progress: ${progressPercent}%`}>
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Encouraging Micro-copy */}
        <div style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--accent-cyan)', fontStyle: 'italic' }}>
          {currentQ.encouragement}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="quest-card" style={{ padding: '36px 30px', marginBottom: 24 }}>
        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.35 }}>
          {currentQ.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 28 }}>
          {currentQ.subtitle}
        </p>

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSelectOption(opt.id)}
                aria-pressed={isSelected}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? 'rgba(139, 92, 246, 0.16)' : 'var(--bg-surface)',
                  border: `1.5px solid ${isSelected ? 'var(--accent-purple)' : 'var(--border-subtle)'}`,
                  boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                  transform: isSelected ? 'translateX(4px)' : 'none'
                }}
              >
                {/* Number Key Indicator */}
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: '8px',
                  background: isSelected ? 'var(--accent-purple)' : 'var(--bg-secondary)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: 2
                }}>
                  {idx + 1}
                </div>

                {/* Option Text */}
                <div style={{ flex: 1, fontSize: '0.95rem', color: isSelected ? '#FFFFFF' : 'var(--text-primary)', lineHeight: 1.5 }}>
                  {opt.text}
                </div>

                {/* Selected Check Indicator */}
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  border: `2px solid ${isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  background: isSelected ? 'var(--accent-cyan)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 4
                }}>
                  {isSelected && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1020" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {errorMsg && (
          <div style={{
            marginTop: 18,
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(244, 63, 94, 0.12)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            color: '#FB7185',
            fontSize: '0.85rem'
          }}>
            {errorMsg}
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 32,
          paddingTop: 20,
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBack}
            disabled={currentIdx === 0}
            style={{ opacity: currentIdx === 0 ? 0.4 : 1, cursor: currentIdx === 0 ? 'not-allowed' : 'pointer' }}
          >
            ← Back
          </button>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Tip: Press <strong>1-4</strong> to select, <strong>Enter</strong> to advance
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            {currentIdx === QUIZ_QUESTIONS.length - 1 ? 'Calculate My Matches →' : 'Next Question →'}
          </button>
        </div>
      </div>

      {/* Educational Disclaimer */}
      <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
        Career recommendations are exploratory suggestions based on your responses and serve as learning guidance, not a definitive psychological assessment or employment guarantee.
      </div>
    </div>
  );
}
