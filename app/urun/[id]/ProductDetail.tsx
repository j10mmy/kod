
'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('17');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Mock product data
  const product = {
    id: productId,
    name: 'Solitaire Pırlanta Yüzük',
    price: 45900,
    originalPrice: 52000,
    discount: 12,
    rating: 4.8,
    reviews: 24,
    description: 'Klasik solitaire tasarımında, 0.75 karat pırlanta ile hazırlanmış zarif yüzük. VS1 saflık derecesinde pırlanta ve beyaz altın kaplama ile özel günleriniz için mükemmel tercih.',
    features: [
      '0.75 Karat Pırlanta',
      'VS1 Saflık Derecesi',
      'Beyaz Altın Kaplama',
      'El İşçiliği',
      'Sertifikalı Pırlanta',
      '2 Yıl Garanti'
    ],
    images: [
      'https://readdy.ai/api/search-image?query=elegant%20solitaire%20diamond%20engagement%20ring%20with%20platinum%20setting%20on%20white%20marble%20surface%2C%20luxury%20bridal%20jewelry%20photography%2C%20clean%20minimalist%20background%2C%20professional%20studio%20lighting%2C%20high-end%20wedding%20ring&width=600&height=600&seq=product-detail-1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=close-up%20diamond%20ring%20detail%20showing%20brilliant%20cut%20stone%2C%20macro%20jewelry%20photography%2C%20white%20background%2C%20professional%20product%20shot%2C%20engagement%20ring%20close-up&width=600&height=600&seq=product-detail-2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=diamond%20ring%20side%20view%20showing%20band%20details%2C%20jewelry%20photography%20on%20white%20background%2C%20professional%20product%20shot%2C%20ring%20profile%20view&width=600&height=600&seq=product-detail-3&orientation=squarish'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    sizes: ['15', '16', '17', '18', '19', '20'],
    inStock: true,
    category: 'Yüzükler'
  };

  const reviews = [
    {
      id: 1,
      name: 'Ayşe K.',
      rating: 5,
      date: '2024-01-15',
      comment: 'Muhteşem bir yüzük! Kalitesi çok yüksek, tavsiye ederim.',
      verified: true
    },
    {
      id: 2,
      name: 'Mehmet Y.',
      rating: 5,
      date: '2024-01-10',
      comment: 'Eşim çok beğendi, hızlı kargo ve güvenilir satıcı.',
      verified: true
    },
    {
      id: 3,
      name: 'Elif T.',
      rating: 4,
      date: '2024-01-05',
      comment: 'Güzel ürün ama biraz pahalı geldi.',
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Altın Tennis Kolye',
      price: 12750,
      image: 'https://readdy.ai/api/search-image?query=luxury%20gold%20tennis%20necklace%20with%20diamonds%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20gemstones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background&width=300&height=300&seq=related-1&orientation=squarish'
    },
    {
      id: 3,
      name: 'Pırlanta Tektaş Küpe',
      price: 28400,
      image: 'https://readdy.ai/api/search-image?query=elegant%20diamond%20stud%20earrings%20pair%20on%20white%20jewelry%20display%2C%20luxury%20precious%20stone%20earrings%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=300&height=300&seq=related-2&orientation=squarish'
    }
  ];

  const handleAddToCart = () => {
    const isLoggedIn = false; 

    if (!isLoggedIn) {
      window.location.href = '/giris?redirect=/urun/' + productId;
      return;
    }

    console.log('Sepete eklendi:', { productId, quantity, selectedSize });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 cursor-pointer">Ana Sayfa</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link href="/koleksiyonlar" className="hover:text-gray-900 cursor-pointer">Koleksiyonlar</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link href={`/${product.category.toLowerCase()}`} className="hover:text-gray-900 cursor-pointer">{product.category}</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images & Video */}
          <div>
            <div className="aspect-square mb-4 overflow-hidden rounded-2xl relative">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Video Play Button */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute bottom-4 right-4 w-16 h-16 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                <i className="ri-play-fill text-2xl ml-1"></i>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                    selectedImage === index ? 'border-gray-900' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}

              {/* Video Thumbnail */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer bg-gray-100 flex items-center justify-center relative"
              >
                <i className="ri-play-circle-line text-3xl text-gray-600"></i>
                <span className="absolute bottom-1 left-1 right-1 text-xs text-gray-600 bg-white/90 rounded px-1">Video</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviews} değerlendirme)</span>
                </div>
                {product.inStock && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Stokta</span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-gray-900">₺{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₺{product.originalPrice.toLocaleString()}</span>
                    <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">%{product.discount} İNDİRİM</span>
                  </>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Ölçü Seçimi</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-colors cursor-pointer ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <Link href="/olcu-rehberi" className="underline cursor-pointer">Ölçü rehberine</Link> göz atın
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Adet</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="px-4 py-3 font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                Sepete Ekle - ₺{(product.price * quantity).toLocaleString()}
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer ${
                  isWishlisted 
                    ? 'bg-red-500 text-white border-red-500' 
                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                <i className={`ri-heart-${isWishlisted ? 'fill' : 'line'} text-xl`}></i>
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Ürün Özellikleri</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="ri-check-line text-green-600"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[80vh]">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Ürün Videosu</h3>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={product.videoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {[ 
                { id: 'description', name: 'Açıklama' },
                { id: 'features', name: 'Özellikler' },
                { id: 'reviews', name: `Değerlendirmeler (${reviews.length})` },
                { id: 'packaging', name: 'Paketleme' },
                { id: 'shipping', name: 'Kargo & İade' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="prose max-w-none">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-medium">{review.name}</span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Doğrulanmış Alıcı</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <i 
                                key={i}
                                className={`ri-star-${i < review.rating ? 'fill' : 'line'} text-yellow-400 text-sm`}
                              ></i>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString('tr-TR')}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'packaging' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ürünlerimizi Nasıl Paketliyoruz?</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Her mücevherimiz özenle hazırlanmış özel paketlemesi ile size ulaşır. 
                    Lüks deneyimi evinizde yaşamanız için her detayı düşündük.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-gift-line text-2xl text-white"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lüks Hediye Kutusu</h4>
                    <p className="text-sm text-gray-600">
                      Özel tasarım BusinessIlver hediye kutusunda, kadife iç kaplama ile korunarak teslim edilir.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-shield-check-line text-2xl text-white"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Güvenli Paketleme</h4>
                    <p className="text-sm text-gray-600">
                      Çarpma ve darbelere karşı koruyucu köpük ile sarılarak, güvenle taşınır.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-file-text-line text-2xl text-white"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sertifika & Garanti</h4>
                    <p className="text-sm text-gray-600">
                      Ürün sertifikası ve garanti belgesi ile birlikte teslim edilir.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <img
                        src="https://readdy.ai/api/search-image?query=luxury%20jewelry%20packaging%20box%20with%20black%20velvet%20interior%2C%20elegant%20gift%20box%20for%20diamond%20rings%2C%20professional%20product%20photography%2C%20premium%20packaging%20design%2C%20high-end%20jewelry%20presentation&width=500&height=300&seq=packaging-image&orientation=landscape"
                        alt="Lüks Paketleme"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Premium Deneyim</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-3">
                          <i className="ri-check-line text-green-600"></i>
                          <span>Siyah kadife iç kaplama</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <i className="ri-check-line text-green-600"></i>
                          <span>Mıknatıslı kapatma sistemi</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <i className="ri-check-line text-green-600"></i>
                          <span>LED aydınlatmalı sunum</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <i className="ri-check-line text-green-600"></i>
                          <span>Geri dönüştürülebilir malzemeler</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <i className="ri-check-line text-green-600"></i>
                          <span>Özel BusinessIlver broşürü</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8">
                  <i className="ri-heart-line text-3xl mb-4"></i>
                  <h4 className="text-xl font-semibold mb-2">Sevdikleriniz İçin Hazır</h4>
                  <p className="text-gray-200">
                    Hediye kartı ve özel mesajınız ile birlikte, doğrudan alıcıya gönderilebilir.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Kargo Bilgileri</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ücretsiz kargo (Türkiye geneli)</li>
                    <li>• 1-3 iş günü içinde teslimat</li>
                    <li>• Hızlı kargo seçeneği mevcut</li>
                    <li>• Güvenli paketleme</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">İade & Değişim Koşulları</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <i className="ri-close-circle-line text-red-600 text-xl"></i>
                      <div>
                        <p className="font-medium text-red-800">İade ve Değişim Yapılmamaktadır</p>
                        <p className="text-sm text-red-600 mt-1">
                          Mücevher ürünlerinin hijyen ve güvenlik koşulları gereği iade ve değişim kabul edilmemektedir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Benzer Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link key={relatedProduct.id} href={`/urun/${relatedProduct.id}`} className="group cursor-pointer">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-lg font-bold text-gray-900">₺{relatedProduct.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
