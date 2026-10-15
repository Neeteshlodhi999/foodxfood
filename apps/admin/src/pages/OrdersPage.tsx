import React from 'react';
import { Search, ShoppingBag, DollarSign } from 'lucide-react';

const orders = [
  { id: 'ORD-001', customer: 'Rahul Sharma', restaurant: 'Pizza Palace', items: 3, total: 549, status: 'Delivered', date: 'Oct 15, 2026' },
  { id: 'ORD-002', customer: 'Priya Patel', restaurant: 'Burger Barn', items: 2, total: 399, status: 'Out for Delivery', date: 'Oct 15, 2026' },
  { id: 'ORD-003', customer: 'Amit Kumar', restaurant: 'Spice Garden', items: 4, total: 749, status: 'Preparing', date: 'Oct 15, 2026' },
  { id: 'ORD-004', customer: 'Sneha Reddy', restaurant: 'Pizza Palace', items: 1, total: 249, status: 'Cancelled', date: 'Oct 14, 2026' },
  { id: 'ORD-005', customer: 'Vijay Singh', restaurant: 'Dragon Wok', items: 5, total: 1249, status: 'Delivered', date: 'Oct 14, 2026' },
];

export function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Management</h1>
      <p className="text-gray-500 mb-6">View and monitor all platform orders</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900">3,456</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">24</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-bold text-blue-600">67</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-2xl font-bold text-green-600">3,365</p>
        </div>
      </div>

      <div className="relative mb-6 max-w-md">
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Order ID</th>
              <th className="text-left px-6 py-3 font-medium">Customer</th>
              <th className="text-left px-6 py-3 font-medium">Restaurant</th>
              <th className="text-left px-6 py-3 font-medium">Items</th>
              <th className="text-left px-6 py-3 font-medium">Total</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-700">{order.restaurant}</td>
                <td className="px-6 py-4 text-gray-700">{order.items}</td>
                <td className="px-6 py-4 font-medium">Rs {order.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'Out for Delivery' ? 'bg-blue-100 text-blue-700' :
                    order.status === 'Preparing' ? 'bg-purple-100 text-purple-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}