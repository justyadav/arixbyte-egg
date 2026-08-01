import Link from 'next/link';

const plans = [
  { name: 'Starter', price: '$9', description: 'Perfect for small projects', perks: ['1 project', '10GB SSD', 'Free SSL'] },
  { name: 'Pro', price: '$29', description: 'For growing teams', perks: ['Unlimited projects', '100GB SSD', 'Priority support'] },
  { name: 'Business', price: '$79', description: 'For mission-critical workloads', perks: ['Dedicated resources', '1TB SSD', 'Advanced monitoring'] },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Flexible plans for every stage.</h1>
      <p className="mt-4 max-w-2xl text-slate-300">Scale from starter deployments to enterprise-grade clusters without compromise.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
            <div className="mt-6 text-4xl font-semibold">{plan.price}<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              {plan.perks.map((perk) => (<li key={perk}>• {perk}</li>))}
            </ul>
            <Link href="/register" className="mt-8 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm">Choose plan</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
