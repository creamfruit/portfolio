import Reveal from '@/components/Reveal';
import { profile, socials } from '@/lib/data';

export const metadata = { title: 'Contact — Chong Li Sean' };

export default function ContactPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">Contact</p>
        <h1 className="mt-3 font-serif text-4xl font-medium">Get in touch</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
          Reach me directly at{' '}
          <a href={`mailto:${profile.email}`} className="link-underline">
            {profile.email}
          </a>
          , or find me on the platforms below.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="card px-5 py-3 text-sm font-medium transition-colors hover:border-accentlight hover:text-accent dark:hover:text-accentlight"
          >
            {s.label}
          </a>
        ))}
      </Reveal>
    </div>
  );
}
