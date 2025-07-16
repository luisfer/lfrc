import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Github, Linkedin, Music, BookOpen, Code, Plane, Timer, Building, Calendar, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Download } from 'lucide-react'

// Custom Icons
const SpotifyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const AppleMusicIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.5 4.5c-.3-.3-.7-.5-1.1-.5-.8 0-1.5.2-2.4.5L9 6.8c-.4.1-.7.5-.7.9v9.9c-.6-.4-1.3-.6-2-.6-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V11.9l8-2.3v6.7c-.6-.4-1.3-.6-2-.6-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V5.5c0-.4-.2-.8-.6-1z"/>
  </svg>
)

const BandcampIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 12.102C0 5.42 5.42 0 12.102 0s12.103 5.42 12.103 12.102S18.783 24.205 12.102 24.205 0 18.784 0 12.102zm6.645-5.205 4.014 10.282h2.683l4.014-10.282h-2.683l-2.658 6.79-2.69-6.79H6.644z"/>
  </svg>
)

// Animated Signature Component with left-to-right fade-in
const AnimatedSignature: React.FC<{ className?: string; size?: 'small' | 'medium' | 'large' }> = ({ 
  className = "", 
  size = 'medium' 
}) => {
  const sizeMap = {
    small: { height: 'h-32' },
    medium: { height: 'h-48' },
    large: { height: 'h-48' }
  };
  
  const { height } = sizeMap[size];

  return (
    <motion.div
      className={`${className.includes('text-left') ? 'flex justify-start' : 'flex justify-center'} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden">
        <motion.img 
          src="/favicon.png" 
          alt="Signature"
          className={`${height} opacity-60 hover:opacity-80 transition-opacity duration-300`}
          initial={{ 
            x: 0, 
            opacity: 0 
          }}
          whileInView={{ 
            x: 0, 
            opacity: 0.6 
          }}
          whileHover={{ 
            scale: 1, 
            rotate: 1,
            opacity: 0.8
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

// Authentic Timer Carousel Component
const AuthenticTimerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const images = [
    { src: '/images/at-4.jpg', alt: 'Authentic Timer - Main view' },
    { src: '/images/at-0.png', alt: 'Authentic Timer - Main interface' },
    { src: '/images/at-1.png', alt: 'Authentic Timer - Timer in action' },
    { src: '/images/at-2.png', alt: 'Authentic Timer - Task management' },
    { src: '/images/at-3.png', alt: 'Authentic Timer - Settings view' },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % images.length;
      }
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <motion.div 
        className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl ring-1 ring-sage-200/50 relative"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Main Image Container */}
        <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-sage-50 to-sage-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="absolute inset-0 w-full h-full object-contain p-4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-sage-600 hover:bg-white hover:text-sage-700 transition-all duration-200"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-sage-600 hover:bg-white hover:text-sage-700 transition-all duration-200"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="p-3 bg-white/50 backdrop-blur-sm">
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-sage-500 shadow-md' 
                    : 'border-sage-200/50 hover:border-sage-300'
                }`}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={images[index].src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Floating particles background component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-sage-200/30 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Enhanced scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-400 via-sage-600 to-sage-800 transform-gpu z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('software')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  // Mouse tracking for subtle interactions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 }
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

      <div className="min-h-screen bg-white relative overflow-x-hidden">
        <FloatingParticles />
        <ScrollProgress />
        
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-50 border-b border-neutral-100/50"
        >
          <div className="max-w-full mx-auto px-10 sm:px-6 py-3 sm:py-3">
            <div className="flex items-center justify-between">
              <motion.div 
                className="text-xl sm:text-2xl font-bold text-sage-700 tracking-wider cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                lfrc.me
              </motion.div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['Featured Work', 'Experience', 'About', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-neutral-600 hover:text-neutral-900 transition-all duration-300 relative group"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-600 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>
              
              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-4">
                <motion.a 
                  href="#projects" 
                  className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="text-sage-600 hover:text-sage-700 transition-colors text-sm font-medium px-3 py-1 rounded-full border border-sage-200 hover:bg-sage-50"
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Enhanced gradient background with subtle animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-white via-sage-50/20 to-sage-100/30"
            style={{ y: yTransform, opacity: opacityTransform }}
          />
          
          {/* Subtle animated shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-200/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sage-300/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full px-6 py-20 relative z-10">
            
            {/* Mobile: Clean & Professional */}
            <div className="lg:hidden text-center space-y-10">
              {/* Portrait */}
              <motion.div
                variants={fadeInScale}
                initial="initial"
                animate="animate"
                className="flex justify-center"
              >
                <motion.div 
                  className="w-36 h-36 rounded-full overflow-hidden shadow-2xl bg-neutral-100 ring-4 ring-white/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="/images/me.jpg" 
                    alt="Luis Fernando Romero Calero"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </motion.div>

              {/* Name & Title */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl font-light text-neutral-900 leading-tight relative cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover="hover"
                    initial="rest"
                    variants={{
                      rest: { filter: "blur(0px)" },
                      hover: { 
                        filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
                        transition: { duration: 0.8, times: [0, 0.4, 1] }
                      }
                    }}
                  >
                    <motion.div
                      variants={{
                        rest: { opacity: 1 },
                        hover: { 
                          opacity: 0,
                          transition: { duration: 0.2 }
                        }
                      }}
                    >
                      Luis Fernando
                      <br />
                      <span className="font-serif italic text-sage-800 bg-gradient-to-r from-sage-700 to-sage-900 bg-clip-text text-transparent">
                        Romero Calero
                      </span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-sage-600 text-center"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { 
                          opacity: 1,
                          transition: { delay: 0.4, duration: 0.2 }
                        }
                      }}
                    > You can call me<br/>
                      <span className="font-serif italic text-sage-800 bg-gradient-to-r from-sage-700 to-sage-900 bg-clip-text text-transparent">
                       Luis
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.h1>
                <motion.div 
                  variants={fadeInUp}
                  className="text-xl text-neutral-700 font-medium leading-relaxed"
                >
                  <div>Senior Software Engineer</div>
                  <div>Creative Product Builder</div>
                                        <div>Digital Transformation Specialist</div>
                  <div>Amateur Musician and Writer</div>
                </motion.div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="flex justify-center"
              >
                <motion.div 
                  className="flex items-center text-neutral-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-5 h-5 mr-2 text-sage-600" />
                  <span className="text-base font-medium">Bangkok, Thailand</span>
                </motion.div>
              </motion.div>

              {/* Actions */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4 px-6"
              >
                {/* Main action buttons */}
                <div className="flex flex-col gap-3">
                  <motion.a 
                    variants={fadeInUp}
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-xl hover:from-sage-700 hover:to-sage-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform-gpu"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </motion.a>
                  <motion.a 
                    variants={fadeInUp}
                    href="/resume_Luis_Romero.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-sage-600 text-sage-600 rounded-xl hover:bg-sage-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform-gpu"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </motion.a>
                </div>
                
                {/* Authentic Timer link */}
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-center pt-2"
                >
                  <motion.a 
                    href="https://authentictimer.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center text-neutral-600 hover:text-neutral-900 transition-all duration-300 relative group"
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-base">Check out my latest project -</span>
                    <div className="flex items-center">
                      <motion.div
                        className="mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <svg viewBox="0 0 100 100" className="w-4 h-4">
                          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="6"></circle>
                          <circle cx="50" cy="50" r="8" fill="#fbbf24"></circle>
                          <path d="M 50 15 A 35 35 0 0 1 50 85" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                        </svg>
                      </motion.div>
                      <span className="text-base font-medium">Authentic Timer</span>
                    </div>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-700 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop: Sophisticated Split */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left: Content */}
              <motion.div 
                variants={slideInLeft}
                initial="initial"
                animate="animate"
                className="space-y-10"
              >
                {/* Main Heading */}
                <div className="space-y-6">
                  <motion.h1 
                    className="text-6xl xl:text-7xl font-light text-neutral-900 leading-none relative cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.div
                      className="relative overflow-hidden"
                      whileHover="hover"
                      initial="rest"
                      variants={{
                        rest: { filter: "blur(0px)" },
                        hover: { 
                          filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
                          transition: { duration: 0.8, times: [0, 0.4, 1] }
                        }
                      }}
                    >
                      <motion.div
                        variants={{
                          rest: { opacity: 1 },
                          hover: { 
                            opacity: 1,
                            transition: { duration: 0.2 }
                          }
                        }}
                      >
                        Luis Fernando
                        <br />
                        <motion.span 
                          className="font-serif italic bg-gradient-to-r from-sage-700 via-sage-800 to-sage-900 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.8 }}
                        >
                          Romero Calero
                        </motion.span>
                      </motion.div>
                      
                      <motion.div
                      className="text-3xl"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { 
                            opacity: 1,
                            transition: { delay: 0.4, duration: 0.2 }
                          }
                        }}
                      >
                        (You can call me 
                        <motion.span 
                          className="font-serif italic bg-gradient-to-r from-sage-700 via-sage-800 to-sage-900 bg-clip-text text-transparent"
                        >
                           &nbsp;Luis
                        </motion.span>)
                      </motion.div>
                    </motion.div>
                  </motion.h1>
                  
                  <div className="space-y-4">

                    
                    {/* Signature - Desktop */}
                    <motion.div 
                      className="py-0 flex justify-start"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <AnimatedSignature size="large" className="text-left" />
                    </motion.div>
                    
                  </div>
                </div>

                {/* Professional Summary */}
                <motion.div 
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sage-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="border-l-4 border-sage-600 pl-4">
                    <div className="text-lg text-neutral-700 leading-relaxed font-medium">
                      <div>Senior Software Engineer</div>
                      <div>Creative Product Builder</div>
                      <div>Digital Transformation Specialist</div>
                      <div>Amateur Musician and Writer</div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="space-y-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2 }}
                >
                  {/* Main action buttons */}
                  <div className="flex gap-4">
                    <motion.a 
                      href="#contact" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-xl hover:from-sage-700 hover:to-sage-800 transition-all duration-300 text-lg font-medium shadow-xl hover:shadow-2xl transform-gpu"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get in Touch
                    </motion.a>
                    <motion.a 
                      href="/resume_Luis_Romero.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-sage-600 hover:text-white transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform-gpu"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Resume
                    </motion.a>
                  </div>
                  
                  {/* Authentic Timer link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.3 }}
                  >
                    <motion.a 
                      href="https://authentictimer.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-all duration-300 relative group"
                      whileHover={{ y: -2 }}
                    >
                      <span className="text-lg">Check out my latest project - </span>
                      <motion.div
                        className="mx-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <svg viewBox="0 0 100 100" className="w-5 h-5">
                          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="6"></circle>
                          <circle cx="50" cy="50" r="8" fill="#fbbf24"></circle>
                          <path d="M 50 15 A 35 35 0 0 1 50 85" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                        </svg>
                      </motion.div>
                      <span className="text-lg font-medium">Authentic Timer</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-700 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right: Professional Image */}
              <motion.div 
                variants={slideInRight}
                initial="initial"
                animate="animate"
                className="relative"
              >
                <motion.div 
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="/images/me.jpg" 
                    alt="Luis Fernando Romero Calero"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/10 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-sage-500/20 rounded-full blur-sm"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-sage-400/20 rounded-full blur-sm"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-sage-600/60" />
          </motion.div>
        </section>

        {/* Company Logos */}
        <section className="py-16 px-6 bg-gradient-to-b from-sage-100 via-sage-200 to-sage-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-100/20 to-transparent"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">Some Companies I Helped</h2>
              
              {/* Mobile: Logos only, bigger */}
              <motion.div 
                className="md:hidden grid grid-cols-3 gap-8 items-center justify-center mb-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {companies.slice(0, 6).map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center opacity-100 hover:opacity-90 transition-opacity"
                    variants={fadeInScale}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="h-16 flex items-center justify-center rounded-xl hover:shadow-lg transition-all duration-300">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="h-12 w-auto max-w-20 object-contain filter hover:saturate-110 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Desktop: Logos with text in two rows */}
              <motion.div 
                className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center max-w-4xl mx-auto"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {companies.map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center opacity-100 hover:opacity-90 transition-opacity p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="h-28 w-auto max-w-40 object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:saturate-110"
                      />
                    </div>
                    <p className="text-lg text-neutral-600 text-center leading-tight font-medium">{company.role}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Project - Authentic Timer */}
        <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-sage-50 to-sage-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-sage-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-sage-300/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Work</h2>
              <p className="text-neutral-600 text-lg">Building tools that help people focus on what matters</p>
            </motion.div>
            
            {/* Authentic Timer Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
              
              {/* Image Carousel */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-last lg:order-first"
              >
                <AuthenticTimerCarousel />
              </motion.div>
              
              {/* Story Content */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 md:space-y-8">
                  <motion.div 
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sage-100 to-sage-200 text-sage-700 text-sm md:text-base font-medium shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg viewBox="0 0 100 100" className="w-4 h-4">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#1e3a8a" strokeWidth="3"></circle>
                        <circle cx="50" cy="50" r="8" fill="#fbbf24"></circle>
                        <path d="M 50 15 A 35 35 0 0 1 50 85" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>
                    </motion.div>
                    Live Product
                  </motion.div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#1e3a8a" strokeWidth="3"></circle>
                          <circle cx="50" cy="50" r="8" fill="#fbbf24"></circle>
                          <path d="M 50 15 A 35 35 0 0 1 50 85" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light">
                        <span className="bg-gradient-to-r from-sage-700 to-sage-900 bg-clip-text text-transparent">
                          Authentic Timer
                        </span>
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-sage-600 font-medium">
                      A clean timer with no fluff—born from personal necessity
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-neutral-600 leading-relaxed">
                    <p>
                      <span className="text-neutral-800 font-medium">November 2024:</span> While managing a sickness that limited my daily quality of life, I needed to manage my time carefully in the few hours I could focus. I searched for a clean, uncluttered timer that felt safe—but kept jumping between apps instead of having one productivity hub.
                    </p>
                    <p>
                      That's when I conceived an <span className="italic text-sage-700">"authentic timer"</span>—helping me prepare focused sessions of 25, 30, 45, or 50 minutes to tackle books, emails, paperwork, with everything listed and timeboxed.
                    </p>
                    <p>
                      <span className="text-neutral-800 font-medium">8 months later:</span> After collecting feedback and studying productivity, the nervous system, and ADHD, it became something I was proud to share with the world.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center text-sm text-neutral-500 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                      React, Next.js, Supabase, TypeScript
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-neutral-500 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                      Hundreds of active users, zero marketing budget
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-neutral-500 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                      Inspired by Atomic Habits & Four Thousand Weeks
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start pt-6">
                    <motion.a 
                      href="https://authentictimer.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:from-sage-700 hover:to-sage-800 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform-gpu"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Try Live App
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Projects */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 md:mt-16"
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-sage-200/50 shadow-sm hover:shadow-xl transition-all duration-500 ring-1 ring-sage-100/50"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.img 
                    src="/images/logo-rosemaryjs.png" 
                    alt="Rosemary.js logo"
                    className="w-48 md:w-72 lg:w-72 object-contain rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-semibold mb-4 text-neutral-900 bg-gradient-to-r from-sage-700 to-sage-900 bg-clip-text text-transparent">
                      Rosemary.js
                    </h3>
                    <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
                      Open-source JavaScript library published on npm. Simplifying complex development workflows with elegant solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <motion.a 
                        href="https://www.npmjs.com/package/rosemary-js" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg hover:from-sage-700 hover:to-sage-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform-gpu"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View on npm
                      </motion.a>
                      <motion.a 
                        href="https://github.com/luisfer/rosemary-js" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-sage-600 text-sage-600 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-sage-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform-gpu"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-sage-100 via-white to-sage-200 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-200/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sage-300/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">Professional Experience</h2>
              <p className="text-neutral-600 text-lg">14+ years of technical leadership across major corporations</p>
            </motion.div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 ring-1 ring-sage-100/50"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col lg:flex-row gap-6 mb-6">
                    {/* Logo Column */}
                    <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start">
                      <motion.div 
                        className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 ring-1 ring-sage-200/50"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <img 
                          src={getCompanyLogo(job.company)} 
                          alt={`${job.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{job.role}</h3>
                      <div className="text-sage-600 mb-3">
                        <span className="font-medium text-lg">{job.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-neutral-500 text-sm gap-2 sm:gap-4">
                        <motion.div 
                          className="flex items-center bg-white/60 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{job.period}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center bg-white/60 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-sage-100 to-sage-200 text-sage-700 rounded-full text-sm font-medium hover:from-sage-200 hover:to-sage-300 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex} 
                            className="flex items-start text-sm text-neutral-600 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg"
                            whileHover={{ x: 5 }}
                          >
                            <ArrowRight className="w-3 h-3 mr-2 mt-0.5 text-sage-600 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.a 
                href="/resume_Luis_Romero.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-sage-600 text-sage-600 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-sage-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Resume
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Multi-faceted Talents */}
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-sage-200 via-sage-300/80 to-sage-200 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 right-1/4 w-72 h-72 bg-sage-200/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-light mb-4">Beyond Code</h2>
            </motion.div>

            {/* Section Navigation */}
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex space-x-1 bg-white/70 backdrop-blur-md rounded-lg p-1 shadow-lg ring-1 ring-sage-200/50">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-md'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <section.icon className="w-4 h-4 sm:mr-2" />
                    <span className="hidden sm:inline">{section.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Section Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-sage-200/50"
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
                          {['React / Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
                            <motion.span
                              key={tech}
                              className="inline-block bg-gradient-to-r from-sage-100 to-sage-200 text-sage-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:from-sage-200 hover:to-sage-300 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Industries</h4>
                        <div className="space-y-2 text-sm text-neutral-600">
                          {[
                            'Aviation (British Airways)',
                            'E-commerce (Booking.com)',
                            'Supply Chain (Nike)',
                            'Healthcare/Pharma (Roche, Burnet Institute, Doctorly)',
                            'Fintech (ClearBank)',
                            'SaaS (HeavenHR)',
                            'Telecom (Verizon)',
                            'Communications/Media (Prime Research, Cision, Nowtilus)'
                          ].map((industry, index) => (
                            <motion.div 
                              key={industry}
                              className="flex items-center bg-white/60 px-3 py-2 rounded-lg hover:bg-white/80 transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                              {industry}
                            </motion.div>
                          ))}
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
                    <motion.div 
                      className="grid grid-cols-2 gap-4 mt-8"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      {[
                        { src: "/images/lolo-tof-album1.jpg", title: "Latest Album" },
                        { src: "/images/lolo-tof-album2.jpg", title: "Latest EP" }
                      ].map((album, index) => (
                        <motion.div 
                          key={index}
                          className="bg-white rounded-lg p-4 border border-sage-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
                          variants={fadeInScale}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-sage-100 to-sage-200">
                            <img 
                              src={album.src} 
                              alt="Lolo Tof Album Cover"
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-medium text-sm text-center">{album.title}</h4>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h4 className="font-medium mb-3">Streaming Platforms</h4>
                        <div className="space-y-3">
                          {[
                            { href: "https://open.spotify.com/artist/5a1Znw6zmERLIGWEa9C21z?si=Qxwd7f1KSgaQa3-M9uN6Ww", icon: SpotifyIcon, name: "Spotify", color: "hover:text-green-600" },
                            { href: "https://music.apple.com/us/artist/lolo-tof/1460309352", icon: AppleMusicIcon, name: "Apple Music", color: "hover:text-red-500" },
                            { href: "https://lolotof.bandcamp.com/", icon: BandcampIcon, name: "Bandcamp", color: "hover:text-blue-600" }
                          ].map((platform, index) => (
                            <motion.a 
                              key={platform.name}
                              href={platform.href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={`flex items-center text-neutral-600 ${platform.color} transition-all duration-300 bg-white/60 px-3 py-2 rounded-lg hover:bg-white/80`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5, scale: 1.02 }}
                            >
                              <platform.icon />
                              <span className="ml-2">{platform.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                      <motion.div 
                        className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-lg p-4 ring-1 ring-sage-200/50"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-medium mb-2">Lolo Tof</h4>
                        <p className="text-sm text-neutral-600">Solo project exploring identity and transformation through music</p>
                      </motion.div>
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
                          {[
                            { href: "https://www.amazon.com/Integridad-Spanish-Luisfer-Romero-Calero-ebook/dp/B00DPW68A6", title: "'Integridad' on Amazon" },
                            { href: "https://drive.google.com/file/d/1sFEAeuqY1Jp8Ewtux_T7ZU3LsACJy2tx/view?usp=drive_link", title: "'Lisella' (2010)" },
                            { href: "https://drive.google.com/file/d/1uDmItqZJj6x-M59eLRx0M4ecoIGndeyT/view?usp=drive_link", title: "'Soul' (2009, award-winning)" }
                          ].map((work, index) => (
                            <motion.a 
                              key={work.title}
                              href={work.href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex items-center text-neutral-600 hover:text-neutral-900 transition-all duration-300 bg-white/60 px-3 py-2 rounded-lg hover:bg-white/80"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5, scale: 1.02 }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {work.title}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Media Contributions</h4>
                        <div className="space-y-2 text-sm text-neutral-600">
                          {[
                            'Radio Cope & Radio Lucena',
                            'Digital magazines (cinema & books)',
                            'Local & national writing awards'
                          ].map((contribution, index) => (
                            <motion.div 
                              key={contribution}
                              className="flex items-center bg-white/60 px-3 py-2 rounded-lg hover:bg-white/80 transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
                              {contribution}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-sage-300 via-sage-400/60 to-sage-300 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/3 left-1/3 w-96 h-96 bg-sage-200/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left: Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-end"
              >
                <motion.div 
                  className="relative aspect-[4/5] w-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="/images/me-2.jpg" 
                    alt="Luis Fernando Romero Calero"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/10 via-transparent to-transparent"></div>
                </motion.div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl font-light mb-6">Let's Connect</h2>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Currently available for freelance projects and interesting opportunities. 
                  Let's build something meaningful together.
                </p>
                <motion.div 
                  className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-center lg:justify-start gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.a 
                    variants={fadeInUp}
                    href="mailto:luisfer.romero.calero@gmail.com" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-xl hover:from-sage-700 hover:to-sage-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform-gpu"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </motion.a>
                  <motion.a 
                    variants={fadeInUp}
                    href="https://linkedin.com/in/luisfer-romero-calero" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-sage-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform-gpu"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-sage-100/50 bg-gradient-to-t from-sage-400 via-sage-300 to-sage-400/80 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-sage-200/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Signature */}
            <AnimatedSignature size="small" className="mb-8" />
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { href: "https://linkedin.com/in/luisfer-romero-calero", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/luisfer", icon: Github, label: "GitHub" },
                { href: "https://lolotof.bandcamp.com/", icon: Music, label: "Music" }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-lg transition-all duration-300 transform-gpu group"
                  aria-label={social.label}
                  variants={fadeInScale}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-neutral-600 group-hover:text-sage-600 transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
            
            {/* Footer Text */}
            <motion.div 
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-neutral-800 text-sm">
                Sawadii kráp! Hello from Bangkok, Thailand 🇹🇭
              </p>
              <p className="text-neutral-700 text-xs">
                © 2025 Luis Fernando Romero Calero
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  )
} 