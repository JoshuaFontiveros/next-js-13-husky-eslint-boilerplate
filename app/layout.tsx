import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "@/providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Torchbearers Philippines",
  description:
    "Our mission is to proclaim the transforming presence of Jesus Christ through biblical teaching and practical training, equipping men and women for service in His church worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeSwitcher />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
