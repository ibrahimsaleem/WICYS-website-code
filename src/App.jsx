import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import JoinUs from './pages/JoinUs.jsx'
import Resources from './pages/Resources.jsx'
import News from './pages/News.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import CyberPath from './pages/CyberPath.jsx'
import ResumeAI from './pages/ResumeAI.jsx'
import GetInvolved from './pages/GetInvolved.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { useEffect } from 'react'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
  return null
}

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
      isActive ? 'bg-white/90 text-wicys-purple' : 'text-white hover:text-wicys-green'
    }`
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-wicys-purple/80 shadow">
      <div className="mx-auto container-wide px-4 md:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src="/vite.svg" alt="logo" className="h-8 w-8 hidden" />
          <div className="flex items-center gap-3">
            <img src="/logoWicysUH.jpg" alt="WiCyS UH" className="h-10 w-10 rounded-full object-cover" onError={(e)=>{e.currentTarget.src='/vite.svg'}} />
            <span className="text-white font-extrabold tracking-tight leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>
              WiCyS UH
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/join" className={linkClass}>Join Us</NavLink>
          <NavLink to="/resources" className={linkClass}>Resources</NavLink>
          <NavLink to="/news" className={linkClass}>News</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/get-involved" className={linkClass}>Get Involved</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/join" className="md:inline-block hidden bg-uh-red text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-red-700">Join</a>
          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10" onClick={()=>setIsMobileOpen(v=>!v)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileOpen && (
        <div className="md:hidden bg-wicys-purple/95 text-white">
          <nav className="mx-auto container-wide px-4 py-3 grid gap-2">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/events', 'Events'],
              ['/join', 'Join Us'],
              ['/resources', 'Resources'],
              ['/news', 'News'],
              ['/gallery', 'Gallery'],
              ['/contact', 'Contact'],
              ['/get-involved', 'Get Involved'],
            ].map(([href, label]) => (
              <NavLink key={href} to={href} onClick={()=>setIsMobileOpen(false)} className={({isActive})=>`px-2 py-2 rounded ${isActive? 'bg-white/90 text-wicys-purple' : 'hover:bg-white/10'}`}>{label}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-ink-900 text-white/80">
      <div className="mx-auto container-wide px-4 md:px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-3 hover:opacity-90 transition-opacity">
            <img src="/logoWicysUH.jpg" alt="WiCyS UH" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Women in CyberSecurity, UH Chapter</p>
              <p>Empowering women in cybersecurity at the University of Houston.</p>
            </div>
          </Link>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-white">Quick Links</p>
          <div className="flex flex-wrap gap-3">
            {['About','Events','Join','Resources','News','Gallery','Contact','Get Involved'].map((label)=> (
              <NavLink key={label} to={`/${label.toLowerCase().replace(' ', '-')}`} className="hover:text-wicys-green">{label}</NavLink>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
                      <p>Email: wicsuh@gmail.com</p>
          <div className="mt-2 flex gap-3">
            <a href="https://www.linkedin.com" className="hover:text-wicys-green" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" className="hover:text-wicys-green" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://discord.com" className="hover:text-wicys-green" target="_blank" rel="noreferrer">Discord</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto container-wide px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-white/60">© {new Date().getFullYear()} WiCyS UH</p>
          <div className="flex items-center gap-2 text-white/60">
            <span>Designed & Developed by</span>
            <a 
              href="https://www.linkedin.com/in/ibrahimsaleem91/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-wicys-green hover:text-wicys-green/90 font-medium flex items-center gap-1"
            >
              Mohammad Ibrahim Saleem
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-ink-900 flex flex-col">
        <Navbar />
        <ScrollToTop />
        <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/cyberpath" element={<ProtectedRoute><CyberPath /></ProtectedRoute>} />
            <Route path="/resume-ai" element={<ProtectedRoute><ResumeAI /></ProtectedRoute>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}