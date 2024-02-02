import { Link } from "react-router-dom";

import headerLogo from "../../images/Logo.svg";
import headerLove from "../../images/Love.jpg";
import headerShoppingBasket from "../../images/Shopping basket.svg";
import BurgerMenu from "../../images/Menu.jpg";

import './Header.css';

function Header() {



  function handleBurger() {
    const burger = document.querySelector('.header__burger');
    if (burger) {
      const headerMenu = document.querySelector('.header__nav');
      const headerMenuBlog2 = document.querySelector('.header__nav_blok2');
      burger.classList.toggle('header__burger_active');
      headerMenu.classList.toggle('header__menu_active');
      headerMenuBlog2.classList.toggle('header__menu_active2');
    }
  }

    return (
        <div className="header">
            <div className="header__burger" onClick={handleBurger}><img className="header__lk_logo" src={BurgerMenu} alt="menu" /></div>
            <nav className="header__nav">
              <div className="header__nav_menu">Каталог</div>
              <div className="header__nav_menu">О нас</div>
              <div className="header__nav_menu">Контакты</div>
            </nav>
          <img className="header__logo" src={headerLogo} alt="Логотип" /> 
            <div className="header__lk">
              <img className="header__lk_logo" src={headerLove} alt="Love" />
              <img className="header__lk_logo" src={headerShoppingBasket} alt="Shopping Basket" />
            </div>
            <nav className="header__nav_blok2">
              <div className="header__nav_menu">Блог</div>
              <div className="header__nav_menu">Доставка и оплата</div>
              <div className="header__nav_menu">Личный кабинет</div> 
            </nav>
      </div>
  );
}

export default Header;
