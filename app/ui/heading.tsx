import { headingType } from '@/types/types';
export default function Heading({ text }: headingType) {
  return (
    <h1 className="text-xl font-semibold tracking-tighter">
      {text}
      <span className=" ml-1 text-3xl">👋</span>
    </h1>
  );
}
