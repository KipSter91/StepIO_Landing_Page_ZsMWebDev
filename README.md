# StepIO Landing Page

A modern, responsive landing page for the StepIO fitness tracking Android application, built with Next.js 15, TypeScript, and Tailwind CSS.

> **⚠️ Copyright Notice**: This landing page design, code, and all associated assets are the intellectual property of the author. This project is shared for educational and portfolio purposes. Commercial use, redistribution, or reproduction without explicit permission is prohibited.

## 🌟 Features

- **Modern Design**: Clean, cyber-themed UI with gradient backgrounds and animated blurred shapes
- **Responsive**: Mobile-first design that looks great on all devices (sm/md/lg breakpoints)
- **Performance Optimized**: Next.js App Router with static generation for fast loading times
- **Smooth Animations**: Intersection Observer based animations and smooth transitions
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular design with reusable components
- **Interactive Elements**: Hover effects, download functionality, and smooth scroll navigation
- **Accessibility**: Semantic HTML structure and proper ARIA labels

## 🚀 Live Demo

Visit the live demo: **[StepIO Landing Page](https://stepio.zsoltmarku.com/)**

## 📱 About StepIO

StepIO is an Android fitness tracking application that provides:

- **Real-time step counting** with precision tracking
- **GPS path tracking** and route visualization
- **Daily fitness progress** analytics and insights
- **Background monitoring** for continuous activity tracking
- **Privacy-focused** - all data stays on your device
- **Battery optimized** - minimal battery usage
- **Modern UI** - cyber-themed interface with smooth animations
- **Android 7.0+ compatibility** - works on most modern devices

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: React Icons 5.5.0 (Font Awesome icons)
- **Animations**: Framer Motion 12.16.0

### Development

- **Node.js**: 18+
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **PostCSS**: Autoprefixer integration
- **Build**: Static export ready

## 🎨 Design Features

- **Cyber Theme**: Modern dark theme with gradient accents and glowing effects
- **Animated Backgrounds**: Blurred gradient shapes with custom positioning
- **Responsive Grid**: Mobile-first approach with adaptive layouts
- **Smooth Transitions**: CSS transitions with hover effects and scale transforms
- **Typography**: Custom font combinations (cyber, sans) for hierarchy
- **Interactive Elements**: Download buttons with loading states and hover animations
- **Component Animation**: Intersection Observer for scroll-triggered animations
- **Color System**: Consistent theme colors (primary, secondary, accent, info)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and fonts
│   └── page.tsx             # Main page with component composition
├── components/
│   ├── SplashScreen.tsx     # Loading screen with animations
│   ├── LayoutClient.tsx     # Client-side layout wrapper
│   ├── MainContent.tsx      # Main content wrapper
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Features.tsx         # App features showcase
│   ├── Demo.tsx             # App demo and screenshots
│   ├── Download.tsx         # Download section with APK and instructions
│   └── Footer.tsx           # Footer with links and contact info
├── contexts/
│   └── SplashContext.tsx    # Context for splash screen state
public/
├── images/
│   ├── stepio-logo.webp     # App logo
│   ├── stepio-background.png # Background image
│   └── favicon.png          # Site favicon
├── videos/
│   └── demo-video.mp4       # App demo video
└── downloads/
    └── stepio-1.0.0.apk     # Android APK file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd stepio-landing-page
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production with static export
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## 🌐 Deployment

### GitHub Pages

1. Build the static export:

```bash
npm run build
```

2. The `out` directory contains the static files ready for deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set build command to `npm run build`
3. Deploy automatically with each commit

### Other Platforms

The project exports static files, making it compatible with:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

## 🎯 Customization

### Updating Content

1. **App Information**: Edit text content in individual components
2. **Contact Details**: Update GitHub links and contact information in `Footer.tsx`
3. **Download Links**: Modify APK download URL in `Download.tsx`

### Design Customization

#### Colors & Theme

Modify the color scheme in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
    accent: '#your-accent-color',
    // ... other custom colors
  }
}
```

#### Typography

Update font families in `tailwind.config.ts`:

```typescript
fontFamily: {
  'cyber': ['your-font', 'monospace'],
  'sans': ['your-font', 'sans-serif'],
}
```

### Adding Features

1. **New Sections**: Create components in `src/components/`
2. **Navigation**: Update header navigation in `Header.tsx`
3. **Animations**: Use Intersection Observer pattern from existing components
4. **Icons**: Add React Icons imports as needed

### APK Download Setup

1. Place your APK file in `public/downloads/`
2. Update the download path in `Download.tsx`:

```typescript
const apkUrl = "/downloads/your-app-name.apk";
```

3. Update GitHub repository link:

```typescript
window.open("https://github.com/yourusername/your-repo.git", "_blank");
```

## 📄 License & Copyright

**© 2025 Zsolt Márku (KipSter91). All Rights Reserved.**

This project is protected by copyright law. The design, code, and all associated assets are the intellectual property of the author.

### Usage Terms:

- ✅ **Viewing and Learning**: You may view this code for educational purposes
- ✅ **Portfolio Reference**: You may reference this work in discussions about web development
- ❌ **Commercial Use**: Commercial use without explicit written permission is prohibited
- ❌ **Redistribution**: Copying, redistributing, or republishing this code is not allowed
- ❌ **Derivative Works**: Creating derivative works based on this design is not permitted

### For Permission Requests:

If you would like to use any part of this project for commercial purposes or create derivative works, please contact the author through GitHub.

**Legal Notice**: Unauthorized use, reproduction, or distribution of this software and its associated assets may result in legal action.

## 🤝 Contributing

**Note**: This is a proprietary project. Contributions are not currently accepted as this serves as a personal portfolio piece and commercial work.

If you find bugs or have suggestions, you may:

- Open an issue for discussion
- Contact the author directly through GitHub

However, please note that pull requests will not be accepted without prior arrangement.

## 📞 Contact

- **Developer**: Zsolt Márku
- **GitHub**: [KipSter91](https://github.com/KipSter91)
- **StepIO Android App**: [Repository](https://github.com/KipSter91/StepIO_Android_App_ZsMWebDev.git)

For questions about the StepIO app or this landing page, please open an issue on GitHub.

## 🔗 Related Projects

- [StepIO Android App](https://github.com/KipSter91/StepIO_Android_App_ZsMWebDev.git) - The main Android application

---

**Built with ❤️ for fitness enthusiasts and developers learning modern web technologies.**

**© 2025 Zsolt Márku (KipSter91) - All Rights Reserved | This is proprietary software for portfolio and educational purposes only**
