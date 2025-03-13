import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import '../css/Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <Button label="Remove" onClick={() => removeFromCart(item.id)} />
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
            <Button label="Proceed to Checkout" />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;