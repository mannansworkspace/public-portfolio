import { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Abdul Mannan | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React, and modern web technologies. Explore my projects and professional experience.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Web Development", "Software Engineer", "NextJs", "NodeJs", "ExpressJS", "MongoDB", "TailwindCSS", "PostgreSQL", "TypeScript", "aws", "docker", "ECR", "ECS", "CI/CD", "Github Actions", "Abdul Mannan"],
  authors: [{ name: "Abdul Mannan" }],
  creator: "Abdul Mannan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdul Mannan | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    siteName: "Abdul Mannan's Portfolio"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased ${geistMono.className}`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1f25',
              color: '#fff',
              fontFamily: geistSans.style.fontFamily,
            },
          }}
        />
      </body>
    </html>
  );
}
