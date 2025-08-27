import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import careerPathAI from '../assets/careerpathai.png'
import aiResumeMaker from '../assets/airesumemaker.png'

export default function Resources() {
  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold">Member Resources</h1>
        <p className="mt-3 text-gray-600 max-w-prose">
          WiCyS UH members get exclusive access to cutting-edge tools, weekly newsletters,
          and educational resources to accelerate their cybersecurity journey.
        </p>
      </Reveal>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-2xl font-bold">AI-Powered Career Tools</h2>
          <p className="mt-2 text-gray-600">
            Access our suite of AI tools designed to help you plan your career path and land your dream role.
            <Link to="/join" className="text-wicys-purple font-semibold hover:underline ml-2">
              Join WiCyS UH for access →
            </Link>
          </p>
        </Reveal>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="rounded-xl border bg-white overflow-hidden">
              <img src={careerPathAI} alt="CareerPath AI Interface" className="w-full h-48 object-cover object-top" />
              <div className="p-6">
                <h3 className="font-semibold text-wicys-purple text-lg">CareerPath AI</h3>
                <p className="mt-2 text-gray-600">
                  Generate personalized learning roadmaps for cybersecurity, AI engineering, and data analysis. 
                  Get certification recommendations and skill paths tailored to your goals and experience level.
                </p>
                <div className="mt-4 flex gap-2 text-sm">
                  <span className="px-2 py-1 rounded bg-purple-50 text-wicys-purple">Personalized Paths</span>
                  <span className="px-2 py-1 rounded bg-purple-50 text-wicys-purple">Certification Guide</span>
                </div>
                <div className="mt-4">
                  <Link
                    to="/cyberpath"
                    className="inline-block text-wicys-purple font-semibold hover:underline"
                  >
                    Access CareerPath AI →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl border bg-white overflow-hidden">
              <img src={aiResumeMaker} alt="AI Resume Generator Interface" className="w-full h-48 object-cover object-top" />
              <div className="p-6">
                <h3 className="font-semibold text-wicys-purple text-lg">AI Resume Generator</h3>
                <p className="mt-2 text-gray-600">
                  Transform your resume into a professional LaTeX document optimized for each job application.
                  Increase your interview chances with ATS-friendly, role-aligned content.
                </p>
                <div className="mt-4 flex gap-2 text-sm">
                  <span className="px-2 py-1 rounded bg-purple-50 text-wicys-purple">LaTeX Output</span>
                  <span className="px-2 py-1 rounded bg-purple-50 text-wicys-purple">ATS Optimized</span>
                </div>
                <div className="mt-4">
                  <Link
                    to="/resume-ai"
                    className="inline-block text-wicys-purple font-semibold hover:underline"
                  >
                    Access AI Resume Generator →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-12">
        <Reveal>
          <h2 className="text-2xl font-bold">Weekly Newsletters</h2>
          <p className="mt-2 text-gray-600">
            Stay informed with curated content delivered to your inbox every week.
          </p>
        </Reveal>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold text-wicys-purple">Cybersecurity Insights</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2 items-start">
                  <span className="text-wicys-purple mt-1">•</span>
                  <span>Latest threats and vulnerabilities</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-wicys-purple mt-1">•</span>
                  <span>Industry news and analysis</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-wicys-purple mt-1">•</span>
                  <span>Tool recommendations and tutorials</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold text-wicys-purple">Job Opportunities</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2 items-start">
                  <span className="text-wicys-purple mt-1">•</span>
                  <span>Curated security roles and internships</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-wicys-purple mt-1">•</span>
                  <span>Application tips and deadlines</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-wicys-purple mt-1">•</span>
                  <span>Company insights and culture notes</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-12">
        <Reveal>
          <h2 className="text-2xl font-bold">Educational Resources</h2>
        </Reveal>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ['Hands-on Labs', 'Practice with industry tools in cloud security, penetration testing, and threat hunting.'],
            ['Study Groups', 'Join certification prep groups for Security+, CEH, CISSP, and more.'],
            ['Workshop Recordings', 'Access recordings of past technical workshops and speaker sessions.'],
            ['Career Resources', 'Resume templates, interview prep guides, and salary negotiation tips.'],
            ['Learning Paths', 'Structured guides for different security specializations.'],
            ['Member Directory', 'Connect with peers and alumni in various security roles.'],
          ].map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="rounded-xl border p-5 bg-white">
                <h3 className="font-semibold text-wicys-purple">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="mt-12 rounded-xl border-2 border-wicys-purple/20 p-8 bg-gradient-to-br from-purple-50 to-white">
          <h2 className="text-2xl font-bold">Ready to Access These Resources?</h2>
          <p className="mt-2 text-gray-600">
            Join WiCyS UH to get immediate access to all our career tools, weekly newsletters,
            and educational resources.
          </p>
          <div className="mt-6">
            <Link
              to="/join"
              className="inline-block bg-wicys-purple text-white font-semibold px-6 py-3 rounded-md hover:bg-wicys-purple/90"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  )
}