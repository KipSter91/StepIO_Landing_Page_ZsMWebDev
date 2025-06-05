# StepIO Landing Page

A modern, responsive landing page for the StepIO fitness tracking Android application, built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, gradient-based UI with smooth animations
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Static generation for fast loading times
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **TypeScript**: Full type safety throughout the application
- **Portfolio Ready**: Professional design perfect for showcasing in portfolios

## 🚀 Live Demo

Visit the live demo: [StepIO Landing Page](#) _(Add your deployment URL here)_

## 📱 About StepIO

StepIO is a React Native fitness tracking application for Android that provides:

- Real-time step counting
- GPS path tracking and visualization
- Daily fitness progress analytics
- Background service for continuous monitoring
- Modern, intuitive user interface

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export ready for GitHub Pages or Vercel
- **Icons**: Heroicons (SVG icons)
- **Fonts**: Inter from Google Fonts

## 🎨 Design Features

- Gradient color scheme with indigo and purple themes
- Smooth scroll navigation between sections
- Animated components with intersection observers
- Mobile-optimized responsive design
- Loading states and interactive elements
- Professional component architecture

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
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run export   # Export static files
```

## 🌐 Deployment

### GitHub Pages

1. Build the static export:

```bash
npm run build
```

2. The `out` directory contains the static files ready for deployment

### Vercel

1. Connect your repository to Vercel
2. Set build command to `npm run build`
3. Deploy automatically

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Hero.tsx         # Hero section with call-to-action
│   ├── Features.tsx     # App features showcase
│   ├── Screenshots.tsx  # App screenshots and demo
│   ├── Download.tsx     # Download section with APK link
│   └── Footer.tsx       # Footer with links and info
```

## 🎯 Customization

### Adding Real Screenshots

Replace the placeholder images in the `Screenshots` component with actual app screenshots:

1. Add your screenshots to the `public` directory
2. Update the `screenshots` array in `src/components/Screenshots.tsx`
3. Replace placeholder URLs with your actual image paths

### Adding APK Download

Update the download functionality in `src/components/Download.tsx`:

1. Host your APK file on a server or GitHub releases
2. Replace the `handleDownload` function with the actual download URL
3. Update the GitHub repository link in `handleSourceCode`

### Customizing Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#your-primary-color',
  secondary: '#your-secondary-color',
  // ... other colors
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions about the StepIO app or this landing page, please open an issue or contact [your-email].

---

**Note**: This landing page is designed to showcase the StepIO fitness app. The actual app may have memory optimization challenges during extended use, making it perfect for learning and development purposes.
