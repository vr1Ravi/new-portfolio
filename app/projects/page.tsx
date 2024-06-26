import Heading from '@/app/ui/heading';
import ScrollToTop from '@/app/ui/projects/scrolltotop';
import { addProject, getProjects } from '@/app/lib/data';
import { projectType } from '@/types/types';
// import { newProject } from '@/app/lib/seed';
import Project from '../ui/projects/project';
export default async function Projects() {
  // await addProject(newProject);
  const projects: projectType[] = await getProjects();

  return (
    <main className="mt-12 flex w-full flex-col justify-between p-3">
      <Heading text="my projects" icon="👨‍💻" />

      {projects.map((project) => (
        <Project
          id={project.id}
          key={project.id}
          href={project.href}
          title={project.title}
          description={project.description}
          icon={project.icon}
          image={project.image}
          techStack={project.techStack}
        />
      ))}
      <ScrollToTop />
    </main>
  );
}
