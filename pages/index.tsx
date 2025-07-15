import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Github, Linkedin, Music, BookOpen, Code, Plane, Timer, Building, Calendar, ArrowRight } from 'lucide-react'

// Custom Icons
const SpotifyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const AppleMusicIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568c-.24.24-.571.24-.811 0-.961-.96-2.4-1.44-3.84-1.44-1.44 0-2.88.48-3.84 1.44-.24.24-.571.24-.811 0s-.24-.571 0-.811c1.201-1.2 2.88-1.92 4.651-1.92s3.45.72 4.651 1.92c.24.24.24.571 0 .811zM18 14.4c-.3.3-.72.3-1.02 0-1.38-1.38-3.42-2.16-5.46-2.16s-4.08.78-5.46 2.16c-.3.3-.72.3-1.02 0s-.3-.72 0-1.02c1.68-1.68 4.14-2.64 6.48-2.64s4.8.96 6.48 2.64c.3.3.3.72 0 1.02zM19.44 11.1c-.36.36-.9.36-1.26 0-1.8-1.8-4.44-2.82-6.96-2.82s-5.16 1.02-6.96 2.82c-.36.36-.9.36-1.26 0s-.36-.9 0-1.26c2.16-2.16 5.22-3.42 8.22-3.42s6.06 1.26 8.22 3.42c.36.36.36.9 0 1.26z"/>
  </svg>
)

const BandcampIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 12.102C0 5.42 5.42 0 12.102 0s12.103 5.42 12.103 12.102S18.783 24.205 12.102 24.205 0 18.784 0 12.102zm6.645-5.205 4.014 10.282h2.683l4.014-10.282h-2.683l-2.658 6.79-2.69-6.79H6.644z"/>
  </svg>
)

export default function Home() {
  const [activeSection, setActiveSection] = useState('software')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const companies = [
    { name: 'Nike', logo: '/logos/nike-alt.svg', role: 'Solution Architecture & Team Leadership' },
    { name: 'British Airways', logo: '/logos/ba.svg', role: 'Software Engineering & UI Optimization' },
    { name: 'Booking.com', logo: '/logos/booking.svg', role: 'Platform Migration & Modernization' },
    { name: 'Roche', logo: '/logos/roche.svg', role: 'Technical Leadership & Strategy' },
    { name: 'Deloitte', logo: '/logos/deloitte.svg', role: 'Government Solutions & Consulting' },
    { name: 'Suitepad', logo: '/logos/suitepad.png', role: 'Founding Engineering Team' },
  ]

  // Helper function to get company logo
  const getCompanyLogo = (companyName: string) => {
    const logoMap: Record<string, string> = {
      'British Airways': '/logos/ba.svg',
      'Roche (via Garaje de Ideas)': '/logos/roche.svg',
      'Nike': '/logos/nike-alt.svg',
      'Booking.com': '/logos/booking.svg',
      'Freelance Consultant': '/logos/deloitte.svg' // Using Deloitte as main freelance client
    }
    return logoMap[companyName] || '/logos/default.svg'
  }

  const workExperience = [
    {
      company: 'British Airways',
      role: 'Senior Frontend Developer',
      period: '02/2025 - 04/2025',
      location: 'London, UK',
      description: 'Led UI development for mission-critical fleet management and runway optimization system. Conducted comprehensive UI audits and presented improvements to management.',
      technologies: ['React', 'TypeScript', 'Vite', 'Python'],
      achievements: [
        'Optimized aircraft scheduling and route planning systems',
        'Presented UI audits to management with approval',
        'Enhanced system efficiency and user experience'
      ]
    },
    {
      company: 'Roche (via Garaje de Ideas)',
      role: 'Technical Lead (Fullstack)',
      period: '03/2024 - 06/2024',
      location: 'Madrid, Spain',
      description: 'Led the Navify marketplace migration from Angular to Next.js. Delivered PoC as blueprint for migration and coordinated with team members.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind UI', 'Figma'],
      achievements: [
        'Delivered migration PoC blueprint',
        'Coordinated team through agile methodologies',
        'Project on track for 2025 release'
      ]
    },
    {
      company: 'Nike',
      role: 'Solution Architect',
      period: '12/2021 - 04/2023',
      location: 'Hilversum, Netherlands',
      description: 'Enhanced internal supply chain web applications across Asia, EMEA, and North America. Supervised and mentored front-end team members.',
      technologies: ['Vue.js', 'React', 'Node.js', 'Java', 'AWS', 'Splunk'],
      achievements: [
        'Successful launch in several Asian countries by July 2022',
        'Harmonized UI experiences across EMEA and North America',
        'Mentored front-end team members'
      ]
    },
    {
      company: 'Booking.com',
      role: 'Senior Software Engineer',
      period: '04/2021 - 10/2021',
      location: 'Amsterdam, Netherlands',
      description: 'Led migration of partner portal UI from PERL templates to modern Vue.js solution. Conducted reverse engineering of legacy code.',
      technologies: ['PERL', 'Vue.js', 'React', 'Node.js', 'Java', 'AWS'],
      achievements: [
        'Successfully migrated legacy PERL to Vue.js',
        'Contributed to new partner portal release',
        'Effective stakeholder communication'
      ]
    },
    {
      company: 'Freelance Consultant',
      role: 'Senior Frontend Developer',
      period: '05/2015 - 12/2020',
      location: 'Remote',
      description: 'Collaborated with major companies across diverse industries including fintech, government, and healthcare.',
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'Blazor', 'Neo4J'],
      achievements: [
        'Deloitte: Led governmental greenfield project (React, Node.js, Neo4J)',
        'ClearBank: Developed greenfield banking platform (Vue.js)',
        'Tata/Verizon: Created e-commerce prototypes and Node.js microservices'
      ]
    }
  ]

  const sections = [
    { id: 'software', label: 'Software', icon: Code },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'writer', label: 'Writer', icon: BookOpen },
  ]

  return (
    <>
      <Head>
        <title>Luis Fernando Romero Calero - Software Engineer & Product Builder</title>
        <meta name="description" content="Senior Software Engineer with 14+ years experience at Nike, British Airways, Booking.com. Built Authentic Timer while recovering from blindness. Based in Bangkok, Thailand." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl sm:text-2xl font-bold text-sage-700 tracking-wider">LFRC.me</div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#projects" className="text-neutral-600 hover:text-neutral-900 transition-colors">Featured Work</a>
                <a href="#experience" className="text-neutral-600 hover:text-neutral-900 transition-colors">Experience</a>
                <a href="#about" className="text-neutral-600 hover:text-neutral-900 transition-colors">About</a>
                <a href="#contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a>
              </div>
              
              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-4">
                <a href="#projects" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">Work</a>
                <a href="#contact" className="text-sage-600 hover:text-sage-700 transition-colors text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-sage-50/10 to-sage-50/20">
          <div className="max-w-7xl mx-auto w-full px-6 py-20">
            
            {/* Mobile: Clean & Professional */}
            <div className="lg:hidden text-center space-y-10">
              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg bg-neutral-100">
                  <img 
                    src="/images/me.jpg" 
                    alt="Luis Fernando Romero Calero"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>

              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl font-light text-neutral-900 leading-tight">
                  Luis Fernando
                  <br />
                  <span className="font-serif italic text-sage-800">Romero Calero</span>
                </h1>
                <p className="text-xl text-sage-600 font-light">(Luis is fine)</p>
                
                {/* Signature - Mobile */}
                <div className="flex justify-center py-3">
                  <img 
                    src="/favicon.png" 
                    alt="Luis Fernando Signature"
                    className="h-20 opacity-50 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                
                <p className="text-2xl text-neutral-800 font-medium">
                  Senior Software Engineer & Product Builder
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center"
              >
                <div className="flex items-center text-neutral-600">
                  <MapPin className="w-5 h-5 mr-2 text-sage-600" />
                  <span className="text-base font-medium">Bangkok, Thailand</span>
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-3 px-6"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-all duration-300 font-medium shadow-lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
                <a 
                  href="/resume_Luis_Romero.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-all duration-300 font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </motion.div>
            </div>

            {/* Desktop: Sophisticated Split */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left: Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-6xl xl:text-7xl font-light text-neutral-900 leading-none">
                    Luis Fernando
                    <br />
                    <span className="font-serif italic text-sage-800">Romero Calero</span>
                  </h1>
                  
                  <div className="space-y-4">
                    <p className="text-3xl text-sage-600 font-light">(Luis is fine)</p>
                    
                    {/* Signature - Desktop */}
                    <div className="py-3">
                      <img 
                        src="/favicon.png" 
                        alt="Luis Fernando Signature"
                        className="h-24 opacity-50 hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                    
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                      Senior Software Engineer & Product Builder
                    </p>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="bg-sage-50 rounded-2xl p-6 border-l-4 border-sage-600">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Born in Sevilla, Spain, and now calling Thailand my new home. I love building products that blend technical and creative challenges – from enterprise solutions to personal projects like Authentic Timer.
                  </p>
                </div>

                {/* Contact & Location */}
                <div className="flex flex-wrap gap-8 text-neutral-600">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-sage-600" />
                    <span className="font-medium">Bangkok, Thailand</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-sage-600" />
                    <span className="font-medium">luisfer.romero.calero@gmail.com</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white rounded-xl hover:bg-sage-700 transition-all duration-300 text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </a>
                  <a 
                    href="/resume_Luis_Romero.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-xl hover:bg-sage-600 hover:text-white transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </div>
              </motion.div>

              {/* Right: Professional Image */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/me.jpg" 
                    alt="Luis Fernando Romero Calero"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <section className="py-16 px-6 bg-gradient-to-b from-sage-50/20 via-sage-50/30 to-sage-50/40">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Some Companies I helped</h2>
              <p className="text-neutral-600 text-lg">Trusted by organizations across diverse industries</p>
              
              {/* Mobile: Logos only, bigger */}
              <div className="md:hidden grid grid-cols-3 gap-8 items-center justify-center mb-8">
                {companies.slice(0, 6).map((company, index) => (
                  <div key={index} className="text-center opacity-100 hover:opacity-90 transition-opacity">
                    <div className="h-16 flex items-center justify-center">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="h-12 w-auto max-w-20 object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop: Logos with text in two rows */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center max-w-4xl mx-auto">
                {companies.map((company, index) => (
                  <div key={index} className="text-center opacity-100 hover:opacity-90 transition-opacity p-6">
                      <div className="h-24 flex items-center justify-center mb-4">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="h-16 w-auto max-w-32 object-contain hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm text-neutral-600 text-center leading-tight font-medium">{company.role}</p>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Project - Authentic Timer */}
        <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-sage-50/40 via-sage-100/30 to-sage-50/50">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Work</h2>
              <p className="text-neutral-600 text-lg">Building tools that help people focus on what matters</p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div {...fadeIn}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-square md:aspect-[4/5] lg:aspect-square">
                    <img 
                      src="/images/authentic-timer-screenshot.jpg" 
                      alt="Authentic Timer - Focus timer app screenshot"
                      className="w-full h-full object-contain bg-neutral-50"
                    />
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif mb-3">Authentic Timer</h3>
                    <p className="text-sage-700 text-lg">Focus timer for gentle productivity</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div {...fadeIn} className="order-first lg:order-last">
                <div className="space-y-6 md:space-y-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm md:text-base font-medium">
                    <Timer className="w-4 h-4 mr-2" />
                    Live Product
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light">Built with intention and purpose</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg md:text-xl">
                    A focus timer app designed for gentle productivity. Created with mindful attention to user experience. 
                    Now helping people worldwide focus without the pressure of traditional productivity tools.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-neutral-500">
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                      React, Next.js, Supabase, TypeScript
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                      Hundreds of active users, zero marketing budget
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start pt-6">
                    <a 
                      href="https://authentictimer.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Try Live App
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Projects */}
            <motion.div 
              {...fadeIn}
              className="mt-12 md:mt-16"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-sage-50 to-sage-100 rounded-2xl p-8 flex items-center justify-center shadow-lg">
                      <img 
                        src="/images/logo-rosemaryjs.png" 
                        alt="Rosemary.js logo"
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-semibold mb-4 text-neutral-900">Rosemary.js</h3>
                    <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
                      Open-source JavaScript library published on npm. Simplifying complex development workflows with elegant solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <a 
                        href="https://www.npmjs.com/package/rosemary-js" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View on npm
                      </a>
                      <a 
                        href="https://github.com/luisfer/rosemary-js" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-sage-50/50 via-white to-sage-50/30">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Professional Experience</h2>
              <p className="text-neutral-600 text-lg">14+ years of technical leadership across major corporations</p>
            </motion.div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-6 mb-6">
                    {/* Logo Column */}
                    <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-neutral-50 rounded-xl p-4 flex items-center justify-center shadow-sm">
                        <img 
                          src={getCompanyLogo(job.company)} 
                          alt={`${job.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{job.role}</h3>
                      <div className="text-sage-600 mb-3">
                        <span className="font-medium text-lg">{job.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-neutral-500 text-sm gap-2 sm:gap-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-neutral-600">
                            <ArrowRight className="w-3 h-3 mr-2 mt-0.5 text-sage-600 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              {...fadeIn}
              className="text-center mt-12"
            >
              <a 
                href="/resume_Luis_Romero.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Download Full Resume
              </a>
            </motion.div>
          </div>
        </section>



        {/* Multi-faceted Talents */}
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-sage-50/30 via-sage-100/20 to-sage-50/40">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4">Beyond Code</h2>
            </motion.div>

            {/* Section Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-sage-600 text-white'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <section.icon className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">{section.label}</span>
                    <span className="sm:hidden text-xs">{section.label.slice(0, 3)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Section Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              {activeSection === 'software' && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <Code className="w-6 h-6 text-sage-600 mr-3" />
                    <h3 className="text-2xl font-light">Software Engineering</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    With 14+ years of experience, I've worked across diverse industries from aviation to fintech. 
                    My expertise spans technical leadership, solution architecture, and full-stack development. 
                    I specialize in modernizing legacy systems and building scalable applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-medium mb-3">Core Technologies</h4>
                      <div className="space-y-2">
                        <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">React / Next.js</span>
                        <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">Vue.js</span>
                        <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">TypeScript</span>
                        <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">Node.js</span>
                        <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">Python</span>
                        <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">AWS</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Industries</h4>
                      <div className="space-y-2 text-sm text-neutral-600">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Aviation (British Airways)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          E-commerce (Booking.com)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Supply Chain (Nike)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Healthcare/Pharma (Roche, Burnet Institute, Doctorly)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Fintech (ClearBank)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          SaaS (HeavenHR)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Telecom (Verizon)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Communications/Media (Prime Research, Cision, Nowtilus)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'music' && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <Music className="w-6 h-6 text-sage-600 mr-3" />
                    <h3 className="text-2xl font-light">Music</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    My solo project Lolo Tof explores themes of identity, transformation, and the human experience. 
                    Music serves as a creative outlet that complements my technical work, offering a different form of expression.
                  </p>
                  
                  {/* Album Covers */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-lg p-4 border border-neutral-200">
                      <img 
                        src="/images/lolo-tof-album1.jpg" 
                        alt="Lolo Tof Album Cover"
                        className="w-full aspect-square object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-medium text-sm">Latest Album</h4>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-neutral-200">
                      <img 
                        src="/images/lolo-tof-album2.jpg" 
                        alt="Lolo Tof EP Cover"
                        className="w-full aspect-square object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-medium text-sm">Latest EP</h4>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-medium mb-3">Streaming Platforms</h4>
                      <div className="space-y-3">
                        <a href="https://open.spotify.com/artist/5a1Znw6zmERLIGWEa9C21z?si=Qxwd7f1KSgaQa3-M9uN6Ww" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-green-600 transition-colors">
                          <SpotifyIcon />
                          <span className="ml-2">Spotify</span>
                        </a>
                        <a href="https://music.apple.com/us/artist/lolo-tof/1460309352" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-red-500 transition-colors">
                          <AppleMusicIcon />
                          <span className="ml-2">Apple Music</span>
                        </a>
                        <a href="https://lolotof.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-blue-600 transition-colors">
                          <BandcampIcon />
                          <span className="ml-2">Bandcamp</span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-sage-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Lolo Tof</h4>
                      <p className="text-sm text-neutral-600">Solo project exploring identity and transformation through music</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'writer' && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <BookOpen className="w-6 h-6 text-sage-600 mr-3" />
                    <h3 className="text-2xl font-light">Writer</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Published author of 'Integridad' (2012) and multiple award-winning short stories. 
                    My writing has been featured in digital magazines and I've contributed to radio programs 
                    discussing cinema and literature.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-medium mb-3">Published Works</h4>
                      <div className="space-y-3">
                        <a href="https://www.amazon.com/Integridad-Spanish-Luisfer-Romero-Calero-ebook/dp/B00DPW68A6" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          'Integridad' on Amazon
                        </a>
                        <a href="https://drive.google.com/file/d/1sFEAeuqY1Jp8Ewtux_T7ZU3LsACJy2tx/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          'Lisella' (2010)
                        </a>
                        <a href="https://drive.google.com/file/d/1uDmItqZJj6x-M59eLRx0M4ecoIGndeyT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          'Soul' (2009, award-winning)
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Media Contributions</h4>
                      <div className="space-y-2 text-sm text-neutral-600">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Radio Cope & Radio Lucena
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Digital magazines (cinema & books)
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                          Local & national writing awards
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-sage-50/40 via-sage-100/25 to-sage-50/60">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-light mb-6">Let's Connect</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Currently available for freelance projects and interesting opportunities. 
                Let's build something meaningful together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6">
                <a 
                  href="mailto:luisfer.romero.calero@gmail.com" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white rounded-xl hover:bg-sage-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                <a 
                  href="https://linkedin.com/in/luisfer-romero-calero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-xl hover:bg-sage-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-sage-100/50 bg-gradient-to-t from-sage-100/40 via-sage-50/60 to-sage-50/60">
          <div className="max-w-4xl mx-auto">
            
            {/* Signature */}
            <div className="flex justify-center mb-8">
              <img 
                src="/favicon.png" 
                alt="Luis Fernando Romero Calero signature"
                className="h-12 opacity-50 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://linkedin.com/in/luisfer-romero-calero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-neutral-600 hover:text-sage-600" />
              </a>
              <a 
                href="https://github.com/luisfer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-neutral-600 hover:text-sage-600" />
              </a>
              <a 
                href="https://lolotof.bandcamp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                aria-label="Music"
              >
                <Music className="w-5 h-5 text-neutral-600 hover:text-sage-600" />
              </a>
            </div>
            
            {/* Footer Text */}
            <div className="text-center space-y-2">
              <p className="text-neutral-600 text-sm">
                Building software that matters from Bangkok, Thailand
              </p>
              <p className="text-neutral-400 text-xs">
                © 2025 Luis Fernando Romero Calero
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 