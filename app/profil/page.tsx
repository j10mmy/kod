'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userInfo, setUserInfo] = useState({
    firstName: 'Ayşe',
    lastName: 'Yılmaz',
    email: 'ayse.yilmaz@email.com',
    phone: '0555 123 45 67',
    birthDate: '1990-05-15',
    gender: 'female'
  });

  const tabs = [
    { id: 'profile', name: 'Profil Bilgileri', icon: 'ri-user-line' },
    { id: 'orders', name: 'Siparişlerim', icon: 'ri-shopping-bag-line' },
    { id: 'wishlist', name: 'Favorilerim', icon: 'ri-heart-line' },
    { id: 'addresses', name: 'Adreslerim', icon: 'ri-map-pin-line' },
    { id: 'settings', name: 'Hesap Ayarları', icon: 'ri-settings-line' }
  ];

  const orders = [
    {
      id: 'BS-2024-001',
      date: '2024-01-15',
      status: 'Teslim Edildi',
      total: 45900,
      items: 2,
      statusColor: 'text-green-600'
    },
    {
      id: 'BS-2024-002',
      date: '2024-01-20',
      status: 'Kargoda',
      total: 28400,
      items: 1,
      statusColor: 'text-blue-600'
    },
    {
      id: 'BS-2024-003',
      date: '2024-01-25',
      status: 'Hazırlanıyor',
      total: 12750,
      items: 1,
      statusColor: 'text-yellow-600'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Emerald Yüzük',
      price: 32500,
      image: 'https://readdy.ai/api/search-image?query=luxury%20emerald%20engagement%20ring%20with%20diamond%20halo%20setting%20on%20white%20display%2C%20precious%20green%20gemstone%20jewelry%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=200&height=200&seq=wishlist-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Pearl Drop Küpe',
      price: 15600,
      image: 'https://readdy.ai/api/search-image?query=elegant%20pearl%20drop%20earrings%20with%20gold%20setting%20on%20white%20jewelry%20display%2C%20luxury%20freshwater%20pearl%20earrings%2C%20professional%20studio%20photography%2C%20clean%20minimalist%20background&width=200&height=200&seq=wishlist-2&orientation=squarish'
    }
  ];

  const addresses = [
    {
      id: 1,
      title: 'Ev Adresi',
      name: 'Ayşe Yılmaz',
      address: 'Bağdat Cad. No:123 Daire:5',
      district: 'Kadıköy',
      city: 'İstanbul',
      phone: '0555 123 45 67',
      isDefault: true
    },
    {
      id: 2,
      title: 'İş Adresi',
      name: 'Ayşe Yılmaz',
      address: 'Maslak Mah. Büyükdere Cad. No:456',
      district: 'Sarıyer',
      city: 'İstanbul',
      phone: '0555 123 45 67',
      isDefault: false
    }
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profil güncellendi:', userInfo);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-2xl text-gray-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900">{userInfo.firstName} {userInfo.lastName}</h3>
                <p className="text-sm text-gray-600">{userInfo.email}</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`${tab.icon} text-lg`}></i>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Profil Bilgileri</h2>
                  
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
                        <input
                          type="text"
                          value={userInfo.firstName}
                          onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
                        <input
                          type="text"
                          value={userInfo.lastName}
                          onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Doğum Tarihi</label>
                        <input
                          type="date"
                          value={userInfo.birthDate}
                          onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cinsiyet</label>
                        <select
                          value={userInfo.gender}
                          onChange={(e) => setUserInfo({...userInfo, gender: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 pr-8"
                        >
                          <option value="female">Kadın</option>
                          <option value="male">Erkek</option>
                          <option value="other">Belirtmek İstemiyorum</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Bilgileri Güncelle
                    </button>
                  </form>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Siparişlerim</h2>
                  
                  <div className="space-y-6">
                    {orders.map(order => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">Sipariş #{order.id}</h3>
                            <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString('tr-TR')}</p>
                          </div>
                          <span className={`font-medium ${order.statusColor}`}>{order.status}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {order.items} ürün • ₺{order.total.toLocaleString()}
                          </div>
                          <Link 
                            href={`/siparis/${order.id}`}
                            className="text-gray-900 hover:text-gray-700 font-medium cursor-pointer"
                          >
                            Detayları Gör
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Favorilerim</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map(item => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-full aspect-square object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-lg font-bold text-gray-900 mb-4">₺{item.price.toLocaleString()}</p>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                            Sepete Ekle
                          </button>
                          <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                            <i className="ri-delete-bin-line text-red-500"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Adreslerim</h2>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                      Yeni Adres Ekle
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {addresses.map(address => (
                      <div key={address.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-gray-900">{address.title}</h3>
                              {address.isDefault && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  Varsayılan
                                </span>
                              )}
                            </div>
                            <p className="font-medium text-gray-900">{address.name}</p>
                            <p className="text-gray-600">{address.address}</p>
                            <p className="text-gray-600">{address.district} / {address.city}</p>
                            <p className="text-gray-600">{address.phone}</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
                              <i className="ri-edit-line"></i>
                            </button>
                            <button className="text-red-500 hover:text-red-700 cursor-pointer">
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Hesap Ayarları</h2>
                  
                  <div className="space-y-8">
                    {/* Password Change */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Şifre Değiştir</h3>
                      <form className="space-y-4">
                        <input
                          type="password"
                          placeholder="Mevcut şifre"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                        <input
                          type="password"
                          placeholder="Yeni şifre"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                        <input
                          type="password"
                          placeholder="Yeni şifre tekrar"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                          Şifre Güncelle
                        </button>
                      </form>
                    </div>

                    {/* Notifications */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Bildirim Ayarları</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">E-posta bildirimleri</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">SMS bildirimleri</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Kampanya bildirimleri</span>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Delete Account */}
                    <div className="border border-red-200 rounded-lg p-6">
                      <h3 className="font-semibold text-red-600 mb-4">Hesabı Sil</h3>
                      <p className="text-gray-600 mb-4">
                        Hesabınızı sildiğinizde tüm verileriniz kalıcı olarak silinir ve bu işlem geri alınamaz.
                      </p>
                      <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">
                        Hesabı Sil
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}