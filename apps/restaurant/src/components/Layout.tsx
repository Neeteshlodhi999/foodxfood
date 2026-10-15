import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Menu, ShoppingBag, Settings, LogOut, ChefHat } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/menu', label: 'Menu', icon: Menu },
  { to: '/orders', label: 'Orders', icon: ShoppingBag },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-white font-bold">FoodXFood</span>
              <p className="text-xs text-gray-400">Restaurant Partner</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-orange-500 text-white' : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900 capitalize">
              {navItems.find(n => n.to === location.pathname)?.label || 'Dashboard'}
            </h1>
            <p className="text-sm text-gray-500">Pizza Palace Restaurant Dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative">
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold">PP</span>
            </div>
          </div>
        </header>
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}