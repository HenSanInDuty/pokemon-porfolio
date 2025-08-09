import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - HenInDuty",
  description: "Portfolio of HenInDuty, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden scroll-smooth dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
