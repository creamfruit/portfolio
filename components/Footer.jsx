import { socials } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line dark:border-linedark">
      <div className="container-page flex flex-col items-center gap-4 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Chong Li Sean</p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="link-underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
