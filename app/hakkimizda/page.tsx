'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: 'Mehmet Kaya',
      position: 'Kurucu & CEO',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20in%20elegant%20suit%20standing%20confidently%2C%20luxury%20jewelry%20store%20owner%20portrait%2C%20clean%20white%20background%2C%20professional%20headshot%20photography%2C%20middle-aged%20Turkish%20man&width=300&height=300&seq=team-ceo&orientation=squarish',
      description: '25 yıllık mücevher sektörü deneyimi'
    },
    {
      name: 'Ayşe Demir',
      position: 'Tasarım Direktörü',
      image: 'https://readdy.ai/api/search-image?query=elegant%20professional%20woman%20jewelry%20designer%20in%20sophisticated%20attire%2C%20creative%20director%20portrait%2C%20clean%20white%20background%2C%20professional%20headshot%20photography%2C%20Turkish%20woman%20with%20artistic%20background&width=300&height=300&seq=team-designer&orientation=squarish',
      description: 'Uluslararası mücevher tasarım uzmanı'
    },
    {
      name: 'Ali Özkan',
      position: 'Üretim Müdürü',
      image: 'https://readdy.ai/api/search-image?query=professional%20craftsman%20jeweler%20in%20workshop%20setting%2C%20experienced%20jewelry%20maker%20portrait%2C%20clean%20background%2C%20professional%20headshot%20photography%2C%20Turkish%20artisan%20with%20expertise&width=300&height=300&seq=team-production&orientation=squarish',
      description: 'El işçiliği ve kalite kontrol uzmanı'
    }
  ];

  const milestones = [
    {
      year: '1999',
      title: 'Kuruluş',
      description: 'İstanbul Kapalıçarşı\'da ilk mağazamızı açtık'
    },
    {
      year: '2005',
      title: 'Büyüme',
      description: 'İkinci mağazamızı Nişantaşı\'nda hizmete açtık'
    },
    {
      year: '2012',
      title: 'Dijital Dönüşüm',
      description: 'Online satış platformumuzu hayata geçirdik'
    },
    {
      year: '2018',
      title: 'Uluslararasılaşma',
      description: 'Avrupa pazarına açıldık'
    },
    {
      year: '2024',
      title: 'Yenilenme',
      description: 'Modern web sitesi ve gelişmiş hizmetler'
    }
  ];

  const values = [
    {
      icon: 'ri-diamond-line',
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında ürünler sunuyoruz'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Güvenilirlik',
      description: '25 yıllık deneyimimizle güvenilir hizmet'
    },
    {
      icon: 'ri-heart-line',
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri memnuniyeti bizim önceliğimiz'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sürdürülebilirlik',
      description: 'Çevre dostu ve etik üretim süreçleri'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=luxury%20jewelry%20workshop%20with%20craftsman%20working%20on%20diamond%20ring%2C%20elegant%20jewelry%20store%20interior%20with%20display%20cases%2C%20professional%20craftsmanship%20environment%2C%20warm%20lighting%2C%20Turkish%20jewelry%20atelier&width=1920&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              25 yıldır mücevher sektöründe, zarafet ve kalitенin buluşma noktası
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  1999 yılında İstanbul Kapalıçarşı'da küçük bir atölyede başlayan yolculuğumuz, 
                  bugün Türkiye'nin önde gelen mücevher markalarından biri haline geldi.
                </p>
                <p>
                  25 yıllık deneyimimizle, geleneksel el sanatlarını modern tasarım anlayışı 
                  ile birleştirerek, her biri özel olan mücevherler yaratıyoruz.
                </p>
                <p>
                  Kalite, güvenilirlik ve müşteri memnuniyeti ilkelerimizle, binlerce mutlu 
                  müşteriye hizmet vermenin gururunu yaşıyoruz.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=vintage%20jewelry%20workshop%20interior%20with%20traditional%20Turkish%20craftsman%20tools%2C%20antique%20jewelry%20making%20equipment%2C%20warm%20ambient%20lighting%2C%20historical%20craftsmanship%20setting%2C%20artisan%20workspace&width=600&height=400&seq=story-image&orientation=landscape"
                alt="Atölyemiz"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">Yolculuğumuz</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow"></div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ekibimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alanında uzman ekibimizle sizlere en iyi hizmeti sunuyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın veya mağazalarımızı ziyaret edin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              İletişim
            </Link>
            <Link 
              href="/koleksiyonlar"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Koleksiyonları Keşfet
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}