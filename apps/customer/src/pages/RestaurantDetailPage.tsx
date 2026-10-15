import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Clock, Truck, MapPin, Phone, Heart, Share2, Plus, Minus, ChevronLeft } from 'lucide-react';

const mockMenu = {
  '1': {
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    reviewCount: 234,
    time: '25-35 min',
    deliveryFee: 49,
    minOrder: 199,
    address: '123 Food Street, Mumbai',
    phone: '+91 22 1234 5678',
    categories: [
      {
        name: 'Pizzas',
        items: [
          { id: 'p1', name: 'Margherita Pizza', description: 'Classic tomato sauce, mozzarella, basil', price: 249, available: true },
          { id: 'p2', name: 'Pepperoni Pizza', description: 'Margherita with pepperoni slices', price: 349, available: true },
          { id: 'p3', name: 'Veggie Supreme', description: 'Mixed vegetables, olives, onions', price: 399, available: true },
        ],
      },
      {
        name: 'Sides',
        items: [
          { id: 's1', name: 'Garlic Bread', description: 'Crispy bread with garlic butter', price: 99, available: true },
          { id: 's2', name: 'Caesar Salad', description: 'Fresh lettuce, croutons, parmesan', price: 149, available: true },
        ],
      },
    ],
  },
};

export function RestaurantDetailPage() {
  const { id } = useParams();
  const restaurant = mockMenu[id as keyof typeof mockMenu];

  if (!restaurant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Restaurant not found</h1>
        <Link to="/search" className="text-orange-500 mt-4 inline-block">Back to search</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-100 h-64 flex items-center justify-center text-8xl">
        {'\uD83C\uDF55'}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
              <p className="text-gray-500 mt-1">{restaurant.cuisine}</p>
              <div className="flex items-center mt-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-medium">{restaurant.rating}</span>
                <span className="ml-2 text-gray-400">({restaurant.reviewCount} reviews)</span>
                <Clock className="w-4 h-4 text-gray-400 ml-3" />
                <span className="ml-1">{restaurant.time}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{restaurant.address}</span>
            <Phone className="w-4 h-4 ml-4 mr-1" />
            <span>{restaurant.phone}</span>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <Truck className="w-4 h-4 mr-1" />
            <span>Delivery fee: Rs {restaurant.deliveryFee}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>Min order: Rs {restaurant.minOrder}</span>
          </div>
        </div>

        <div className="mt-6">
          {restaurant.categories.map((category) => (
            <div key={category.name} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      <div className="flex items-center mt-2">
                        <span className="font-bold text-orange-600">Rs {item.price}</span>
                        <button className="ml-3 flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                          <Minus className="w-4 h-4" />
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl ml-4">
                      {'\uD83C\uDF55'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}