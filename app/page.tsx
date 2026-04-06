"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

// Seeded random for consistent but varied positioning
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

const DANCE_STYLES = ["animate-dance-a", "animate-dance-b", "animate-dance-c", "animate-dance-d"];
const ARM_STYLES = ["arm-wave-a", "arm-wave-b", "arm-wave-c"];
const LEG_STYLES = ["leg-kick-a", "leg-kick-b"];
const TORSO_COLORS = ["#c41e1e", "#ff2d95", "#b24dff", "#00c8ff", "#ffe600", "#ff6b1a"];

function DancingSasaki({ id, angry }: { id: number; angry: boolean }) {
  const rand = useMemo(() => ({
    x: (seededRandom(id * 7 + 3) - 0.5) * 80,
    y: seededRandom(id * 13 + 7) * 30,
    dance: DANCE_STYLES[Math.floor(seededRandom(id * 17 + 1) * DANCE_STYLES.length)],
    armL: ARM_STYLES[Math.floor(seededRandom(id * 23 + 5) * ARM_STYLES.length)],
    armR: ARM_STYLES[Math.floor(seededRandom(id * 29 + 9) * ARM_STYLES.length)],
    legL: LEG_STYLES[Math.floor(seededRandom(id * 31 + 2) * LEG_STYLES.length)],
    legR: LEG_STYLES[Math.floor(seededRandom(id * 37 + 4) * LEG_STYLES.length)],
    speed: 0.5 + seededRandom(id * 41 + 6) * 0.6,
    delay: id * 0.15,
    scale: 0.5 + seededRandom(id * 43 + 8) * 1.0,
    torsoColor: TORSO_COLORS[Math.floor(seededRandom(id * 47 + 11) * TORSO_COLORS.length)],
  }), [id]);

  return (
    <div
      className="absolute animate-dance-in"
      style={{
        left: `${rand.x + 50}%`,
        bottom: `${rand.y + 5}%`,
        transform: `translateX(-50%) scale(${rand.scale})`,
        animationDelay: `${rand.delay}s`,
        zIndex: Math.floor(10 + rand.y),
      }}
    >
      <div
        className={angry ? "animate-angry-shake" : rand.dance}
        style={{ animationDelay: `${rand.delay + 0.5}s`, animationDuration: `${rand.speed}s` }}
      >
        {angry && (
          <div
            className="animate-pop-in bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg mb-1 text-center whitespace-nowrap"
            style={{ animationDelay: `${rand.delay + 0.3}s` }}
          >
            踊るに決まってるだろ！
          </div>
        )}

        <div className="w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden border-2 border-red-600 mx-auto shadow-none">
          <Image src="/sasaki_face.jpg" alt="SASAKI" width={52} height={52} className="w-full h-full object-cover" />
        </div>

        <svg width="52" height="75" viewBox="0 0 52 75" className="mx-auto -mt-[2px]">
          <rect x="16" y="0" width="20" height="30" rx="4" fill={rand.torsoColor} />
          <rect x="2" y="2" width="14" height="6" rx="3" fill={rand.torsoColor}
            style={{ transformOrigin: "16px 5px", animation: `${rand.armL} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay}s` }}
          />
          <rect x="36" y="2" width="14" height="6" rx="3" fill={rand.torsoColor}
            style={{ transformOrigin: "36px 5px", animation: `${rand.armR} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay + 0.1}s` }}
          />
          <rect x="16" y="30" width="9" height="26" rx="4" fill="#222"
            style={{ transformOrigin: "20px 30px", animation: `${rand.legL} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay}s` }}
          />
          <rect x="27" y="30" width="9" height="26" rx="4" fill="#222"
            style={{ transformOrigin: "32px 30px", animation: `${rand.legR} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay + 0.1}s` }}
          />
          <ellipse cx="20" cy="58" rx="6" ry="3" fill="#111"
            style={{ transformOrigin: "20px 30px", animation: `${rand.legL} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay}s` }}
          />
          <ellipse cx="32" cy="58" rx="6" ry="3" fill="#111"
            style={{ transformOrigin: "32px 30px", animation: `${rand.legR} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay + 0.1}s` }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  const [sasakis, setSasakis] = useState<{ id: number; angry: boolean }[]>([]);
  const [started, setStarted] = useState(false);

  const addSasaki = (angry: boolean) => {
    setSasakis((prev) => [...prev, { id: prev.length, angry }]);
  };

  const handleStart = () => {
    setStarted(true);
    addSasaki(false);
  };

  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden relative">
      {/* Disco BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(255,45,149,0.08)_0%,_rgba(178,77,255,0.05)_30%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(0,240,255,0.04)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(255,230,0,0.03)_0%,_transparent_40%)]" />

      {!started ? (
        <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
          {/* Neon title */}
          <div className="text-center mb-12">
            <p className="animate-fade-in-up text-gray-400 text-base md:text-lg mb-2">ボクはいいんだけど、</p>
            <h1
              className="animate-fade-in-up neon-text-red text-5xl md:text-7xl font-black italic tracking-[0.2em] mb-2"
              style={{ animationDelay: "0.15s" }}
            >
              SASAKI
            </h1>
            <p className="animate-fade-in-up text-gray-400 text-base md:text-lg mb-8" style={{ animationDelay: "0.3s" }}>
              がなんて言うかな？
            </p>

            <p
              className="animate-fade-in-up font-disco neon-text-pink text-2xl md:text-4xl mb-3 animate-neon-flicker"
              style={{ animationDelay: "0.5s" }}
            >
              って、それより僕と踊りませんか？
            </p>
            <p
              className="animate-fade-in-up font-disco neon-text-cyan text-xl md:text-3xl mb-1"
              style={{ animationDelay: "0.7s" }}
            >
              夢の中へ 夢の中へ
            </p>
            <p
              className="animate-fade-in-up font-disco neon-text-purple text-lg md:text-2xl"
              style={{ animationDelay: "0.9s" }}
            >
              行ってみたいと思いませんか
            </p>
          </div>

          <button
            onClick={handleStart}
            className="animate-fade-in-up neon-border-button bg-transparent text-white font-black text-2xl md:text-3xl px-14 py-5 rounded-full neon-text-pink"
            style={{ animationDelay: "1.1s" }}
          >
            踊る？
          </button>
        </main>
      ) : (
        <>
          <main className="flex-1 relative">
            {/* Floor reflection */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-950/20 via-pink-950/10 to-transparent" />
            <div className="absolute bottom-6 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

            {/* Sasakis */}
            <div className="absolute inset-0">
              {sasakis.map((s) => (
                <DancingSasaki key={s.id} id={s.id} angry={s.angry} />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-5 right-5 neon-text-yellow font-black text-xl italic z-50">
              SASAKI x {sasakis.length}
            </div>

            {/* Mini title */}
            <div className="absolute top-5 left-5 z-50">
              <p className="text-gray-500 text-xs">
                ボクはいいんだけど、<span className="neon-text-red text-[10px] font-black italic">SASAKI</span>がなんて言うかな？
              </p>
              <p className="font-disco neon-text-pink text-[10px] opacity-60">って、それより僕と踊りませんか？</p>
            </div>
          </main>

          <div className="flex-shrink-0 px-4 py-5 relative z-50 bg-gradient-to-t from-black via-black/95 to-transparent">
            <div className="max-w-md mx-auto flex gap-4 justify-center">
              <button
                onClick={() => addSasaki(false)}
                className="neon-border-button bg-transparent neon-text-pink font-bold text-base md:text-lg px-8 py-3 rounded-full active:scale-95"
              >
                もっと踊る？
              </button>
              <button
                onClick={() => addSasaki(true)}
                className="bg-transparent border border-gray-600 text-gray-400 hover:text-white font-bold text-base md:text-lg px-8 py-3 rounded-full transition-all hover:border-gray-400 active:scale-95"
              >
                踊らない
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
