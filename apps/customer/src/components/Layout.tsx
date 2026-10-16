import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Phone, MapPin, Search } from 'lucide-react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FX</span>
                </div>
                <span className="text-xl font-bold text-gray-900">FoodXFood</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Mumbai, MH</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
              <Link to="/search" className="text-gray-700 hover:text-orange-500 font-medium">Browse</Link>
              <Link to="/orders" className="text-gray-700 hover:text-orange-500 font-medium">Orders</Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link
                to="/search"
                className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-200"
              >
                <Search className="w-4 h-4" />
                <span className="ml-2 text-sm">Search food</span>
              </Link>
              <button className="p-2 text-gray-600 hover:text-orange-500 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <Link to="/login" className="p-2 text-gray-600 hover:text-orange-500">
                <User className="w-6 h-6" />
              </Link>
              <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/search" className="block py-2 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Browse</Link>
              <Link to="/orders" className="block py-2 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Orders</Link>
              <Link to="/login" className="block py-2 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">FX</span>
                </div>
                <span className="text-lg font-bold text-white">FoodXFood</span>
              </div>
              <p className="text-sm">Delicious food delivered fast to your door.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">About</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2"><Phone className="w-4 h-4" /><span>+91 1234 567 890</span></li>
                <li>support@foodxfood.in</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2026 FoodXFood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}