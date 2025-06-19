// Product Card Component
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

function ProductCard({ product, onClick }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={() => onClick(product.slug)}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {discount}% OFF
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>
      
      <div className="p-6" onClick={() => onClick(product.slug)}>
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase font-medium">{product.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log('Added to cart:', product.name);
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
    
}
export default ProductCard;