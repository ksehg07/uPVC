import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accurate Windoor Solutions (AWS) | Premium Aluminum & uPVC',
  description: 'Premium Aluminum and uPVC solutions. Durable, stylish, and energy-efficient designs for your home and office.',
  keywords: 'Aluminum doors, uPVC windows, glass facade, modern architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 selection:bg-green-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}