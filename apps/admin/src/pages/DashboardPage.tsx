import React from 'react';
import { ShoppingBag, Users, Restaurant, DollarSign, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Restaurants', value: '156', change: '+8%', icon: Restaurant, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Users', value: '12,450', change: '+15%', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Total Orders', value: '3,456', change: '+22%', icon: ShoppingBag, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Revenue Today', value: 'Rs 2,45,670', change: '+18%', icon: DollarSign, color: 'text-orange-600', bg: 'bg-orange-50' },
];

const pendingApprovals = [
  { id: '1', name: 'Burger King Express', owner: 'Raj Mehta', cuisine: 'American', date: 'Oct 14, 2026' },
  { id: '2', name: 'Dragon Noodle House', owner: 'Lisa Chen', cuisine: 'Chinese', date: 'Oct 13, 2026' },
  { id: '3', name: 'Spice Garden', owner: 'Arjun Singh', cuisine: 'Indian', date: 'Oct 12, 2026' },
];

export function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Pending Restaurant Approvals</h2>
          <div className="space-y-4">
            {pendingApprovals.map((restaurant) => (
              <div key={restaurant.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{restaurant.name}</h3>
                  <p className="text-sm text-gray-500">{restaurant.owner} | {restaurant.cuisine}</p>
                  <p className="text-xs text-gray-400 mt-1">Applied: {restaurant.date}</p>
                </div>
                <div className="space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">Approve</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">New order placed</p>
                <p className="text-xs text-gray-500">Pizza Palace - Rs 549 - 2 min ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">New user registered</p>
                <p className="text-xs text-gray-500">Customer #12,450 - 5 min ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Restaurant pending approval</p>
                <p className="text-xs text-gray-500">Burger King Express - 10 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}