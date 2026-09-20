'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { runeted } from '@/lib/data';

const figmaEmbedSrc = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
  runeted.figmaFileUrl
)}`;

// The real file, live — pan and zoom it directly.
export function FigmaEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line dark:border-linedark">
      <iframe
        title="Runeted slot frames — Figma"
        className="h-[420px] w-full sm:h-[480px]"
        src={figmaEmbedSrc}
        allowFullScreen
      />
    </div>
  );
}

// "Rarity Scanner" — a HUD-styled companion recreation, not the file
// itself: one base slot component driven by two real properties, Rarity
// and State (idle / hover). Select a tier, hit REPLAY, watch it
// materialize. Colors here are a stylized palette rather than pixel-exact
// picks from the file above — that's what the live embed is for.
export default function FigmaComponentViewer() {
  const [tierIndex, setTierIndex] = useState(6); // Legendary
  const [state, setState] = useState('idle');
  const [playCount, setPlayCount] = useState(0);
  const tier = runeted.rarityTiers[tierIndex];
  const isActive = state === 'hover';
  const revealKey = `${tierIndex}-${state}-${playCount}`;

  const selectTier = (i) => {
    setTierIndex(i);
    setPlayCount((c) => c + 1);
  };
  const setActiveState = (s) => {
    setState(s);
    setPlayCount((c) => c + 1);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#08090b] font-mono text-zinc-300 shadow-[0_0_60px_-15px_rgba(0,0,0,0.6)]">
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: tier.color }} />
          <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Rarity Scanner &middot; item_slot.component
          </span>
        </div>
        <span className="text-[11px] text-zinc-600">
          v{tierIndex + 1}.{isActive ? '1' : '0'}
        </span>
      </div>

      <div className="grid gap-0 sm:grid-cols-[1fr_260px]">
        {/* main scan display */}
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden p-10">
          {/* faint scanline texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 3px)',
            }}
          />

          {/* corner brackets */}
          {[
            'top-4 left-4 border-t-2 border-l-2',
            'top-4 right-4 border-t-2 border-r-2',
            'bottom-4 left-4 border-b-2 border-l-2',
            'bottom-4 right-4 border-b-2 border-r-2',
          ].map((pos) => (
            <motion.span
              key={pos}
              className={`absolute h-5 w-5 ${pos}`}
              style={{ borderColor: tier.color }}
              animate={{ opacity: isActive ? [0.5, 1, 0.5] : 0.6 }}
              transition={{ duration: 1.6, repeat: isActive ? Infinity : 0 }}
            />
          ))}

          <AnimatePresence mode="wait">
            <motion.div
              key={revealKey}
              initial={{ opacity: 0, scale: 0.75, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-36 w-36 items-center justify-center rounded-lg border-[3px]"
              style={{
                borderColor: tier.color,
                boxShadow: isActive
                  ? `0 0 0 5px ${tier.color}26, 0 0 40px ${tier.color}55`
                  : `0 0 22px ${tier.color}33`,
                background: `linear-gradient(160deg, ${tier.color}22, transparent)`,
              }}
            >
              {/* scan sweep */}
              <motion.span
                className="pointer-events-none absolute inset-x-0 h-10 opacity-70"
                style={{
                  background: `linear-gradient(180deg, transparent, ${tier.color}99, transparent)`,
                }}
                initial={{ top: '-20%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              />
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={tier.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 15 8.5 22 9.5 17 14.3 18.2 21 12 17.6 5.8 21 7 14.3 2 9.5 9 8.5 12 2Z" />
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* readout panel */}
        <div className="border-t border-zinc-800 p-5 text-[11px] leading-relaxed sm:border-l sm:border-t-0">
          <p className="text-zinc-600">&gt; SELECT RARITY_TIER [1-11]</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {runeted.rarityTiers.map((t, i) => (
              <button
                key={t.name}
                onClick={() => selectTier(i)}
                className={`flex items-center gap-1.5 rounded border px-1.5 py-1 text-left transition-colors ${
                  i === tierIndex
                    ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: t.color }} />
                <span className="truncate">T{String(i + 1).padStart(2, '0')} {t.name}</span>
              </button>
            ))}
          </div>

          <p className="mt-4 text-zinc-600">&gt; STATE</p>
          <div className="mt-2 flex gap-1.5">
            {['idle', 'hover'].map((s) => (
              <button
                key={s}
                onClick={() => setActiveState(s)}
                className={`flex-1 rounded border px-2 py-1 uppercase tracking-wide transition-colors ${
                  state === s
                    ? 'border-zinc-500 bg-zinc-900 text-zinc-100'
                    : 'border-zinc-800 text-zinc-500'
                }`}
              >
                {s === 'hover' ? 'active' : 'standby'}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPlayCount((c) => c + 1)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded border border-zinc-700 py-1.5 uppercase tracking-widest text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
          >
            <span>&#9654;</span> replay
          </button>

          <dl className="mt-4 space-y-1 border-t border-zinc-800 pt-3 text-zinc-500">
            <div className="flex justify-between"><dt>tier</dt><dd className="text-zinc-300">{tierIndex + 1} / {runeted.rarityTiers.length}</dd></div>
            <div className="flex justify-between"><dt>hex</dt><dd className="text-zinc-300">{tier.color}</dd></div>
            <div className="flex justify-between"><dt>variants</dt><dd className="text-zinc-300">{runeted.rarityTiers.length * 2}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}

// The live file embed is exported above as <FigmaEmbed /> and used on
// the Design page. To point it at a different file, update
// `figmaFileUrl` in lib/data.jsx (needs link-sharing turned on in
// Figma). To match this recreation's colors exactly to the real file
// instead of the stylized palette above, update `rarityTiers` in the
// same file with picked hex values.
