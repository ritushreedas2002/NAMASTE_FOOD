import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="Food" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
