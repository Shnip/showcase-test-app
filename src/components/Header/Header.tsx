import React from 'react';
import logo from './logo.svg';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='brand'>
        <img src={logo} alt="logo" className='brand__logo' />
        <div className='brand__title'>
          Knowledge cloud
        </div>
      </div>
      <nav>

      </nav>
    </header>
  );
}
export default Header;