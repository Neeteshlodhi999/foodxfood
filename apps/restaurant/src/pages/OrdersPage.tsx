import React from 'react';
import { Check, X, Clock, ChefHat, Bike } from 'lucide-react';

const orders = [
  { id: 'ORD-001', customer: 'Rahul Sharma', address: 'Apt 402, Green Park, Andheri', items: 'Margherita Pizza x1, Garlic Bread x2', total: 447, status: 'pending', time: '2 min ago' },
  { id: 'ORD-002', customer: 'Priya Patel', address: 'Tech Park, Sector 15, Navi Mumbai', items: 'Pepperoni Pizza x1', total: 349, status: 'confirmed', time: '5 min ago' },
  { id: 'ORD-003', customer: 'Amit Kumar', address: 'Hill Road, Bandra', items: 'Veggie Supreme x2, Caesar Salad x1', total: 947, status: 'preparing', time: '10 min ago' },
  { id: 'ORD-004', customer: 'Sneha Reddy', address: 'Marine Drive, Mumbai', items: 'Margherita Pizza x1', total: 249, status: 'out_for_delivery', time: '15 min ago' },
];

const statusConfig = {
  pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Pending' },
  confirmed: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Confirmed' },
  preparing: { icon: ChefHat, color: 'text-purple-600', bg: 'bg-purple-50', label: 'Preparing' },
  out_for_delivery: { icon: Bike, color: 'text-green-600', bg: 'bg-green-50', label: 'Out for Delivery' },
};

export function OrdersPage() {
  const [filter, setFilter] = React.useState('all');

  const filteredOrders = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Orders</h1>
      <p className="text-gray-500 mb-6">Manage incoming orders and update their status</p>

      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {['all', 'pending', 'confirmed', 'preparing', 'out_for_delivery'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              filter === status ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {status === 'all' ? 'All' : status.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const config = statusConfig[order.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;
          return (
            <div key={order.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{order.id}</h3>
                  <p className="text-sm text-gray-500">{order.customer} | {order.time}</p>
                </div>
                <span className={`flex items-center px-3 py-1 rounded-full text-sm ${config.bg} ${config.color}`}>
                  <StatusIcon className="w-4 h-4 mr-1" />
                  {config.label}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Items</p>
                  <p className="text-gray-900">{order.items}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivery Address</p>
                  <p className="text-gray-900">{order.address}</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="font-bold text-orange-600 text-lg">Rs {order.total}</span>
                <div className="space-x-2">
                  {order.status === 'pending' && (
                    <>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 flex items-center">
                        <Check className="w-4 h-4 mr-1" />
                        Accept
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 flex items-center">
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </button>
                    </>
                  )}
                  {order.status === 'confirmed' && (
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 flex items-center">
                      <ChefHat className="w-4 h-4 mr-1" />
                      Start Preparing
                    </button>
                  )}
                  {order.status === 'preparing' && (
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 flex items-center">
                      <Bike className="w-4 h-4 mr-1" />
                      Ready for Pickup
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}