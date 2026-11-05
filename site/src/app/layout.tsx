import type { Metadata } from "next";
import { Nav } from "@/components/nav/Nav";
import { RiseObserver } from "@/components/motion/RiseObserver";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spadafy: Your first and last VDI partner",
  description:
    "VDI and End User Computing partner. Managed services, infrastructure, healthcare SSO, IGEL, Nerdio and a free VDI Health Check.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/ReviewCondensed-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AeonikPro-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Rise only hides content once JS is known to be running. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        {children}
        <RiseObserver />
      </body>
    </html>
  );
}
