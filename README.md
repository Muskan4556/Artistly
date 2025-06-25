# Artistly - Performing Artist Booking Platform

A modern web platform connecting performing artists with booking managers. Built with Next.js, React, and TypeScript for optimal performance and user experience.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://artistly-sigma-seven.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-15.3+-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0+-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **Multi-page Application**: Homepage, Artist Directory, Onboarding Form, Manager Dashboard
- **High Performance**: Optimized loading with lazy loading and code splitting
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Beautiful components built with ShadCN UI and Tailwind CSS
- **Form Validation**: Robust validation using React Hook Form + Zod
- **Advanced Filtering**: Search and filter artists by multiple criteria
- **Theme Support**: Light/dark mode with smooth transitions
- **Type Safety**: Full TypeScript implementation with strict type checking

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Frontend**: React 19+ (Functional Components)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4+
- **UI Components**: ShadCN UI
- **Forms**: React Hook Form + Zod validation
- **Tables**: TanStack Table
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Themes**: Next Themes
- **Notifications**: Sonner
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- **Node.js**: 18+
- **Package Manager**: npm, yarn, or pnpm
- **Git**: Any recent version

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd artistly
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
artistly/
├── app/                          # Next.js App Router pages
│   ├── artist-onboarding/        # Artist registration form
│   ├── artists/                  # Artist directory and listings
│   ├── dashboard/                # Manager dashboard
│   └── page.tsx                  # Homepage
├── components/                   # Reusable React components
│   ├── artists/                  # Artist-related components
│   ├── dashboard/                # Dashboard components
│   ├── forms/                    # Form components with validation
│   ├── homepage/                 # Landing page components
│   ├── shared/                   # Shared UI components
│   ├── shimmer/                  # Loading shimmer components
│   └── ui/                       # ShadCN UI base components
├── contexts/                     # React context providers
├── data/                         # Mock data and constants
├── lib/                          # Utility functions and configurations
├── types/                        # TypeScript type definitions
└── public/                       # Static assets
```

## 🚀 Build & Deploy

### Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality checks
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **ShadCN** for the beautiful UI component library
- **Vercel** for hosting and deployment platform
- **Tailwind CSS** for the utility-first CSS framework

---

Built with ❤️ by **Muskan** for connecting artists and booking managers through technology.
