import './Header.css';
import OneImage from '../../assets/one.png';
import { useText } from '../../assets/useText';

export const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-content-wrapper'>
                <h1>{useText.author}</h1>
                <h2>{useText.job}</h2>
            </div>
            <img src={OneImage} alt=''></img>
        </div>
    )
}

export default Header;
