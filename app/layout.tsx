import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

// This automatically handles our fonts (like downloading a font in Android res/font)
const inter = Inter({ subsets: ["latin"] });

// This handles the SEO text that shows up on Google or when sharing a link
export const metadata: Metadata = {
  title: "JustClimb | Elevate Your Climb",
  description: "The ultimate platform for climbers, coaches, and gyms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-white antialiased`}>
        {/* Our TopAppBar */}
        <NavBar />
        
        {/* The NavHost (where page.tsx renders) */}
        {children}
      </body>
    </html>
  );
}