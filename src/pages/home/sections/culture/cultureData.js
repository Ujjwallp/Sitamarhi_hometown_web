import madhubaniArt from '@/pages/home/sections/culture/images/madhubani-art.jpg';
import chhathPuja from '@/pages/home/sections/culture/images/chhath-puja.jpg';
import mithilaPainting from '@/pages/home/sections/culture/images/mithila-painting.jpg';
import tirhutaScript from '@/pages/home/sections/culture/images/tirhuta-script.jpg';

export const cultureItems = [
  {
    id: 'madhubani-art',
    title: 'Madhubani Art',
    description: 'A world-renowned folk art form from the Mithila region, characterized by intricate geometric patterns, vibrant natural dyes, and depictions of deities, flora, and fauna.',
    image: madhubaniArt,
    fact: 'Received GI (Geographical Indication) tag from the Government of India.',
    tag: 'Art',
    tagColor: 'from-rose-500 to-pink-600',
  },
  {
    id: 'chhath-puja',
    title: 'Chhath Puja',
    description: 'The most significant festival of Bihar, dedicated to Surya Dev (the Sun God). Devotees offer prayers at riverbanks at sunrise and sunset in a deeply moving ritual of gratitude.',
    image: chhathPuja,
    fact: 'One of the most ancient Vedic festivals still celebrated in its original form.',
    tag: 'Festival',
    tagColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'mithila-culture',
    title: 'Mithila Culture',
    description: 'A rich heritage encompassing classical Maithili music, folk songs like Jhumar and Sohar, traditional cuisine, and age-old customs that have been preserved for millennia.',
    image: mithilaPainting,
    fact: 'Mithila is one of the oldest living cultural regions of South Asia.',
    tag: 'Heritage',
    tagColor: 'from-violet-500 to-purple-600',
  },
  {
    id: 'maithili-language',
    title: 'Maithili Language',
    description: 'The ancient literary language of the region and the cultural voice of Mithila. Historically written in Tirhuta script, it is celebrated for its deep historical and literary roots.',
    image: tirhutaScript,
    fact: 'Included in the Eighth Schedule of the Constitution of India in 2003.',
    tag: 'Language',
    tagColor: 'from-blue-500 to-indigo-600',
  },
];
