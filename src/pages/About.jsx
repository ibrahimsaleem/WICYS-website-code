import aboutImg from '../assets/fair.jpg'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-3 text-gray-600 max-w-prose">
          Learn about our mission to empower women in cybersecurity and our journey at the University of Houston.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <img src={aboutImg} alt="WiCyS UH event" className="rounded-xl shadow-lg w-full" />
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="space-y-8">
            {/* WiCyS National */}
            <div>
              <h2 className="text-2xl font-bold text-wicys-purple mb-4">
                Women in Cybersecurity (WiCyS) – Established 2013
              </h2>
              <p className="text-gray-700 leading-relaxed">
                WiCyS was founded to create a collaborative platform for women from diverse academic backgrounds 
                to come together, exchange ideas, and learn from each other. As cybersecurity continues to grow 
                rapidly, the representation of women in the field remains significantly low. WiCyS aims to bridge 
                this gap by attracting women from various fields, equipping them with the knowledge, resources, 
                and networking opportunities essential for thriving in the cybersecurity industry.
              </p>
            </div>

            {/* WiCyS UH Chapter */}
            <div>
              <h2 className="text-2xl font-bold text-wicys-purple mb-4">
                WiCyS UH Chapter – Established 2018
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Continuing the mission of the national organization, the University of Houston Chapter was founded 
                to serve as a support system not only for female students pursuing cybersecurity but also for those 
                interested in transitioning into the field from other disciplines. Our vision is to guide UH students 
                in gaining deeper insights into cybersecurity, showcasing the numerous career opportunities available. 
                We foster close connections with the industry through engaging workshops, informative sessions, 
                seminars, and conferences, providing valuable exposure and real-world experiences.
              </p>
            </div>

            {/* Mission & Vision */}
            <div>
              <h2 className="text-xl font-semibold text-wicys-purple mb-4">Our Mission & Vision</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-wicys-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recruit, retain, and advance women into cybersecurity careers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-wicys-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build an inclusive, diverse community at UH</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-wicys-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Provide hands-on learning, resume support, and industry access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-wicys-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Guide students in gaining deeper insights into cybersecurity career opportunities</span>
                </li>
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <h2 className="text-xl font-semibold text-wicys-purple mb-4">Our Focus Areas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Cloud Security',
                  'Blue Team & SIEM',
                  'Governance, Risk & Compliance',
                  'AppSec & SDLC',
                  'AI in Cybersecurity',
                  'Career Development',
                  'Leadership Training',
                  'Industry Networking'
                ].map((area) => (
                  <div key={area} className="bg-white rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-gradient-to-r from-wicys-purple/10 to-purple-100 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-wicys-purple mb-3">Get Involved</h2>
              <p className="text-gray-700 mb-4">
                Join our community and start your cybersecurity journey today. We welcome students from all 
                backgrounds and experience levels.
              </p>
              <a 
                href="/join" 
                className="inline-block bg-wicys-purple text-white font-semibold px-6 py-3 rounded-md hover:bg-wicys-purple/90 transition-colors"
              >
                Join WiCyS UH
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}


