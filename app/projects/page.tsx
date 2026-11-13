import Heading from '@/app/ui/heading';
import { getProjects } from '@/app/lib/data';
import { projectType } from '@/types/types';
import Project from '../ui/projects/project';

export default async function Projects() {
  const projects: projectType[] = await getProjects();

  return (
    <main className="pb-6 pt-14">
      <h1 className="mb-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Projects
      </h1>
      <p className="mb-10 max-w-[52ch] text-muted">
        Things I have built end to end, from database to interface.
      </p>
      <Heading text="Selected work" />
      <div className="grid gap-3.5 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
