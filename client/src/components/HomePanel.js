import React from 'react';

export default function HomePanel({ active, data }) {
  if (!data) return null;
  return (
    <div className="panel" id="panel-home" style={{ display: active ? 'block' : 'none' }}>
      <h2>🏠 Welcome to Nisha's World!</h2>
      <div className="about-card">
        <div className="about-avatar">👩‍💻</div>
        <div className="about-info">
          <h3>{data.owner}</h3>
          <p>{data.about}</p>
          <div className="badge-row">
            {data.badges?.map((b, i) => (
              <span className="badge" key={i}>{b}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-strip">
        <p>
          📧 <a href={`mailto:${data.email}`}>{data.email}</a>
          &nbsp;|&nbsp;
          📞 <a href={`tel:${data.phone}`}>{data.phone}</a>
        </p>
        <p style={{ marginTop: 5 }}>
          🔗 <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          &nbsp;|&nbsp;
          🐙 <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  );
}
