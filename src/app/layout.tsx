import { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';

export const metadata: Metadata = {
  title: 'TeachSnap 教随拍',
  description: '乡村教师的离线 AI 工作台',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#3b82f6',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 p-4">
            {children}
          </main>
          <TabBar />
        </div>
      </body>
    </html>
  );
}