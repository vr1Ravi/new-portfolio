import Image from 'next/image';
import ProfileImg from '../public/profile.png';
import { BsGithub, BsTwitterX, BsLinkedin } from '@/app/ui/icons';
import Heading from './ui/heading';
import SocialLink from './ui/Home/social-links';
import { skills } from './lib/seed';
import Skill from './ui/skill';
export default function Home() {
  return (
    <main className="flex flex-col p-3">
      <div className="relative mx-auto mt-12 h-44 w-44  overflow-hidden rounded-full border-4 border-neutral-700 ">
        <Image
          src={ProfileImg}
          alt="profile-img"
          width={200}
          height={270}
          placeholder="blur"
        />
      </div>
      <div className="mt-6 ">
        <Heading text={`hey, I'm Ravi`} icon="👋" />
        <p className="mt-3 text-neutral-700 dark:text-neutral-500">
          I have 1 year of experience in full stack development with a strong
          focus on{' '}
          <span className=" font-medium text-black underline decoration-neutral-800 dark:text-white dark:decoration-white">
            JavaScript
          </span>
          , particularly in creating projects using the{' '}
          <span className=" font-medium text-black underline decoration-neutral-800 dark:text-white dark:decoration-white">
            MERN
          </span>{' '}
          stack. I am passionate about web development and constantly seek to
          expand my knowledge and take on new challenges. Outside of work, I
          enjoy traveling and exploring new places, always striving for
          continuous growth in both personal and professional aspects.
        </p>
      </div>
      {/* Images Later */}
      <div className="mt-2 flex gap-3">
        <SocialLink href="https://github.com/vr1Ravi" Icon={BsGithub} />
        <SocialLink href="https://twitter.com/Vr1xR" Icon={BsTwitterX} />
        <SocialLink
          href="https://www.linkedin.com/in/ravishankar-jha-408679216/"
          Icon={BsLinkedin}
        />
      </div>
      <div className="mt-8">
        <Heading text="techstack I know" icon="🧑‍💻" />
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Skill key={skill.title} title={skill.title} Icon={skill.Icon} />
          ))}
        </div>
      </div>
    </main>
  );
}
