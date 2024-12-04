import { ShortOfferType } from '../types/types';

const favorites: ShortOfferType[] = [
  {
    id: 'f97c0500-1c51-412d-a72d-1e0da4da4762',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 219,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5,
  },
  {
    id: '65435c47-cd3d-432a-9f65-546d1f1885f4',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 421,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
  },
  {
    id: '60d9eeb3-c499-4567-b380-896cfcd20a38',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 105,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.5,
  },
];

export { favorites };
