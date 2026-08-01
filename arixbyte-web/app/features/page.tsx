const items = [
  'Managed backups',
  'Dedicated firewalls',
  'Instant snapshots',
  'Global CDN',
];

export default function FeaturesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Built for speed, resilience, and control.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">{item}</div>
        ))}
      </div>
    </main>
  );
}
