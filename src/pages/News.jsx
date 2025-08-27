import Reveal from '../components/Reveal.jsx'

export default function News() {
  const posts = [
    { title: 'Isha Desai featured in Women in Tech Chronicles', date: 'June 12, 2025', summary: 'Our Industrial Advisor highlighted for her impact.' },
    { title: 'WiCyS Conference Prep', date: 'Mar 2025', summary: 'Travel grants, CFPs, and volunteering info.' },
    { title: 'Workshop Series: Intro to SIEM', date: 'Feb 2025', summary: 'Hands-on Splunk basics and detections.' },
    { title: 'CTF Night', date: 'Jan 2025', summary: 'Beginner-friendly challenges and snacks.' },
  ]
  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold">News & Highlights</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i*0.05}>
            <article className="rounded-xl border p-6 bg-white hover:shadow transition-shadow">
              <p className="text-sm text-gray-500">{p.date}</p>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}


