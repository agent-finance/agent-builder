import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimize font loading with display swap
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Agent Builder Platform",
  description: "Build and manage AI agents for your business needs",
  keywords: ["AI", "agents", "automation", "builder", "platform"],
  authors: [{ name: "Agent Builder Team" }],
  viewport: "width=device-width, initial-scale=1",
};

/**
 * Root layout component for the application
 * @param {{ children: React.ReactNode }} props - Component props
 * @returns {JSX.Element} The rendered layout
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
