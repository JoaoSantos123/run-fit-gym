// app/layout.tsx
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import IdentityHashRedirect from "@/components/IdentityHashRedirect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-brand-black text-white antialiased`}
      >
        {/* IMPORTANT: handles Netlify Identity recovery/invite hash redirects */}
        <IdentityHashRedirect />

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
