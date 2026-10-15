import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Truck } from 'lucide-react';

const mockRestaurants = [
  { id: '1', name: 'Pizza Palace', cuisine: 'Italian', rating: 4.5, time: '25-35 min', deliveryFee: 49, image: '🍕' },
  { id: '2', name: 'Burger Barn', cuisine: 'American', rating: 4.3, time: '20-30 min', deliveryFee: 39, image: '🍔' },
  { id: '3', name: 'Sushi Zen', cuisine: 'Japanese', rating: 4.7, time: '30-40 min', deliveryFee: 79, image: '🍣' },
  { id: '4', name: 'Taco Town', cuisine: 'Mexican', rating: 4.2, time: '20-30 min', deliveryFee: 39, image: '🌮' },
  { id: '5', name: 'Spice Route', cuisine: 'Indian', rating: 4.6, time: '25-35 min', deliveryFee: 29, image: '🍛' },
  { id: '6', name: 'Dragon Wok', cuisine: 'Chinese', rating: 4.4, time: '25-35 min', deliveryFee: 59, image: '🍜' },
];

const categories = [
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Burgers', emoji: '🍔' },
  { name: 'Sushi', emoji: '🍣' },
  { name: 'Indian', emoji: '🍛' },
  { name: 'Chinese', emoji: '🍜' },
  { name: 'Desserts', emoji: '🍰' },
];

export function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food delivered to your door
            </h1>
            <p className="text-lg md:text-xl mb-8 text-orange-50">
              Order from the best restaurants in your city. Fast delivery, great prices.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Order Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by category</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/search"
              className="flex flex-col items-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-2">{cat.emoji}</span>
              <span className="text-sm font-medium text-gray-700">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular restaurants</h2>
          <Link to="/search" className="text-orange-500 font-medium flex items-center">
            See all
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-6xl">
                {restaurant.image}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{restaurant.name}</h3>
                <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                <div className="flex items-center mt-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 font-medium">{restaurant.rating}</span>
                  <Clock className="w-4 h-4 text-gray-400 ml-3" />
                  <span className="ml-1">{restaurant.time}</span>
                  <Truck className="w-4 h-4 text-gray-400 ml-3" />
                  <span className="ml-1">Rs {restaurant.deliveryFee}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}