import React from 'react';
// import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';
import Favorites from './favorites';

export const Navbar = () => {
  // const { store, actions } = useContext(Context);

  return (
    <nav className='navbar bg-light'>
      <div className='container justify-content-between'>
        {/* logo */}
        <Link className='navbar-brand' to='/'>
          <img
            src='https://www.pngmart.com/files/3/Star-Wars-Logo-PNG-Photos.png'
            alt='Logo'
            width='140px'
            className='d-inline-block align-text-top'
          />
        </Link>
        <Favorites />
      </div>
    </nav>
  );
};
