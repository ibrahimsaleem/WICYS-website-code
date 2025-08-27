import Reveal from '../components/Reveal.jsx'

export default function Events() {
  const events = [
    { title: 'WiCyS Global Conference 2025', date: 'Apr 2-5, 2025', location: 'Dallas, TX', link: 'https://www.wicys.org' },
    { title: 'Officer Photo Shoot', date: 'Apr 2, 2025', location: 'University of Houston', link: '/gallery' },
    { title: 'Guest Speaker: Women in Tech Chronicles', date: 'Jun 12, 2025', location: 'UH', link: '/news' },
  ]

  // Use your own Google Calendar embed if provided via env; fallback to US Holidays
  const calendarSrc =
    import.meta.env.VITE_GOOGLE_CALENDAR_SRC ||
    'https://calendar.google.com/calendar/embed?src=wicsuh%40gmail.com&ctz=America%2FChicago%22'

  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold">Events & Calendar</h1>
      <p className="mt-2 text-gray-600">Workshops, career panels, socials, competitions, and conferences.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <div className="rounded-xl border p-6 bg-white hover:shadow transition-shadow">
              <p className="text-sm text-gray-500">{e.date} • {e.location}</p>
              <h3 className="mt-1 font-semibold">{e.title}</h3>
              <a href={e.link} className="text-wicys-purple font-semibold mt-3 inline-block" target={e.link.startsWith('http') ? '_blank' : undefined} rel={e.link.startsWith('http') ? 'noreferrer' : undefined}>Details →</a>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="font-semibold text-wicys-purple">Chapter Calendar</h2>
        <div className="mt-3 aspect-video w-full rounded-xl overflow-hidden border">
          <iframe title="UH Calendar" className="w-full h-full" src={calendarSrc}></iframe>
        </div>
      </div>
    </div>
  )
}


