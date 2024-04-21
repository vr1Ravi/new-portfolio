import db from '@/db/index';
import { projectType } from '@/types/types';

const Project = db.project;

export async function getProjects() {
  try {
    const projects = await Project.findMany();
    await db.$disconnect();
    return projects;
  } catch (error) {
    await db.$disconnect();
    throw new Error('Failed to fetch projects, server error');
  }
}
export async function addProject(newProject: projectType) {
  if (newProject === null) return;
  const { title, description, image, techStack, icon, href } = newProject;
  try {
    await Project.create({
      data: {
        title,
        description,
        image,
        icon,
        techStack,
        href,
      },
    });
    await db.$disconnect();
  } catch (error) {
    await db.$disconnect();
    throw new Error('New project addition failed, server error');
  }
}
export async function deleteData() {
  await Project.delete({
    where: {
      id: 1,
    },
  });
}
// main()
//   .then(async () => {
//     await db.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log('ok');

//     console.error(e);
//     await db.$disconnect();
//     process.exit(1);
//   });
