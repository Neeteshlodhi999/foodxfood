import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Clock, ChefHat, Bike, Home, MapPin, Phone } from 'lucide-react';

const orderSteps = [
  { status: 'pending', label: 'Order Confirmed', time: '10:30 AM', completed: true, icon: CheckCircle },
  { status: 'confirmed', label: 'Accepted by Restaurant', time: '10:32 AM', completed: true, icon: CheckCircle },
  { status: 'preparing', label: 'Preparing Your Food', time: '10:45 AM', completed: true, icon: ChefHat },
  { status: 'out_for_delivery', label: 'Out for Delivery', time: '11:00 AM', completed: false, icon: Bike, active: true },
  { status: 'delivered', label: 'Delivered', time: '', completed: false, icon: Home },
];

export function OrderTrackingPage() {
  const { orderId } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Track Order</h1>
          <p className="text-gray-500">Order ID: {orderId}</p>
        </div>
        <Link to="/orders" className="text-orange-500 font-medium">All Orders</Link>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-bold text-lg text-gray-900">Pizza Palace</h2>
            <p className="text-sm text-gray-500">Estimated delivery: 11:15 AM</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-orange-600">Rs 446</p>
            <p className="text-xs text-gray-500">Cash on Delivery</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-6">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.status} className="flex items-start relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${step.completed ? 'bg-green-100' : step.active ? 'bg-orange-100' : 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${step.completed ? 'text-green-600' : step.active ? 'text-orange-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${step.active ? 'text-orange-600' : 'text-gray-900'}`}>{step.label}</p>
                    {step.time && <p className="text-sm text-gray-500">{step.time}</p>}
                    {step.active && <p className="text-sm text-orange-500">Your order is on the way!</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-4">Delivery Partner</h2>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold">RK</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Raj Kumar</p>
              <p className="text-sm text-gray-500">Rating: 4.8</p>
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-4">Delivery Address</h2>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
            <div>
              <p className="text-gray-900">Apt 402, Green Park Apartments</p>
              <p className="text-sm text-gray-500">Andheri West, Mumbai 400053</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}