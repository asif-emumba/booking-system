import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './style.css';
import PropTypes from 'prop-types';
import Logo from '../../../assets/logo.svg'
import CustomButton from '../../AntDComponents/CustomButton';

function Header({ isShow, onClick }) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Menu button clicked');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='container'>
            <div className='header-content'>
                <Link to='/'><img src={Logo} alt='logo' /></Link>
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <Link to='/all-tours' className={location.pathname === '/all-tours' ? 'active-link' : ''}>Tours</Link>
                    <Link to='/my-tours' className={location.pathname === '/my-tours' ? 'active-link' : ''}>My Tours</Link>
                    {isShow ? <CustomButton title='Explore Now' onClick={onClick} /> : <div></div>}
                </nav>
            </div>
        </header>
    );
}

Header.propTypes = {
    isShow: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Header;
