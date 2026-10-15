import React from 'react';
import { User, MapPin, Bell, LogOut, ChevronRight, Edit } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
            <User className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-500">john.doe@email.com</p>
            <p className="text-sm text-gray-400">+91 98765 43210</p>
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Edit className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <span className="font-medium text-gray-900">Manage Addresses</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-400 mr-3" />
              <span className="font-medium text-gray-900">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400 mr-3" />
              <span className="font-medium text-gray-900">Order History</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-400 mr-3" />
              <span className="font-medium text-gray-900">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <button className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-between hover:bg-red-50">
          <div className="flex items-center">
            <LogOut className="w-5 h-5 text-red-500 mr-3" />
            <span className="font-medium text-red-500">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}