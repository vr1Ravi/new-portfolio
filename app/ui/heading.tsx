import { headingType } from '@/types/types';
export default function Heading({ text, icon }: headingType) {
  return (
    <h1 className="text-xl font-semibold tracking-tighter">
      {text}
      <span className=" ml-1 text-3xl">{icon}</span>
    </h1>
  );
}
