export default function Heading({ text }: { text: string }) {
  return (
    <h2 className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
      {text}
    </h2>
  );
}
