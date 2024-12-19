import { Link } from 'react-router-dom';
import CustomButton from '../AntDComponents/CustomButton';
import './style.css';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.svg'
function Header({ isShow, onClick }) {
    return (
        <header className='container'>
            <div className='header-content'>
                <img src={Logo} alt='logo' />
                <nav>
                    <Link to='/all-tours'>Tours</Link>
                    <a href='#'>Book Tour</a>
                    <Link to='/my-tours'>My Tours</Link>
                </nav>
                {isShow ? <CustomButton title='Explore Now' onClick={onClick} /> : <div></div>}

            </div>
        </header>
    );
}

Header.propTypes = {
    isShow: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Header;
