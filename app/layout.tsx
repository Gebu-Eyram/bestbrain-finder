import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavDemo } from "@/components/ui/custom-components/aceternity/Navbar";

export const metadata: Metadata = {
  title: "BestBrain - Schools Finder",
  description: "A map of schools around you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavDemo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
