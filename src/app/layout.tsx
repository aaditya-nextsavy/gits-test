import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "./globals.css";


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Global IT Success",
  description: "Global IT Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
      </body>
    </html>
  );
} 
