import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import '../css/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = {
    id: parseInt(id),
    name: `Item ${id}`,
    price: 49.99,
    image: "https://via.placeholder.com/300x450",
    description: "A stylish piece perfect for any wardrobe.",
    sizes: ['S', 'M', 'L', 'XL'],
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <div className="sizes">
          <h3>Size:</h3>
          {product.sizes.map(size => (
            <button key={size} className="size-btn">{size}</button>
          ))}
        </div>
        <Button label="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default ProductDetail;