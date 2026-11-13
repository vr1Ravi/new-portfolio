import { socialLinksType } from '@/types/types';

export default function SocialLink({ href, label, Icon }: socialLinksType) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-lg text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      <Icon />
    </a>
  );
}
