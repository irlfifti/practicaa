import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'INOVAC - Сервисный центр в Волгограде',
    description: 'Профессиональный ремонт бытовой техники в Волгограде. Бесплатный выезд мастера, диагностика и гарантия.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}