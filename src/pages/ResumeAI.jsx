import Reveal from '../components/Reveal.jsx'

export default function ResumeAI() {
  const toolUrl = 'https://airesumemaker.onrender.com/'

  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold">AI Resume Generator</h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-2 text-gray-700 max-w-prose">
          Transform your resume into a professional LaTeX document tailored to a target job description.
          Paste your resume and the JD to generate a high‑ATS, role‑aligned resume you can compile to PDF.
        </p>
      </Reveal>

      <div className="mt-6 rounded-xl overflow-hidden border shadow-sm bg-white">
        <iframe
          title="AI Resume Generator"
          src={toolUrl}
          className="w-full min-h-[72vh] md:min-h-[82vh]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="mt-3 text-sm text-gray-600">
        If the embed does not load, open it directly: {' '}
        <a className="text-wicys-purple font-semibold hover:underline" href={toolUrl} target="_blank" rel="noreferrer">Open AI Resume Generator ↗</a>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ['Tailored to JD', 'Paste the job description to shape bullet points and skills for better ATS matches.'],
          ['LaTeX Output', 'Get clean LaTeX you can compile to PDF for consistent formatting.'],
          ['Member Friendly', 'Great for internship and new‑grad security roles; optional API key supported.'],
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


