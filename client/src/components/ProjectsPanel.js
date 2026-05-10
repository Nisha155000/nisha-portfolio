import React from 'react';

export default function ProjectsPanel({ active, projects = [] }) {
  return (
    <div className="panel" id="panel-projects" style={{ display: active ? 'block' : 'none' }}>
      <h2>🚀 Projects from the Pocket</h2>
      {projects.map((project, i) => (
        <div className="project-card" key={i}>
          <h3>
            {project.icon} {project.title}&nbsp;
            <span style={{ fontSize: 12, color: '#888', fontWeight: 400 }}>{project.year}</span>
          </h3>
          <p>{project.description}</p>
          <div>
            {project.tags?.map((tag, j) => (
              <span
                className={`tag${tag.includes('🏆') ? ' winner' : ''}`}
                key={j}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
