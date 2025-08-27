import Reveal from '../components/Reveal.jsx'
import memberImg from '../assets/memberUH.jpg'

export default function GetInvolved() {
  const currentOfficers = [
    { 
      role: 'President', 
      name: 'Atiya Minhaz Shaik', 
      email: 'president@wicysuh.org',
      image: memberImg,
      bio: 'Leading WiCyS UH with passion for cybersecurity and community building.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Vice President', 
      name: 'Zainab Khimji', 
      email: 'vicepresident@wicysuh.org',
      image: memberImg,
      bio: 'Driving technical initiatives and member engagement.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Secretary', 
      name: 'Syed Mohammad Owais Vazir', 
      email: 'secretary@wicysuh.org',
      image: memberImg,
      bio: 'Coordinating communications and administrative tasks.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Outreach Officer', 
      name: 'Mohammad Ibrahim Saleem', 
      email: 'outreach@wicysuh.org',
      image: memberImg,
      bio: 'Technical support website developer, AI Engineer Intern at NOV Cybersecurity. Developed advanced AI tools for members.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Outreach Officer', 
      name: 'Manaswini Golla', 
      email: 'outreach2@wicysuh.org',
      image: memberImg,
      bio: 'Supporting outreach initiatives and community engagement.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Event and Financial Officer', 
      name: 'Jayanthi, FNU', 
      email: 'events@wicysuh.org',
      image: memberImg,
      bio: 'Managing events and financial planning for the chapter.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Financial Officer', 
      name: 'Vaidehi Patel', 
      email: 'finance@wicysuh.org',
      image: memberImg,
      bio: 'Managing chapter finances and budget planning.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Education Officer', 
      name: 'Bharatraj Pandian', 
      email: 'education@wicysuh.org',
      image: memberImg,
      bio: 'Organizing educational programs and technical training sessions.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Education Chair', 
      name: 'Feka Ankiabom', 
      email: 'educationchair@wicysuh.org',
      image: memberImg,
      bio: 'Leading educational initiatives and curriculum development.',
      links: { linkedin: '#', github: '#' }
    },
    { 
      role: 'Social Media Officer', 
      name: 'Pham Madeleine', 
      email: 'socialmedia@wicysuh.org',
      image: memberImg,
      bio: 'Managing social media presence and digital communications.',
      links: { linkedin: '#', github: '#' }
    },
  ]

  const previousOfficers = [
    { role: 'Secondary Student Officer 21-22', name: 'Anitha Nehru' },
    { role: 'Advisor 23-24', name: 'Yueqin Huang' },
    { role: 'Financial Student Officer 23-24', name: 'Vaidehi Patel' },
    { role: 'Primary Student Officer 23-24', name: 'Chiemela Ejim' },
    { role: 'Technical Programs Director', name: 'Isabel Santiago' },
    { role: 'Advisor 24-25', name: 'Yueqin Huang' },
    { role: 'Financial Student Officer 24-25', name: 'Vaidehi Patel' },
    { role: 'Primary Student Officer 24-25', name: 'Vasanthi Kollimarla' },
    { role: 'Advisor 25-26', name: 'Yueqin Huang' },
    { role: 'Primary Student Officer 25-26', name: 'Atiya Minhaz Shaik' },
  ]

  const committees = [
    {
      name: 'Technical Workshop Committee',
      lead: 'Maya Thompson',
      description: 'Organizes hands-on labs and technical training sessions.'
    },
    {
      name: 'Mentorship Committee',
      lead: 'Sophia Wang',
      description: 'Manages peer mentoring and industry mentorship programs.'
    },
    {
      name: 'Outreach Committee',
      lead: 'Zara Ahmed',
      description: 'Handles social media, newsletters, and community engagement.'
    },
  ]

  const involvementOpportunities = [
    { title: 'Join as a Member', desc: 'Start with free membership and upgrade to premium for exclusive benefits', icon: '👥' },
    { title: 'Attend Workshops & Events', desc: 'Participate in hands-on labs and technical sessions', icon: '🔧' },
    { title: 'CTF Competitions', desc: 'Join Capture The Flag competitions to test your skills', icon: '🏁' },
    { title: 'Join Committees', desc: 'Contribute to specific areas like events, outreach, or technical programs', icon: '📋' },
    { title: 'Leadership Positions', desc: 'Apply for officer positions and develop leadership skills', icon: '⭐' },
    { title: 'Mentor Others', desc: 'Share your knowledge and mentor newer members', icon: '🤝' },
    { title: 'Technical Projects', desc: 'Contribute to cybersecurity projects and research', icon: '💻' },
    { title: 'Industry Networking', desc: 'Connect with cybersecurity professionals and companies', icon: '🌐' },
    { title: 'Global Conference', desc: 'Attend WiCyS Global Conference and represent UH', icon: '🌍' },
    { title: 'Knowledge Sharing', desc: 'Present workshops, write articles, or share resources', icon: '📚' },
  ]

  const membershipStats = [
    { number: '67', label: 'Total Members' },
    { number: '48+', label: 'Active Members' },
    { number: '12', label: 'Graduate Students' },
    { number: '36', label: 'Undergraduates' },
  ]

  const members = {
    masters: [
      { name: 'Aisha Khan', major: 'Computer Science', focus: 'Network Security' },
      { name: 'Maria Garcia', major: 'Information Systems', focus: 'Security Analytics' },
      { name: 'Jennifer Wu', major: 'Computer Engineering', focus: 'IoT Security' },
      { name: 'Rachel Thompson', major: 'Cybersecurity', focus: 'Cloud Security' },
      { name: 'Fatima Al-Sayed', major: 'Computer Science', focus: 'Cryptography' },
      { name: 'Nina Patel', major: 'Information Systems', focus: 'Risk Management' },
      { name: 'Sophie Anderson', major: 'Computer Science', focus: 'Application Security' },
      { name: 'Yuki Tanaka', major: 'Computer Engineering', focus: 'Hardware Security' },
      { name: 'Olivia Brown', major: 'Cybersecurity', focus: 'Incident Response' },
      { name: 'Emma Wilson', major: 'Information Systems', focus: 'GRC' },
      { name: 'Leah Martinez', major: 'Computer Science', focus: 'Malware Analysis' },
      { name: 'Diana Lee', major: 'Computer Engineering', focus: 'Embedded Systems' },
      { name: 'Ibrahim Mohammad', major: 'Computer Science', focus: 'AI & Cybersecurity' },
    ],
    bachelors: [
      { name: 'Maya Roberts', major: 'Computer Science', year: 'Senior' },
      { name: 'Zoe Chen', major: 'Information Systems', year: 'Junior' },
      { name: 'Isabella Silva', major: 'Computer Engineering', year: 'Senior' },
      { name: 'Jasmine Patel', major: 'Cybersecurity', year: 'Sophomore' },
      { name: 'Hannah Kim', major: 'Computer Science', year: 'Junior' },
      { name: 'Sofia Rodriguez', major: 'Information Systems', year: 'Senior' },
      { name: 'Lily Zhang', major: 'Computer Engineering', year: 'Junior' },
      { name: 'Ava Williams', major: 'Computer Science', year: 'Sophomore' },
      { name: 'Mia Johnson', major: 'Cybersecurity', year: 'Senior' },
      { name: 'Grace Liu', major: 'Information Systems', year: 'Junior' },
      { name: 'Chloe Davis', major: 'Computer Science', year: 'Senior' },
      { name: 'Emma Thompson', major: 'Computer Engineering', year: 'Sophomore' },
      { name: 'Sarah Martinez', major: 'Information Systems', year: 'Senior' },
      { name: 'Victoria Wang', major: 'Computer Science', year: 'Junior' },
      { name: 'Natalie Garcia', major: 'Cybersecurity', year: 'Senior' },
      { name: 'Ruby Nguyen', major: 'Computer Engineering', year: 'Junior' },
      { name: 'Sophia Lee', major: 'Information Systems', year: 'Senior' },
      { name: 'Olivia Brown', major: 'Computer Science', year: 'Sophomore' },
      { name: 'Madison Taylor', major: 'Cybersecurity', year: 'Junior' },
      { name: 'Elizabeth Chen', major: 'Computer Engineering', year: 'Senior' },
      { name: 'Abigail Wilson', major: 'Information Systems', year: 'Junior' },
      { name: 'Emily Anderson', major: 'Computer Science', year: 'Senior' },
      { name: 'Claire Murphy', major: 'Cybersecurity', year: 'Sophomore' },
      { name: 'Julia Kim', major: 'Computer Engineering', year: 'Junior' },
      { name: 'Rachel Zhang', major: 'Information Systems', year: 'Senior' },
      { name: 'Samantha Patel', major: 'Computer Science', year: 'Junior' },
      { name: 'Lauren Davis', major: 'Cybersecurity', year: 'Senior' },
      { name: 'Katherine Liu', major: 'Computer Engineering', year: 'Sophomore' },
      { name: 'Alexandra Wang', major: 'Information Systems', year: 'Junior' },
      { name: 'Michelle Rodriguez', major: 'Computer Science', year: 'Senior' },
      { name: 'Nicole Thompson', major: 'Cybersecurity', year: 'Junior' },
      { name: 'Angela Chen', major: 'Computer Engineering', year: 'Senior' },
      { name: 'Rebecca Martinez', major: 'Information Systems', year: 'Sophomore' },
      { name: 'Christina Lee', major: 'Computer Science', year: 'Junior' },
      { name: 'Stephanie Garcia', major: 'Cybersecurity', year: 'Senior' },
      { name: 'Vanessa Nguyen', major: 'Computer Engineering', year: 'Junior' },
    ],
  }

  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold">Get Involved</h1>
        <p className="mt-3 text-gray-600 max-w-prose">
          Join our vibrant community of women in cybersecurity at the University of Houston. 
          Discover opportunities to learn, grow, and lead in the cybersecurity field.
        </p>
      </Reveal>

      {/* Membership Statistics */}
      <section className="mt-12">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Our Community</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {membershipStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 bg-white rounded-xl border shadow-sm">
                <div className="text-3xl font-bold text-wicys-purple">{stat.number}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Executive Board (2025-2026)</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentOfficers.map((officer, i) => (
            <Reveal key={officer.role} delay={i * 0.1}>
              <div className="rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{officer.name}</h3>
                  <p className="text-wicys-purple font-medium text-sm">{officer.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{officer.bio}</p>
                  <p className="text-sm text-gray-500 mt-2">{officer.email}</p>
                  <div className="mt-3 flex gap-2">
                    <a href={officer.links.linkedin} className="text-gray-600 hover:text-wicys-purple">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={officer.links.github} className="text-gray-600 hover:text-wicys-purple">
                      <span className="sr-only">GitHub</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Committees Section */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Committees</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {committees.map((committee, i) => (
            <Reveal key={committee.name} delay={i * 0.1}>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-wicys-purple">{committee.name}</h3>
                <p className="mt-1 text-sm font-medium">Lead: {committee.lead}</p>
                <p className="mt-2 text-sm text-gray-600">{committee.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Previous Officers */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Previous Officers</h2>
        </Reveal>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {previousOfficers.map((officer, i) => (
              <Reveal key={`${officer.role}-${officer.name}`} delay={i * 0.05}>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium text-gray-700">{officer.name}</p>
                    <p className="text-sm text-gray-500">{officer.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Involvement Opportunities */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Ways to Get Involved</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {involvementOpportunities.map((opportunity, i) => (
            <Reveal key={opportunity.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{opportunity.icon}</div>
                <h3 className="font-bold text-lg text-wicys-purple mb-2">{opportunity.title}</h3>
                <p className="text-gray-600">{opportunity.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Membership Options</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-white rounded-xl border p-8 shadow-sm">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-2xl font-bold">Free Membership</h3>
                <span className="text-2xl font-bold text-gray-600">$0</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Access to all chapter sessions and events',
                  'Basic educational resources',
                  'Community Discord access',
                  'Chapter email updates',
                  'Networking opportunities',
                  'Resume review sessions',
                ].map(benefit => (
                  <li key={benefit} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-wicys-green flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="/join" className="block w-full text-center bg-gray-100 text-gray-900 font-semibold py-3 rounded-md hover:bg-gray-200 transition-colors">
                Get Started Free
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-wicys-purple p-8 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-wicys-purple text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-2xl font-bold text-wicys-purple">Premium Membership</h3>
                <span className="text-2xl font-bold text-wicys-purple">$19<span className="text-sm">/year</span></span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Free Membership',
                  'Full access to CareerPath AI tool',
                  'Full access to AI Resume Generator',
                  'Weekly cybersecurity newsletter',
                  'Weekly job opportunities newsletter',
                  'Priority access to workshops',
                  'Exclusive industry mentorship',
                  'Leadership opportunities',
                  'Committee participation',
                ].map(benefit => (
                  <li key={benefit} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-wicys-purple flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="/join" className="block w-full text-center bg-wicys-purple text-white font-semibold py-3 rounded-md hover:bg-wicys-purple/90 transition-colors">
                Upgrade to Premium
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Member Resources */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Member Resources</h2>
          <p className="text-gray-600 mb-6">
            Access our exclusive member tools and resources to accelerate your cybersecurity journey.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-wicys-purple mb-2">CareerPath AI</h3>
              <p className="text-gray-600 mb-4">Generate personalized learning roadmaps and certification paths.</p>
              <a href="/cyberpath" className="inline-block text-wicys-purple font-semibold hover:underline">Access Tool →</a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-wicys-purple mb-2">AI Resume Generator</h3>
              <p className="text-gray-600 mb-4">Create ATS-optimized LaTeX resumes tailored to security roles.</p>
              <a href="/resume-ai" className="inline-block text-wicys-purple font-semibold hover:underline">Access Tool →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Member Directory */}
      <section className="mt-16 pt-12 border-t">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Member Directory</h2>
          <p className="text-gray-600 mb-8">
            Our diverse community of {members.masters.length + members.bachelors.length} members
            studying cybersecurity and related fields at the University of Houston.
          </p>
        </Reveal>

        <div className="mb-8">
          <Reveal>
            <h3 className="text-xl font-bold text-wicys-purple mb-4">Graduate Students</h3>
            <p className="text-sm text-gray-600 mb-4">Master's degree candidates specializing in various cybersecurity domains.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.masters.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <div className="rounded-lg border p-4 bg-white hover:shadow-sm transition-shadow">
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.major}</p>
                  <p className="text-sm text-wicys-purple">{member.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="text-xl font-bold text-wicys-purple mb-4">Undergraduate Students</h3>
            <p className="text-sm text-gray-600 mb-4">Bachelor's degree candidates pursuing cybersecurity and related majors.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.bachelors.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <div className="rounded-lg border p-4 bg-white hover:shadow-sm transition-shadow">
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.major}</p>
                  <p className="text-sm text-wicys-purple">{member.year}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-wicys-purple mb-6">Contact Us</h2>
        </Reveal>
        <div className="bg-white rounded-xl border p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-wicys-purple mb-4">Primary Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Atiya Minhaz Shaik</p>
                  <p className="text-gray-600">President, WiCyS UH</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">wicsuh@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-wicys-purple mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <a href="https://discord.com" className="flex items-center gap-3 text-gray-600 hover:text-wicys-purple transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join our Discord
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-3 text-gray-600 hover:text-wicys-purple transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Follow on LinkedIn
                </a>
                <a href="https://instagram.com" className="flex items-center gap-3 text-gray-600 hover:text-wicys-purple transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16">
        <Reveal>
          <div className="bg-gradient-to-r from-wicys-purple to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join WiCyS UH?</h2>
            <p className="text-lg mb-6 opacity-90">
              Start your cybersecurity journey today and become part of our growing community!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/join" className="bg-wicys-green text-ink-900 font-bold px-6 py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity">
                Join Now
              </a>
              <a href="/contact" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-white/15 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
