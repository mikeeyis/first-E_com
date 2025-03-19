import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/image/clothify-logo.png';
import '../css/Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsMobileMenuOpen(false); // Close menu on login/logout
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false); // Close menu when a link is clicked

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Clothify Logo" className="navbar-logo" />
        </Link>
      </div>
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
        <Link to="/products/men" className="nav-link" onClick={closeMobileMenu}>Men</Link>
        <Link to="/products/women" className="nav-link" onClick={closeMobileMenu}>Women</Link>
        <Link to="/products/kids" className="nav-link" onClick={closeMobileMenu}>Kids</Link>
        <Link to="/cart" className="nav-link" onClick={closeMobileMenu}>Cart</Link>
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
