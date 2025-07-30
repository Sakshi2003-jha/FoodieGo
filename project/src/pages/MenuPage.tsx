import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { mockFoodItems } from '../data/mockData';
import { FilterOptions } from '../types';
import MenuCard from '../components/menu/MenuCard';
import FilterBar from '../components/menu/FilterBar';

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    type: '',
    priceRange: [0, 100],
    sortBy: 'name'
  });

  const filteredAndSortedItems = useMemo(() => {
    let filtered = mockFoodItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !filters.category || item.category === filters.category;
      const matchesType = !filters.type || item.type === filters.type;
      const matchesPrice = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
      
      return matchesSearch && matchesCategory && matchesType && matchesPrice;
    });

    // Sort items
    if (filters.sortBy) {
      filtered = filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'price':
            return a.price - b.price;
          case 'rating':
            return b.rating - a.rating;
          case 'popular':
            return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [searchTerm, filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of carefully crafted dishes, made with the finest ingredients
          </p>
        </motion.div>

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filters={filters}
          onFilterChange={setFilters}
        />

        {filteredAndSortedItems.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No dishes found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <>
            <motion.div
              className="flex justify-between items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-600">
                Showing {filteredAndSortedItems.length} of {mockFoodItems.length} dishes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuPage;