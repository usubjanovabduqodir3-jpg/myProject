import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: "LingoSphere - Ko'p Tilli Til O'rganish Platformasi",
  description: "20 ta jahon tili, har bir tilda 1,000+ o'quv so'zi, Web Speech API ovozli talaffuz va ovozni tekshirish, alifbo, grammatika, dark rejim va interaktiv testlar.",
  openGraph: {
    title: "LingoSphere - Ko'p Tilli Til O'rganish Platformasi",
    description: "20 ta jahon tili, har bir tilda 1,000+ o'quv so'zi, Web Speech API ovozli talaffuz va ovozni tekshirish, alifbo, grammatika, dark rejim va interaktiv testlar.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LingoSphere - Ko'p Tilli Til O'rganish Platformasi",
    description: "20 ta jahon tili, har bir tilda 1,000+ o'quv so'zi, Web Speech API ovozli talaffuz va ovozni tekshirish, alifbo, grammatika, dark rejim va interaktiv testlar.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
