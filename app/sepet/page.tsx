'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Solitaire Pırlanta Yüzük',
      price: 45900,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=elegant%20solitaire%20diamond%20engagement%20ring%20with%20platinum%20setting%20on%20white%20marble%20surface%2C%20luxury%20bridal%20jewelry%20photography%2C%20clean%20minimalist%20background%2C%20professional%20studio%20lighting&width=200&height=200&seq=cart-product-1&orientation=squarish',
      size: '17',
      material: 'Beyaz Altın'
    },
    {
      id: 2,
      name: 'Altın Tennis Kolye',
      price: 12750,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=luxury%20gold%20tennis%20necklace%20with%20diamonds%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20gemstones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background&width=200&height=200&seq=cart-product-2&orientation=squarish',
      length: '45cm',
      material: '18 Ayar Altın'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Ücretsiz kargo
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // Kullanıcı giriş kontrolü
    const isLoggedIn = false; // Bu değer auth durumuna göre değişecek
    
    if (!isLoggedIn) {
      window.location.href = '/giris?redirect=/sepet';
      return;
    }
    
    // Ödeme sayfasına yönlendir
    window.location.href = '/odeme';
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-md mx-auto">
            <i className="ri-shopping-bag-line text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sepetiniz Boş</h2>
            <p className="text-gray-600 mb-8">Henüz sepetinize ürün eklemediniz.</p>
            <Link 
              href="/koleksiyonlar"
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              Alışverişe Başla
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sepetim</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-6 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
                  <div className="flex items-start gap-4">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        {item.size && <p>Ölçü: {item.size}</p>}
                        {item.length && <p>Uzunluk: {item.length}</p>}
                        <p>Malzeme: {item.material}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                          >
                            <i className="ri-subtract-line text-sm"></i>
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                          >
                            <i className="ri-add-line text-sm"></i>
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            ₺{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <button 
                            onClick={() => updateQuantity(item.id, 0)}
                            className="text-red-500 hover:text-red-700 text-sm cursor-pointer mt-1"
                          >
                            Kaldır
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Sipariş Özeti</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam</span>
                  <span className="font-medium">₺{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo</span>
                  <span className="font-medium text-green-600">Ücretsiz</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Toplam</span>
                    <span className="text-lg font-bold text-gray-900">₺{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer mb-4"
              >
                Ödemeye Geç
              </button>

              <Link 
                href="/koleksiyonlar"
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer block text-center"
              >
                Alışverişe Devam Et
              </Link>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-shield-check-line text-green-600"></i>
                  <span>SSL ile güvenli ödeme</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                  <i className="ri-truck-line text-blue-600"></i>
                  <span>24 saat içinde kargo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}