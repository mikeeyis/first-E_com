import Button from './Button';
import { useCart } from '../context/CartContext';
import '../css/ProductCard.css';

function ProductCard({ id, name, price, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <Button label="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default ProductCard;