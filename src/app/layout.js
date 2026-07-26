import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

// next/font baixa e hospeda as fontes junto com o próprio build — não há
// requisição externa ao Google Fonts em tempo de execução, o que melhora o
// tempo de carregamento e evita layout shift (CLS), ambos fatores de SEO.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-raw',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-raw',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-raw',
});

export const metadata = {
  title: {
    default: 'Gabriel · Portfólio',
    template: '%s · Gabriel',
  },
  description:
    'Portfólio de Gabriel, desenvolvedor front-end — projetos, habilidades e contato.',
  metadataBase: new URL('https://seu-dominio.com'),
  openGraph: {
    title: 'Gabriel · Portfólio',
    description: 'Projetos, habilidades e contato de um desenvolvedor front-end.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
