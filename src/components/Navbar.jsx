import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/image/clothify-logo.png';
import '../css/Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginLogout = () => setIsLoggedIn(!isLoggedIn);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Clothify Logo" className="navbar-logo" />
        </Link>
      </div>
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/products/men" className="nav-link" onClick={toggleMobileMenu}>Men</Link>
        <Link to="/products/women" className="nav-link" onClick={toggleMobileMenu}>Women</Link>
        <Link to="/products/kids" className="nav-link" onClick={toggleMobileMenu}>Kids</Link>
        <Link to="/cart" className="nav-link" onClick={toggleMobileMenu}>Cart</Link>
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