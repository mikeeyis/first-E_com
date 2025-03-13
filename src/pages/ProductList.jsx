import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../css/ProductList.css';

function ProductList() {
  const { category } = useParams(); // Gets "men", "women", or "kids" from URL

  // Mock data (replace with API later)
  const products = [
    { id: 1, name: `${category} T-Shirt`, price: 19.99, image: "https://via.placeholder.com/200x300" },
    { id: 2, name: `${category} Jeans`, price: 49.99, image: "https://via.placeholder.com/200x300" },
    { id: 3, name: `${category} Jacket`, price: 79.99, image: "https://via.placeholder.com/200x300" },
    { id: 4, name: `${category} Sweater`, price: 39.99, image: "https://via.placeholder.com/200x300" },
  ];

  return (
    <div className="product-list">
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Clothing` : 'All Products'}</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;