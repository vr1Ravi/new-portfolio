import { skillType } from '@/types/types';

export default function Skill({ title, Icon }: skillType) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1 text-[13px]">
      {Icon !== undefined && <Icon className="text-accent" />}
      {title}
    </div>
  );
}
