import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header style={{ background: 'lightgray', padding: '10px', marginBottom: '20px' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/blog">Blog</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

