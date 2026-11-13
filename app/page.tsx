import Image from 'next/image';
import ProfileImg from '../public/profile.png';
import Heading from './ui/heading';
import CopyEmail from './ui/Home/copy-email';
import Skill from './ui/skill';
import { skillGroups } from './lib/seed';
import { CONTACT_EMAIL } from './lib/site';

const card =
  'min-w-0 rounded-[20px] border border-line bg-surface p-5 transition-colors hover:border-accent/50';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <header className="grid items-center gap-10 pb-14 pt-12 sm:grid-cols-[1fr_auto] sm:pt-[72px]">
        <div>
          <p className="max-w-[52ch] text-[1.05rem] text-muted">
            Hi, I&apos;m Ravi.
            <br />
            I&apos;m a{' '}
            <strong className="font-semibold text-fg">
              product engineer
            </strong>{' '}
            focused on building clean user interfaces, resilient backend
            systems, and thoughtful user experiences. I care about{' '}
            <strong className="font-semibold text-fg">
              solving real problems
            </strong>
            , shipping
            <strong className="font-semibold text-fg"> reliable code</strong>,
            and exploring new places when I&apos;m offline.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="/projects"
              className="rounded-xl bg-accent px-5 py-2.5 text-[15px] font-medium text-accent-fg transition hover:-translate-y-0.5"
            >
              View projects →
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-line bg-surface px-5 py-2.5 text-[15px] font-medium transition hover:-translate-y-0.5 hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="order-first h-28 w-28 overflow-hidden rounded-full border border-line sm:order-none sm:h-[188px] sm:w-[188px]">
          <Image
            src={ProfileImg}
            alt="Ravi"
            placeholder="blur"
            className="h-full w-full scale-[1.04] object-cover"
            priority
          />
        </div>
      </header>

      {/* Tech stack */}
      <section className="py-7">
        <Heading text="Tech stack" />
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-6">
          <div className={`${card} sm:col-span-6`}>
            {skillGroups.map((group) => (
              <div key={group.name} className="mt-3.5 first-of-type:mt-0">
                <div className="text-xs text-muted">{group.name}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Skill key={s.title} title={s.title} Icon={s.Icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-7">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-line bg-gradient-to-br from-accent-soft to-surface p-8">
          <div>
            <h2 className="text-balance font-display text-[clamp(1.5rem,3.5vw,2.1rem)] font-bold leading-tight tracking-tight">
              Have a role or project in mind?
            </h2>
            <span className="block text-muted">
              Got an idea, a product, or a problem worth solving? Let&apos;s
              talk.
            </span>
          </div>
          <CopyEmail email={CONTACT_EMAIL} />
        </div>
      </section>
    </main>
  );
}
