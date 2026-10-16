import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Truck, MapPin, Search, X } from 'lucide-react';
import { mockRestaurants, categories, filterRestaurants } from '../data/restaurants';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRestaurants = filterRestaurants(mockRestaurants, searchQuery, selectedCategory);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  const hasFilters = searchQuery !== '' || selectedCategory !== '';

  return (
    <div>
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Delicious food delivered to your door
            </h1>
            <p className="text-lg md:text-xl mb-8 text-orange-50 max-w-xl">
              Order from the best restaurants near you. Fast delivery, great prices, and delicious meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/search"
                className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Order Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Browse Restaurants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by category</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? '' : cat.name)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all hover:shadow-md ${
                selectedCategory === cat.name
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-4xl mb-2">{cat.emoji}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Get food delivered in 30 minutes or less</h2>
            <p className="text-green-50">Order now and enjoy fast delivery.</p>
          </div>
          <Link
            to="/search"
            className="mt-4 md:mt-0 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {hasFilters ? 'Results' : 'Popular near you'}
            </h2>
            {hasFilters && (
              <p className="text-sm text-gray-500 mt-1">
                {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} found
                {selectedCategory && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            )}
          </div>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-orange-500 font-medium flex items-center hover:text-orange-600"
            >
              <X className="w-4 h-4 mr-1" />
              Reset filters
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
      </section>
    </div>
  );
}
