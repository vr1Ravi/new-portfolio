import { skillType } from '@/types/types';
import { FaReact } from '@/app/ui/icons';

export default function Skill({ title, Icon }: skillType) {
  return (
    <div className="flex items-center rounded-full  bg-neutral-600 p-1 px-2 text-xs text-white">
      <span className="mr-[5px]">{Icon !== undefined && <Icon />}</span>
      {title}
    </div>
  );
}
