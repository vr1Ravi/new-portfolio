'use client';
import { useState } from 'react';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <code className="rounded-[10px] border border-line bg-surface px-3.5 py-2.5 text-sm">
        {email}
      </code>
      <button
        type="button"
        onClick={copy}
        className="rounded-xl bg-accent px-5 py-2.5 text-[15px] font-medium text-accent-fg transition hover:-translate-y-0.5"
      >
        {copied ? 'Copied' : 'Copy email'}
      </button>
    </div>
  );
}
