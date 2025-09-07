import Link from 'next/link'

export default function Home() {
  return (
    <section className="grid gap-6 place-items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Welcome to the Al2 Project Showcase</h1>
      <p className="max-w-2xl text-lg text-gray-700">
        Explore our curated list of teams and their projects. Clean, fast, and static — just like your example site.
      </p>
      <div className="flex gap-3">
        <Link href="/teams" className="px-6 py-3 rounded-2xl bg-gray-900 text-white hover:opacity-90">View Teams</Link>
        <a href="https://nextjs.org" target="_blank" className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100">Learn Next.js</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4 w-full mt-10">
        {[
          { title: 'Fast', desc: 'Deployed on Vercel with global edge network.'},
          { title: 'Simple', desc: 'Static content with zero databases.'},
          { title: 'Scalable', desc: 'Add more teams just by editing one file.'},
        ].map((c, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 text-left">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-600 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
