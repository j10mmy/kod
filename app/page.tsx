
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Social Media Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">📱 Bizi Sosyal Medyada Takip Edin!</span>
              <div className="flex items-center space-x-3">
                <Link href="https://www.instagram.com/businesilver" target="_blank" className="w-6 h-6 flex items-center justify-center text-white hover:text-pink-200 transition-colors cursor-pointer">
                  <i className="ri-instagram-line text-lg"></i>
                </Link>
                <Link href="https://www.tiktok.com/@businessilver" target="_blank" className="w-6 h-6 flex items-center justify-center text-white hover:text-gray-200 transition-colors cursor-pointer">
                  <i className="ri-tiktok-line text-lg"></i>
                </Link>
                <Link href="https://www.shopier.com/38200385" target="_blank" className="w-6 h-6 flex items-center justify-center text-white hover:text-green-200 transition-colors cursor-pointer">
                  <i className="ri-shopping-bag-line text-lg"></i>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center text-sm">
              <i className="ri-gift-line mr-2"></i>
              <span>Özel kampanyalar ve yeni koleksiyonlar için bizi takip edin!</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://readdy.ai/api/search-image?query=luxury%20elegant%20jewelry%20diamond%20ring%20necklace%20on%20white%20marble%20surface%20with%20soft%20natural%20lighting%2C%20minimalist%20clean%20background%2C%20professional%20product%20photography%2C%20high-end%20precious%20metals%20and%20gemstones%20display&width=1920&height=1080&seq=hero-jewelry&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="w-full max-w-2xl text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Zarafet ve
              <br />
              <span className="font-[\'Pacifico\'] text-yellow-300">Şıklığın</span>
              <br />
              Buluşma Noktası
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              25 yıllık deneyimizle en özel mücevherleri sizlerle buluşturuyoruz. 
              Her parça özenle seçilmiş ve el işçiliği ile hazırlanmıştır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/koleksiyonlar"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                Koleksiyonları Keşfet
              </Link>
              <Link 
                href="/hakkimizda"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                Hikayemizi Öğren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Kategori\u200blerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Her zevke ve tarza uygun özenle seçilmiş mücevher koleksiyonlarımızı keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Rings */}
            <Link href="/yuzukler" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src="https://readdy.ai/api/search-image?query=elegant%20diamond%20engagement%20ring%20with%20precious%20stones%20on%20white%20marble%20surface%2C%20luxury%20jewelry%20photography%2C%20clean%20minimalist%20background%2C%20professional%20studio%20lighting%2C%20high-end%20wedding%20ring%20collection&width=400&height=400&seq=rings-category&orientation=squarish"
                  alt="Yüzükler"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Yüzükler</h3>
                    <p className="text-gray-200">Nişan, alyans ve özel tasarım yüzükler</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Necklaces */}
            <Link href="/kolye" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src="https://readdy.ai/api/search-image?query=luxury%20diamond%20necklace%20with%20pendant%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20gemstones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20jewelry%20collection&width=400&height=400&seq=necklace-category&orientation=squarish"
                  alt="Kolyeler"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Kolyeler</h3>
                    <p className="text-gray-200">Zarif ve şık kolye koleksiyonları</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Earrings */}
            <Link href="/kupe" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src="https://readdy.ai/api/search-image?query=elegant%20diamond%20earrings%20pair%20on%20white%20marble%20surface%2C%20luxury%20jewelry%20studs%20and%20drop%20earrings%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background%2C%20precious%20gemstone%20earring%20collection&width=400&height=400&seq=earrings-category&orientation=squarish"
                  alt="Küpeler"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Küpeler</h3>
                    <p className="text-gray-200">Sade ve gösterişli küpe modelleri</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Bracelets */}
            <Link href="/bilezik" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img 
                  src="https://readdy.ai/api/search-image?query=luxury%20diamond%20tennis%20bracelet%20on%20white%20marble%20surface%2C%20elegant%20jewelry%20chain%20bracelet%20with%20precious%20stones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20bracelet%20collection&width=400&height=400&seq=bracelet-category&orientation=squarish"
                  alt="Bilezikler"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Bilezikler</h3>
                    <p className="text-gray-200">Çelik ve altın bilezik çeşitleri</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Showcase */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              📱 Sosyal Medyada <span className="font-[\'Pacifico\'] text-pink-500">BusinessIlver</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Instagram ve TikTok'ta bizi takip edin! Yeni koleksiyonlar, özel kampanyalar ve mücevher bakım ipuçları için. Ayrıca Shopier mağazamızdan alışveriş yapabilirsiniz.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Link href="https://www.instagram.com/businesilver" target="_blank" className="group">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:shadow-lg transition-all cursor-pointer group-hover:scale-105">
                  <i className="ri-instagram-line text-2xl"></i>
                  <div className="text-left">
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm opacity-90">@businesilver</div>
                  </div>
                </div>
              </Link>
              
              <Link href="https://www.tiktok.com/@businessilver" target="_blank" className="group">
                <div className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:shadow-lg transition-all cursor-pointer group-hover:scale-105">
                  <i className="ri-tiktok-line text-2xl"></i>
                  <div className="text-left">
                    <div className="font-semibold">TikTok</div>
                    <div className="text-sm opacity-90">@businessilver</div>
                  </div>
                </div>
              </Link>
              
              <Link href="https://www.shopier.com/38200385" target="_blank" className="group">
                <div className="bg-green-600 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:shadow-lg transition-all cursor-pointer group-hover:scale-105">
                  <i className="ri-shopping-bag-line text-2xl"></i>
                  <div className="text-left">
                    <div className="font-semibold">Shopier Mağaza</div>
                    <div className="text-sm opacity-90">Hemen Alışveriş Yap</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=luxury%20jewelry%20social%20media%20post%20elegant%20diamond%20ring%20necklace%20instagram%20style%20photography%2C%20modern%20social%20media%20content%20for%20jewelry%20brand%2C%20clean%20aesthetic%20background&width=300&height=300&seq=social-${i}&orientation=squarish`}
                    alt={`Social Media ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Öne Çıkan Ürünler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              En çok beğenilen ve satın alınan özel tasarım mücevherlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6">
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=elegant%20solitaire%20diamond%20ring%20with%20platinum%20band%20on%20white%20display%2C%20luxury%20engagement%20ring%20with%20brilliant%20cut%20diamond%2C%20professional%20jewelry%20photography%2C%20clean%20white%20background%2C%20high-end%20bridal%20jewelry&width=400&height=400&seq=product-1&orientation=squarish"
                  alt="Pırlanta Yüzük"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solitaire Pırlanta Yüzük</h3>
              <p className="text-gray-600 mb-4">0.75 Karat, VS1 Saflık</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">₺45.900</span>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                  Sepete Ekle
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6">
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=luxury%20gold%20tennis%20necklace%20with%20diamonds%20on%20white%20marble%2C%20elegant%20jewelry%20chain%20with%20precious%20stones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20necklace%20collection&width=400&height=400&seq=product-2&orientation=squarish"
                  alt="Altın Kolye"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Altın Tennis Kolye</h3>
              <p className="text-gray-600 mb-4">18 Ayar, 2.5 Gram</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">₺12.750</span>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                  Sepete Ekle
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6">
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=elegant%20diamond%20stud%20earrings%20pair%20on%20white%20jewelry%20display%2C%20luxury%20precious%20stone%20earrings%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20earring%20collection&width=400&height=400&seq=product-3&orientation=squarish"
                  alt="Pırlanta Küpe"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pırlanta Tektaş Küpe</h3>
              <p className="text-gray-600 mb-4">0.50 Karat, VVS2 Saflık</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">₺28.400</span>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/koleksiyonlar"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              Tüm Ürünleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Güvenli Alışveriş</h3>
              <p className="text-gray-600 leading-relaxed">
                SSL sertifikası ile güvenli ödeme ve kişisel bilgilerinizin korunması
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hızlı Kargo</h3>
              <p className="text-gray-600 leading-relaxed">
                24 saat içinde kargoya teslim, Türkiye geneli ücretsiz kargo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-refresh-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-semibent text-gray-900 mb-4">Kolay İade</h3>
              <p className="text-gray-600 leading-relaxed">
                15 gün içinde ücretsiz iade ve değişim hakkı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Kampanyalardan Haberdar Olun</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Yeni koleksiyonlar ve özel indirimlerden ilk siz haberdar olun
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm"
            />
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
              Abone Ol
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
