import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/image/clothify-logo.png'; // Adjust filename
import "../css/Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Clothify Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products/men" className="nav-link">Men</Link>
        <Link to="/products/women" className="nav-link">Women</Link>
        <Link to="/products/kids" className="nav-link">Kids</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <button
          className={`nav-link login-btn ${isLoggedIn ? "logged-in" : ""}`}
          onClick={handleLoginLogout}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;