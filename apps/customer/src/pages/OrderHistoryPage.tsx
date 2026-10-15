import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, ChevronRight } from 'lucide-react';

const mockOrders = [
  { id: 'ORD-123456', restaurant: 'Pizza Palace', date: 'Oct 15, 2026', status: 'Delivered', total: 446, items: 3 },
  { id: 'ORD-123455', restaurant: 'Burger Barn', date: 'Oct 14, 2026', status: 'Delivered', total: 378, items: 2 },
  { id: 'ORD-123454', restaurant: 'Spice Route', date: 'Oct 12, 2026', status: 'Cancelled', total: 528, items: 4 },
];

export function OrderHistoryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Order History</h1>
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <Link key={order.id} to={`/track/${order.id}`} className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{order.restaurant}</h3>
                  <p className="text-sm text-gray-500">{order.id} | {order.date} | {order.items} items</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">Rs {order.total}</p>
                <span className={`text-xs px-2 py-1 rounded ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {order.status}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}