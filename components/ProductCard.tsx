
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeSelector, setShowSizeSelector] = useState(false);

  // Kategori bazında ölçü seçenekleri
  const getSizeOptions = () => {
    switch (product.category) {
      case 'rings':
        return ['15', '16', '17', '18', '19', '20'];
      case 'necklaces':
        return ['40cm', '45cm', '50cm', '55cm'];
      case 'bracelets':
        return ['16cm', '18cm', '20cm', '22cm'];
      case 'earrings':
        return []; // Küpelerde ölçü yok
      default:
        return [];
    }
  };

  const sizeOptions = getSizeOptions();
  const hasSizeOptions = sizeOptions.length > 0;

  const handleAddToCart = () => {
    // Ölçü seçimi gerekli mi kontrol et
    if (hasSizeOptions && !selectedSize) {
      setShowSizeSelector(true);
      return;
    }

    // Kullanıcı giriş kontrolü - daha sonra auth ile entegre edilecek
    const isLoggedIn = false; // Bu değer auth durumuna göre değişecek
    
    if (!isLoggedIn) {
      // Giriş sayfasına yönlendir
      window.location.href = '/giris?redirect=/koleksiyonlar';
      return;
    }
    
    // Sepete ekleme işlemi
    console.log('Ürün sepete eklendi:', { 
      productId: product.id, 
      size: selectedSize || 'Standart' 
    });
    
    // Başarı mesajı göster
    alert(`${product.name} sepetinize eklendi!`);
    setShowSizeSelector(false);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const getSizeLabel = () => {
    switch (product.category) {
      case 'rings':
        return 'Yüzük Ölçüsü';
      case 'necklaces':
        return 'Kolye Uzunluğu';
      case 'bracelets':
        return 'Bilezik Ölçüsü';
      default:
        return 'Ölçü';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/urun/${product.id}`}>
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              YENİ
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              %{product.discount} İNDİRİM
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
            isWishlisted 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <i className={`ri-heart-${isWishlisted ? 'fill' : 'line'} text-lg`}></i>
        </button>

        {/* Quick Actions */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Link 
            href={`/urun/${product.id}`}
            className="flex-1 bg-white text-gray-900 py-2 px-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-center whitespace-nowrap cursor-pointer"
          >
            Detay
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Sepete Ekle
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <Link href={`/urun/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i}
                className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
              ></i>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-bold text-gray-900">
            ₺{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₺{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Size Selection - Show only when needed */}
        {hasSizeOptions && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {getSizeLabel()}
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 pr-8"
            >
              <option value="">Ölçü Seçin</option>
              {sizeOptions.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Size Selection Modal */}
      {showSizeSelector && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 rounded-2xl">
          <div className="bg-white rounded-lg p-6 m-4 max-w-sm w-full">
            <h4 className="font-semibold text-gray-900 mb-4">{getSizeLabel()} Seçin</h4>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {sizeOptions.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-3 border-2 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedSize === size
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSizeSelector(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors cursor-pointer"
              >
                İptal
              </button>
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
