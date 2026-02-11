import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Global IT Success",
    template: "%s | Global IT Success",
  },
  description: "Buy official exam vouchers at best prices.",

  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/assets/site.webmanifest",
};


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});



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
