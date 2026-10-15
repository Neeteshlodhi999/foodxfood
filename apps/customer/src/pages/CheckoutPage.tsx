import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Banknote, CheckCircle, ArrowLeft } from 'lucide-react';

const mockAddresses = [
  { id: '1', label: 'Home', address: 'Apt 402, Green Park Apartments, Andheri West, Mumbai 400053', isDefault: true },
  { id: '2', label: 'Office', address: 'Tech Park, Sector 15, Navi Mumbai 400703', isDefault: false },
];

export function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState('1');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const navigate = useNavigate();

  const subtotal = 249 + 99 * 2;
  const deliveryFee = 49;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    navigate('/track/ORD-123456');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Link to="/cart" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-500" />
              Delivery Address
            </h2>
            <div className="space-y-3">
              {mockAddresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`p-3 border rounded-lg cursor-pointer ${selectedAddress === addr.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}
                  onClick={() => setSelectedAddress(addr.id)}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900">{addr.label}</span>
                    {addr.isDefault && <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Default</span>}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{addr.address}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Banknote className="w-5 h-5 mr-2 text-orange-500" />
              Payment Method
            </h2>
            <div className="space-y-3">
              <div
                className={`p-3 border rounded-lg cursor-pointer flex items-center ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <Banknote className="w-6 h-6 mr-3 text-gray-600" />
                <div>
                  <span className="font-medium text-gray-900">Cash on Delivery</span>
                  <p className="text-sm text-gray-500">Pay when the order arrives</p>
                </div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-gray-400" />
                <div>
                  <span className="font-medium text-gray-500">Online Payment</span>
                  <p className="text-sm text-gray-400">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">Rs {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">Rs {deliveryFee}</span>
            </div>
            <div className="border-t border-gray-200 my-3" />
            <div className="flex justify-between">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-orange-600 text-lg">Rs {total}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            By placing this order, you agree to our Terms of Service and Privacy Policy.
          </p>
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center justify-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}