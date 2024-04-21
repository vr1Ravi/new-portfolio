import { IconType } from 'react-icons';

export interface headingType {
  text: string;
  icon: string;
}
export interface socialLinksType {
  href: string;
  Icon: IconType;
}
export interface skillType {
  title: string;
  Icon?: IconType;
}
export interface projectType {
  id?: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  icon: string;
  href: string;
}
