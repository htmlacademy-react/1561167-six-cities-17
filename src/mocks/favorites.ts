import { FavoritesListType } from '../types/favorites';

const favorites: FavoritesListType = [
  {
    id: '86ef72ae-69aa-4a99-8124-cbb2e460d6bc',
    title: 'Nice, cozy, warm big bed apartment',
    description:
      'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'house',
    price: 756,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
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
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    goods: [
      'Kitchen',
      'Breakfast',
      'Coffee machine',
      'Wi-Fi',
      'Fridge',
      'Washer',
      'Cable TV',
      'Washing machine',
      'Heating',
      'Baby seat',
      'Towels',
      'Air conditioning',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: true,
    rating: 1.1,
    bedrooms: 1,
    maxAdults: 9,
  },
  {
    id: 'e49b9283-4cdc-4437-bade-b249a29ad933',
    title: 'House in countryside',
    description:
      'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'apartment',
    price: 456,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
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
      'Kitchen',
      'Washer',
      'Air conditioning',
      'Dishwasher',
      'Cable TV',
      'Heating',
      'Laptop friendly workspace',
      'Coffee machine',
      'Towels',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.6,
    bedrooms: 5,
    maxAdults: 4,
  },
  {
    id: '72c95075-91dc-44a7-83e3-2a15389b529f',
    title: 'Loft Studio in the Central Area',
    description:
      'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'house',
    price: 621,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
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
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16,
    },
    goods: [
      'Washing machine',
      'Laptop friendly workspace',
      'Washer',
      'Kitchen',
      'Heating',
      'Baby seat',
      'Dishwasher',
      'Breakfast',
      'Fridge',
      'Wi-Fi',
      'Cable TV',
      'Air conditioning',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: true,
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
  },
];

export { favorites };
