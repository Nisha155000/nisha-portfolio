import React from 'react';

export default function SkillsPanel({ active, skills = [] }) {
  return (
    <div className="panel" id="panel-skills" style={{ display: active ? 'block' : 'none' }}>
      <h2>💡 Skills from Doraemon's Pocket</h2>
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="icon">{skill.icon}</div>
            <div className="name">{skill.name}</div>
            <div className="detail">{skill.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
