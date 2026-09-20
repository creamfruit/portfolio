import Reveal from '@/components/Reveal';
import { reconnectSG } from '@/lib/data';

export const metadata = { title: 'Re:Connect SG — Chong Li Sean' };

export default function ReconnectSGPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">{reconnectSG.tagline}</p>
        <h1 className="mt-3 font-serif text-4xl font-medium">{reconnectSG.name}</h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          {reconnectSG.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {reconnectSG.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line dark:border-linedark px-2.5 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <p className="section-label">What I built</p>
        <ul className="mt-4 space-y-4">
          {reconnectSG.bullets.map((b) => (
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
