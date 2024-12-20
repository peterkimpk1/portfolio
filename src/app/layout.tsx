import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";
import {Poppins} from 'next/font/google'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col antialiased')}>
          <main className={poppins.className}>
            <Header/>
            {children}
          </main>

      </body>
    </html>
  );
}
