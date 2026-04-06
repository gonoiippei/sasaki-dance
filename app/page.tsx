"use client";

import { useState } from "react";
import Image from "next/image";

function DancingSasaki({ id, angry }: { id: number; angry: boolean }) {
  const delay = id * 0.2;
  // Spread sasakis across the stage
  const positions = [0, -140, 140, -70, 70, -210, 210, -35, 35, -175, 175];
  const xOffset = positions[id % positions.length] + (id >= positions.length ? (id % 2 === 0 ? 30 : -30) : 0);
  const speedVariant = 0.6 + (id % 3) * 0.1;

  return (
    <div
      className="absolute bottom-0 animate-dance-in"
      style={{
        left: `calc(50% + ${xOffset}px)`,
        transform: "translateX(-50%)",
        animationDelay: `${delay}s`,
        zIndex: 10 + id,
      }}
    >
      <div
        className={angry ? "animate-angry-shake" : "animate-dance-bounce"}
        style={{ animationDelay: `${delay + 0.5}s`, animationDuration: `${speedVariant}s` }}
      >
        {/* Angry bubble */}
        {angry && (
          <div
            className="animate-pop-in bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg mb-1 text-center whitespace-nowrap"
            style={{ animationDelay: `${delay + 0.3}s` }}
          >
            踊るに決まってるだろ！
          </div>
        )}

        {/* Head */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-red-700 mx-auto">
          <Image
            src="/sasaki_face.jpg"
            alt="SASAKI"
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <svg width="56" height="80" viewBox="0 0 56 80" className="mx-auto -mt-[2px]">
          {/* Torso */}
          <rect x="18" y="0" width="20" height="32" rx="4" fill="#c41e1e" />
          {/* Left arm */}
          <rect x="2" y="2" width="16" height="7" rx="3.5" fill="#c41e1e"
            className="origin-[18px_5px] animate-arm-left"
            style={{ animationDelay: `${delay}s`, animationDuration: `${speedVariant}s` }}
          />
          {/* Right arm */}
          <rect x="38" y="2" width="16" height="7" rx="3.5" fill="#c41e1e"
            className="origin-[38px_5px] animate-arm-right"
            style={{ animationDelay: `${delay}s`, animationDuration: `${speedVariant}s` }}
          />
          {/* Left leg */}
          <rect x="18" y="32" width="9" height="28" rx="4" fill="#333"
            className="origin-[22px_32px] animate-leg-left"
            style={{ animationDelay: `${delay}s`, animationDuration: `${speedVariant}s` }}
          />
          {/* Right leg */}
          <rect x="29" y="32" width="9" height="28" rx="4" fill="#333"
            className="origin-[34px_32px] animate-leg-right"
            style={{ animationDelay: `${delay}s`, animationDuration: `${speedVariant}s` }}
          />
          {/* Shoes */}
          <ellipse cx="22" cy="62" rx="7" ry="3.5" fill="#111"
            className="origin-[22px_32px] animate-leg-left"
            style={{ animationDelay: `${delay}s`, animationDuration: `${speedVariant}s` }}
          />
          <ellipse cx="34" cy="62" rx="7" ry="3.5" fill="#111"
            className="origin-[34px_32px] animate-leg-right"
            style={{ animationDelay: `${delay}s`, animationDuration: `${speedVariant}s` }}
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
      {/* Disco background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,_rgba(196,30,30,0.12)_0%,_transparent_60%)] animate-disco-glow" />

      {!started ? (
        /* Title screen */
        <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
          <h1 className="animate-fade-in-up text-center leading-relaxed mb-10">
            <span className="text-gray-400 text-lg md:text-xl">ボクはいいんだけど、</span>
            <br />
            <span className="text-red-600 text-4xl md:text-6xl font-black italic tracking-[0.15em]">SASAKI</span>
            <br />
            <span className="text-gray-400 text-lg md:text-xl">がなんて言うかな？</span>
            <br />
            <br />
            <span className="text-gray-500 text-base md:text-lg">って、それより僕と踊りませんか？</span>
            <br />
            <span className="text-gray-600 text-sm">夢の中へ 夢の中へ</span>
            <br />
            <span className="text-gray-600 text-sm">行ってみたいと思いませんか</span>
          </h1>

          <button
            onClick={handleStart}
            className="animate-fade-in-up bg-red-700 hover:bg-red-600 text-white font-black text-2xl md:text-3xl px-14 py-5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-red-900/50"
            style={{ animationDelay: "0.3s" }}
          >
            踊る？
          </button>
        </main>
      ) : (
        /* Dance floor */
        <>
          {/* Stage */}
          <main className="flex-1 relative">
            {/* Floor line */}
            <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />

            {/* Sasakis */}
            <div className="absolute bottom-10 left-0 right-0 h-[200px]">
              {sasakis.map((s) => (
                <DancingSasaki key={s.id} id={s.id} angry={s.angry} />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-6 right-6 text-red-600 font-black text-xl italic z-50">
              SASAKI x {sasakis.length}
            </div>

            {/* Title small */}
            <div className="absolute top-6 left-6 z-50">
              <p className="text-gray-600 text-xs">
                ボクはいいんだけど、<span className="text-red-800 font-black italic">SASAKI</span>がなんて言うかな？
              </p>
              <p className="text-gray-700 text-[10px]">って、それより僕と踊りませんか？</p>
            </div>
          </main>

          {/* Controls */}
          <div className="flex-shrink-0 px-4 py-5 relative z-50 bg-gradient-to-t from-black via-black/90 to-transparent">
            <div className="max-w-md mx-auto flex gap-4 justify-center">
              <button
                onClick={() => addSasaki(false)}
                className="bg-red-700 hover:bg-red-600 text-white font-bold text-base md:text-lg px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                もっと踊る？
              </button>
              <button
                onClick={() => addSasaki(true)}
                className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white font-bold text-base md:text-lg px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95 border border-gray-700"
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
