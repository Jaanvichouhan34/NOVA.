import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function Badges() {
  const [expandedCat, setExpandedCat] = useState(0);

  const badgeCategories = [
    {
      title: "Google Cloud / Arcade",
      emoji: "☁️",
      color: "var(--accent)",
      badges: [
        "Skills Boost Arcade Base Camp August 2025.png",
        "Skills Boost Arcade Base Camp September 2025.png",
        "Skills Boost Arcade Certification Zone August 2025.png",
        "Skills Boost Arcade Trivia August 2025 Week 1.png",
        "Skills Boost Arcade Trivia August 2025 Week 2.png",
        "Skills Boost Arcade Trivia August 2025 Week 3.png",
        "Skills Boost Arcade Trivia August 2025 Week 4.png",
        "Skills Boost Arcade Trivia September 2025 Week 1.png",
        "Skills Boost Arcade Trivia September 2025 Week 2.png",
        "Skills Boost Arcade Trivia September 2025 Week 4.png",
        "Building with Cloud Tools.png",
        "Cloud Infrastructure and Data Foundation.png",
        "Developer Essentials.png",
        "Application Design and Delivery.png",
        "Terraform Essentials.png",
        "Future Ready Skills.png"
      ]
    },
    {
      title: "Cisco NetAcad",
      emoji: "🔒",
      color: "var(--accent2)",
      badges: [
        "cyber 1.png",
        "cyber 2.png",
        "JS 1.png",
        "JS 2.png",
        "python 1.png",
        "python 2.png",
        "ITN.png",
        "networking 2.png",
        "networking 3.png",
        "data science.png",
        "modern AI.png",
        "Apply AI Analyze Customer Reviews.png"

      ]
    },
    {
      title: "Open Source (GSSoC / NSOC)",
      emoji: "🌟",
      color: "var(--accent4)",
      badges: [
        "GSSoC 1.png",
        "GSSoc.png",
        "gssoc-badge-first_steps.png",
        "gssoc-badge-profile_complete.png",
        "Contributor.png",
        "NSOC 1st badge.png",
        "NSOC Contributor.png"
      ]
    },
    {
      title: "GitHub Achievements",
      emoji: "⌨",
      color: "var(--accent3)",
      badges: [
        "GITHUB Pull Shark.png",
        "GITHUB Quickdraw.png",
        "GITHUB YOLO.png"
      ]
    },
    {
      title: "LeetCode Badges",
      emoji: "🎯",
      color: "var(--accent2)",
      badges: [
        "50 Days.gif",
        "may.gif"
      ]
    }
  ];

  const totalBadges = badgeCategories.reduce((sum, cat) => sum + cat.badges.length, 0);

  const toggleCategory = (index) => {
    setExpandedCat(expandedCat === index ? null : index);
  };

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1100px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)' }}>
          <Shield size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          DIGITAL BADGES
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem' }}>
          {totalBadges} verified badges earned across platforms
        </p>
      </div>

      {/* Stats Strip */}
      <div className="glass-panel" style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1.5rem',
        marginBottom: '3rem',
        borderTop: '3px solid var(--accent)',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {badgeCategories.map((cat, i) => (
          <div key={i} style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => toggleCategory(i)}>
            <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>{cat.emoji}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: cat.color, fontWeight: 'bold' }}>{cat.badges.length}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.title.split('(')[0].trim()}</div>
          </div>
        ))}
      </div>

      {/* Badge Categories */}
      {badgeCategories.map((category, catIndex) => {
        const isExpanded = expandedCat === catIndex;
        return (
          <div key={catIndex} style={{ marginBottom: '2.5rem' }}>
            <div
              onClick={() => toggleCategory(catIndex)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '1rem 1.5rem',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                marginBottom: isExpanded ? '1.5rem' : '0',
                transition: 'all 0.3s ease',
                borderLeft: `4px solid ${category.color}`
              }}
            >
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.5rem' }}>{category.emoji}</span>
                {category.title}
                <span style={{
                  padding: '2px 10px',
                  background: `${category.color}20`,
                  color: category.color,
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {category.badges.length}
                </span>
              </h3>
              {isExpanded ? <ChevronUp size={20} color="var(--text-muted)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
            </div>

            {isExpanded && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '1rem',
                animation: 'fadeInUp 0.4s ease both'
              }}>
                {category.badges.map((badge, j) => (
                  <div
                    key={j}
                    className="badge-hover-card"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                      padding: '1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    title={badge.replace(/\.(png|gif|jpe?g)$/i, '')}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${category.color}, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }} className="badge-top-bar"></div>
                    <img
                      src={`/badges/${badge}`}
                      alt={badge.replace(/\.(png|gif|jpe?g)$/i, '')}
                      style={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                        transition: 'transform 0.3s ease'
                      }}
                      loading="lazy"
                    />
                    <p style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.3',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {badge.replace(/\.(png|gif|jpe?g)$/i, '')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Total Badge Count */}
      <div className="glass-panel" style={{
        textAlign: 'center',
        padding: '2rem',
        marginTop: '3rem',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.1), rgba(0,0,0,0.3))',
        border: '1px solid var(--accent)'
      }}>
        <Sparkles size={32} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
        <h3 style={{ fontSize: '2rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{totalBadges} Badges Earned</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Across Google Cloud, Cisco NetAcad, GSSoC, NSOC & GitHub
        </p>
      </div>

      <style>{`
        .badge-hover-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          border-color: var(--accent);
          z-index: 5;
        }
        .badge-hover-card:hover .badge-top-bar {
          opacity: 1 !important;
        }
        .badge-hover-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
