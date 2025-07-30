import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Clock, Leaf } from 'lucide-react';
import { FoodItem } from '../../types';
import { useCart } from '../../contexts/CartContext';
import Button from '../common/Button';

interface MenuCardProps {
  item: FoodItem;
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {item.isPopular && (
          <motion.div
            className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Popular
          </motion.div>
        )}
        <div className="absolute top-3 right-3">
          {item.type === 'veg' ? (
            <motion.div
              className="bg-green-100 p-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Leaf className="h-4 w-4 text-green-600" />
            </motion.div>
          ) : (
            <motion.div
              className="bg-red-100 p-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <div className="h-4 w-4 bg-red-600 rounded-full"></div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
          <span className="text-xl font-bold text-orange-500">${item.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700">{item.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{item.cookingTime} min</span>
            </div>
          </div>
        </div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add to Cart</span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuCard;