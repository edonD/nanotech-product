import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veridion Microsystems — RAPIDE Chip Platform",
  description:
    "Rapid antibiotic susceptibility testing at the point of care. Know resistance in minutes, not days. MEMS microfluidic chip technology saving lives by enabling targeted treatment within 60 minutes.",
  keywords: [
    "antibiotic resistance",
    "rapid AST",
    "MEMS",
    "microfluidics",
    "point of care diagnostics",
    "antimicrobial resistance",
    "sepsis",
    "biosensor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="particle-bg" />
        <div className="grid-pattern fixed inset-0 pointer-events-none z-0" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
