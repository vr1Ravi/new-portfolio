import Image from 'next/image';
import { BsGithub, BsTwitterX, BsLinkedin } from '@/app/ui/icons';
import Heading from './ui/heading';
import SocialLink from './ui/Home/social-links';
import { skills } from './lib/seed';
import Skill from './ui/skill';
export default function Home() {
  return (
    <main className="flex flex-col p-3">
      <div className="mx-auto mt-12 h-44 w-44 overflow-hidden rounded-full border-4 border-neutral-700 bg-black">
        <Image src="/profile.JPG" alt="profile-img" width={200} height={270} />
      </div>
      <div className="mt-6 ">
        <Heading text={`hey, I'm Ravi`} icon="👋" />
        <p className="mt-3 text-neutral-700 dark:text-neutral-500">
          I am a final-year MCA student with a passion for web development. My
          primary focus is on{' '}
          <span className=" font-medium text-black underline decoration-neutral-800 dark:text-white dark:decoration-white">
            JavaScript
          </span>
          , and I thoroughly enjoy creating projects using the{' '}
          <span className=" font-medium text-black underline decoration-neutral-800 dark:text-white dark:decoration-white">
            MERN
          </span>{' '}
          stack. I currently reside in Ghaziabad. Outside of coding, I have a
          love for traveling and exploring new places. I believe in continuous{' '}
          <span className=" font-medium text-black underline decoration-neutral-800 dark:text-white dark:decoration-white">
            learning
          </span>{' '}
          and am always eager to take on new challenges in the world of
          technology.
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
