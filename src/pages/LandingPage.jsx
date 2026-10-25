import React from 'react';
import Constellation from '../components/Constellation.jsx';

export default function LandingPage({ navigate, quizTaken, targetCareerName }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 40,
        alignItems: 'center',
        paddingTop: 20
      }}>
        {/* Left Column: Copy & CTAs */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(139, 92, 246, 0.12)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            marginBottom: 20,
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#C084FC'
          }}>
            <span>✨</span>
            <span>Interactive Career Discovery for College Students</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.15, marginBottom: 20 }}>
            Your dream career isn’t a mystery.{' '}
            <span className="gradient-text">It’s a quest.</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: 1.65,
            maxWidth: 540,
            marginBottom: 32
          }}>
            SkillQuest helps you discover high-match technology careers, identify concrete skill gaps, and build a practical, milestone-by-milestone roadmap toward your goals.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => navigate(quizTaken ? 'results' : 'quiz')}
            >
              <span>🧭</span>
              <span>{quizTaken ? 'View Your Matches' : 'Start My Quest'}</span>
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('careers')}
            >
              <span>Explore Career Paths</span>
            </button>
          </div>

          {quizTaken && (
            <div style={{ marginTop: 20, fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Target Quest: <strong style={{ color: 'var(--accent-cyan)' }}>{targetCareerName}</strong> •{' '}
              <button
                type="button"
                onClick={() => navigate('roadmap')}
                style={{ color: 'var(--accent-purple)', textDecoration: 'underline', fontWeight: 600 }}
              >
                Jump to Roadmap →
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Constellation Orbit */}
        <div>
          <Constellation onSelectNode={(nodeId) => {}} />
        </div>
      </section>

      {/* Platform Content Stats Section (Strictly platform numbers, not fake external statistics) */}
      <section style={{
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-subtle)',
        padding: '32px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24,
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-cyan)', lineHeight: 1.1 }}>
              10
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
              Technology Career Paths
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
              Engineering, Design, Data & Cloud
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-purple)', lineHeight: 1.1 }}>
              10
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
              Thoughtful Quiz Questions
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
              Deterministic weighted scoring
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#34D399', lineHeight: 1.1 }}>
              80+
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
              Curated Skill Checklists
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
              With hands-on practice challenges
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FBBF24', lineHeight: 1.1 }}>
              40+
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>
              Practical Roadmap Milestones
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
              Organized in 4 sequential stages
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards: Discover, Analyze, Build, Track */}
      <section>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-cyan)' }}>
            Core Capabilities
          </span>
          <h2 style={{ fontSize: '2rem', marginTop: 8, marginBottom: 12 }}>
            A Complete Career Strategy Platform
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Built to provide actionable clarity rather than superficial personality tests.
          </p>
        </div>

        <div className="grid-cols-4">
          {/* Card 1: Discover */}
          <div className="quest-card">
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              marginBottom: 16
            }}>
              🧭
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 8, color: 'var(--text-primary)' }}>
              1. Discover
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
              Answer 10 targeted questions about your problem-solving instincts, preferred outputs, and work styles to reveal top matches.
            </p>
          </div>

          {/* Card 2: Analyze */}
          <div className="quest-card">
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              marginBottom: 16
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 8, color: 'var(--text-primary)' }}>
              2. Analyze
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
              Evaluate your readiness with curated skill checklists. Identify your weakest priority skill and practice with real-world tasks.
            </p>
          </div>

          {/* Card 3: Build */}
          <div className="quest-card">
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '12px',
              background: 'rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              marginBottom: 16
            }}>
              🗺️
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 8, color: 'var(--text-primary)' }}>
              3. Build
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
              Follow a logical 4-stage roadmap with estimated hours, dependent milestones, and tangible portfolio project ideas.
            </p>
          </div>

          {/* Card 4: Track */}
          <div className="quest-card">
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              marginBottom: 16
            }}>
              🏆
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 8, color: 'var(--text-primary)' }}>
              4. Track
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
              Stay accountable through daily quests, milestone XP, achievement badges, consecutive day streaks, and visual charts.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step "How It Works" Section */}
      <section style={{
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-subtle)',
        padding: '40px 28px'
      }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 36px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: 8 }}>
            How SkillQuest Works
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Three simple steps to transform ambiguity into a personalized career strategy.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24
        }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--gradient-quest)',
              color: '#FFFFFF',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              1
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 6 }}>
                Take the Discovery Quiz
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Answer 10 thoughtfully designed questions. Our deterministic algorithm weighs points across 10 career paths to identify your top 3 matches.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--gradient-quest)',
              color: '#FFFFFF',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              2
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 6 }}>
                Inspect Your Skill Readiness
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Review the curated skill checklist for your target career. Toggle statuses between Not Started, Learning, and Confident to calculate real readiness.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--gradient-quest)',
              color: '#FFFFFF',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              3
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 6 }}>
                Conquer Milestones & Daily Missions
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Follow sequential roadmap stages from Foundations to Career Preparation. Complete daily missions to level up your Quest XP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={{
        textAlign: 'center',
        padding: '56px 24px',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.35)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: 14 }}>
          Ready to Chart Your Career Quest?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 540, margin: '0 auto 28px' }}>
          Discover your strengths, align your interests with real industry careers, and start checking off milestones today.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => navigate('quiz')}
        >
          <span>Start My Quest</span>
          <span>→</span>
        </button>
      </section>
    </div>
  );
}
