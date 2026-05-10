import React from 'react';

const NAV_ITEMS = [
  { key: 'home',         label: '🏠 Home',         isResume: false },
  { key: 'skills',       label: '💡 Skills',        isResume: false },
  { key: 'internship',   label: '💼 Internship',    isResume: false },
  { key: 'projects',     label: '🚀 Projects',      isResume: false },
  { key: 'achievements', label: '🏆 Achievements',  isResume: false },
  { key: 'resume',       label: '📄 Resume',        isResume: true  },
];

export default function NavBar({ activePanel, onSwitch }) {
  return (
    <div className="nav-bar">
      {NAV_ITEMS.map(({ key, label, isResume }) => (
        <button
          key={key}
          className={`nav-btn${isResume ? ' resume-btn' : ''}${activePanel === key ? ' active' : ''}`}
          onClick={() => onSwitch(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
