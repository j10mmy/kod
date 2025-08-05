'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const cartItems = [
    {
      id: 1,
      name: 'Solitaire Pırlanta Yüzük',
      price: 45900,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=elegant%20solitaire%20diamond%20engagement%20ring%20with%20platinum%20setting%20on%20white%20marble%20surface%2C%20luxury%20bridal%20jewelry%20photography%2C%20clean%20minimalist%20background%2C%20professional%20studio%20lighting&width=100&height=100&seq=checkout-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Altın Tennis Kolye',
      price: 12750,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=luxury%20gold%20tennis%20necklace%20with%20diamonds%20on%20elegant%20white%20display%2C%20precious%20jewelry%20chain%20with%20gemstones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background&width=100&height=100&seq=checkout-2&orientation=squarish'
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
      phone: '0555 123 45 67'
    },
    {
      id: 2,
      title: 'İş Adresi',
      name: 'Ayşe Yılmaz',
      address: 'Maslak Mah. Büyükdere Cad. No:456',
      district: 'Sarıyer',
      city: 'İstanbul',
      phone: '0555 123 45 67'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .substr(0, 5);
  };

  const handleCardChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'number') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiry') {
      formattedValue = formatExpiry(value);
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substr(0, 3);
    }
    
    setCardData({ ...cardData, [field]: formattedValue });
  };

  const getCardType = (number: string) => {
    const cleanNumber = number.replace(/\s/g, '');
    if (cleanNumber.startsWith('4')) return 'visa';
    if (cleanNumber.startsWith('5')) return 'mastercard';
    return 'generic';
  };

  const steps = [
    { id: 1, name: 'Adres Bilgileri', icon: 'ri-map-pin-line' },
    { id: 2, name: 'Ödeme Bilgileri', icon: 'ri-bank-card-line' },
    { id: 3, name: 'Sipariş Özeti', icon: 'ri-check-line' }
  ];

  const handleCompleteOrder = () => {
    console.log('Sipariş tamamlandı');
    window.location.href = '/siparis-basarili';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ödeme</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                  activeStep >= step.id 
                    ? 'bg-gray-900 border-gray-900 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <i className={`${step.icon} text-lg`}></i>
                </div>
                <div className="ml-4">
                  <p className={`text-sm font-medium ${
                    activeStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-0.5 mx-8 ${
                    activeStep > step.id ? 'bg-gray-900' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Address Step */}
            {activeStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Teslimat Adresi</h2>
                
                <div className="space-y-4">
                  {addresses.map(address => (
                    <div 
                      key={address.id}
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                        selectedAddress === address.id
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedAddress(address.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{address.title}</h3>
                          <p className="font-medium text-gray-900">{address.name}</p>
                          <p className="text-gray-600">{address.address}</p>
                          <p className="text-gray-600">{address.district} / {address.city}</p>
                          <p className="text-gray-600">{address.phone}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAddress === address.id
                            ? 'border-gray-900 bg-gray-900'
                            : 'border-gray-300'
                        }`}>
                          {selectedAddress === address.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-between">
                  <Link 
                    href="/sepet"
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Sepete Dön
                  </Link>
                  <button
                    onClick={() => setActiveStep(2)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            )}

            {/* Payment Step */}
            {activeStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ödeme Yöntemi</h2>

                {/* Payment Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'card' ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('card')}
                  >
                    <i className="ri-bank-card-line text-2xl text-gray-600 mb-2"></i>
                    <p className="font-medium">Kredi Kartı</p>
                  </div>
                  
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'transfer' ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('transfer')}
                  >
                    <i className="ri-bank-line text-2xl text-gray-600 mb-2"></i>
                    <p className="font-medium">Banka Havalesi</p>
                  </div>
                  
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'installment' ? 'border-gray-900 bg-gray-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('installment')}
                  >
                    <i className="ri-money-dollar-circle-line text-2xl text-gray-600 mb-2"></i>
                    <p className="font-medium">Taksit</p>
                  </div>
                </div>

                {/* Credit Card Form */}
                {selectedPayment === 'card' && (
                  <div>
                    {/* Animated Card */}
                    <div className="mb-8">
                      <div className="relative w-full max-w-sm mx-auto">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white shadow-xl">
                          <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-8 bg-yellow-400 rounded flex items-center justify-center">
                              <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
                            </div>
                            <div className="text-right">
                              {getCardType(cardData.number) === 'visa' && (
                                <div className="text-xl font-bold">VISA</div>
                              )}
                              {getCardType(cardData.number) === 'mastercard' && (
                                <div className="flex items-center gap-1">
                                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                  <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-3"></div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="text-xl font-mono tracking-wider">
                              {cardData.number || '•••• •••• •••• ••••'}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-xs text-gray-300 mb-1">KART SAHİBİ</div>
                              <div className="text-sm font-medium">
                                {cardData.name.toUpperCase() || 'AD SOYAD'}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-300 mb-1">TARİH</div>
                              <div className="text-sm font-mono">
                                {cardData.expiry || 'AA/YY'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kart Numarası
                        </label>
                        <input
                          type="text"
                          value={cardData.number}
                          onChange={(e) => handleCardChange('number', e.target.value)}
                          placeholder="0000 0000 0000 0000"
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 font-mono text-lg"
                          maxLength={19}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kart Sahibinin Adı
                        </label>
                        <input
                          type="text"
                          value={cardData.name}
                          onChange={(e) => handleCardChange('name', e.target.value)}
                          placeholder="Ad Soyad"
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Son Kullanma Tarihi
                        </label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => handleCardChange('expiry', e.target.value)}
                          placeholder="AA/YY"
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 font-mono"
                          maxLength={5}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardData.cvv}
                          onChange={(e) => handleCardChange('cvv', e.target.value)}
                          placeholder="000"
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 font-mono"
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Geri
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            )}

            {/* Order Summary Step */}
            {activeStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sipariş Özeti</h2>
                
                <div className="space-y-6 mb-8">
                  {/* Address Summary */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Teslimat Adresi</h3>
                    <p className="text-gray-600">
                      {addresses.find(addr => addr.id === selectedAddress)?.address}
                    </p>
                  </div>
                  
                  {/* Payment Summary */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Ödeme Yöntemi</h3>
                    <p className="text-gray-600">
                      {selectedPayment === 'card' && `Kredi Kartı (****${cardData.number.slice(-4)})`}
                      {selectedPayment === 'transfer' && 'Banka Havalesi'}
                      {selectedPayment === 'installment' && 'Taksitli Ödeme'}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleCompleteOrder}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Siparişi Tamamla
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Sipariş Özeti</h3>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-gray-600 text-sm">Adet: {item.quantity}</p>
                      <p className="font-semibold text-gray-900">₺{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam</span>
                  <span className="font-medium">₺{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo</span>
                  <span className="font-medium text-green-600">Ücretsiz</span>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Toplam</span>
                    <span className="text-lg font-bold text-gray-900">₺{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                  <i className="ri-shield-check-line text-green-600"></i>
                  <span>256-bit SSL güvenlik</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-truck-line text-blue-600"></i>
                  <span>1-3 gün teslimat</span>
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