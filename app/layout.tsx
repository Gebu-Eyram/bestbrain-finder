import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "BestBrain - Schools Finder",
  description: "A map of schools around you!",
};

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
});
const sora = localFont({
  src: "./fonts/Sora.ttf",
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} ${sora.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
