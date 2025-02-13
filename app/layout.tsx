import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import Script from 'next/script';
import ThemeScript from './components/ThemeScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://fakten.hannesreinberger.de/'),
    title: 'Fakten',
    description:
        'Hannes sammelt hier nützliche Links zur Unterstützung seiner Diskussionen',
    openGraph: {
        title: 'Fakten',
        description:
            'Hannes sammelt hier nützliche Links zur Unterstützung seiner Diskussionen',
        url: 'https://fakten.hannesreinberger.de/',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="de"
            suppressHydrationWarning
        >
            <head>
                <ThemeScript />
            </head>
            <body
                className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
            >
                <div className="min-h-screen">{children}</div>
                <Script
                    src="https://plausible.hannesreinberger.de/js/script.js"
                    data-domain="fakten.hannesreinberger.de"
                ></Script>
            </body>
        </html>
    );
}
