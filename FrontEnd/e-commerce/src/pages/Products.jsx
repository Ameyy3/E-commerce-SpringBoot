import React, { useState } from 'react';
import { Heart, Star, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Sample products data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    price: 299.99,  
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1247,
    description: "Experience premium sound quality with our latest wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort design.",
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Premium Comfort Design",
      "Hi-Res Audio Support",
      "Quick Charge Technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80"
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue', 'Red'],
    inStock: true,
    stockCount: 23,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 892,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, and 7-day battery life.",
    features: [
      "Heart Rate Monitoring",
      "GPS Tracking",
      "7-day Battery Life",
      "Water Resistant",
      "Sleep Tracking"
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80"
    ],
    sizes: ['38mm', '42mm', '44mm'],
    colors: ['Black', 'Silver', 'Gold', 'Rose Gold'],
    inStock: true,
    stockCount: 15,
    category: "Wearables"
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    slug: "professional-camera-lens",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 456,
    description: "Capture stunning photos with this professional-grade camera lens featuring advanced optics and weather sealing.",
    features: [
      "Advanced Optical Design",
      "Weather Sealed",
      "Image Stabilization",
      "Fast Autofocus",
      "Professional Grade"
    ],
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80"
    ],
    sizes: ['50mm', '85mm', '135mm'],
    colors: ['Black'],
    inStock: true,
    stockCount: 8,
    category: "Photography"
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    slug: "ergonomic-office-chair",
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviews: 623,
    description: "Work comfortably all day with this ergonomic office chair featuring lumbar support, adjustable height, and premium materials.",
    features: [
      "Lumbar Support",
      "Adjustable Height",
      "Premium Materials",
      "360° Swivel",
      "Breathable Mesh"
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&q=80",
      "https://images.unsplash.com/photo-1607712593519-ac80ac20b4b6?w=500&q=80"
    ],
    sizes: ['Standard', 'Tall'],
    colors: ['Black', 'White', 'Gray'],
    inStock: true,
    stockCount: 12,
    category: "Furniture"
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    slug: "wireless-gaming-mouse",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 1156,
    description: "Dominate your games with this high-precision wireless gaming mouse featuring customizable RGB lighting and ultra-fast response.",
    features: [
      "High-Precision Sensor",
      "Customizable RGB",
      "Ultra-Fast Response",
      "Programmable Buttons",
      "Wireless Freedom"
    ],
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
      "https://images.unsplash.com/photo-1555651165-6ca6ac833fb2?w=500&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&q=80",
      "https://images.unsplash.com/photo-1563297007-0686b83bf43c?w=500&q=80"
    ],
    sizes: ['Standard'],
    colors: ['Black', 'White', 'RGB'],
    inStock: true,
    stockCount: 27,
    category: "Gaming"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    slug: "bluetooth-speaker",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.4,
    reviews: 834,
    description: "Enjoy rich, immersive sound anywhere with this portable Bluetooth speaker featuring 360° sound and waterproof design.",
    features: [
      "360° Sound",
      "Waterproof Design",
      "12-hour Battery",
      "Voice Assistant",
      "Portable Design"
    ],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=500&q=80",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&q=80"
    ],
    sizes: ['Mini', 'Standard', 'Pro'],
    colors: ['Black', 'Blue', 'Red', 'Green'],
    inStock: true,
    stockCount: 19,
    category: "Audio"
  },
  {
    id: 7,
    name: "Laptop Stand",
    slug: "laptop-stand",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.3,
    reviews: 445,
    description: "Improve your workspace ergonomics with this adjustable laptop stand featuring premium aluminum construction.",
    features: [
      "Adjustable Height",
      "Aluminum Construction",
      "Heat Dissipation",
      "Portable Design",
      "Non-slip Base"
    ],
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&q=80"
    ],
    sizes: ['Standard'],
    colors: ['Silver', 'Space Gray'],
    inStock: true,
    stockCount: 31,
    category: "Accessories"
  },
  {
    id: 8,
    name: "Smart Home Hub",
    slug: "smart-home-hub",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 567,
    description: "Control your smart home devices with this advanced hub featuring voice control and seamless integration.",
    features: [
      "Voice Control",
      "Device Integration",
      "Remote Access",
      "Energy Monitoring",
      "Easy Setup"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&q=80",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa4?w=500&q=80",
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=500&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
    ],
    sizes: ['Standard'],
    colors: ['White', 'Black'],
    inStock: true,
    stockCount: 14,
    category: "Smart Home"
  }
];


// Product Detail Component
const ProductDetail = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, Math.min(10, quantity + change)));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { 
      product: product.name, 
      quantity, 
      size: selectedSize, 
      color: selectedColor 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase font-medium">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedColor === color
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stockCount} items left in stock
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-lg border transition-all ${
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Truck className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">2 Year Warranty</p>
                  <p className="text-sm text-gray-600">Manufacturer warranty</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <RotateCcw className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Easy Returns</p>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const EcommerceApp = () => {
  const [currentView, setCurrentView] = useState('listing'); // 'listing' or 'product'
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (slug) => {
    const product = products.find(p => p.slug === slug);
    setSelectedProduct(product);
    setCurrentView('product');
    // In a real app, you would use React Router to navigate to /products/{slug}
    console.log(`Navigating to /products/${slug}`);
  };

  const handleBackToListing = () => {
    setCurrentView('listing');
    setSelectedProduct(null);
  };

  if (currentView === 'product' && selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBackToListing} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of electronics, gadgets, and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceApp;