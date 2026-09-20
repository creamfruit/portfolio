import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link
      href={project.href}
      className="card group block p-6 transition-transform hover:-translate-y-0.5 hover:border-accentlight"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl font-medium">{project.name}</h3>
        <span className="text-muted transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line dark:border-linedark px-2.5 py-0.5 text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
