import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google"; // Syne for new premium font
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vishesh Nagar | Creative Developer",
  description: "Portfolio of Vishesh Nagar, a Creative Developer specializing in interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Script id="chatling-config" strategy="beforeInteractive">
            {`window.chtlConfig = { chatbotId: "5793738364" }`}
          </Script>
          <Script
            async
            data-id="5793738364"
            id="chtl-script"
            src="https://chatling.ai/js/embed.js"
            strategy="lazyOnload"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
