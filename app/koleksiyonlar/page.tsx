
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { useState } from 'react';

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'Tüm Ürünler', count: 156 },
    { id: 'rings', name: 'Yüzükler', count: 45 },
    { id: 'necklaces', name: 'Kolyeler', count: 38 },
    { id: 'earrings', name: 'Küpeler', count: 42 },
    { id: 'bracelets', name: 'Bilezikler', count: 31 }
  ];

  const products = [
    {
      id: 1,
      name: 'Solitaire Pırlanta Yüzük',
      price: 45900,
      originalPrice: 52000,
      image: 'https://readdy.ai/api/search-image?query=elegant%20solitaire%20diamond%20engagement%20ring%20with%20platinum%20setting%20on%20white%20marble%20surface%2C%20luxury%20bridal%20jewelry%20photography%2C%20clean%20minimalist%20background%2C%20professional%20studio%20lighting%2C%20high-end%20wedding%20ring&width=400&height=400&seq=product-ring-1&orientation=squarish',
      category: 'rings',
      rating: 4.8,
      reviews: 24,
      isNew: true,
      discount: 12
    },
    {
      id: 2,
      name: 'Altın Tennis Kolye',
      price: 12750,
      image: 'https://readdy.ai/api/search-image?query=luxury%20gold%20tennis%20necklace%20with%20diamonds%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20gemstones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20necklace%20collection&width=400&height=400&seq=product-necklace-1&orientation=squarish',
      category: 'necklaces',
      rating: 4.9,
      reviews: 18,
      isNew: false
    },
    {
      id: 3,
      name: 'Pırlanta Tektaş Küpe',
      price: 28400,
      image: 'https://readdy.ai/api/search-image?query=elegant%20diamond%20stud%20earrings%20pair%20on%20white%20jewelry%20display%2C%20luxury%20precious%20stone%20earrings%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20earring%20collection&width=400&height=400&seq=product-earring-1&orientation=squarish',
      category: 'earrings',
      rating: 4.7,
      reviews: 31,
      isNew: true
    },
    {
      id: 4,
      name: 'Rose Gold Bilezik',
      price: 8900,
      originalPrice: 9900,
      image: 'https://readdy.ai/api/search-image?query=elegant%20rose%20gold%20bracelet%20with%20diamonds%20on%20white%20marble%20surface%2C%20luxury%20jewelry%20chain%20bracelet%20with%20precious%20stones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20bracelet%20collection&width=400&height=400&seq=product-bracelet-1&orientation=squarish',
      category: 'bracelets',
      rating: 4.6,
      reviews: 15,
      isNew: false,
      discount: 10
    },
    {
      id: 5,
      name: 'Emerald Yüzük',
      price: 32500,
      image: 'https://readdy.ai/api/search-image?query=luxury%20emerald%20engagement%20ring%20with%20diamond%20halo%20setting%20on%20white%20display%2C%20precious%20green%20gemstone%20jewelry%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20colored%20stone%20ring&width=400&height=400&seq=product-ring-2&orientation=squarish',
      category: 'rings',
      rating: 4.9,
      reviews: 12,
      isNew: true
    },
    {
      id: 6,
      name: 'Pearl Drop Küpe',
      price: 15600,
      image: 'https://readdy.ai/api/search-image?query=elegant%20pearl%20drop%20earrings%20with%20gold%20setting%20on%20white%20jewelry%20display%2C%20luxury%20freshwater%20pearl%20earrings%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20pearl%20jewelry&width=400&height=400&seq=product-earring-2&orientation=squarish',
      category: 'earrings',
      rating: 4.8,
      reviews: 22,
      isNew: false
    },
    {
      id: 7,
      name: 'Pırlanta Alyans Seti',
      price: 67500,
      image: 'https://readdy.ai/api/search-image?query=luxury%20diamond%20wedding%20ring%20set%20on%20white%20marble%20surface%2C%20elegant%20matching%20his%20and%20hers%20rings%20with%20diamonds%2C%20professional%20bridal%20jewelry%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=product-ring-3&orientation=squarish',
      category: 'rings',
      rating: 5.0,
      reviews: 8,
      isNew: true
    },
    {
      id: 8,
      name: 'Incili Uzun Kolye',
      price: 18900,
      image: 'https://readdy.ai/api/search-image?query=elegant%20long%20pearl%20necklace%20with%20gold%20accents%20on%20white%20jewelry%20display%2C%20luxury%20freshwater%20pearl%20strand%20necklace%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=400&height=400&seq=product-necklace-2&orientation=squarish',
      category: 'necklaces',
      rating: 4.6,
      reviews: 14,
      isNew: false
    },
    {
      id: 9,
      name: 'Pırlanta Halka Küpe',
      price: 22400,
      image: 'https://readdy.ai/api/search-image?query=elegant%20diamond%20hoop%20earrings%20on%20white%20jewelry%20display%2C%20luxury%20circular%20earrings%20with%20diamonds%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20hoop%20earring%20collection&width=400&height=400&seq=product-earring-3&orientation=squarish',
      category: 'earrings',
      rating: 4.7,
      reviews: 19,
      isNew: true
    }
  ];

  // Filtreleme ve sıralama fonksiyonu
  const getFilteredAndSortedProducts = () => {
    let filtered = products.filter(product => {
      // Kategori filtresi
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Fiyat aralığı filtresi
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return categoryMatch && priceMatch;
    });

    // Sıralama
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
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  // Filtreleri uygula fonksiyonu
  const applyFilters = () => {
    setShowFilters(false);
  };

  // Filtreleri temizle
  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 100000]);
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Koleksiyonlarımız</h1>
            <p className="text-xl text-gray-200">En özel mücevher koleksiyonlarımızı keşfedin</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-gray-900 text-white p-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="ri-filter-line"></i>
            Filtreler
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
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
                          ? 'bg-gray-900 text-white' 
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
                      className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                      className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 pr-8"
                >
                  <option value="newest">En Yeni</option>
                  <option value="price-low">Fiyat (Düşükten Yükseğe)</option>
                  <option value="price-high">Fiyat (Yüksekten Düşüğe)</option>
                  <option value="rating">En Çok Beğenilen</option>
                  <option value="popular">En Popüler</option>
                </select>
              </div>

              {/* Filter Buttons */}
              <div className="space-y-2">
                <button
                  onClick={applyFilters}
                  className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Filtrele
                </button>
                <button
                  onClick={clearFilters}
                  className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
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
                {filteredProducts.length} ürün gösteriliyor
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
                  className="p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 pr-8"
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
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                    Daha Fazla Ürün Yükle
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Ürün Bulunamadı</h3>
                <p className="text-gray-500 mb-6">Seçtiğiniz kriterlere uygun ürün bulunamadı.</p>
                <button
                  onClick={clearFilters}
                  className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
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
