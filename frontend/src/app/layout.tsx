'use client';

import type { Metadata } from 'next';

import CrmFooter from '@/components/footer/CrmFooter';
import CrmNavbar from '@/components/navbar/CrmNavbar';

import AuthContextProvider from '@/context/AuthContext';
import ThemeRegistry from '@/themes/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Portal Boletos',
  description: 'Portal para geração de segunda via dos boletos'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <ThemeRegistry>
        <AuthContextProvider>
          <body>
            <CrmNavbar />
            <main>{children}</main>
            <CrmFooter />
          </body>
        </AuthContextProvider>
      </ThemeRegistry>
    </html>
  );
}
