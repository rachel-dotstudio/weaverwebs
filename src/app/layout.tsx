import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/styles.scss';

import CustomHead from '@/components/htmlheadMain';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon2.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <CustomHead />
      <body>{children}</body>
    </html>
  );
}
