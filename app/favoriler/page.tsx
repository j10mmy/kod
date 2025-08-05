'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Solitaire Pırlanta Yüzük',
      price: 45900,
      originalPrice: 52000,
      image: 'https://readdy.ai/api/search-image?query=elegant%20solitaire%20diamond%20engagement%20ring%20with%20platinum%20setting%20on%20white%20marble%20surface%2C%20luxury%20bridal%20jewelry%20photography%2C%20clean%20minimalist%20background%2C%20professional%20studio%20lighting%2C%20high-end%20wedding%20ring&width=400&height=400&seq=fav-ring-1&orientation=squarish',
      category: 'Yüzükler',
      discount: 12,
      addedDate: '2024-01-20'
    },
    {
      id: 2,
      name: 'Emerald Yüzük',
      price: 32500,
      image: 'https://readdy.ai/api/search-image?query=luxury%20emerald%20engagement%20ring%20with%20diamond%20halo%20setting%20on%20white%20display%2C%20precious%20green%20gemstone%20jewelry%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=fav-ring-2&orientation=squarish',
      category: 'Yüzükler',
      addedDate: '2024-01-18'
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const addToCart = (productId: number) => {
    console.log('Sepete eklendi:', productId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <i className="ri-heart-fill text-2xl text-red-500"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Favorilerim</h1>
            <p className="text-gray-600">{favorites.length} ürün favorilerinizde</p>
          </div>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-line text-4xl text-gray-400"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Henüz favori ürününüz yok</h2>
            <p className="text-gray-600 mb-8">Beğendiğiniz ürünleri favorilere ekleyerek daha sonra kolayca erişebilirsiniz.</p>
            <Link 
              href="/koleksiyonlar"
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              Ürünlere Göz At
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favorites.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Link href={`/urun/${product.id}`} className="cursor-pointer">
                    <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  
                  <button
                    onClick={() => removeFavorite(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-sm"
                  >
                    <i className="ri-close-line text-gray-600"></i>
                  </button>
                  
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                      %{product.discount} İNDİRİM
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">₺{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₺{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Favorilere eklendi: {new Date(product.addedDate).toLocaleDateString('tr-TR')}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer text-sm"
                  >
                    Sepete Ekle
                  </button>
                  <button
                    onClick={() => removeFavorite(product.id)}
                    className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                  >
                    <i className="ri-delete-bin-line text-red-500"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {favorites.length > 0 && (
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Favorilerizdeki Ürünleri Kaçırmayın!</h3>
              <p className="text-gray-600 mb-6">
                Favori ürünleriniz stokta sınırlı sayıda bulunabilir. Hemen sipariş vererek kaçırmayın!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/koleksiyonlar"
                  className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Daha Fazla Ürün Keşfet
                </Link>
                <Link 
                  href="/sepet"
                  className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Sepetime Git
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}