'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ChatSession {
  id: number;
  userName: string;
  userEmail: string;
  startTime: Date;
  status: 'active' | 'waiting' | 'closed';
  lastMessage: string;
  messageCount: number;
}

interface Message {
  id: number;
  sessionId: number;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyText, setReplyText] = useState('');

  // Mock data
  useEffect(() => {
    setChatSessions([
      {
        id: 1,
        userName: 'Ayşe Yılmaz',
        userEmail: 'ayse@email.com',
        startTime: new Date(),
        status: 'active',
        lastMessage: 'Ürün hakkında bilgi almak istiyorum',
        messageCount: 3
      },
      {
        id: 2,
        userName: 'Mehmet Kaya',
        userEmail: 'mehmet@email.com',
        startTime: new Date(Date.now() - 300000),
        status: 'waiting',
        lastMessage: 'Kargo ne zaman gelir?',
        messageCount: 1
      }
    ]);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'businessilver' && loginData.password === 'yalova2024') {
      setIsLoggedIn(true);
      setAdminName('BusinessIlver Admin');
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  };

  const handleSendMessage = () => {
    if (!replyText.trim() || !selectedSession) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sessionId: selectedSession,
      text: replyText,
      sender: 'admin',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setReplyText('');

    // Update chat session
    setChatSessions(prev => prev.map(session => 
      session.id === selectedSession 
        ? { ...session, lastMessage: replyText, messageCount: session.messageCount + 1 }
        : session
    ));
  };

  const selectSession = (sessionId: number) => {
    setSelectedSession(sessionId);
    // Mock messages for selected session
    setMessages([
      {
        id: 1,
        sessionId,
        text: 'Merhaba, BusinessIlver\'a hoş geldiniz!',
        sender: 'admin',
        timestamp: new Date(Date.now() - 600000)
      },
      {
        id: 2,
        sessionId,
        text: 'Ürünleriniz hakkında bilgi almak istiyorum',
        sender: 'user',
        timestamp: new Date(Date.now() - 300000)
      }
    ]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-['Pacifico'] text-3xl text-gray-900 mb-2">BusinessIlver</h1>
            <p className="text-gray-600">Admin Paneli - Yalova</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="businessilver"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium cursor-pointer"
            >
              Giriş Yap
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm cursor-pointer">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-['Pacifico'] text-2xl text-gray-900">BusinessIlver</h1>
              <span className="text-gray-500">Admin Paneli</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Hoşgeldin, {adminName}</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-logout-box-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {[
                { id: 'dashboard', name: 'Dashboard', icon: 'ri-dashboard-line' },
                { id: 'chat', name: 'Canlı Destek', icon: 'ri-message-3-line' },
                { id: 'orders', name: 'Siparişler', icon: 'ri-shopping-bag-line' },
                { id: 'products', name: 'Ürünler', icon: 'ri-store-line' },
                { id: 'customers', name: 'Müşteriler', icon: 'ri-user-line' },
                { id: 'settings', name: 'Ayarlar', icon: 'ri-settings-line' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Toplam Sipariş</p>
                      <p className="text-2xl font-bold text-gray-900">1,234</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-shopping-bag-line text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Aktif Sohbet</p>
                      <p className="text-2xl font-bold text-gray-900">{chatSessions.filter(s => s.status === 'active').length}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-message-3-line text-green-600 text-xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Aylık Satış</p>
                      <p className="text-2xl font-bold text-gray-900">₺456K</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="ri-line-chart-line text-purple-600 text-xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Müşteri Sayısı</p>
                      <p className="text-2xl font-bold text-gray-900">2,847</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <i className="ri-user-line text-yellow-600 text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Live Chat */}
          {activeTab === 'chat' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Canlı Destek</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                {/* Chat Sessions List */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Sohbetler</h3>
                  <div className="space-y-3">
                    {chatSessions.map(session => (
                      <div
                        key={session.id}
                        onClick={() => selectSession(session.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedSession === session.id
                            ? 'border-purple-200 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{session.userName}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            session.status === 'active' ? 'bg-green-100 text-green-800' :
                            session.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {session.status === 'active' ? 'Aktif' : 
                             session.status === 'waiting' ? 'Bekliyor' : 'Kapalı'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{session.lastMessage}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {session.startTime.toLocaleTimeString('tr-TR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col">
                  {selectedSession ? (
                    <>
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">
                          {chatSessions.find(s => s.id === selectedSession)?.userName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {chatSessions.find(s => s.id === selectedSession)?.userEmail}
                        </p>
                      </div>
                      
                      <div className="flex-1 p-4 overflow-y-auto space-y-3">
                        {messages.map(message => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                                message.sender === 'admin'
                                  ? 'bg-purple-600 text-white'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              <p>{message.text}</p>
                              <p className="text-xs opacity-60 mt-1">
                                {message.timestamp.toLocaleTimeString('tr-TR', {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Mesajınızı yazın..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          />
                          <button
                            onClick={handleSendMessage}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
                          >
                            Gönder
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                      Bir sohbet seçin
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Other tabs */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Siparişler</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <p className="text-gray-600">Sipariş yönetimi burada gösterilecek...</p>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ürünler</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <p className="text-gray-600">Ürün yönetimi burada gösterilecek...</p>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Müşteriler</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <p className="text-gray-600">Müşteri yönetimi burada gösterilecek...</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ayarlar</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <p className="text-gray-600">Sistem ayarları burada gösterilecek...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}