# WiCyS UH Chapter Website

A modern, responsive website for the Women in CyberSecurity (WiCyS) University of Houston chapter. Built with React, Vite, and Tailwind CSS, featuring integrated AI tools for member development.

## 🚀 Features

- **Modern React 19** with Vite for fast development
- **Responsive Design** with Tailwind CSS
- **Smooth Animations** using Framer Motion
- **Member Authentication** for protected resources
- **AI-Powered Tools** for career development
- **Firebase Hosting** ready
- **Mobile-First Design** with hamburger navigation
- **SEO Optimized** with proper meta tags

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1, Vite 7.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.23.12
- **Routing**: React Router DOM 7.8.0
- **HTTP Client**: Axios 1.11.0
- **Hosting**: Firebase Hosting
- **AI Tools**: External services on Render
- **Linting**: ESLint with React hooks and refresh plugins

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Reveal.jsx      # Animation wrapper component
│   └── ProtectedRoute.jsx # Authentication component
├── pages/              # Route components
│   ├── Home.jsx        # Landing page with hero section
│   ├── About.jsx       # About page with mission & vision
│   ├── Events.jsx      # Events listing and calendar
│   ├── JoinUs.jsx      # Membership signup and tiers
│   ├── Resources.jsx   # Educational resources
│   ├── News.jsx        # News updates and announcements
│   ├── Gallery.jsx     # Photo gallery
│   ├── Contact.jsx     # Contact information
│   ├── GetInvolved.jsx # Volunteer opportunities
│   ├── CyberPath.jsx   # AI career path tool (protected)
│   └── ResumeAI.jsx    # AI resume generator (protected)
├── assets/             # Static assets (images, videos, text files)
└── App.jsx            # Main app component with routing
```

## 🎨 Design System

- **WiCyS Purple**: #6a2c91 (primary brand color)
- **WiCyS Green**: #a6ce39 (accent color, used for profit indicators)
- **UH Red**: #c8102e (University of Houston branding)
- **Typography**: Times New Roman for branding, system fonts for content
- **Gradients**: Custom hero gradient with radial overlays

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ibrahimsaleem/WICYS-website-code.git
cd WICYS-website-code
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

- **Member Passcode**: `wicysuh2024` (should be moved to environment variables)
- **Protected Routes**: `/cyberpath` and `/resume-ai`
- **Session Storage**: Uses browser sessionStorage for authentication
- **Auto-redirect**: Unauthenticated users see login form

## 🤖 AI Tools Integration

### Resume AI Generator
- **URL**: https://airesumemaker.onrender.com/
- **Features**: 
  - LaTeX resume generation
  - ATS optimization
  - Job description tailoring
  - Professional formatting

### CareerPath AI
- **URL**: https://careerpathagent.onrender.com/
- **Features**:
  - Personalized cybersecurity career roadmaps
  - Multiple career tracks (cybersecurity, AI engineering, data analysis)
  - Experience-level based recommendations
  - Certification guidance

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
firebase deploy
```

### Environment Variables

Create a `.env` file for production:
```env
VITE_MEMBER_PASSCODE=your_secure_passcode
VITE_FIREBASE_CONFIG=your_firebase_config
```

## 📊 Statistics

- **48+ Active Members**
- **12 Graduate Students**
- **36 Undergraduates**
- **2 AI-Powered Tools**
- **10+ Page Sections**

## 🎯 Mission

WiCyS UH Chapter aims to:
- Recruit, retain, and advance women into cybersecurity careers
- Build an inclusive, diverse community at UH
- Provide hands-on learning, resume support, and industry access
- Guide students in gaining deeper insights into cybersecurity career opportunities

## 🎨 Key Features

### Responsive Navigation
- Sticky header with backdrop blur
- Mobile hamburger menu
- Active link highlighting
- Smooth transitions

### Animation System
- Scroll-triggered animations with Framer Motion
- Reveal components for content sections
- Page transition animations
- Loading states

### Member Benefits
- Free and premium membership tiers
- Access to AI-powered career tools
- Networking opportunities
- Resume review sessions
- Industry connections

## 👥 Contact

- **Email**: wicsuh@gmail.com
- **LinkedIn**: [WiCyS UH Chapter](https://www.linkedin.com)
- **Instagram**: [@wicysuh](https://www.instagram.com)
- **Discord**: [WiCyS UH Server](https://discord.com)

## 👨‍💻 Developer

**Mohammad Ibrahim Saleem**
- LinkedIn: [ibrahimsaleem91](https://www.linkedin.com/in/ibrahimsaleem91/)
- GitHub: [ibrahimsaleem](https://github.com/ibrahimsaleem)

## 🔧 Development Notes

### Code Quality
- ESLint configuration with React hooks rules
- Prettier formatting (recommended)
- Component-based architecture
- Reusable animation components

### Performance
- Vite for fast development and building
- Tailwind CSS for optimized styles
- Lazy loading for images
- Optimized bundle size

### Security
- Protected routes for member-only content
- Session-based authentication
- Input validation
- Secure external tool integration

## 📄 License

This project is developed for the WiCyS UH Chapter. All rights reserved.

---

Built with ❤️ for the Women in CyberSecurity community at the University of Houston.
