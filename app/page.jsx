import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import ScrollHero from '@/components/ScrollHero';
import Parallax from '@/components/Parallax';
import { profile, primaryTools, skillGroups, projects } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      <ScrollHero>
        <Reveal>
          <p className="section-label">{profile.tagline}</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            {profile.blurb}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85 dark:bg-inkdark dark:text-paperdark"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line dark:border-linedark px-5 py-2.5 text-sm font-medium transition-colors hover:border-accentlight hover:text-accent dark:hover:text-accentlight"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </ScrollHero>

      <Parallax strength={16} className="mt-20">
        <Reveal>
          <p className="section-label">Primary tools</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {primaryTools.map((tool) => (
              <div key={tool.name} className="card p-4">
                <p className="text-sm font-medium">{tool.name}</p>
                <p className="mt-0.5 text-xs text-muted">{tool.use}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Parallax>

      <Reveal delay={0.15} className="mt-20">
        <p className="section-label">Selected work</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-20">
        <p className="section-label">Skills, strongest first</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="card p-5">
              <p className="text-sm font-semibold">{group.label}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
