import { projectType } from '@/types/types';
import Heading from '@/app/ui/heading';
import Skill from '@/app/ui/skill';
import Image from 'next/image';

export default function Project({
  title,
  icon,
  description,
  image,
  techStack,
  href,
}: projectType) {
  return (
    <a
      href={href}
      target="_blank"
      className={`relative mx-auto mt-6 flex w-[80%] flex-col  items-center rounded bg-gray-100  dark:bg-neutral-950`}
    >
      <div className="px-2 pt-2">
        <Image
          src={image}
          alt="project-img"
          height={200}
          width={400}
          layout="intrinsic"
          // className="h-auto w-auto"
          // placeholder="blur"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1 px-4">
        <Heading text={title} icon={icon} />
        <p className="text-neutral-700  dark:text-neutral-500">{description}</p>
      </div>
      <div className="flex w-full flex-wrap justify-start gap-2 p-4">
        {techStack.map((stack) => (
          <Skill key={stack} title={stack} />
        ))}
      </div>
    </a>
  );
}
