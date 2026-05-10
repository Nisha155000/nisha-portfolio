import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Clouds from './components/Clouds';
import Sun from './components/Sun';
import NavBar from './components/NavBar';
import DoraemonWalk from './components/DoraemonWalk';
import HomePanel from './components/HomePanel';
import SkillsPanel from './components/SkillsPanel';
import InternshipPanel from './components/InternshipPanel';
import ProjectsPanel from './components/ProjectsPanel';
import AchievementsPanel from './components/AchievementsPanel';
import ResumePanel from './components/ResumePanel';

const HINTS = {
  home:         '👆 Click Doraemon for surprises!',
  skills:       '🎒 These gadgets came straight from the pocket!',
  internship:   '💼 Real work, real impact — 500+ interactions!',
  projects:     '🚀 Real-world projects with real results!',
  achievements: "🏆 Nisha's shining trophies!",
  resume:       '📄 Full resume — click links to connect!',
};

export default function App() {
  const [activePanel, setActivePanel] = useState('home');
  const [hint, setHint] = useState(HINTS.home);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/portfolio')
      .then((res) => setData(res.data))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  const switchPanel = (name) => {
    setActivePanel(name);
    setHint(HINTS[name] || '👆 Click Doraemon!');
  };

  if (loading) {
    return (
      <div className="scene" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontFamily: "'Baloo 2', cursive", fontSize: 22, color: '#1565C0' }}>
          Loading Nisha's World... 🌟
        </p>
      </div>
    );
  }

  return (
    <div className="scene">
      <Clouds />
      <Sun />

      <div className="title-area">
        <h1>✨ {data?.owner || 'Nisha G'} — Portfolio ✨</h1>
        <p>{data?.tagline}</p>
      </div>

      <NavBar activePanel={activePanel} onSwitch={switchPanel} />

      <DoraemonWalk />

      <p className="hint">{hint}</p>

      <div className="panel-container">
        <HomePanel active={activePanel === 'home'} data={data} />
        <SkillsPanel active={activePanel === 'skills'} skills={data?.skills} />
        <InternshipPanel active={activePanel === 'internship'} internship={data?.internship} />
        <ProjectsPanel active={activePanel === 'projects'} projects={data?.projects} />
        <AchievementsPanel active={activePanel === 'achievements'} achievements={data?.achievements} />
        <ResumePanel active={activePanel === 'resume'} data={data} />
      </div>
    </div>
  );
}
