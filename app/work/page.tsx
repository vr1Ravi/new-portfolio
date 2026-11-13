import Image from 'next/image';
import { timeline } from '../lib/work';

export const metadata = {
  title: 'Work — Ravi Jha',
  description:
    'Ravi Jha’s path so far: from SDE intern to SDE-2 at Wobot AI, and PUBG Mobile esports during graduation.',
};

// Logo badge size (px). Connectors run from the centre of one badge to the
// centre of the next, so each row's connector starts at NODE / 2 + TOP.
const SIZE = 56;
const TOP = 8;
const CENTER = TOP + SIZE / 2;

export default function Work() {
  return (
    <main className="pb-6 pt-14">
      <h1 className="mb-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Work
      </h1>
      <p className="mb-12 max-w-[56ch] text-muted">
        My path so far, climbing from the bottom: PUBG Mobile esports during
        graduation, then building products at Wobot AI.
      </p>

      <ol>
        {timeline.map((item, i) => {
          const hasNext = i < timeline.length - 1;
          return (
            <li
              key={item.org}
              className="grid grid-cols-[72px_1fr] gap-x-4 sm:grid-cols-[96px_1fr] sm:gap-x-6"
            >
              {/* Aligned logo column with a wavy connector to the next one */}
              <div className="relative">
                {hasNext && (
                  <svg
                    aria-hidden
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute left-0 w-full text-accent"
                    style={{ top: CENTER, height: '100%' }}
                  >
                    <path
                      d="M50 0 L57 15 L45 30 L56 46 L44 62 L57 78 L47 90 L50 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      opacity="0.75"
                    />
                  </svg>
                )}
                <div
                  className={`absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center text-xs font-bold ${
                    item.logo
                      ? 'bg-bg'
                      : 'overflow-hidden rounded-full border-2 border-accent bg-surface shadow-[0_0_0_5px_var(--bg)]'
                  }`}
                  style={{ width: SIZE, height: SIZE, top: TOP }}
                >
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={item.org}
                      width={SIZE}
                      height={SIZE}
                      className={`h-full w-full object-contain ${item.invertOnDark ? 'dark:invert' : ''}`}
                    />
                  ) : (
                    <span className="font-display text-accent">
                      {item.initials}
                    </span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className={`min-w-0 pt-3 ${hasNext ? 'pb-16' : ''}`}>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {item.org}
                </h2>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm">
                  <time className="font-medium text-accent">{item.period}</time>
                  <span className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-xs text-muted">
                    {item.kind}
                  </span>
                </div>
                <p className="mt-3 max-w-[56ch] text-[15px]">
                  <span className="text-muted">Roles: </span>
                  <span className="font-medium">{item.roles.join(', ')}</span>
                </p>
                <p className="mt-3 max-w-[56ch] text-[15px] text-muted">
                  {item.description}
                </p>
                {item.bullets && (
                  <ul className="mt-3 flex max-w-[56ch] list-disc flex-col gap-1.5 pl-5 text-[15px] text-muted marker:text-accent">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
