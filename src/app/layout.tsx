import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/nav/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Documentation",
  description: "Modern documentation site with dark mode and theme customization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="layout">
            <Header />
            <div className="main-container">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
