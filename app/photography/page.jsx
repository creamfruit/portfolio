import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import { withBase } from '@/lib/basePath';

export const metadata = { title: 'Photography — Chong Li Sean' };

const photos = [
  { src: withBase('/images/photography/manarola-italy.jpg'), alt: 'Manarola, Cinque Terre, Italy', caption: 'Manarola, Cinque Terre — Italy' },
  { src: withBase('/images/photography/colosseum-rome.jpg'), alt: 'The Colosseum, Rome, Italy', caption: 'Colosseum — Rome, Italy' },
  { src: withBase('/images/photography/florence-arno.jpg'), alt: 'The River Arno, Florence, Italy', caption: 'River Arno — Florence, Italy' },
  { src: withBase('/images/photography/malaysia-highlands.jpg'), alt: 'Mountain road in the Malaysian highlands', caption: 'Highlands — Malaysia' },
];

export default function PhotographyPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">Photography</p>
        <h1 className="mt-3 font-serif text-4xl font-medium">Photography</h1>
      </Reveal>

      <Parallax strength={14} className="mt-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {photos.map((p) => (
              <figure key={p.src} className="overflow-hidden rounded-xl border border-line dark:border-linedark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="border-t border-line dark:border-linedark px-3 py-2 text-xs text-muted">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Parallax>
    </div>
  );
}
