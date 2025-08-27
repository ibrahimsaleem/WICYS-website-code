import Reveal from '../components/Reveal.jsx'

export default function CyberPath() {
  const toolUrl = 'https://careerpathagent.onrender.com/'

  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold">CareerPath AI</h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-2 text-gray-700 max-w-prose">
          Your personalized roadmap advisor for cybersecurity, AI engineering, data analysis and more. 
          Tell us your experience, interests, and timeline — we'll generate a customized learning path 
          with certifications and skills aligned to your goals.
        </p>
      </Reveal>

      <div className="mt-6 rounded-xl overflow-hidden border shadow-sm bg-white">
        <iframe
          title="CareerPath AI"
          src={toolUrl}
          className="w-full min-h-[70vh] md:min-h-[80vh]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="mt-3 text-sm text-gray-600">
        If the embed does not load, open it directly: {' '}
        <a className="text-wicys-purple font-semibold hover:underline" href={toolUrl} target="_blank" rel="noreferrer">Open CareerPath AI ↗</a>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ['Multiple Paths', 'Choose from cybersecurity, AI engineering, data analysis and more career tracks.'],
          ['Experience Levels', 'Tailored guidance for beginners (0-1 year), intermediate (1-3 years), and advanced (3+ years).'],
          ['Certification Focus', 'Get recommended certifications and skills based on your interests and timeline.'],
        ].map(([title, desc], i) => (
          <Reveal key={title} delay={0.05 * i}>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold text-wicys-purple">{title}</h3>
              <p className="text-gray-700 mt-1">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}