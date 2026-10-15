import React, { useState } from 'react';
import { Save } from 'lucide-react';

export function SettingsPage() {
  const [form, setForm] = useState({
    name: 'Pizza Palace',
    phone: '+91 22 1234 5678',
    email: 'contact@pizzapalace.in',
    address: '123 Food Street, Mumbai 400001',
    cuisine: 'Italian',
    deliveryRadius: 5,
    minOrder: 199,
    deliveryFee: 49,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Restaurant Settings</h1>
      <p className="text-gray-500 mb-6">Update your restaurant information</p>

      <form className="bg-white rounded-xl p-6 shadow-sm space-y-6 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type</label>
            <select name="cuisine" value={form.cuisine} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none">
              <option>Italian</option><option>American</option><option>Indian</option><option>Chinese</option><option>Japanese</option><option>Mexican</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input type="text" name="address" value={form.address} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)</label>
            <input type="number" name="deliveryRadius" value={form.deliveryRadius} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Order (Rs)</label>
            <input type="number" name="minOrder" value={form.minOrder} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Fee (Rs)</label>
            <input type="number" name="deliveryFee" value={form.deliveryFee} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center">
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}