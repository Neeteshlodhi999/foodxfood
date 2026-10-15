import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { RestaurantsPage } from './pages/RestaurantsPage';
import { UsersPage } from './pages/UsersPage';
import { OrdersPage } from './pages/OrdersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}