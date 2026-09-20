import Reveal from '@/components/Reveal';
import FigmaComponentViewer, { FigmaEmbed } from '@/components/FigmaComponentViewer';

export const metadata = { title: 'Design — Chong Li Sean' };

export default function DesignPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">Design</p>
        <h1 className="mt-3 font-serif text-4xl font-medium">
          Figma &amp; visual work
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          Component-driven UI design for Runeted: one base slot component
          with real, editable properties, rebuilt in Figma to mirror exact
          production dimensions rather than a set of static mockups.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <p className="section-label">The real file, live</p>
        <div className="mt-4">
          <FigmaEmbed />
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-16">
        <p className="section-label">Interactive recreation</p>
        <h2 className="mt-2 font-serif text-2xl font-medium">
          Rarity scanner
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          A HUD-styled companion demo — not the file itself, a stylized
          rebuild of the same idea: one component, real rarity and state
          properties.
        </p>
        <div className="mt-6">
          <FigmaComponentViewer />
        </div>
      </Reveal>
    </div>
  );
}
