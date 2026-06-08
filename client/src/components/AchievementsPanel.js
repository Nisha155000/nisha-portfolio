import React from 'react';

export default function AchievementsPanel({ active, achievements = [], onOpenCertificate, getCertificateImage = () => '' }) {
  return (
    <div className="panel" id="panel-achievements" style={{ display: active ? 'block' : 'none' }}>
      <h2>🏆 Achievements &amp; Certifications</h2>
      {achievements.map((ach, i) => (
        <button
          type="button"
          className="ach-card ach-card-btn"
          key={i}
          onClick={() =>
            onOpenCertificate?.({
              title: ach.title,
              subtitle:
                ach.icon === '🥇'
                  ? 'Code4Change Hackathon 2025'
                  : ach.icon === '☁️'
                    ? 'Google Cloud Agentic AI Day'
                    : 'Agamya Tech Summit 2025',
              description: ach.description,
              footerLeft: 'Nisha G',
              footerRight: 'Certificate',
              imageSrc: getCertificateImage(ach.title),
            })
          }
        >
          <div className="ach-icon">{ach.icon}</div>
          <p>
            <strong>{ach.title}</strong>
            {ach.description}
          </p>
        </button>
      ))}
    </div>
  );
}
