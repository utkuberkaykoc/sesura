# 🎵 Sesura - Ambient Ses Karıştırıcı

Modern ve interaktif bir ambient ses karıştırma uygulaması - çoklu ses katmanlarını birleştirerek kişiselleştirilmiş huzur ortamları yaratmanızı sağlayan React tabanlı web uygulaması. 9 farklı ambient ses, 16 hazır preset ve gelişmiş ses yönetimi ile profesyonel bir ses deneyimi sunar.

> **Staj Projesi**: Bu proje, 2024-2025 yaz stajı kapsamında geliştirilmiştir.
> **Demo Websitesi**: Projeyi incelemek için (sesura.berkaykoc.net)[https://sesura.berkaykoc.net] adresini ziyaret edebilirsiniz.

## 🎵 Proje Hakkında

Sesura, kullanıcıların farklı ambient sesleri (yağmur, orman, ateş, kuşlar, şehir sesleri vb.) karıştırarak kendi huzur ortamlarını yaratmalarını sağlayan modern bir web uygulamasıdır. Web Audio API kullanarak gerçek zamanlı ses işleme, preset sistemi ve dinamik arka plan değişimleri ile kullanıcı deneyimini en üst seviyeye çıkarır.

## ✨ Özellikler

### 🎵 Ses Yönetimi
- **9 Farklı Ambient Ses**: Yağmur, gök gürültüsü, ateş, kuşlar, orman, kafe, şehir, su, rüzgar
- **Gerçek Zamanlı Karıştırma**: Anlık ses seviyesi ayarlama
- **Lazy Loading**: Performans için ses dosyalarını gerektiğinde yükleme
- **Loop Sistemi**: Kesintisiz ses döngüleri
- **Volume Control**: Hassas ses seviyesi kontrolü

### 🎨 Görsel Deneyim
- **Dinamik Arka Plan**: Aktif seslere göre değişen gradyanlar
- **Smooth Transitions**: Yumuşak geçiş animasyonları
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Temiz ve kullanıcı dostu arayüz
- **Icon System**: Her ses için özel emoji ikonları

### 🎛️ Preset Sistemi
- **16 Hazır Preset**: Farklı atmosferler için önceden ayarlanmış karışımlar
 - **Yağmurlu Gece**: Huzurlu yağmur atmosferi
 - **Orman Sabahı**: Kuş sesleriyle dolu orman
 - **Sıcak Kafe**: Rahat kafe atmosferi
 - **Kamp Ateşi**: Yıldızlı gökyüzü altında kamp
 - **Okyanus Esintisi**: Dalgaların huzur verici sesi
 - **Fırtınalı Hava**: Güçlü fırtına atmosferi
 - **Zen Bahçesi**: Meditasyon için huzur verici ortam
 - **Şehir Sabahı**: Şehrin uyanış sesleri
 - **Dağ İnzivası**: Dağların sessizliği
 - **Sıcak Kış**: Şömine başında kış akşamı
 - **Tropik Cennet**: Tropik adanın huzur verici sesleri
 - **Çalışma Odası**: Odaklanma için ideal ortam
 - **Uyku Getiren**: Derin uyku için huzur verici sesler
 - **Yaratıcı Akış**: Yaratıcılığı tetikleyen ortam
 - **Doğa Senfonisi**: Doğanın tüm seslerinin uyumu


### 💾 Kaydetme Sistemi
- **Karışım Kaydetme**: Kişisel ses karışımlarını kaydetme
- **LocalStorage**: Tarayıcıda kalıcı veri saklama
- **Hızlı Yükleme**: Kayıtlı karışımları anında yükleme
- **Çoklu Karışım**: Birden fazla karışım kaydetme

### ⏰ Zamanlayıcı
- **Otomatik Durdurma**: Belirlenen süre sonunda sesleri durdurma
- **Esnek Süre**: İstenilen dakika ayarlama
- **Uyarı Sistemi**: Süre dolduğunda bildirim

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adım Adım Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/utkuberkaykoc/sesura.git
cd sesura
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm start
# veya
yarn start
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
sesura/
├── public/
│   ├── sounds/                 # Ses dosyaları
│   │   ├── rain.mp3           # Yağmur sesi
│   │   ├── thunder.mp3        # Gök gürültüsü
│   │   ├── fire.mp3           # Ateş sesi
│   │   ├── birds.mp3          # Kuş sesleri
│   │   ├── forest.mp3         # Orman sesi
│   │   ├── cafe.mp3           # Kafe sesi
│   │   ├── city.mp3           # Şehir sesi
│   │   ├── water.mp3          # Su sesi
│   │   └── wind.mp3           # Rüzgar sesi
│   └── index.html             # Ana HTML dosyası
├── src/
│   ├── components/            # React bileşenleri
│   │   ├── SoundCard.js       # Ses kartı bileşeni
│   │   ├── PresetSection.js   # Preset seçim bölümü
│   │   └── ControlPanel.js    # Kontrol paneli
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAudioManager.js # Ses yönetimi hook'u
│   │   └── useLocalStorage.js # LocalStorage hook'u
│   ├── data/                  # Veri dosyaları
│   │   └── sounds.js          # Ses ve preset tanımları
│   ├── App.js                 # Ana uygulama bileşeni
│   ├── index.js               # Uygulama giriş noktası
│   └── index.css              # Global stiller
├── package.json               # Proje bağımlılıkları
├── tailwind.config.js         # Tailwind CSS yapılandırması
└── postcss.config.js          # PostCSS yapılandırması
```

## 📝 Kullanım

### 🎵 Temel Kullanım
1. **Ses Seçimi**: İstediğiniz sesleri aktif hale getirin
2. **Seviye Ayarlama**: Her sesin seviyesini slider ile ayarlayın
3. **Karışım Oluşturma**: Farklı sesleri birleştirerek kendi atmosferinizi yaratın
4. **Kaydetme**: Beğendiğiniz karışımı kaydedin

### 🎛️ Preset Kullanımı
1. **Preset Seçimi**: Hazır atmosferlerden birini seçin
2. **Otomatik Ayarlama**: Ses seviyeleri otomatik olarak ayarlanır
3. **Arka Plan Değişimi**: Atmosfere uygun arka plan gradyanı
4. **Özelleştirme**: Preset üzerinde değişiklik yapabilirsiniz

### ⏰ Zamanlayıcı Kullanımı
1. **Süre Belirleme**: İstediğiniz dakikayı seçin
2. **Otomatik Durdurma**: Süre dolduğunda sesler otomatik durur
3. **Uyarı**: Bildirim ile bilgilendirme

### 💾 Kaydetme Sistemi
1. **Karışım Kaydetme**: "Kaydet" butonuna tıklayın
2. **İsim Verme**: Karışımınıza isim verin
3. **Hızlı Erişim**: Kayıtlı karışımlar listede görünür
4. **Yükleme**: Kayıtlı karışımı tek tıkla yükleyin

## 🛠️ Teknolojiler

### Frontend Framework
- **React 18.2.0**: Modern kullanıcı arayüzü kütüphanesi
- **Create React App**: Hızlı geliştirme ortamı
- **JavaScript ES6+**: Modern JavaScript özellikleri
- **Tailwind CSS**: Utility-first CSS framework

### Ses Teknolojileri
- **Web Audio API**: Gelişmiş ses işleme
- **AudioContext**: Gerçek zamanlı ses manipülasyonu
- **BufferSource**: Ses dosyası yönetimi
- **GainNode**: Ses seviyesi kontrolü
- **Lazy Loading**: Performans optimizasyonu

### Görsel Teknolojiler
- **Tailwind CSS**: Responsive tasarım sistemi
- **CSS Gradients**: Dinamik arka plan efektleri
- **CSS Transitions**: Smooth animasyonlar
- **Lucide React**: Modern ikon kütüphanesi
- **Responsive Grid**: Esnek layout sistemi

### Veri Yönetimi
- **LocalStorage**: Tarayıcı veri saklama
- **Custom Hooks**: React state yönetimi
- **useState/useEffect**: Component state kontrolü
- **useCallback**: Performans optimizasyonu

### Geliştirme Araçları
- **ESLint**: Kod kalitesi kontrolü
- **PostCSS**: CSS işleme
- **Autoprefixer**: CSS uyumluluk
- **Create React App**: Geliştirme ortamı

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: #0ea5e9 (Mavi tonları)
- **Rain**: #3b82f6 (Mavi)
- **Thunder**: #1e40af (Koyu mavi)
- **Fire**: #f97316 (Turuncu)
- **Birds**: #22c55e (Yeşil)
- **Forest**: #16a34a (Koyu yeşil)
- **Cafe**: #a855f7 (Mor)
- **City**: #6b7280 (Gri)
- **Water**: #06b6d4 (Turkuaz)
- **Wind**: #84cc16 (Açık yeşil)

### Tipografi
- **Font**: System fonts (sans-serif)
- **Başlık**: 4xl, bold
- **Alt Başlık**: xl, semibold
- **Metin**: base, normal

### Animasyonlar
- **Fade In**: Giriş animasyonları
- **Slide Up**: Yukarı kayma efektleri
- **Pulse Slow**: Yavaş nabız efekti
- **Smooth Transitions**: Yumuşak geçişler

## 🚀 Production Build

### Build Alma
```bash
npm run build
```

### Production Sunucusu
```bash
npm start
```

## 🚀 Deployment

### Platform Seçenekleri
- **Vercel**: React uygulamaları için optimize edilmiş platform
- **Netlify**: Statik site hosting
- **GitHub Pages**: Ücretsiz hosting
- **AWS Amplify**: AWS tabanlı hosting

### Deployment Adımları
```bash
# Build alın
npm run build

# Production sunucusunu başlatın
npm start
```

## 📊 Performans

### Optimizasyonlar
- **Lazy Loading**: Ses dosyalarını gerektiğinde yükleme
- **Audio Buffer Caching**: Ses dosyalarını önbellekleme
- **Memory Management**: Etkin bellek yönetimi
- **Code Splitting**: Otomatik chunk bölme
- **Bundle Optimization**: Webpack optimizasyonu

### Lighthouse Skorları
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📱 Responsive Tasarım

### Ekran Boyutları
- **Desktop**: 3 sütunlu grid layout
- **Tablet**: 2 sütunlu layout
- **Mobile**: Tek sütunlu layout

### Özellikler
- **Adaptive Grid**: Ekran boyutuna göre uyarlanır
- **Touch Friendly**: Mobil dokunmatik optimizasyonu
- **Flexible Controls**: Responsive kontrol paneli
- **Cross-Platform**: Tüm cihazlarda uyumlu

## 🔧 Geliştirme

### Yeni Ses Ekleme
1. `public/sounds/` klasörüne ses dosyası ekleyin
2. `src/data/sounds.js` dosyasında ses tanımı yapın
3. Tailwind config'de renk tanımı ekleyin

### Yeni Preset Ekleme
```javascript
// src/data/sounds.js
export const presets = {
  'new-preset': {
    name: 'Yeni Preset',
    description: 'Preset açıklaması',
    sounds: {
      rain: 0.5,
      fire: 0.3
    },
    background: 'bg-gradient-rain'
  }
};
```

### Yeni Bileşen Ekleme
```javascript
// src/components/NewComponent.js
import React from 'react';

export default function NewComponent() {
  return (
    <div className="bg-white rounded-lg p-4">
      {/* Bileşen içeriği */}
    </div>
  );
}
```

### Stil Özelleştirme
- Ana stiller: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Responsive tasarım: Tailwind utility classes

## 🤝 Katkıda Bulunma

### Geliştirme Süreci
1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Kod Standartları
- **JavaScript**: ES6+ standartları
- **ESLint**: Kod kalitesi kontrolü
- **Prettier**: Kod formatı
- **Conventional Commits**: Commit mesajları

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Proje Sahibi**: Berkay Koç
- **Email**: iletisim@berkaykoc.net
- **GitHub**: github.com/utkuberkaykoc

## 🙏 Teşekkürler

Huzur verici ses deneyimleri yaratmamıza yardımcı olan bu ambient ses karıştırma uygulamasını geliştirdik. Tüm katkıda bulunanlara teşekkürler!

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
