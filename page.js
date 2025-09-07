const teams = [
  {
    name: 'Team Alpha',
    project: 'AI Chatbot',
    description: 'A chatbot that answers questions using AI.',
    links: [{ label: 'GitHub', href: '#' }]
  },
  {
    name: 'Team Beta',
    project: 'Weather App',
    description: 'A web app showing live weather data.',
    links: [{ label: 'Live Demo', href: '#' }]
  },
  {
    name: 'Team Gamma',
    project: 'E-Commerce Site',
    description: 'An online store for cool products.',
    links: [{ label: 'Docs', href: '#' }]
  },
];

export const metadata = {
  title: 'Teams | Al2'
}

export default function TeamsPage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-bold text-center">Our Teams</h1>
      <p className="text-center text-gray-700">Click into each card to explore links.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((t, idx) => (
          <article key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow transition">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-gray-900 font-medium mt-1">{t.project}</p>
            <p className="text-gray-600 mt-2">{t.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {t.links?.map((l, i) => (
                <a key={i} href={l.href} target="_blank" className="text-sm px-3 py-1 rounded-full border hover:bg-gray-100">{l.label}</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
