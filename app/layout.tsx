import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'normalize.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Louis Portfolio',
  description: 'Louis Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex flex-col items-center">
          <div className="max-w-screen-xl self-stretch m-auto w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
