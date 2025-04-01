import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <a href="/">
            <h1 className='text-orange-500 font-bold text-5xl font-serif'>Swiggy</h1>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="/search" className="flex items-center">
          <i className="ri-search-line"></i> <span className="ml-1">Search</span>
        </a>

        <a href="/offers" className="flex items-center">
          <i  className="ri-discount-percent-line text-orange-400"></i> <span className="ml-1">Offers</span>
        </a>

        <a href="/help" className="flex items-center">
          <i className="ri-hand-heart-line"></i> <span className="ml-1">Help</span>
        </a>

        <a href="/signIn" className="flex items-center">
          <i className="ri-user-3-line"></i> <span className="ml-1">Sign In</span>
        </a>

        <a href="/cart" className="flex items-center">
          <i className="ri-shopping-cart-2-line mx-1"></i> <span>Cart</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
