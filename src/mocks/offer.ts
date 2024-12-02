import { OfferType } from '../types/types';

const offer: OfferType = {
  id: 'f97c0500-1c51-412d-a72d-1e0da4da4762',
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  description:
    'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  type: 'apartment',
  price: 219,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
  ],
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
  goods: [
    'Wi-Fi',
    'Coffee machine',
    'Washing machine',
    'Air conditioning',
    'Fridge',
    'Cable TV',
    'Washer',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 3.5,
  bedrooms: 4,
  maxAdults: 1,
};

export { offer };
