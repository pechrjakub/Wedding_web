export type JourneyPhoto = {
  year: string;
  title: string;
  description: string;
  image: string;
};

export const journeyPhotos: JourneyPhoto[] = [
  {
    year: '2019',
    title: 'První setkání',
    description: 'KFC',
    image: '/images/Placeholder.png',
  },
  {
    year: '2020',
    title: 'Dali jsme se dohromady',
    description: 'EPIC',
    image: '/images/Placeholder.png',
  },
  {
    year: '2021',
    title: 'První společná dovolená',
    description: 'Místo, kde jsme si uvědomili, že spolu zvládneme všechno.',
    image: '/images/Placeholder.png',
  },
  {
    year: '2025',
    title: 'Zásnuby',
    description: 'Den, kdy jsme si řekli, že spolu chceme být napořád.',
    image: '/images/Placeholder.png',
  },
];