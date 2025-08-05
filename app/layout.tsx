
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Inter } from "next/font/google";
import "./globals.css";
import LiveChat from '../components/LiveChat';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BusinessIlver - Premium Mücevher Koleksiyonu',
  description: 'En kaliteli altın, gümüş ve pırlanta mücevherler. Yüzük, kolye, küpe, bilezik çeşitleri ile özel anlarınızı değerli kılın.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Social Media Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-2 px-4 text-center text-sm">
          <div className="flex items-center justify-center gap-6">
            <span className="hidden md:block">📱 Bizi Takip Edin:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/businesilver"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <i className="ri-instagram-line"></i>
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@businessilver"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <i className="ri-tiktok-line"></i>
                <span className="hidden sm:inline">TikTok</span>
              </a>
              <a
                href="https://www.shopier.com/38200385"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <i className="ri-store-line"></i>
                <span className="hidden sm:inline">Shopier</span>
              </a>
            </div>
          </div>
        </div>

        {children}
        <LiveChat />
      </body>
    </html>
  );
}
