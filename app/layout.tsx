import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "sonner";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artistly - Book Performing Artists for Every Occasion",
  description:
    "Discover, shortlist, and book top talent for your next event. Connect with professional artists and their managers seamlessly on Artistly.",
  keywords: [
    "artists",
    "performers",
    "event planning",
    "booking",
    "entertainment",
  ],
  authors: [{ name: "Artistly Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            richColors
            expand={true}
            closeButton={false}
            duration={4000}
            visibleToasts={3}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
