# LFRC Portfolio - Luis Fernando Romero Calero

A beautiful, minimal portfolio website showcasing your multifaceted talents as a software engineer, musician, writer, and world traveler.

## ✨ Features

- **Clean, minimal design** with subtle animations
- **Responsive** mobile-first approach
- **Interactive sections** for Software, Music, Writing, and Travels
- **Featured project showcase** for Authentic Timer
- **Company logos** section (Nike, British Airways, etc.)
- **Smooth scroll navigation**
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## 🎨 Design Philosophy

- **Lush & Minimal**: Clean white backgrounds with sage green accents
- **Beautiful Typography**: Inter, DM Serif Display, and JetBrains Mono fonts
- **Subtle Animations**: Smooth transitions that don't distract
- **Professional Feel**: Showcases your corporate experience elegantly

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Visit `http://localhost:3000`

## 📁 Project Structure

```
lfrc-portfolio/
├── pages/
│   ├── _app.tsx         # App wrapper
│   └── index.tsx        # Main portfolio page
├── styles/
│   └── globals.css      # Global styles with Tailwind
├── public/              # Static assets (add your photos here)
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🖼️ Adding Your Photos

1. Create a `public/` folder in the root
2. Add your photos:
   - `public/hero-photo.jpg` - Your main photo
   - `public/authentic-timer-screenshot.png` - Authentic Timer screenshot
   - `public/logos/` - Company logos (Nike, BA, etc.)

## 🎯 Customization

### Colors
The sage green color palette is defined in `tailwind.config.js`. You can adjust:
- `sage-50` to `sage-900` for different shades
- Primary buttons use `sage-600`
- Hover states use `sage-700`

### Content
All content is in `pages/index.tsx`. Update:
- Hero section text
- Company names and links
- Project descriptions
- Contact information

### Fonts
Currently using:
- **Inter** for body text
- **DM Serif Display** for headings
- **JetBrains Mono** for code

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add custom domain `lfrc.me`
4. Deploy!

### Manual Steps
1. Build the project: `npm run build`
2. Export static files: `npm run export`
3. Upload to your hosting provider

## 🔧 Domain Setup

1. In Vercel dashboard, add `lfrc.me` as custom domain
2. Copy DNS records provided by Vercel
3. Add records to Namecheap DNS settings
4. Wait for propagation (5-60 minutes)

## 📝 Content Updates

To update your content:
1. Edit `pages/index.tsx`
2. Update company logos in the `companies` array
3. Add new projects in the Featured Work section
4. Update links to your social media and projects

## 🎭 Your Story

The portfolio beautifully tells your story:
- **Hero**: "Built Authentic Timer while recovering from blindness"
- **Experience**: Nike, British Airways, 13+ years
- **Multifaceted**: Software, Music, Writing, Travels
- **Current**: Bangkok-based, available for projects

## 🚀 Next Steps

1. Add your actual photos to `/public/`
2. Update company logos with real SVGs
3. Add actual links to your projects
4. Test on mobile devices
5. Deploy to Vercel
6. Connect `lfrc.me` domain

This portfolio showcases your incredible journey and diverse talents in a professional, beautiful way that potential clients and employers will remember.

---

**Built with ❤️ in Bangkok** 