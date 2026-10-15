import React, { useState } from 'react';
import { Check, X, Search, Eye } from 'lucide-react';

const restaurants = [
  { id: '1', name: 'Pizza Palace', owner: 'Raj Mehta', cuisine: 'Italian', status: 'Approved', date: 'Oct 1, 2026', orders: 234, revenue: 124500 },
  { id: '2', name: 'Burger Barn', owner: 'Priya Patel', cuisine: 'American', status: 'Approved', date: 'Sep 28, 2026', orders: 189, revenue: 98700 },
  { id: '3', name: 'Dragon Noodle House', owner: 'Lisa Chen', cuisine: 'Chinese', status: 'Pending', date: 'Oct 14, 2026', orders: 0, revenue: 0 },
  { id: '4', name: 'Spice Garden', owner: 'Arjun Singh', cuisine: 'Indian', status: 'Pending', date: 'Oct 12, 2026', orders: 0, revenue: 0 },
  { id: '5', name: 'Sushi Zen', owner: 'Ken Tanaka', cuisine: 'Japanese', status: 'Rejected', date: 'Oct 10, 2026', orders: 0, revenue: 0 },
];

export function RestaurantsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = restaurants.filter(r => {
    const matchesFilter = filter === 'all' || r.status.toLowerCase() === filter;
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.owner.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Restaurant Management</h1>
      <p className="text-gray-500 mb-6">Approve, review, or manage restaurants on the platform</p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search restaurants or owners..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        <div className="flex space-x-2">
          {['all', 'approved', 'pending', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${
                filter === status ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Restaurant</th>
              <th className="text-left px-6 py-3 font-medium">Owner</th>
              <th className="text-left px-6 py-3 font-medium">Cuisine</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Orders</th>
              <th className="text-left px-6 py-3 font-medium">Revenue</th>
              <th className="text-left px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((restaurant) => (
              <tr key={restaurant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{restaurant.name}</td>
                <td className="px-6 py-4 text-gray-700">{restaurant.owner}</td>
                <td className="px-6 py-4 text-gray-700">{restaurant.cuisine}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    restaurant.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    restaurant.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {restaurant.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{restaurant.orders}</td>
                <td className="px-6 py-4 text-gray-700">Rs {restaurant.revenue}</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded"><Eye className="w-4 h-4" /></button>
                  {restaurant.status === 'Pending' && (
                    <>
                      <button className="p-1 text-green-600 hover:bg-green-50 rounded"><Check className="w-4 h-4" /></button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded"><X className="w-4 h-4" /></button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}