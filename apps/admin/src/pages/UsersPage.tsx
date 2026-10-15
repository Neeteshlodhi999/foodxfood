import React from 'react';
import { Search, User, Phone, MapPin, ShoppingBag } from 'lucide-react';

const users = [
  { id: '1', name: 'Rahul Sharma', email: 'rahul@email.com', phone: '+91 98765 43210', role: 'Customer', orders: 24, status: 'Active', joined: 'Jan 2026' },
  { id: '2', name: 'Priya Patel', email: 'priya@email.com', phone: '+91 98765 43211', role: 'Customer', orders: 18, status: 'Active', joined: 'Feb 2026' },
  { id: '3', name: 'Raj Mehta', email: 'raj@pizzapalace.in', phone: '+91 98765 43212', role: 'Restaurant', orders: 0, status: 'Active', joined: 'Mar 2026' },
  { id: '4', name: 'Amit Kumar', email: 'amit@email.com', phone: '+91 98765 43213', role: 'Customer', orders: 5, status: 'Blocked', joined: 'Apr 2026' },
  { id: '5', name: 'Raj Kumar', email: 'raj@delivery.in', phone: '+91 98765 43214', role: 'Delivery', orders: 156, status: 'Active', joined: 'May 2026' },
];

export function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">User Management</h1>
      <p className="text-gray-500 mb-6">View and manage all platform users</p>

      <div className="relative mb-6 max-w-md">
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-6 py-3 font-medium">User</th>
              <th className="text-left px-6 py-3 font-medium">Contact</th>
              <th className="text-left px-6 py-3 font-medium">Role</th>
              <th className="text-left px-6 py-3 font-medium">Orders</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <div className="flex items-center"><Phone className="w-4 h-4 mr-1" />{user.phone}</div>
                </td>
                <td className="px-6 py-4 text-gray-700">{user.role}</td>
                <td className="px-6 py-4 text-gray-700">{user.orders}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}