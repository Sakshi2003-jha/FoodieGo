import { FoodItem, Order } from '../types';

export const mockFoodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Paneer Butter Masala',
    description: 'Creamy tomato-based curry with soft paneer cubes and aromatic spices',
    price: 12.99,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'veg',
    rating: 4.5,
    isPopular: true,
    cookingTime: 25
  },
  {
    id: '2',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken in a rich, creamy tomato-based curry sauce',
    price: 18.99,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'non-veg',
    rating: 4.8,
    isPopular: true,
    cookingTime: 25
  },
  {
    id: '3',
    name: 'Vegetable Samosa',
    description: 'Crispy pastry filled with spiced potatoes, peas, and aromatic herbs',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1247755/pexels-photo-1247755.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'appetizer',
    type: 'veg',
    rating: 4.4,
    cookingTime: 15
  },
  {
    id: '4',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in aromatic sugar syrup',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'dessert',
    type: 'veg',
    rating: 4.9,
    isPopular: true,
    cookingTime: 15
  },
  {
    id: '5',
    name: 'Fish Curry',
    description: 'Fresh fish cooked in coconut milk with traditional South Indian spices',
    price: 22.99,
    image: 'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'non-veg',
    rating: 4.7,
    cookingTime: 30
  },
  {
    id: '6',
    name: 'Aloo Tikki',
    description: 'Crispy potato patties served with mint and tamarind chutney',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1247755/pexels-photo-1247755.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'appetizer',
    type: 'veg',
    rating: 4.3,
    cookingTime: 15
  },
  {
    id: '7',
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea brewed with milk and aromatic spices',
    price: 3.99,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beverage',
    type: 'veg',
    rating: 4.6,
    cookingTime: 5
  },
  {
    id: '8',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice layered with spiced chicken and aromatic herbs',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'non-veg',
    rating: 4.8,
    isPopular: true,
    cookingTime: 35
  },
  {
    id: '9',
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with butter and aromatic spices',
    price: 11.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'veg',
    rating: 4.6,
    isPopular: true,
    cookingTime: 30
  },
  {
    id: '10',
    name: 'Tandoori Chicken',
    description: 'Marinated chicken grilled in traditional tandoor oven with Indian spices',
    price: 16.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'non-veg',
    rating: 4.7,
    cookingTime: 25
  },
  {
    id: '11',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry served with fluffy deep-fried bread',
    price: 13.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'veg',
    rating: 4.5,
    cookingTime: 20
  },
  {
    id: '12',
    name: 'Mutton Curry',
    description: 'Tender mutton pieces cooked in rich, spiced gravy with traditional herbs',
    price: 24.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'non-veg',
    rating: 4.6,
    cookingTime: 40
  },
  {
    id: '13',
    name: 'Palak Paneer',
    description: 'Fresh spinach curry with soft paneer cubes and aromatic spices',
    price: 12.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'main',
    type: 'veg',
    rating: 4.4,
    cookingTime: 25
  },
  {
    id: '14',
    name: 'Chicken Seekh Kebab',
    description: 'Minced chicken skewers grilled with aromatic spices and herbs',
    price: 14.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'appetizer',
    type: 'non-veg',
    rating: 4.5,
    cookingTime: 20
  },
  {
    id: '15',
    name: 'Rasgulla',
    description: 'Soft cottage cheese balls soaked in light sugar syrup',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'dessert',
    type: 'veg',
    rating: 4.3,
    cookingTime: 10
  },
  {
    id: '16',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink blended with sweet mango pulp',
    price: 5.99,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beverage',
    type: 'veg',
    rating: 4.7,
    cookingTime: 5
  }
];

export const mockOrders: Order[] = [
  {
    id: 'order-1',
    userId: 'user-1',
    items: [
      { ...mockFoodItems[0], quantity: 2 },
      { ...mockFoodItems[3], quantity: 1 }
    ],
    total: 33.97,
    status: 'delivered',
    createdAt: new Date('2024-01-15'),
    deliveryAddress: '123 Main St, City, State 12345'
  },
  {
    id: 'order-2',
    userId: 'user-1',
    items: [
      { ...mockFoodItems[1], quantity: 1 },
      { ...mockFoodItems[6], quantity: 2 }
    ],
    total: 26.97,
    status: 'preparing',
    createdAt: new Date('2024-01-20'),
    deliveryAddress: '123 Main St, City, State 12345'
  }
];