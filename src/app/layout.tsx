import type { Metadata } from "next";
import {Oswald} from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Energy",
  description: "Функциональное питание для котов",
};

const oswald = Oswald({
  display: "swap",
  variable: "--font-oswald",
  subsets: ["cyrillic"],
  weight: ['400', '500'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
