
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-['Pacifico'] text-2xl text-gray-900 font-semibold">
              BusinessIlver
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              25 yıllık deneyimimizle en kaliteli mücevherleri sizlerle buluşturuyoruz. 
              Her parça özenle seçilmiş ve el işçiliği ile hazırlanmıştır.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <Link href="https://www.instagram.com/businesilver" target="_blank" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </Link>
              <Link href="https://www.tiktok.com/@businessilver" target="_blank" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <i className="ri-tiktok-line text-xl"></i>
              </Link>
              <Link href="https://www.shopier.com/38200385" target="_blank" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <i className="ri-shopping-bag-line text-xl"></i>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Kategoriler</h3>
            <ul className="space-y-3">
              <li><Link href="/koleksiyonlar?category=yuzuk" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Yüzükler</Link></li>
              <li><Link href="/koleksiyonlar?category=kolye" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Kolyeler</Link></li>
              <li><Link href="/koleksiyonlar?category=kupe" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Küpeler</Link></li>
              <li><Link href="/koleksiyonlar?category=bilezik" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Bilezikler</Link></li>
              <li><Link href="/koleksiyonlar" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Tüm Koleksiyonlar</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-3">
              <li><Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">İletişim</Link></li>
              <li><Link href="/profil" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Sipariş Takibi</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">İade & Değişim</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Kargo Bilgileri</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">Sıkça Sorulan Sorular</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-gray-600"></i>
                <a href="tel:02125550123" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">0212 555 0123</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-gray-600"></i>
                <a href="mailto:info@businessilver.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">info@businessilver.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-gray-600 mt-1"></i>
                <span className="text-gray-600 text-sm leading-relaxed">
                  Nişantaşı Mahallesi<br />
                  Teşvikiye Cad. No:123<br />
                  34365 Şişli/İstanbul
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 BusinessIlver. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
                Gizlilik Politikası
              </Link>
              <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
