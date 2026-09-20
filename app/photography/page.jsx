import Reveal from '@/components/Reveal';

export const metadata = { title: 'Photography — Chong Li Sean' };

// Add your own photos: drop image files in /public/images/photography/
// and replace the placeholder grid below with <Image /> tags pointing at
// them (e.g. /images/photography/your-file.jpg).
const placeholders = Array.from({ length: 6 });

export default function PhotographyPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">Photography</p>
        <h1 className="mt-3 font-serif text-4xl font-medium">Photography</h1>
        <p className="mt-4 max-w-xl text-sm text-muted">
          Add your photos to <code>/public/images/photography/</code> and
          swap them in below.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {placeholders.map((_, i) => (
          <div
            key={i}
            className="card flex aspect-square items-center justify-center border-dashed text-xs text-muted"
          >
            image {i + 1}
          </div>
        ))}
      </Reveal>
    </div>
  );
}
