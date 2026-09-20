'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const archetypes = [
  { name: 'Warrior', atk: 9, def: 8, spd: 4 },
  { name: 'Rogue', atk: 8, def: 4, spd: 9 },
  { name: 'Mage', atk: 10, def: 3, spd: 5 },
  { name: 'Tank', atk: 5, def: 10, spd: 3 },
];

const TRIALS = 600;

// A simplified, illustrative stand-in for the archetype-matrix sweep that
// really did run 800+ simulated fights against Runeted. It runs live in
// your browser — pick two archetypes and a level gap, then re-roll.
function simulate(a, b, levelGap) {
  let aWins = 0;
  for (let i = 0; i < TRIALS; i += 1) {
    const power = (fighter, sign) => {
      const levelFactor = 1 + (sign * levelGap) / 20;
      const roll = 0.82 + Math.random() * 0.36; // variance per fight
      return (fighter.atk * 1.1 + fighter.def * 0.7 + fighter.spd * 0.5) * levelFactor * roll;
    };
    if (power(a, 1) >= power(b, -1)) aWins += 1;
  }
  return Math.round((aWins / TRIALS) * 100);
}

export default function CombatSimulator() {
  const [aIndex, setAIndex] = useState(0);
  const [bIndex, setBIndex] = useState(2);
  const [levelGap, setLevelGap] = useState(0);
  const [winRate, setWinRate] = useState(() => simulate(archetypes[0], archetypes[2], 0));
  const [runs, setRuns] = useState(1);

  const a = archetypes[aIndex];
  const b = archetypes[bIndex];

  const reroll = (nextA = a, nextB = b, nextGap = levelGap) => {
    setWinRate(simulate(nextA, nextB, nextGap));
    setRuns((r) => r + 1);
  };

  return (
    <div className="card p-6 sm:p-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="section-label">Fighter A</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {archetypes.map((arch, i) => (
              <button
                key={arch.name}
                onClick={() => {
                  setAIndex(i);
                  reroll(arch, b, levelGap);
                }}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  i === aIndex
                    ? 'border-accent text-accent dark:border-accentlight dark:text-accentlight'
                    : 'border-line dark:border-linedark text-muted'
                }`}
              >
                {arch.name}
              </button>
            ))}
          </div>

          <p className="section-label mt-6">Fighter B</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {archetypes.map((arch, i) => (
              <button
                key={arch.name}
                onClick={() => {
                  setBIndex(i);
                  reroll(a, arch, levelGap);
                }}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  i === bIndex
                    ? 'border-accent text-accent dark:border-accentlight dark:text-accentlight'
                    : 'border-line dark:border-linedark text-muted'
                }`}
              >
                {arch.name}
              </button>
            ))}
          </div>

          <p className="section-label mt-6">Level gap (A vs B)</p>
          <input
            type="range"
            min={-10}
            max={10}
            value={levelGap}
            onChange={(e) => {
              const gap = Number(e.target.value);
              setLevelGap(gap);
              reroll(a, b, gap);
            }}
            className="mt-3 w-full accent-accent"
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted">
            <span>B +10</span>
            <span>even</span>
            <span>A +10</span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-2 flex items-baseline justify-between text-xs text-muted">
            <span>{a.name} win rate</span>
            <span>{TRIALS} simulated fights · run #{runs}</span>
          </div>
          <div className="h-8 w-full overflow-hidden rounded-full bg-line/60 dark:bg-linedark/60">
            <motion.div
              className="h-full rounded-full bg-accentlight"
              animate={{ width: `${winRate}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm font-medium">
            <span>{winRate}%</span>
            <span>{100 - winRate}%</span>
          </div>

          <button
            onClick={() => reroll()}
            className="mt-6 self-start rounded-full border border-line dark:border-linedark px-4 py-1.5 text-xs hover:border-accentlight hover:text-accent dark:hover:text-accentlight transition-colors"
          >
            Re-roll {TRIALS} fights
          </button>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Illustrative model, running live in your browser — same idea as
            the archetype-matrix sweep behind Runeted&apos;s real 800+ fight
            balance testing, not a replay of the actual recorded results.
          </p>
        </div>
      </div>
    </div>
  );
}
