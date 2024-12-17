import type { Metadata } from "next";

import { Sora } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "BestBrain - Schools Finder",
  description: "A map of schools around you!",
};
const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} `}>
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
