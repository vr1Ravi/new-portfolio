import { projectType } from '@/types/types';
import Skill from '@/app/ui/skill';
import Image from 'next/image';

export default function Project({
  title,
  description,
  image,
  techStack,
  href,
}: projectType) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:border-accent/50 group flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface transition duration-200 hover:-translate-y-1"
    >
      <Image
        src={image}
        alt={`${title} screenshot`}
        width={800}
        height={400}
        className="h-44 w-full border-b border-line object-cover object-top"
      />
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-[15px] text-muted">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((stack) => (
            <Skill key={stack} title={stack} />
          ))}
        </div>
        <span className="mt-auto pt-1 text-sm text-accent">
          View live{' '}
          <span className="transition group-hover:translate-x-0.5">↗</span>
        </span>
      </div>
    </a>
  );
}
