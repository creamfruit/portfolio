'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { runeted } from '@/lib/data';

// A live recreation of the Figma component system described on this site:
// one base slot component driven by two real properties — Rarity (11 tiers)
// and State (hover / idle) — mirroring how it drives every variant in-game.
// This is not an embedded Figma file; swap in a real embed once you have a
// public Figma share link (see the comment at the bottom of this file).
export default function FigmaComponentViewer() {
  const [tierIndex, setTierIndex] = useState(6); // start on Legendary
  const [state, setState] = useState('idle');
  const tier = runeted.rarityTiers[tierIndex];
  const isHover = state === 'hover';

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* The component preview */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-lg border-[3px] transition-all duration-200 sm:h-36 sm:w-36"
            style={{
              borderColor: tier.color,
              boxShadow: isHover
                ? `0 0 0 4px ${tier.color}33, 0 0 24px ${tier.color}66`
                : `0 0 0 0px ${tier.color}00`,
              transform: isHover ? 'scale(1.06)' : 'scale(1)',
              background: isHover
                ? `linear-gradient(160deg, ${tier.color}22, transparent)`
                : `linear-gradient(160deg, ${tier.color}14, transparent)`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={tier.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 15 8.5 22 9.5 17 14.3 18.2 21 12 17.6 5.8 21 7 14.3 2 9.5 9 8.5 12 2Z" />
            </svg>
            <span
              className="absolute -bottom-3 rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide"
              style={{ borderColor: tier.color, color: tier.color, background: 'var(--slot-bg, transparent)' }}
            >
              {tier.name}
            </span>
          </div>
          <p className="text-[11px] text-muted">
            state: <span className="font-medium text-ink dark:text-inkdark">{state}</span>
          </p>
        </div>

        {/* Controls */}
        <div className="w-full sm:max-w-xs">
          <p className="section-label">Rarity — 11 tiers</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {runeted.rarityTiers.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setTierIndex(i)}
                className="h-6 w-6 rounded-full border-2 transition-transform"
                style={{
                  backgroundColor: t.color,
                  borderColor: i === tierIndex ? t.color : 'transparent',
                  outline: i === tierIndex ? `2px solid ${t.color}` : 'none',
                  outlineOffset: '2px',
                  transform: i === tierIndex ? 'scale(1.15)' : 'scale(1)',
                }}
                aria-label={t.name}
                title={t.name}
              />
            ))}
          </div>

          <p className="section-label mt-6">State</p>
          <div className="mt-3 flex gap-2">
            {['idle', 'hover'].map((s) => (
              <button
                key={s}
                onClick={() => setState(s)}
                className={`rounded-full border px-3 py-1 text-xs capitalize transition-colors ${
                  state === s
                    ? 'border-accent text-accent dark:border-accentlight dark:text-accentlight'
                    : 'border-line dark:border-linedark text-muted'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            One Figma component, two properties, {runeted.rarityTiers.length}×2 = {runeted.rarityTiers.length * 2}{' '}
            possible variants — matching the exact dimensions and scaling used in
            the shipped game, so a change to the base component propagates
            everywhere at once.
          </p>
        </div>
      </div>
    </div>
  );
}

// To swap this for the real Figma file: get a "Share > Copy embed link" URL
// from Figma (the file needs link-sharing turned on), then replace the
// preview block above with:
//
// <iframe
//   className="h-[420px] w-full rounded-lg border border-line dark:border-linedark"
//   src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_FILE_URL"
//   allowFullScreen
// />
