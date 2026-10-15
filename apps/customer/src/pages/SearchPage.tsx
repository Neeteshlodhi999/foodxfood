import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck } from 'lucide-react';

const mockRestaurants = [
  { id: '1', name: 'Pizza Palace', cuisine: 'Italian', rating: 4.5, time: '25-35 min', deliveryFee: 49 },
  { id: '2', name: 'Burger Barn', cuisine: 'American', rating: 4.3, time: '20-30 min', deliveryFee: 39 },
  { id: '3', name: 'Sushi Zen', cuisine: 'Japanese', rating: 4.7, time: '30-40 min', deliveryFee: 79 },
  { id: '4', name: 'Taco Town', cuisine: 'Mexican', rating: 4.2, time: '20-30 min', deliveryFee: 39 },
  { id: '5', name: 'Spice Route', cuisine: 'Indian', rating: 4.6, time: '25-35 min', deliveryFee: 29 },
  { id: '6', name: 'Dragon Wok', cuisine: 'Chinese', rating: 4.4, time: '25-35 min', deliveryFee: 59 },
];

export function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Restaurants</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines, or dishes..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurant/${restaurant.id}`}
            className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-6xl">
              {'\uD83C\uDF55'}
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
    </div>
  );
}