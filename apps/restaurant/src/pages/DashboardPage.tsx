import React from 'react';
import { ShoppingBag, Clock, CheckCircle, XCircle, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Orders Today', value: '24', change: '+12%', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Pending', value: '3', change: '', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Completed', value: '18', change: '', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Cancelled', value: '3', change: '', icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
  { label: 'Revenue Today', value: 'Rs 12,450', change: '+15%', icon: DollarSign, color: 'text-orange-600', bg: 'bg-orange-50' },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Rahul Sharma', items: 3, total: 549, status: 'pending', time: '2 min ago' },
  { id: 'ORD-002', customer: 'Priya Patel', items: 2, total: 399, status: 'confirmed', time: '5 min ago' },
  { id: 'ORD-003', customer: 'Amit Kumar', items: 4, total: 749, status: 'preparing', time: '10 min ago' },
  { id: 'ORD-004', customer: 'Sneha Reddy', items: 1, total: 249, status: 'out_for_delivery', time: '15 min ago' },
];

export function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  {stat.change && <p className="text-sm text-green-600 mt-1">{stat.change}</p>}
                </div>
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Total</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100">
                  <td className="py-3 font-medium text-gray-900">{order.id}</td>
                  <td className="py-3 text-gray-700">{order.customer}</td>
                  <td className="py-3 text-gray-700">{order.items}</td>
                  <td className="py-3 font-medium">Rs {order.total}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      order.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                      order.status === 'preparing' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {order.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}