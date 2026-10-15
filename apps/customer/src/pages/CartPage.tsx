import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const mockCartItems = [
  { id: '1', name: 'Margherita Pizza', price: 249, quantity: 1 },
  { id: '2', name: 'Garlic Bread', price: 99, quantity: 2 },
];

export function CartPage() {
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 49;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Link to="/search" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
      </div>

      {mockCartItems.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Add some delicious food to get started</p>
          <Link to="/search" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {mockCartItems.map((item) => (
              <div key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  {'\uD83C\uDF55'}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-orange-600 font-bold">Rs {item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">Rs {deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes</span>
                <span className="font-medium">Included</span>
              </div>
              <div className="border-t border-gray-200 my-3" />
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-orange-600 text-lg">Rs {total}</span>
              </div>
            </div>
            <Link to="/checkout" className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 block text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}