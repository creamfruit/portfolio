import Reveal from '@/components/Reveal';
import StatCounter from '@/components/StatCounter';
import CombatSimulator from '@/components/CombatSimulator';
import FigmaComponentViewer from '@/components/FigmaComponentViewer';
import { runeted, runetedStats } from '@/lib/data';

export const metadata = { title: 'Runeted — Chong Li Sean' };

export default function RunetedPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">{runeted.status}</p>
        <h1 className="mt-3 font-serif text-4xl font-medium">{runeted.name}</h1>
        <p className="mt-2 text-lg text-muted">{runeted.tagline}</p>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          {runeted.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {runeted.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line dark:border-linedark px-2.5 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      {/* TODO: swap in real screenshots once exported — see /public/images */}
      <Reveal delay={0.1} className="mt-16">
        <div className="card flex h-56 items-center justify-center border-dashed text-center text-sm text-muted sm:h-72">
          Drop a Runeted screenshot or GIF here — replace this block in
          app/projects/runeted/page.jsx with an &lt;Image /&gt; once you export
          one from the game.
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-16">
        <p className="section-label">By the numbers</p>
        <div className="card mt-4 grid grid-cols-2 gap-8 p-8 sm:grid-cols-5">
          {runetedStats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-16">
        <p className="section-label">Balance testing, live</p>
        <h2 className="mt-2 font-serif text-2xl font-medium">
          Model an archetype matchup
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          Verifying balance empirically rather than by intuition is the core
          habit behind Runeted&apos;s 800+ simulated fights. Try it yourself.
        </p>
        <div className="mt-6">
          <CombatSimulator />
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-16">
        <p className="section-label">Design system</p>
        <h2 className="mt-2 font-serif text-2xl font-medium">
          One Figma component, every item in the game
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          Componentization over static mockups — one base component drives
          every visual variant used in production.
        </p>
        <div className="mt-6">
          <FigmaComponentViewer />
        </div>
      </Reveal>

      <Reveal delay={0.3} className="mt-16">
        <p className="section-label">What I built</p>
        <ul className="mt-4 space-y-4">
          {runeted.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accentlight" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
