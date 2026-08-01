import Link from 'next/link';

const features = [
  'High-performance cloud infrastructure',
  'Automatic backups and failover',
  '24/7 security monitoring',
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-16 lg:px-8">
      <nav className="mb-16 flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/70 px-6 py-3 backdrop-blur">
        <div className="text-lg font-semibold">ArixByte</div>
        <div className="flex gap-4 text-sm text-slate-300">
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">Launch your stack in minutes</p>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">The premium hosting platform for modern teams.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Deploy websites, applications, and game servers with enterprise-grade performance, automated scaling, and lightning-fast support.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white">Get Started</Link>
            <Link href="/pricing" className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200">View Plans</Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-blue-500/10">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">Service status</span>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">Operational</span>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              {features.map((feature) => (
                <div key={feature} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">{feature}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
