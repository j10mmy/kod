'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot' | 'admin';
  timestamp: Date;
  senderName?: string;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnectedToAdmin, setIsConnectedToAdmin] = useState(false);
  const [adminName, setAdminName] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // İlk açılışta hoşgeldin mesajı
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: 'Merhaba! BusinessIlver\'a hoş geldiniz. Size nasıl yardımcı olabilirim? 😊',
          sender: 'bot',
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    // Bot otomatik cevapları
    setTimeout(() => {
      setIsTyping(false);
      
      const userMessage = inputText.toLowerCase();
      let botResponse = '';
      
      if (userMessage.includes('merhaba') || userMessage.includes('selam')) {
        botResponse = 'Merhaba! Size nasıl yardımcı olabilirim?';
      } else if (userMessage.includes('fiyat') || userMessage.includes('ücret')) {
        botResponse = 'Fiyatlarımız hakkında detaylı bilgi için ürün sayfalarımızı inceleyebilir ya da canlı destek temsilcimizle görüşebilirsiniz.';
      } else if (userMessage.includes('kargo') || userMessage.includes('teslimat')) {
        botResponse = 'Kargo ücretsiz! 1-3 iş günü içinde teslim ediyoruz. Hızlı kargo seçeneği de mevcut.';
      } else if (userMessage.includes('iade') || userMessage.includes('değişim')) {
        botResponse = 'Mücevher ürünlerimizde hijyen ve güvenlik koşulları gereği iade ve değişim yapılmamaktadır.';
      } else if (userMessage.includes('ölçü') || userMessage.includes('beden')) {
        botResponse = 'Ölçü rehberimizi inceleyebilir veya size en uygun ölçüyü belirlemek için yardım alabilirsıniz.';
      } else if (userMessage.includes('temsilci') || userMessage.includes('insan') || userMessage.includes('canlı destek')) {
        botResponse = 'Sizi canlı destek temsilcimize bağlıyorum. Lütfen bekleyiniz...';
        
        // 2 saniye sonra admin bağlantısı simülasyonu
        setTimeout(() => {
          setIsConnectedToAdmin(true);
          setAdminName('Ayşe Hanım');
          setMessages(prev => [...prev, {
            id: prev.length + 2,
            text: 'Merhaba, ben Ayşe. Size nasıl yardımcı olabilirim? 👋',
            sender: 'admin',
            timestamp: new Date(),
            senderName: 'Ayşe Hanım'
          }]);
        }, 2000);
      } else {
        botResponse = 'Anlayamadım. Daha detaylı yardım için canlı destek temsilcimizle görüşebilirsiniz. "Temsilci" yazarak bağlanabilirsiniz.';
      }

      if (botResponse && !userMessage.includes('temsilci')) {
        setMessages(prev => [...prev, {
          id: prev.length + 2,
          text: botResponse,
          sender: isConnectedToAdmin ? 'admin' : 'bot',
          timestamp: new Date(),
          senderName: isConnectedToAdmin ? adminName : undefined
        }]);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center cursor-pointer animate-pulse"
        >
          <i className="ri-message-3-line text-2xl"></i>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-customer-service-line"></i>
              </div>
              <div>
                <h3 className="font-semibold">Canlı Destek</h3>
                <p className="text-xs opacity-90">
                  {isConnectedToAdmin ? `${adminName} - Online` : 'Bot Asistan - Online'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded cursor-pointer"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-br-none'
                      : message.sender === 'admin'
                      ? 'bg-green-100 text-gray-800 rounded-bl-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.senderName && (
                    <p className="text-xs font-medium mb-1 opacity-75">
                      {message.senderName}
                    </p>
                  )}
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
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer"
              >
                <i className="ri-send-plane-line text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}