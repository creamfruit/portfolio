import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export const metadata = { title: 'Projects — Chong Li Sean' };

export default function ProjectsPage() {
  return (
    <div>
      <Reveal>
        <p className="section-label">Projects</p>
        <h1 className="mt-3 font-serif text-3xl font-medium">Selected work</h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </Reveal>
    </div>
  );
}
