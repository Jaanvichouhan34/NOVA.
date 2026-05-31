import React from 'react';
import { Award, Medal, Trophy, ExternalLink, Calendar, Code2, Shield, Cloud, Download } from 'lucide-react';

export default function Certificates() {
  const achievements = [
    {
      title: "GSSoC 2026 Ambassador & Contributor",
      org: "GirlScript Summer of Code",
      date: "2026",
      type: "Open Source",
      icon: Code2,
      desc: "Selected as Ambassador & Contributor out of 35,000+ applicants. Contributing to open source projects while driving community outreach.",
      link: "#"
    },
    {
      title: "NSoC '26 Open Source Contributor",
      org: "Nexus Spring of Code",
      date: "2026",
      type: "Open Source",
      icon: Code2,
      desc: "Selected as an official Open Source Contributor for Nexus Spring of Code.",
      link: "#"
    },
    {
      title: "Smart India Hackathon (SIH) - Internal College Round",
      org: "Government of India",
      date: "2024 & 2025",
      type: "Hackathon",
      icon: Trophy,
      desc: "Successfully cleared the internal college round for the Smart India Hackathon twice — during both the 2nd and 3rd year of B.Tech.",
      link: "#"
    },
    {
      title: "Quasar Hackathon - Round 2",
      org: "47 Billion · Medi-Caps University",
      date: "2024",
      type: "Hackathon",
      icon: Medal,
      desc: "Selected for Round 2, conducted at Medi-Caps University by 47 Billion.",
      link: "#"
    },
    {
      title: "Google Arcade Facilitator 2025",
      org: "Google Cloud Skills Boost",
      date: "2025 (Cohort 2)",
      type: "Cloud Program",
      icon: Cloud,
      desc: "Achieved Trooper-level recognition for completing cloud-based technical challenges in the Google Arcade Facilitator Program.",
      link: "#"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      org: "Cisco Networking Academy",
      date: "Sep 2025 - Present",
      type: "Internship",
      icon: Shield,
      desc: "Currently undertaking a rigorous 9-month internship/training program in Enterprise Networking, Routing, Switching, and Cybersecurity.",
      link: "#"
    }
  ];

  const certificates = [
    {
      title: "CCNA: Enterprise Networking, Routing & Switching",
      issuer: "Cisco NetAcad",
      skills: ["Networking", "Routing", "Switching", "Enterprise"],
      color: "var(--accent)",
      pdfs: [{ label: "PDF", url: "/certificates/CCNA-_Enterprise_Networking-_Security-_and_Automation.pdf" }]
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco NetAcad",
      skills: ["Networking", "TCP/IP", "Protocols"],
      color: "var(--accent)",
      pdfs: [{ label: "PDF", url: "/certificates/CCNA-_Introduction_to_Networks.pdf" }]
    },
    {
      title: "CCNA: Switching, Routing & Wireless",
      issuer: "Cisco NetAcad",
      skills: ["Switching", "Routing", "Wireless"],
      color: "var(--accent)",
      pdfs: [{ label: "PDF", url: "/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials.pdf" }]
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco NetAcad",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
      color: "var(--accent3)",
      pdfs: [{ label: "PDF", url: "/certificates/Industrial_Cybersecurity_Essentials.pdf" }]
    },
    {
      title: "Python Essentials",
      issuer: "Cisco NetAcad / Python Institute",
      skills: ["Python", "OOP", "Data Structures"],
      color: "var(--accent4)",
      pdfs: [
        { label: "Part 1", url: "/certificates/Python_Essentials_1.pdf" },
        { label: "Part 2", url: "/certificates/Python_Essentials_2.pdf" }
      ]
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco NetAcad",
      skills: ["JavaScript", "DOM", "ES6+"],
      color: "var(--accent2)",
      pdfs: [
        { label: "Part 1", url: "/certificates/JavaScript_Essentials_1.pdf" },
        { label: "Part 2", url: "/certificates/JavaScript_Essentials_2.pdf" }
      ]
    },
    {
      title: "Introduction to Data Science & Modern AI",
      issuer: "Cisco NetAcad",
      skills: ["Data Science", "AI", "Machine Learning"],
      color: "var(--accent3)",
      pdfs: [
        { label: "Data Science", url: "/certificates/Introduction_to_Data_Science.pdf" },
        { label: "Modern AI", url: "/certificates/Introduction_to_Modern_AI.pdf" }
      ]
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Physics Wallah",
      skills: ["Java", "Algorithms", "DSA"],
      color: "var(--accent)",
      pdfs: []
    },
    {
      title: "Complete Git & GitHub",
      issuer: "Geekster",
      skills: ["Version Control", "Git", "CI/CD"],
      color: "var(--accent4)",
      pdfs: []
    },
    {
      title: "Applied AI — Analyze Customer Reviews",
      issuer: "Medi-Caps University",
      skills: ["AI", "NLP", "Sentiment Analysis"],
      color: "var(--accent2)",
      pdfs: [{ label: "PDF", url: "/certificates/Apply AI Analyze Customer Reviews.pdf" }]
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco NetAcad",
      skills: ["Cybersecurity", "Fundamentals"],
      color: "var(--accent3)",
      pdfs: [{ label: "PDF", url: "/certificates/Introduction_to_Cybersecurity.pdf" }]
    }
  ];

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', maxWidth: '1100px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--accent)' }}>
          <Award size={48} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '15px' }} />
          AWARDS & CERTIFICATIONS
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem' }}>
          {certificates.length} certifications · {achievements.length} experiences & milestones
        </p>
      </div>

      {/* Achievements Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Trophy color="var(--accent2)" /> Experience & Achievements
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="glass-panel cert-card-3d" style={{
                padding: '2rem',
                borderRadius: '20px',
                borderTop: '4px solid var(--accent2)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '12px', color: 'var(--accent2)' }}>
                    <Icon size={28} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{item.title}</h3>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>{item.org} • {item.type}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award color="var(--accent)" /> Professional Certifications ({certificates.length})
        </h2>

        <div style={{ display: 'grid', gap: '1.2rem' }}>
          {certificates.map((cert, i) => (
            <div key={i} className="glass-panel cert-card-3d" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              padding: '1.5rem 2rem',
              borderRadius: '16px',
              borderLeft: `4px solid ${cert.color}`
            }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{cert.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                  <span><span style={{ color: cert.color }}>Issuer:</span> {cert.issuer}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {cert.skills.map((skill, j) => (
                  <span key={j} className="skill-pill" style={{
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'var(--text)',
                    cursor: 'pointer'
                  }}>
                    {skill}
                  </span>
                ))}
                {cert.pdfs && cert.pdfs.map((p, pIdx) => (
                  <a
                    key={pIdx}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(var(--accent-rgb), 0.15)',
                      border: '1px solid var(--accent)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Download size={14} /> {p.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card-3d {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .cert-card-3d:hover {
          transform: perspective(1000px) rotateX(4deg) translateY(-8px) scale(1.01);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05);
          border-color: var(--accent);
          z-index: 10;
        }

        .skill-pill {
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          user-select: none;
        }
        .skill-pill:hover {
          transform: translateY(-3px) scale(1.05);
          background: var(--accent) !important;
          color: #000 !important;
          border-color: transparent !important;
          box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.4);
        }
      `}</style>
    </div>
  );
}
