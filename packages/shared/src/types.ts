// Shared types for the Food Delivery Platform

export type UserRole = 'customer' | 'restaurant' | 'delivery' | 'admin';

export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  role: UserRole;
  is_active: boolean;
  created_at: string;
}

export interface Restaurant {
  id: string;
  owner_id: string;
  name: string;
  phone: string;
  address: string;
  cuisine_type: string | null;
  rating: number;
  is_active: boolean;
  is_open: boolean;
  delivery_radius_km: number;
  min_order_amount: number;
  delivery_fee: number;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  category_id: string | null;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  is_available: boolean;
  preparation_time_minutes: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled' | 'failed';

export interface Order {
  id: string;
  customer_id: string;
  restaurant_id: string;
  delivery_partner_id: string | null;
  order_number: string;
  status: OrderStatus;
  subtotal_amount: number;
  delivery_fee: number;
  discount_amount: number;
  total_amount: number;
  payment_method: 'cod' | 'online';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  delivery_address: string;
  special_instructions: string | null;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  menu_item_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  special_instructions: string | null;
}

export interface CartItem {
  menu_item_id: string;
  name: string;
  price: number;
  quantity: number;
  special_instructions: string;
}

export interface Cart {
  items: CartItem[];
  total_items: number;
  subtotal: number;
}

export interface Delivery {
  id: string;
  order_id: string;
  partner_id: string;
  status: 'assigned' | 'picked_up' | 'in_transit' | 'delivered' | 'failed';
  picked_up_at: string | null;
  delivered_at: string | null;
}

export interface Review {
  id: string;
  customer_id: string;
  restaurant_id: string;
  order_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

// API response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  message: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  has_more: boolean;
}

// Utility types
export type Optional<T> = T | null;

export interface SelectOption {
  label: string;
  value: string;
}