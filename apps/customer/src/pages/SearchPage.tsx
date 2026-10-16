import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, Search, X } from 'lucide-react';
import { mockRestaurants, categories, filterRestaurants } from '../data/restaurants';

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredRestaurants = filterRestaurants(mockRestaurants, searchQuery, selectedCategory);
  const hasFilters = searchQuery !== '' || selectedCategory !== '';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Restaurants</h1>

      <div className="mb-6">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines, or dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            aria-label="Search restaurants"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-sm font-medium text-gray-700">Categories:</span>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(selectedCategory === cat.name ? '' : cat.name)}
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === cat.name
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <X className="w-4 h-4" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900">No restaurants found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or category filter</p>
          <button
            onClick={clearFilters}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {restaurant.image}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{restaurant.name}</h3>
                <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                <div className="flex items-center mt-2 text-sm flex-wrap">
                  <span className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{restaurant.rating}</span>
                  </span>
                  <span className="flex items-center ml-3 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="ml-1">{restaurant.time}</span>
                  </span>
                  <span className="flex items-center ml-3 text-gray-500">
                    <Truck className="w-4 h-4" />
                    <span className="ml-1">Rs {restaurant.deliveryFee}</span>
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{restaurant.priceRange}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}