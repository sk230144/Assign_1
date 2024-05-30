import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/seller-agreement">Seller Agreement</Link>
        </li>
        <li>
          <Link to="/buyer-agreement">Buyer Agreement</Link>
        </li>
        <li>
          <Link to="/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link to="/developer-agreement">Developer Agreement</Link>
        </li>
        <li>
          <Link to="/service-level-agreement">Service Level Agreement</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;