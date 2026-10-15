import React from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';

const menuCategories = [
  {
    name: 'Pizzas',
    items: [
      { id: '1', name: 'Margherita Pizza', price: 249, available: true },
      { id: '2', name: 'Pepperoni Pizza', price: 349, available: true },
      { id: '3', name: 'Veggie Supreme', price: 399, available: false },
    ],
  },
  {
    name: 'Sides',
    items: [
      { id: '4', name: 'Garlic Bread', price: 99, available: true },
      { id: '5', name: 'Caesar Salad', price: 149, available: true },
    ],
  },
];

export function MenuPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-gray-500">Add, edit, or remove items from your menu</p>
        </div>
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600">
          <Plus className="w-5 h-5 mr-2" />
          Add Item
        </button>
      </div>

      <div className="space-y-6">
        {menuCategories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{category.name}</h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                      {'\uD83C\uDF55'}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-orange-600 font-bold">Rs {item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm ${item.available ? 'text-green-600' : 'text-red-600'}`}>
                      {item.available ? 'Available' : 'Unavailable'}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}