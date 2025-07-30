import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, Truck } from 'lucide-react';
import { mockFoodItems } from '../data/mockData';
import MenuCard from '../components/menu/MenuCard';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  const featuredItems = mockFoodItems.filter(item => item.isPopular).slice(0, 3);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10K+' },
    { icon: Star, label: 'Rating', value: '4.9' },
    { icon: Clock, label: 'Avg Delivery', value: '25 min' },
    { icon: Truck, label: 'Orders Delivered', value: '50K+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Delicious Food
                <span className="text-orange-500"> Delivered</span>
                <br />
                to Your Door
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Experience authentic Indian flavors from traditional recipes, delivered fresh and fast. 
                Order now and taste the rich heritage of Indian cuisine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="flex items-center space-x-2">
                  <span>Order Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Menu
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Delicious food"
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-orange-500 fill-current" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">4.9 Rating</p>
                      <p className="text-sm text-gray-600">From 2000+ reviews</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-orange-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and highly-rated dishes, carefully crafted by our expert chefs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button size="lg" variant="outline">
              View Full Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to get your favorite food delivered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Meal',
                description: 'Browse through our extensive menu and select your favorite dishes',
                icon: '🍽️'
              },
              {
                step: '02',
                title: 'Place Your Order',
                description: 'Add items to cart, customize your order, and proceed to checkout',
                icon: '🛒'
              },
              {
                step: '03',
                title: 'Enjoy Your Food',
                description: 'Sit back and relax while we prepare and deliver your order fresh',
                icon: '🚚'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join thousands of satisfied customers and experience the best food delivery service in the city
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              Start Ordering Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;