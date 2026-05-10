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
          <a href={data.github}   target="_blank" rel="noreferrer">🐙 GitHub</a>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h3>🎓 Education</h3>
          {data.education?.map((edu, i) => (
            <div className="resume-item" key={i}>
              <strong>{edu.degree} — {edu.institute} ({edu.year})</strong>
              <span>CGPA: {edu.cgpa}</span>
            </div>
          ))}
        </div>

        {/* Internship */}
        <div className="resume-section">
          <h3>💼 Internship</h3>
          {data.internship && (
            <div className="resume-item">
              <strong>{data.internship.title.replace(/^🤖\s*/, '')} — {data.internship.location} ({data.internship.year})</strong>
              <span>{data.internship.points?.[0]?.text}</span>
            </div>
          )}
        </div>

        {/* Projects */}
        <div className="resume-section">
          <h3>🚀 Projects</h3>
          {data.projects?.map((proj, i) => (
            <div className="resume-item" key={i}>
              <strong>{proj.title} | {proj.tags?.filter(t => !t.includes('🏆')).join(', ')} ({proj.year})</strong>
              <span>{proj.description?.split('.')[0]}.</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h3>💡 Technical Skills</h3>
          <div className="resume-item">
            <strong>Languages:</strong>
            <span>Python, Java, JavaScript</span>
          </div>
          <div className="resume-item">
            <strong>Web Development:</strong>
            <span>MERN Stack (MongoDB, Express.js, React.js, Node.js), HTML5, CSS3, REST APIs</span>
          </div>
          <div className="resume-item">
            <strong>AI / ML:</strong>
            <span>NLP, Voice Bot Development, Conversational AI, Intent Recognition, Entity Extraction</span>
          </div>
          <div className="resume-item">
            <strong>Others:</strong>
            <span>DSA, OOP, DBMS, OS, Solana/Web3, Google Cloud Platform (GCP)</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="resume-section">
          <h3>🏆 Achievements &amp; Certifications</h3>
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
