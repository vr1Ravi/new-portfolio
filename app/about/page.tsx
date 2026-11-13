import Heading from '../ui/heading';
import { FaMedal } from '../ui/icons';

export const metadata = {
  title: 'About — Ravi Jha',
  description:
    'About Ravishankar Jha: full-stack developer working with the MERN stack.',
};

const card =
  'min-w-0 rounded-[20px] border border-line bg-surface p-5 transition-colors hover:border-accent/50';
const cardTitle = 'mb-2 font-display text-lg font-semibold tracking-tight';

function SilverMedal() {
  return (
    <FaMedal
      role="img"
      aria-label="Silver medal"
      title="Silver medal"
      className="inline-block align-[-0.15em] text-[1.15em] text-slate-400"
    />
  );
}

const facts: { label: string; value: React.ReactNode }[] = [
  { label: 'From', value: 'Darbhanga, Bihar' },
  { label: 'Based in', value: 'Noida' },
  {
    label: 'Education',
    value: (
      <>
        BCA, MCA · web development <SilverMedal />
      </>
    ),
  },
  { label: 'Training', value: 'Bodyweight, at home' },
  { label: 'Listening to', value: 'The Weeknd, Neffex' },
];

export default function About() {
  return (
    <main className="pb-6 pt-14">
      <h1 className="mb-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        About
      </h1>
      <div className="mb-10 flex max-w-[56ch] flex-col gap-4 text-muted">
        <p className="text-balance">
          I&apos;m a{' '}
          <strong className="font-semibold text-fg">product engineer</strong>{' '}
          focused on building clean user interfaces, resilient backend systems,
          and thoughtful user experiences.
        </p>
        <p>
          Right now, I work at{' '}
          <a
            href="https://wobot.ai"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-fg underline decoration-accent underline-offset-4"
          >
            Wobot AI
          </a>
          , a video intelligence company. Its platform turns existing CCTV
          cameras into AI-powered monitoring for safety, hygiene and customer
          experience.
        </p>
      </div>

      <section className="py-4">
        <Heading text="Background" />
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-6">
          <div className={`${card} flex flex-col gap-3 sm:col-span-4`}>
            <h3 className={cardTitle}>How I got here</h3>
            <p className="text-[15px] text-muted">
              I&apos;m from Darbhanga, Bihar, and I moved to Noida when I
              started my graduation. I&apos;ve been here ever since.
            </p>
            <p className="text-[15px] text-muted">
              In my first year of college I built my first website with plain
              HTML, CSS and JavaScript, for a local gym. That was it for me. I
              just really love solving problems, and the web turned out to be a
              great place to do it.
            </p>
            <p className="text-[15px] text-muted">
              I did my <strong className="font-semibold text-fg">BCA</strong>{' '}
              and then my <strong className="font-semibold text-fg">MCA</strong>
              , where I earned <SilverMedal /> in the web development
              specialization.
            </p>
          </div>
          <div className={`${card} sm:col-span-2`}>
            <h3 className={cardTitle}>Quick facts</h3>
            <dl className="flex flex-col gap-3 text-[15px]">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs text-muted">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={`${card} sm:col-span-6`}>
            <h3 className={cardTitle}>Offline</h3>
            <p className="text-[15px] text-muted">
              I love to travel. I&apos;ve been to Rishikesh and Haridwar, and I
              want to see a lot more of the world. At home I do bodyweight
              training, and I usually have The Weeknd or Neffex playing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
