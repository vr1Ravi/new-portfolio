import { socialLinksType } from '@/types/types';

export default function SocialLink({ href, Icon }: socialLinksType) {
  return (
    <a href={href} target="_blank">
      <Icon className="text-2xl text-gray-600" />
    </a>
  );
}
