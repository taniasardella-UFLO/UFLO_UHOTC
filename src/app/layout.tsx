import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'UFLO - OTC 2026: Vaca Muerta',
  description: 'Universidad de Flores presenta el análisis académico del Offshore Technology Conference 2026 sobre Vaca Muerta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Using 'dark' mode by default to match the Vercel-like requested aesthetics
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} dark`} style={{colorScheme: 'dark'}}>
      <body className={`${montserrat.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
