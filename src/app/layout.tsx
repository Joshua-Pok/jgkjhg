'use client';

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { SessionProvider } from 'next-auth/react';
import './globals.scss';
import 'shared-styles/dist/css/theme.css';
import { ConfigProvider, theme } from 'antd';
import enUS from 'antd/locale/en_US';
import AuthGuard from './components/AuthGuard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider locale={enUS} theme={{
        algorithm: theme.darkAlgorithm,
      }}>
        <body suppressHydrationWarning={true} data-theme="dark-theme">
          <AntdRegistry>
            <SessionProvider>
              <AuthGuard>{children}</AuthGuard>
            </SessionProvider>
          </AntdRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
