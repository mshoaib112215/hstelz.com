import React from 'react';

import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg'
const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex justify-between items-center">
      {/* logo */}
      <Link to='/'>
        <img src = {Logo} alt = ""/>

      </Link>
      <div className='flex items-center gap-6'>
        <Link className='hover:text-green-900 trasition' to = ''>Log In</Link>
        <Link className = "bg-green-600 text-white px-4 py-3 rounded-lg transition" to = ''>Sign Up</Link>

      </div>
    </div>
  </header>;
};

export default Header;
