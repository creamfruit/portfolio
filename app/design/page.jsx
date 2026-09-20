import Reveal from '@/components/Reveal';
import FigmaComponentViewer from '@/components/FigmaComponentViewer';

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
        <FigmaComponentViewer />
      </Reveal>

      {/*
        TODO: paste a public Figma file link here once you have one, and
        swap the iframe embed in components/FigmaComponentViewer.jsx (see
        the comment at the bottom of that file) — or add a screenshot
        gallery below of your Figma frames.
      */}
      <Reveal delay={0.15} className="mt-16">
        <div className="card flex h-48 items-center justify-center border-dashed text-center text-sm text-muted">
          Add Figma frame screenshots or an embedded file link here.
        </div>
      </Reveal>
    </div>
  );
}
