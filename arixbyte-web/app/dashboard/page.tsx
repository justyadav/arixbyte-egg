const stats = [
  { label: 'Active servers', value: '12' },
  { label: 'Bandwidth', value: '2.4 TB' },
  { label: 'Uptime', value: '99.99%' },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <p className="mt-3 text-slate-400">Monitor your infrastructure efficiently from one place.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold">Recent activity</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">Backup completed for api-cluster</div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">New SSL certificate issued for luxor.app</div>
        </div>
      </div>
    </main>
  );
}
