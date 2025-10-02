// components/GlobalBackground.jsx
import React from "react";

const GlobalBackground = () => {
  const circuitNodes = React.useMemo(() => 
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * 4 + 1.5,
    })), []
  );

  const flowingDots = React.useMemo(() => 
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      startX: -5,
      endX: 105,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 15 + 8,
      delay: Math.random() * 8,
    })), []
  );

  const fastParticles = React.useMemo(() => 
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      startX: -3,
      endX: 103,
      y: Math.random() * 100,
      speed: Math.random() * 6 + 4,
      delay: Math.random() * 10,
    })), []
  );

  const travelingTexts = React.useMemo(() => [
    { id: 1, direction: 'horizontal', y: 20, speed: 20, delay: 0 },
    { id: 2, direction: 'diagonal-down', speed: 22, delay: 8 },
    { id: 3, direction: 'horizontal', y: 80, speed: 18, delay: 4 },
  ], []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Circuit nodes */}
      <div className="absolute inset-0">
        {circuitNodes.map((node) => (
          <div
            key={node.id}
            className="absolute bg-green-400 rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              opacity: node.opacity,
              animation: `pulseAndMove ${node.pulse}s ease-in-out infinite, randomMove ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 8px rgba(74, 222, 128, 0.8), 0 0 16px rgba(34, 197, 94, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Flowing dots */}
      <div className="absolute inset-0">
        {flowingDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute bg-lime-400 rounded-full"
            style={{
              left: `${dot.startX}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: 0,
              animation: `flowFullScreen ${dot.speed}s linear infinite`,
              animationDelay: `${dot.delay}s`,
              boxShadow: '0 0 6px rgba(163, 230, 53, 1), 0 0 12px rgba(132, 204, 22, 0.7)',
              '--end-x': `${dot.endX}%`,
            }}
          />
        ))}
      </div>

      {/* Fast particles */}
      <div className="absolute inset-0">
        {fastParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-cyan-400 rounded-full"
            style={{
              left: `${particle.startX}%`,
              top: `${particle.y}%`,
              width: '1.5px',
              height: '1.5px',
              opacity: 0,
              animation: `fastFullScreen ${particle.speed}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 0 4px rgba(34, 211, 238, 0.8)',
              '--end-x': `${particle.endX}%`,
            }}
          />
        ))}
      </div>

      {/* Traveling registration text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {travelingTexts.map((text) => (
          <div
            key={text.id}
            className="absolute whitespace-nowrap text-green-400 font-semibold tracking-wide will-change-transform"
            style={{
              left: '-20%',
              top: text.direction === 'horizontal' ? `${text.y}%` : '10%',
              fontSize: '10px',
              opacity: 0,
              textShadow: '0 0 6px rgba(74, 222, 128, 0.5)',
              animation: text.direction === 'horizontal' 
                ? `travelHorizontal ${text.speed}s linear infinite`
                : `travelDiagonalDown ${text.speed}s linear infinite`,
              animationDelay: `${text.delay}s`,
            }}
          >
            
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes flowFullScreen {0%{left:-5%;opacity:0}5%{opacity:0.9}95%{opacity:0.9}100%{left:105%;opacity:0}}
        @keyframes fastFullScreen {0%{left:-3%;opacity:0}10%{opacity:0.7}90%{opacity:0.7}100%{left:103%;opacity:0}}
        @keyframes pulseAndMove {0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.2);filter:brightness(1.3)}}
        @keyframes randomMove {0%{transform:translate(0,0)}25%{transform:translate(${Math.random()*40-20}px,${Math.random()*40-20}px)}50%{transform:translate(${Math.random()*60-30}px,${Math.random()*60-30}px)}75%{transform:translate(${Math.random()*40-20}px,${Math.random()*40-20}px)}100%{transform:translate(0,0)}}
        @keyframes travelHorizontal {0%{transform:translateX(0);opacity:0}5%{opacity:0.7}95%{opacity:0.7}100%{transform:translateX(140vw);opacity:0}}
        @keyframes travelDiagonalDown {0%{transform:translate(0,0);opacity:0}5%{opacity:0.7}95%{opacity:0.7}100%{transform:translate(140vw,70vh);opacity:0}}
      `}</style>
    </div>
  );
};

export default GlobalBackground;