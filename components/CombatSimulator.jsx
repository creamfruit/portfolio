'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { runeted } from '@/lib/data';

const classes = runeted.classes;
const TRIALS = 600;

// A simplified, illustrative stand-in for the archetype-matrix sweep that
// really did run 800+ simulated fights against Runeted — runs live in your
// browser. Stat values are an illustrative read of each class's described
// playstyle (the game doesn't expose fixed numeric class stats — builds
// drive that), not a replay of the actual recorded dataset.
function simulate(a, b, levelGap) {
  let aWins = 0;
  for (let i = 0; i < TRIALS; i += 1) {
    const power = (fighter, sign) => {
      const levelFactor = 1 + (sign * levelGap) / 20;
      const roll = 0.82 + Math.random() * 0.36;
      return (fighter.atk * 1.1 + fighter.def * 0.7 + fighter.spd * 0.5) * levelFactor * roll;
    };
    if (power(a, 1) >= power(b, -1)) aWins += 1;
  }
  return Math.round((aWins / TRIALS) * 100);
}

function StatBar({ label, value, color }) {
  return (
    <div className="flex items-center gap-2 text-[11px]">
      <span className="w-6 text-muted">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line/60 dark:bg-linedark/60">
        <div className="h-full rounded-full" style={{ width: `${value * 10}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function FighterCard({ fighter, options, onChange, flip, fighting, winner }) {
  const isWinner = winner === fighter.name;
  return (
    <motion.div
      animate={
        fighting
          ? { x: flip ? [0, 6, -6, 4, -4, 0] : [0, -6, 6, -4, 4, 0], rotate: flip ? [0, 1, -1, 0.5, -0.5, 0] : [0, -1, 1, -0.5, 0.5, 0] }
          : { x: 0, rotate: 0 }
      }
      transition={{ duration: 0.5 }}
      className="relative flex-1 rounded-xl border p-5 transition-colors"
      style={{
        borderColor: isWinner ? fighter.color : undefined,
        boxShadow: isWinner ? `0 0 0 3px ${fighter.color}22, 0 0 30px ${fighter.color}33` : undefined,
      }}
    >
      {isWinner && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide text-white"
          style={{ backgroundColor: fighter.color }}
        >
          WIN
        </span>
      )}
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2"
          style={{ borderColor: fighter.color, color: fighter.color }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            {fighter.icon}
          </svg>
        </div>
        <div>
          <p className="font-medium leading-tight">{fighter.name}</p>
        </div>
      </div>

      <p className="mt-2 text-[11px] italic leading-snug text-muted">{fighter.blurb}</p>

      <div className="mt-3 space-y-1.5">
        <StatBar label="ATK" value={fighter.atk} color={fighter.color} />
        <StatBar label="DEF" value={fighter.def} color={fighter.color} />
        <StatBar label="SPD" value={fighter.spd} color={fighter.color} />
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.name}
            onClick={() => onChange(opt)}
            className={`rounded-full border px-2 py-0.5 text-[11px] transition-colors ${
              opt.name === fighter.name
                ? 'border-line dark:border-linedark bg-line/40 dark:bg-linedark/40'
                : 'border-transparent text-muted hover:text-ink dark:hover:text-inkdark'
            }`}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function CombatSimulator() {
  const [a, setA] = useState(classes[0]); // Warden
  const [b, setB] = useState(classes[4]); // Berserker
  const [levelGap, setLevelGap] = useState(0);
  const [winRate, setWinRate] = useState(() => simulate(classes[0], classes[4], 0));
  const [fighting, setFighting] = useState(false);
  const [runs, setRuns] = useState(1);

  const fight = (nextA = a, nextB = b, nextGap = levelGap) => {
    setFighting(true);
    const result = simulate(nextA, nextB, nextGap);
    setTimeout(() => {
      setWinRate(result);
      setFighting(false);
      setRuns((r) => r + 1);
    }, 500);
  };

  const winner = winRate === 50 ? null : winRate > 50 ? a.name : b.name;

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <FighterCard fighter={a} options={classes} onChange={(f) => { setA(f); fight(f, b, levelGap); }} fighting={fighting} winner={fighting ? null : winner} />

        <div className="flex flex-shrink-0 flex-col items-center gap-2 sm:w-24">
          <motion.div
            animate={{ scale: fighting ? [1, 1.25, 1] : 1, opacity: fighting ? [1, 1, 0.4] : 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line dark:border-linedark text-xs font-semibold text-muted"
          >
            VS
          </motion.div>
          <AnimatePresence mode="wait">
            {!fighting && (
              <motion.p
                key={runs}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center text-sm font-medium"
              >
                {winRate}% / {100 - winRate}%
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <FighterCard fighter={b} options={classes} onChange={(f) => { setB(f); fight(a, f, levelGap); }} flip fighting={fighting} winner={fighting ? null : winner} />
      </div>

      <div className="mt-6">
        <p className="section-label">Level gap ({a.name} vs {b.name})</p>
        <input
          type="range"
          min={-10}
          max={10}
          value={levelGap}
          onChange={(e) => {
            const gap = Number(e.target.value);
            setLevelGap(gap);
            fight(a, b, gap);
          }}
          className="mt-3 w-full accent-accent"
        />
        <div className="mt-1 flex justify-between text-[11px] text-muted">
          <span>{b.name} +10</span>
          <span>even</span>
          <span>{a.name} +10</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => fight()}
          disabled={fighting}
          className="rounded-full bg-ink px-5 py-2 text-xs font-medium uppercase tracking-wide text-paper transition-opacity hover:opacity-85 disabled:opacity-50 dark:bg-inkdark dark:text-paperdark"
        >
          {fighting ? 'Fighting…' : `Fight — ${TRIALS} sims`}
        </button>
        <p className="text-xs leading-relaxed text-muted sm:max-w-xs">
          Illustrative model, running live in your browser — same idea as
          the archetype-matrix sweep behind Runeted&apos;s real 800+ fight
          balance testing, not a replay of the actual recorded results.
        </p>
      </div>
    </div>
  );
}
