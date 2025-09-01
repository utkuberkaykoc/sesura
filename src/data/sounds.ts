import { Sound, Presets } from '../types';

export const sounds: Sound[] = [
  {
    id: 'rain',
    name: 'Yağmur',
    icon: '🌧️',
    color: 'ambient-rain',
    url: '/sounds/rain.mp3',
    defaultVolume: 0.5
  },
  {
    id: 'thunder',
    name: 'Gök Gürültüsü',
    icon: '⚡',
    color: 'ambient-thunder',
    url: '/sounds/thunder.mp3',
    defaultVolume: 0.3
  },
  {
    id: 'fire',
    name: 'Ateş',
    icon: '🔥',
    color: 'ambient-fire',
    url: '/sounds/fire.mp3',
    defaultVolume: 0.6
  },
  {
    id: 'birds',
    name: 'Kuşlar',
    icon: '🐦',
    color: 'ambient-birds',
    url: '/sounds/birds.mp3',
    defaultVolume: 0.4
  },
  {
    id: 'forest',
    name: 'Orman',
    icon: '🌲',
    color: 'ambient-forest',
    url: '/sounds/forest.mp3',
    defaultVolume: 0.5
  },
  {
    id: 'cafe',
    name: 'Kafe',
    icon: '☕',
    color: 'ambient-cafe',
    url: '/sounds/cafe.mp3',
    defaultVolume: 0.4
  },
  {
    id: 'city',
    name: 'Şehir',
    icon: '🏙️',
    color: 'ambient-city',
    url: '/sounds/city.mp3',
    defaultVolume: 0.3
  },
  {
    id: 'water',
    name: 'Su',
    icon: '💧',
    color: 'ambient-water',
    url: '/sounds/water.mp3',
    defaultVolume: 0.5
  },
  {
    id: 'wind',
    name: 'Rüzgar',
    icon: '🌪️',
    color: 'ambient-wind',
    url: '/sounds/wind.mp3',
    defaultVolume: 0.4
  }
];

export const presets: Presets = {
  'rainy-night': {
    name: 'Yağmurlu Gece',
    description: 'Huzurlu bir yağmur gecesi',
    sounds: {
      rain: 0.7,
      thunder: 0.2,
      wind: 0.3
    },
    background: 'bg-gradient-rain'
  },
  'forest-morning': {
    name: 'Orman Sabahı',
    description: 'Kuş sesleriyle dolu orman sabahı',
    sounds: {
      forest: 0.6,
      birds: 0.5,
      wind: 0.3
    },
    background: 'bg-gradient-forest'
  },
  'cozy-cafe': {
    name: 'Sıcak Kafe',
    description: 'Rahat bir kafe atmosferi',
    sounds: {
      cafe: 0.5,
      city: 0.2,
      fire: 0.3
    },
    background: 'bg-gradient-cafe'
  },
  'city-evening': {
    name: 'Şehir Akşamı',
    description: 'Şehrin akşam sesleri',
    sounds: {
      city: 0.6,
      wind: 0.2,
      water: 0.3
    },
    background: 'bg-gradient-ambient'
  },
  'campfire-night': {
    name: 'Kamp Ateşi',
    description: 'Yıldızlı gökyüzü altında kamp ateşi',
    sounds: {
      fire: 0.8,
      forest: 0.4,
      wind: 0.2,
      birds: 0.1
    },
    background: 'bg-gradient-fire'
  },
  'ocean-breeze': {
    name: 'Okyanus Esintisi',
    description: 'Dalgaların huzur verici sesi',
    sounds: {
      water: 0.7,
      wind: 0.4,
      birds: 0.2
    },
    background: 'bg-gradient-water'
  },
  'stormy-weather': {
    name: 'Fırtınalı Hava',
    description: 'Güçlü fırtına atmosferi',
    sounds: {
      rain: 0.8,
      thunder: 0.6,
      wind: 0.5
    },
    background: 'bg-gradient-thunder'
  },
  'zen-garden': {
    name: 'Zen Bahçesi',
    description: 'Meditasyon için huzur verici ortam',
    sounds: {
      water: 0.5,
      wind: 0.3,
      birds: 0.2,
      forest: 0.2
    },
    background: 'bg-gradient-forest'
  },
  'urban-morning': {
    name: 'Şehir Sabahı',
    description: 'Şehrin uyanış sesleri',
    sounds: {
      city: 0.5,
      birds: 0.3,
      wind: 0.2,
      cafe: 0.2
    },
    background: 'bg-gradient-city'
  },
  'mountain-retreat': {
    name: 'Dağ İnzivası',
    description: 'Dağların sessizliği',
    sounds: {
      wind: 0.6,
      forest: 0.4,
      birds: 0.3,
      water: 0.2
    },
    background: 'bg-gradient-forest'
  },
  'cozy-winter': {
    name: 'Sıcak Kış',
    description: 'Şömine başında sıcak bir kış akşamı',
    sounds: {
      fire: 0.7,
      wind: 0.3,
      rain: 0.2
    },
    background: 'bg-gradient-fire'
  },
  'tropical-paradise': {
    name: 'Tropik Cennet',
    description: 'Tropik adanın huzur verici sesleri',
    sounds: {
      water: 0.6,
      birds: 0.5,
      wind: 0.3,
      forest: 0.3
    },
    background: 'bg-gradient-water'
  },
  'study-focus': {
    name: 'Çalışma Odası',
    description: 'Odaklanma için ideal ortam',
    sounds: {
      cafe: 0.7,
      city: 0.01,
      wind: 0.2
    },
    background: 'bg-gradient-cafe'
  },
  'sleep-inducing': {
    name: 'Uyku Getiren',
    description: 'Derin uyku için huzur verici sesler',
    sounds: {
      rain: 0.5,
      wind: 0.3,
      water: 0.2,
      fire: 0.2
    },
    background: 'bg-gradient-rain'
  },
  'creative-flow': {
    name: 'Yaratıcı Akış',
    description: 'Yaratıcılığı tetikleyen ortam',
    sounds: {
      cafe: 0.4,
      city: 0.3,
      birds: 0.2,
      wind: 0.2
    },
    background: 'bg-gradient-cafe'
  },
  'nature-symphony': {
    name: 'Doğa Senfonisi',
    description: 'Doğanın tüm seslerinin uyumu',
    sounds: {
      forest: 0.5,
      birds: 0.4,
      water: 0.3,
      wind: 0.3,
      rain: 0.2
    },
    background: 'bg-gradient-forest'
  }
};
