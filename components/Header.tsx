
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const categories = [
    { name: 'Yüzükler', href: '/yuzukler', subcategories: ['Nişan Yüzükleri', 'Alyanslar', 'Tektaş Yüzükler', 'Vintage Yüzükler', 'Erkek Yüzükleri', 'Set Yüzükler'] },
    { name: 'Kolyeler', href: '/kolye', subcategories: ['Tennis Kolyeler', 'Solitaire Kolyeler', 'Choker', 'Uzun Kolyeler', 'Set Kolyeler', 'Erkek Kolyeler'] },
    { name: 'Küpeler', href: '/kupe', subcategories: ['Tektaş Küpeler', 'Halka Küpeler', 'Drop Küpeler', 'Sırga', 'Set Küpeler', 'Çivili Küpeler'] },
    { name: 'Bilezikler', href: '/bilezik', subcategories: ['Tennis Bilezikler', 'Charm Bilezikler', 'Bangle', 'Saat Bilezikleri', 'Set Bilezikler', 'Erkek Bilezikleri'] }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-['Pacifico'] text-2xl text-gray-900 font-semibold">
            BusinessIlver
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1">
              <i className="ri-home-4-line"></i>
              Ana Sayfa
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              onMouseLeave={() => setIsCategoryMenuOpen(false)}
            >
              <Link href="/koleksiyonlar" className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1">
                Koleksiyonlar
                <i className="ri-arrow-down-s-line"></i>
              </Link>
              
              {/* Category Dropdown */}
              {isCategoryMenuOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-lg p-6 w-96 mt-2">
                  <div className="grid grid-cols-1 gap-6">
                    {categories.map(category => (
                      <div key={category.name}>
                        <Link 
                          href={category.href}
                          className="font-semibold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer block mb-3"
                        >
                          {category.name}
                        </Link>
                        <div className="grid grid-cols-2 gap-2">
                          {category.subcategories.map(sub => (
                            <Link 
                              key={sub}
                              href={`${category.href}?type=${encodeURIComponent(sub)}`}
                              className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-6 pt-6">
                    <Link 
                      href="/koleksiyonlar"
                      className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer inline-block"
                    >
                      Tüm Koleksiyonları Gör
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/yuzukler" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Yüzükler
            </Link>
            <Link href="/kolye" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Kolyeler
            </Link>
            <Link href="/kupe" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Küpeler
            </Link>
            <Link href="/bilezik" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Bilezikler
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Hakkımızda
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <i className="ri-search-line text-xl"></i>
            </button>

            {/* User Account */}
            <Link href="/profil" className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              <i className="ri-user-line text-xl"></i>
            </Link>

            {/* Wishlist - Active */}
            <Link href="/favoriler" className="w-6 h-6 flex items-center justify-center text-red-500 hover:text-red-600 transition-colors cursor-pointer relative">
              <i className="ri-heart-fill text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Link>

            {/* Shopping Cart */}
            <Link href="/sepet" className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer relative">
              <i className="ri-shopping-bag-line text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-6 h-6 flex items-center justify-center text-gray-700 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Ürün, kategori veya marka arayın..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer flex items-center gap-2">
                <i className="ri-home-4-line"></i>
                Ana Sayfa
              </Link>
              <Link href="/koleksiyonlar" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                Koleksiyonlar
              </Link>
              <Link href="/yuzukler" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                Yüzükler
              </Link>
              <Link href="/kolye" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                Kolyeler
              </Link>
              <Link href="/kupe" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                Küpeler
              </Link>
              <Link href="/bilezik" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                Bilezikler
              </Link>
              <Link href="/hakkimizda" className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                Hakkımızda
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
