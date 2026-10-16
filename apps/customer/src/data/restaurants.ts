export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  time: string;
  deliveryFee: number;
  priceRange: string;
  image: string;
  imageAlt: string;
  category: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    time: '25-35 min',
    deliveryFee: 49,
    priceRange: 'Rs 200 - 500',
    image: '\uD83C\uDF55',
    imageAlt: 'Pizza',
    category: 'Pizza',
  },
  {
    id: '2',
    name: 'Burger Barn',
    cuisine: 'American',
    rating: 4.3,
    time: '20-30 min',
    deliveryFee: 39,
    priceRange: 'Rs 150 - 400',
    image: '\uD83C\uDF4D',
    imageAlt: 'Burger',
    category: 'Burgers',
  },
  {
    id: '3',
    name: 'Sushi Zen',
    cuisine: 'Japanese',
    rating: 4.7,
    time: '30-40 min',
    deliveryFee: 79,
    priceRange: 'Rs 500 - 1200',
    image: '\uD83C\uDF63',
    imageAlt: 'Sushi',
    category: 'Sushi',
  },
  {
    id: '4',
    name: 'Taco Town',
    cuisine: 'Mexican',
    rating: 4.2,
    time: '20-30 min',
    deliveryFee: 39,
    priceRange: 'Rs 200 - 450',
    image: '\uD83C\uDF2E',
    imageAlt: 'Tacos',
    category: 'Mexican',
  },
  {
    id: '5',
    name: 'Spice Route',
    cuisine: 'Indian',
    rating: 4.6,
    time: '25-35 min',
    deliveryFee: 29,
    priceRange: 'Rs 150 - 600',
    image: '\uD83C\uDF3B',
    imageAlt: 'Indian Curry',
    category: 'North Indian',
  },
  {
    id: '6',
    name: 'Dragon Wok',
    cuisine: 'Chinese',
    rating: 4.4,
    time: '25-35 min',
    deliveryFee: 59,
    priceRange: 'Rs 200 - 700',
    image: '\uD83C\uDF5C',
    imageAlt: 'Noodles',
    category: 'Chinese',
  },
  {
    id: '7',
    name: 'Biryani House',
    cuisine: 'Indian',
    rating: 4.8,
    time: '30-40 min',
    deliveryFee: 39,
    priceRange: 'Rs 250 - 550',
    image: '\uD83C\uDF5B',
    imageAlt: 'Biryani',
    category: 'Biryani',
  },
  {
    id: '8',
    name: 'Dosa Corner',
    cuisine: 'South Indian',
    rating: 4.5,
    time: '20-30 min',
    deliveryFee: 29,
    priceRange: 'Rs 100 - 300',
    image: '\uD83C\uDF5E',
    imageAlt: 'Dosa',
    category: 'South Indian',
  },
  {
    id: '9',
    name: 'Sweet Heaven',
    cuisine: 'Desserts',
    rating: 4.4,
    time: '15-25 min',
    deliveryFee: 29,
    priceRange: 'Rs 100 - 400',
    image: '\uD83C\uDF6A',
    imageAlt: 'Dessert',
    category: 'Desserts',
  },
];

export const categories = [
  { name: 'Biryani', emoji: '\uD83C\uDF5B' },
  { name: 'Pizza', emoji: '\uD83C\uDF55' },
  { name: 'Burgers', emoji: '\uD83C\uDF4D' },
  { name: 'North Indian', emoji: '\uD83C\uDF3B' },
  { name: 'South Indian', emoji: '\uD83C\uDF5E' },
  { name: 'Desserts', emoji: '\uD83C\uDF6A' },
];

export function filterRestaurants(
  restaurants: Restaurant[],
  query: string,
  category: string
): Restaurant[] {
  return restaurants.filter((r) => {
    const matchesQuery =
      query === '' ||
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === '' || r.category === category;
    return matchesQuery && matchesCategory;
  });
}