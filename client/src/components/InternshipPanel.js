import React from 'react';

export default function InternshipPanel({ active, internship }) {
  if (!internship) return null;
  return (
    <div className="panel" id="panel-internship" style={{ display: active ? 'block' : 'none' }}>
      <h2>💼 Internship Experience</h2>
      <div className="intern-card">
        <h3>{internship.title}</h3>
        <div className="intern-meta">
          📍 {internship.location} &nbsp;|&nbsp; 📅 {internship.year}
        </div>
        {internship.points?.map((pt, i) => (
          <div className="intern-point" key={i}>
            <div className="dot" />
            <p dangerouslySetInnerHTML={{ __html: pt.text }} />
          </div>
        ))}
        <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {internship.tags?.map((tag, i) => (
            <span className="tag intern-tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
