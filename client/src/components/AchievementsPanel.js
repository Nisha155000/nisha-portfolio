import React from 'react';

export default function AchievementsPanel({ active, achievements = [] }) {
  return (
    <div className="panel" id="panel-achievements" style={{ display: active ? 'block' : 'none' }}>
      <h2>🏆 Achievements &amp; Certifications</h2>
      {achievements.map((ach, i) => (
        <div className="ach-card" key={i}>
          <div className="ach-icon">{ach.icon}</div>
          <p>
            <strong>{ach.title}</strong>
            {ach.description}
          </p>
        </div>
      ))}
    </div>
  );
}
