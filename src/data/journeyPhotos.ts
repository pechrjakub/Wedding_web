export type JourneyPhoto = {
  year: string;
  title: string;
  description: string;
  image: string;
};

export const journeyPhotos: JourneyPhoto[] = [
  {
    year: '2020',
    title: 'První společná dovolená',
    description: 'Místo, kde jsme si uvědomili, že spolu zvládneme všechno.',
    image: '/images/Prvni_dovolena.jpg',
  },
  {
    year: '2024',
    title: 'Zásnuby',
    description: 'Den, kdy jsme si řekli, že spolu chceme být napořád.',
    image: '/images/Zasnuby.jpg',
  },
];