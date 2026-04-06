"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

/* Floating petals for the title screen */
function Petals() {
  const petals = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: seededRandom(i * 7 + 1) * 100,
      size: 8 + seededRandom(i * 11 + 3) * 14,
      delay: seededRandom(i * 13 + 5) * 12,
      duration: 10 + seededRandom(i * 17 + 7) * 10,
      variant: i % 2 === 0,
      hue: 330 + seededRandom(i * 19 + 9) * 40,
      opacity: 0.2 + seededRandom(i * 23 + 11) * 0.3,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: `${p.size}px`,
            height: `${p.size * 0.7}px`,
            background: `hsl(${p.hue}, 60%, 80%)`,
            opacity: p.opacity,
            animation: `${p.variant ? "petal-fall" : "petal-fall-2"} ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            borderRadius: "50% 0 50% 0",
          }}
        />
      ))}
    </div>
  );
}

/* Smoke / mist layers */
function SmokeLayers() {
  return (
    <>
      <div
        className="absolute inset-0 animate-soft-breathe"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(255,220,240,0.4) 0%, rgba(255,245,250,0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 80%, rgba(230,210,255,0.2) 0%, transparent 50%)",
          animation: "smoke-drift 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 70%, rgba(210,240,255,0.15) 0%, transparent 50%)",
          animation: "smoke-drift 20s ease-in-out infinite 5s",
        }}
      />
    </>
  );
}

/* ====== DANCING SASAKI ====== */
const DANCE_STYLES = ["animate-dance-a", "animate-dance-b", "animate-dance-c", "animate-dance-d"];
const ARM_STYLES = ["arm-wave-a", "arm-wave-b", "arm-wave-c"];
const LEG_STYLES = ["leg-kick-a", "leg-kick-b"];
const TORSO_COLORS = ["#c41e1e", "#e85d8a", "#9b59b6", "#5dade2", "#f39c12", "#e74c3c"];

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

        <div className="w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden border-2 border-pink-300 mx-auto">
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
          <rect x="16" y="30" width="9" height="26" rx="4" fill="#ddd"
            style={{ transformOrigin: "20px 30px", animation: `${rand.legL} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay}s` }}
          />
          <rect x="27" y="30" width="9" height="26" rx="4" fill="#ddd"
            style={{ transformOrigin: "32px 30px", animation: `${rand.legR} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay + 0.1}s` }}
          />
          <ellipse cx="20" cy="58" rx="6" ry="3" fill="#ccc"
            style={{ transformOrigin: "20px 30px", animation: `${rand.legL} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay}s` }}
          />
          <ellipse cx="32" cy="58" rx="6" ry="3" fill="#ccc"
            style={{ transformOrigin: "32px 30px", animation: `${rand.legR} ${rand.speed}s ease-in-out infinite`, animationDelay: `${rand.delay + 0.1}s` }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
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
    <div className="h-screen flex flex-col overflow-hidden relative bg-[#fdf8f5]">

      {!started ? (
        /* ===== TITLE SCREEN ===== */
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
          {/* Smoke */}
          <SmokeLayers />
          {/* Petals */}
          <Petals />

          {/* Title */}
          <div className="text-center relative z-10">
            <p
              className="animate-fade-in-up font-mincho text-gray-400 text-sm md:text-base tracking-[0.3em] mb-3"
            >
              ボクはいいんだけど、
            </p>
            <h1
              className="animate-fade-in-up font-mincho text-red-500 text-5xl md:text-7xl font-black italic tracking-[0.25em] mb-3"
              style={{ animationDelay: "0.2s" }}
            >
              SASAKI
            </h1>
            <p
              className="animate-fade-in-up font-mincho text-gray-400 text-sm md:text-base tracking-[0.3em] mb-12"
              style={{ animationDelay: "0.4s" }}
            >
              がなんて言うかな？
            </p>

            <p
              className="animate-fade-in-up font-elegant italic text-rose-400 text-2xl md:text-4xl tracking-wide mb-4"
              style={{ animationDelay: "0.7s" }}
            >
              って、それより僕と踊りませんか？
            </p>
            <p
              className="animate-fade-in-up font-elegant italic text-purple-400 text-xl md:text-3xl tracking-wider mb-2 animate-gentle-float"
              style={{ animationDelay: "1.0s" }}
            >
              夢の中へ&ensp;夢の中へ
            </p>
            <p
              className="animate-fade-in-up font-elegant italic text-sky-400 text-lg md:text-2xl tracking-wider"
              style={{ animationDelay: "1.3s" }}
            >
              行ってみたいと思いませんか
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleStart}
            className="animate-fade-in-up relative z-10 mt-14 font-mincho text-rose-400 text-2xl md:text-3xl tracking-[0.2em] px-14 py-4 rounded-full border-2 border-rose-300 bg-white/60 backdrop-blur-sm hover:bg-rose-50 transition-all hover:scale-105"
            style={{ animationDelay: "1.6s" }}
          >
            踊る？
          </button>
        </main>
      ) : (
        /* ===== DANCE FLOOR ===== */
        <>
          <main className="flex-1 relative bg-[#fdf8f5]">
            <SmokeLayers />
            <Petals />

            {/* Sasakis */}
            <div className="absolute inset-0">
              {sasakis.map((s) => (
                <DancingSasaki key={s.id} id={s.id} angry={s.angry} />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-5 right-5 font-mincho text-rose-400 font-bold text-lg italic z-50 tracking-wider">
              SASAKI x {sasakis.length}
            </div>

            {/* Mini title */}
            <div className="absolute top-5 left-5 z-50">
              <p className="font-mincho text-gray-400 text-[11px] tracking-wider">
                ボクはいいんだけど、<span className="text-red-400 font-bold italic">SASAKI</span>がなんて言うかな？
              </p>
              <p className="font-elegant italic text-rose-300 text-[10px]">って、それより僕と踊りませんか？</p>
            </div>
          </main>

          {/* Controls */}
          <div className="flex-shrink-0 px-4 py-5 relative z-50 bg-gradient-to-t from-[#fdf8f5] via-[#fdf8f5]/95 to-transparent">
            <div className="max-w-md mx-auto flex gap-4 justify-center">
              <button
                onClick={() => addSasaki(false)}
                className="font-mincho text-rose-400 border-2 border-rose-300 bg-white/60 backdrop-blur-sm font-bold text-base md:text-lg px-8 py-3 rounded-full hover:bg-rose-50 transition-all hover:scale-105 active:scale-95 tracking-wider"
              >
                もっと踊る？
              </button>
              <button
                onClick={() => addSasaki(true)}
                className="font-mincho text-gray-400 border-2 border-gray-300 bg-white/60 backdrop-blur-sm font-bold text-base md:text-lg px-8 py-3 rounded-full hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 tracking-wider"
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
