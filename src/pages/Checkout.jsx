import Button from '../components/Button';
import '../css/Checkout.css';

function Checkout() {
  // Mock cart total (replace with real data later)
  const total = 209.97; // From Cart example

  const handleCheckout = () => {
    alert("Checkout complete! (This is a mock action)");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <h2>Shipping Information</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Postal Code" required />
        <h2>Payment Details</h2>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiry (MM/YY)" required />
        <input type="text" placeholder="CVV" required />
      </form>
      <div className="checkout-total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <Button label="Complete Purchase" onClick={handleCheckout} />
      </div>
    </div>
  );
}

export default Checkout;