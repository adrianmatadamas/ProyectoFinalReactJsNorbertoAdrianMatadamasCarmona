import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartIconUrl = "https://www.xenonfactory.es/wp-content/uploads/2019/01/carrito-compras-desarrollo-tienda-virtual.png";

  return (
    <nav>
      <Link to="/" className="brand">E-commerce</Link>
      <div>
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/fashion">Fashion</Link>
        <Link to="/category/books">Books</Link>
        <Link to="/category/cart" className="cart-link">
          <img src={cartIconUrl} alt="Cart" className="cart-icon" />
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
