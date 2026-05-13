import React from 'react';

export default function ResumePanel({ active, data }) {
  if (!data) return null;

  return (
    <div className="panel" id="panel-resume" style={{ display: active ? 'block' : 'none' }}>
      <h2>📄 Doraemon's Resume Scroll!</h2>
      <div className="resume-card">
        <div className="resume-name">{data.owner}</div>

        <div className="resume-contact">
          <a href={`mailto:${data.email}`}>📧 Email</a>
          <a href={`tel:${data.phone}`}>📞 {data.phone}</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href={data.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
        </div>

        <div className="resume-section">
          <h3>🎓 Education</h3>
          {data.education?.map((edu, i) => (
            <div className="resume-item" key={i}>
              <strong>{edu.degree} — {edu.institute} ({edu.year})</strong>
              <span>CGPA: {edu.cgpa}</span>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>💼 Internship</h3>
          {data.internship && (
            <div className="resume-item">
              <strong>{data.internship.title.replace(/^🤖\s*/, '')} — {data.internship.location} ({data.internship.year})</strong>
              <span>{data.internship.points?.[0]?.text}</span>
            </div>
          )}
        </div>

        <div className="resume-section">
          <h3>🚀 Projects</h3>
          {data.projects?.map((proj, i) => (
            <div className="resume-item" key={i}>
              <strong>{proj.title} | {proj.tags?.filter((tag) => !tag.includes('🏆')).join(', ')} ({proj.year})</strong>
              <span>{proj.description}</span>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>💡 Technical Skills</h3>
          {data.skillSections?.map((section, i) => (
            <div className="resume-item" key={i}>
              <strong>{section.title}:</strong>
              <span>{section.items}</span>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>✅ Certifications</h3>
          {data.certifications?.map((cert, i) => (
            <div className="resume-item" key={i}>
              <span>{cert}</span>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h3>🏆 Achievements</h3>
          {data.achievements?.map((ach, i) => (
            <div className="resume-item" key={i}>
              <strong>{ach.title}</strong>
              <span>{ach.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
