import { Heart, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.prod_name}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

function ProductCard({ name, price ,stock}) {
  return (
    <div className="w-64 rounded-lg border p-3 shadow hover:shadow-lg transition-all bg-white m-2">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
          alt="Product"
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="absolute top-2 right-2 space-y-2">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <Heart className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <Eye className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-red-500 font-semibold text-sm">${price}</span>
          <span className="text-gray-400 line-through text-sm">${price + 100}</span>
        </div>
        <div className="flex items-center mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.396 2.092 10.604 2.092 10.951 2.927l1.2 2.76 2.997.27c.902.081 1.27 1.2.61 1.81l-2.28 2.032.679 2.887c.21.896-.755 1.61-1.54 1.155L10 12.347l-2.617 1.494c-.784.455-1.75-.26-1.54-1.155l.679-2.887-2.28-2.032c-.66-.61-.292-1.729.61-1.81l2.997-.27 1.2-2.76z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-1">${stock}</span>
        </div>
      </div>
    </div>
  );
}
