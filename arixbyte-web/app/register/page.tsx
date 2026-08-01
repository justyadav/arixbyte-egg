import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="mt-2 text-sm text-slate-400">Start building on a modern hosting platform.</p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Name" />
          <input className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Email" />
          <input className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-blue-600 px-4 py-3 font-medium">Create account</button>
        </form>
        <p className="mt-4 text-sm text-slate-400"><Link href="/login" className="text-blue-400">Already have an account?</Link></p>
      </div>
    </main>
  );
}
