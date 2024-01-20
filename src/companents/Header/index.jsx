import { Link } from "react-router-dom";
import Logo from "../../assets/icons";
import { menuData } from "../../utils/data";

const Header = () => {
    return (
        <div className='header'>
            <div className='header__main container'>
                <div className='header__img'>
                    <Logo />
                </div>
                <div className='header__list'>
                    <ul className='header__menu'>
                        {menuData.map((item) => (
                            <Link to={item.path} key={item.id}>
                                {item.title}
                            </Link>
                        ))}
                    </ul>
                    <button className='btn'>+998941234567</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
