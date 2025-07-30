export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage';
  type: 'veg' | 'non-veg';
  rating: number;
  isPopular?: boolean;
  cookingTime: number;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  createdAt: Date;
  deliveryAddress: string;
}

export interface FilterOptions {
  category: string;
  type: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price' | 'rating' | 'popular';
}