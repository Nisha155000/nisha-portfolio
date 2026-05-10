import React, { useState, useEffect, useRef } from 'react';

const BUBBLE_TEXTS = [
  'Click me! 🎵', 'Take out a gadget! 🎁', 'I am from the future! ⏰',
  'Anywhere door! 🚪✨', 'Dorayaki time! 🍩',
  "Let's build cool apps! 💻", 'NLP is my jam! 🤖',
  'Best FinTech 2025! 🏆', 'Nisha is awesome! ⭐',
  'Check my pocket! 🎒', 'Solana to the moon! 🌕',
];
const EMOJIS = ['⭐', '🎵', '✨', '🎈', '💫', '🎉', '🌟', '❤️', '🍩', '🤖'];

function spawnStars(e) {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.className = 'star';
      star.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      star.style.left = `${e.clientX + (Math.random() - 0.5) * 70}px`;
      star.style.top  = `${e.clientY - 10}px`;
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }, i * 80);
  }
}

export default function DoraemonWalk() {
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [bubbleOpacity, setBubbleOpacity] = useState(1);
  const [legPhase, setLegPhase] = useState(0);
  const idxRef = useRef(0);

  // Auto-cycle bubble text
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbleOpacity(0);
      setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % BUBBLE_TEXTS.length;
        setBubbleIdx(idxRef.current);
        setBubbleOpacity(1);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Leg animation
  useEffect(() => {
    const interval = setInterval(() => setLegPhase((p) => p + 1), 260);
    return () => clearInterval(interval);
  }, []);

  const llCx = legPhase % 2 === 0 ? 32 : 36;
  const lrCx = legPhase % 2 === 0 ? 58 : 54;

  const handleClick = (e) => {
    idxRef.current = (idxRef.current + 1) % BUBBLE_TEXTS.length;
    setBubbleIdx(idxRef.current);
    spawnStars(e);
  };

  return (
    <div className="walk-area">
      <div className="doraemon-wrapper" onClick={handleClick}>
        <div className="speech-bubble" style={{ opacity: bubbleOpacity }}>
          {BUBBLE_TEXTS[bubbleIdx]}
        </div>
        <svg className="doraemon-svg" viewBox="0 0 90 112" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="45" cy="76" rx="32" ry="27" fill="#1565C0"/>
          <ellipse cx="45" cy="83" rx="20" ry="17" fill="white"/>
          <ellipse cx="45" cy="89" rx="13" ry="7" fill="none" stroke="#555" strokeWidth="1.5"/>
          <line x1="13" y1="61" x2="77" y2="61" stroke="#E53935" strokeWidth="4"/>
          <ellipse cx="45" cy="65" rx="7" ry="6" fill="#FFD700" stroke="#F57F17" strokeWidth="1"/>
          <ellipse cx="45" cy="68" rx="2" ry="1.5" fill="#5D4037"/>
          <circle cx="45" cy="38" r="28" fill="#1565C0"/>
          <ellipse cx="45" cy="42" rx="20" ry="18" fill="white"/>
          <circle cx="37" cy="34" r="7" fill="white"/>
          <circle cx="53" cy="34" r="7" fill="white"/>
          <circle cx="38.5" cy="34" r="4" fill="#111"/>
          <circle cx="54.5" cy="34" r="4" fill="#111"/>
          <circle cx="40"   cy="33" r="1.5" fill="white"/>
          <circle cx="56"   cy="33" r="1.5" fill="white"/>
          <circle cx="45" cy="41" r="4" fill="#E53935"/>
          <line x1="45" y1="45" x2="45" y2="52" stroke="#888" strokeWidth="1"/>
          <path d="M32 52 Q45 63 58 52" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12" y1="43" x2="35" y2="46" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
          <line x1="12" y1="49" x2="35" y2="49" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
          <line x1="12" y1="55" x2="35" y2="52" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
          <line x1="78" y1="43" x2="55" y2="46" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
          <line x1="78" y1="49" x2="55" y2="49" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
          <line x1="78" y1="55" x2="55" y2="52" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
          <ellipse cx="13" cy="73" rx="10" ry="7" fill="#1565C0"/>
          <ellipse cx="77" cy="73" rx="10" ry="7" fill="#1565C0"/>
          <circle  cx="6"  cy="74" r="7" fill="white" stroke="#ddd" strokeWidth="1"/>
          <circle  cx="84" cy="74" r="7" fill="white" stroke="#ddd" strokeWidth="1"/>
          <ellipse cx={llCx} cy="103" rx="12" ry="7" fill="#1565C0"/>
          <ellipse cx={lrCx} cy="103" rx="12" ry="7" fill="#1565C0"/>
          <ellipse cx={llCx} cy="108" rx="14" ry="5" fill="white" stroke="#ddd" strokeWidth="1"/>
          <ellipse cx={lrCx} cy="108" rx="14" ry="5" fill="white" stroke="#ddd" strokeWidth="1"/>
          <path d="M77 91 Q102 80 91 107" fill="none" stroke="#E53935" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
