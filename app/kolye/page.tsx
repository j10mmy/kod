
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { useState } from 'react';

export default function Necklaces() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [displayedProducts, setDisplayedProducts] = useState(6);

  const categories = [
    { id: 'all', name: 'Tüm Kolyeler', count: 38 },
    { id: 'tennis', name: 'Tennis Kolyeler', count: 12 },
    { id: 'solitaire', name: 'Solitaire Kolyeler', count: 8 },
    { id: 'choker', name: 'Choker', count: 6 },
    { id: 'long', name: 'Uzun Kolyeler', count: 7 },
    { id: 'set', name: 'Set Kolyeler', count: 5 }
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Altın Tennis Kolye',
      price: 12750,
      image: 'https://readdy.ai/api/search-image?query=luxury%20gold%20tennis%20necklace%20with%20diamonds%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20gemstones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20necklace%20collection&width=400&height=400&seq=necklace-1&orientation=squarish',
      category: 'tennis',
      rating: 4.9,
      reviews: 18,
      isNew: false
    },
    {
      id: 2,
      name: 'Pırlanta Solitaire Kolye',
      price: 28900,
      originalPrice: 32000,
      image: 'https://readdy.ai/api/search-image?query=elegant%20diamond%20solitaire%20necklace%20with%20single%20stone%20pendant%20on%20white%20jewelry%20display%2C%20luxury%20precious%20stone%20necklace%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-2&orientation=squarish',
      category: 'solitaire',
      rating: 4.8,
      reviews: 24,
      isNew: true,
      discount: 10
    },
    {
      id: 3,
      name: 'Rose Gold Choker',
      price: 8500,
      image: 'https://readdy.ai/api/search-image?query=elegant%20rose%20gold%20choker%20necklace%20with%20diamonds%20on%20white%20marble%20surface%2C%20luxury%20short%20necklace%20jewelry%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-3&orientation=squarish',
      category: 'choker',
      rating: 4.7,
      reviews: 15,
      isNew: true
    },
    {
      id: 4,
      name: 'Uzun Zincir Kolye',
      price: 15600,
      image: 'https://readdy.ai/api/search-image?query=long%20elegant%20gold%20chain%20necklace%20with%20pendant%20on%20white%20display%2C%20luxury%20jewelry%20chain%20with%20gemstone%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-4&orientation=squarish',
      category: 'long',
      rating: 4.6,
      reviews: 22,
      isNew: false
    },
    {
      id: 5,
      name: 'Pırlanta Set Kolye',
      price: 45900,
      image: 'https://readdy.ai/api/search-image?query=luxury%20diamond%20necklace%20set%20with%20matching%20earrings%20on%20elegant%20white%20display%2C%20precious%20jewelry%20collection%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-5&orientation=squarish',
      category: 'set',
      rating: 4.9,
      reviews: 12,
      isNew: true
    },
    {
      id: 6,
      name: 'Vintage Kolye',
      price: 22400,
      originalPrice: 25000,
      image: 'https://readdy.ai/api/search-image?query=vintage%20style%20gold%20necklace%20with%20antique%20design%20on%20white%20jewelry%20display%2C%20luxury%20vintage%20necklace%20collection%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-6&orientation=squarish',
      category: 'solitaire',
      rating: 4.8,
      reviews: 16,
      isNew: false,
      discount: 10
    },
    {
      id: 7,
      name: 'Elmas Tennis Kolye',
      price: 35600,
      image: 'https://readdy.ai/api/search-image?query=luxury%20diamond%20tennis%20necklace%20with%20brilliant%20cut%20stones%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20diamonds%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-7&orientation=squarish',
      category: 'tennis',
      rating: 4.9,
      reviews: 28,
      isNew: true
    },
    {
      id: 8,
      name: 'Altın Choker',
      price: 6750,
      image: 'https://readdy.ai/api/search-image?query=elegant%20gold%20choker%20necklace%20with%20minimalist%20design%20on%20white%20jewelry%20display%2C%20luxury%20short%20necklace%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-8&orientation=squarish',
      category: 'choker',
      rating: 4.5,
      reviews: 19,
      isNew: false
    },
    {
      id: 9,
      name: 'İnci Uzun Kolye',
      price: 18900,
      image: 'https://readdy.ai/api/search-image?query=elegant%20long%20pearl%20necklace%20with%20gold%20accents%20on%20white%20jewelry%20display%2C%20luxury%20freshwater%20pearl%20strand%20necklace%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=necklace-9&orientation=squarish',
      category: 'long',
      rating: 4.6,
      reviews: 14,
      isNew: false
    }
  ];

  // Filtreleme ve sıralama fonksiyonu
  const getFilteredAndSortedProducts = () => {
    let filtered = allProducts.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });

    switch(sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  // Filtreleri temizle
  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 100000]);
    setSortBy('newest');
    setDisplayedProducts(6);
  };

  // Daha fazla ürün yükle
  const loadMoreProducts = () => {
    setDisplayedProducts(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kolyeler</h1>
            <p className="text-xl text-gray-200">Zarafeti boyunuzda taşıyın</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategoriler</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                        selectedCategory === category.id 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm opacity-75">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Fiyat Aralığı</h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                      className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>₺0</span>
                      <span>₺100.000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sıralama</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 pr-8"
                >
                  <option value="newest">En Yeni</option>
                  <option value="price-low">Fiyat (Düşükten Yükseğe)</option>
                  <option value="price-high">Fiyat (Yüksekten Düşüğe)</option>
                  <option value="rating">En Çok Beğenilen</option>
                  <option value="popular">En Popüler</option>
                </select>
              </div>

              {/* Filter Button */}
              <div className="space-y-2">
                <button
                  onClick={clearFilters}
                  className="w-full border border-purple-600 text-purple-600 p-3 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Filtreleri Temizle
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                {filteredProducts.length} kolye gösteriliyor
                {selectedCategory !== 'all' && (
                  <span className="ml-2 text-sm text-gray-500">
                    - {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
              </p>
              
              {/* Quick Sort for Desktop */}
              <div className="hidden lg:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 pr-8"
                >
                  <option value="newest">En Yeni</option>
                  <option value="price-low">Fiyat ↑</option>
                  <option value="price-high">Fiyat ↓</option>
                  <option value="rating">En Çok Beğenilen</option>
                  <option value="popular">En Popüler</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.slice(0, displayedProducts).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Button */}
                {displayedProducts < filteredProducts.length && (
                  <div className="text-center mt-12">
                    <button 
                      onClick={loadMoreProducts}
                      className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Daha Fazla Kolye Yükle
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Ürün Bulunamadı</h3>
                <p className="text-gray-500 mb-6">Seçtiğiniz kriterlere uygun ürün bulunamadı.</p>
                <button
                  onClick={clearFilters}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
