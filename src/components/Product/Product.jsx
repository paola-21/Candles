import "./Product.css";

import product1 from "../../images/Rectangle 1.png";
import product2 from "../../images/Rectangle 1 (2).png";
import product3 from "../../images/Rectangle 1 (3).png";
import product4 from "../../images/Rectangle 1 (4).png";
import product5 from "../../images/Rectangle 1 (5).png";
import product6 from "../../images/Rectangle 1 (6).png";
import product7 from "../../images/Rectangle 1 (7).png";
import product8 from "../../images/Rectangle 1 (8).png";
import product9 from "../../images/Rectangle 1 (9).png";


function Product() {

    return (
        <div className="product">
        <div className="product_container">
            <img className="product_img" src={product1} alt="Логотип"/>
            <h2 className="product_name">Свеча в стакане “Bamboo”</h2>
            <h3 className="product_price">Цена 500 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product2} alt="Логотип"/>
            <h2 className="product_name">Свеча в стакане “Ylang Ylang & Jasmine”</h2>
            <h3 className="product_price">Цена 500 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product3} alt="Логотип"/>
            <h2 className="product_name">Свеча в стакане “Blooming Garden”</h2>
            <h3 className="product_price">Цена 500 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product4} alt="Логотип"/>
            <h2 className="product_name">Бомбы для ванн “Blue”</h2>
            <h3 className="product_price">Цена 600 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product5} alt="Логотип"/>
            <h2 className="product_name">Бомбы для ванн “Pink”</h2>
            <h3 className="product_price">Цена 600 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product6} alt="Логотип"/>
            <h2 className="product_name">Свечи массажные с шиммером</h2>
            <h3 className="product_price">Цена 800 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product7} alt="Логотип"/>
            <h2 className="product_name">Саше ароматическое “Cinnamon”</h2>
            <h3 className="product_price">Цена 500 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product8} alt="Логотип"/>
            <h2 className="product_name">Саше ароматическое “Christmas”</h2>
            <h3 className="product_price">Цена 500 ₽</h3>
        </div>
        <div className="product_container">
            <img className="product_img" src={product9} alt="Логотип"/>
            <h2 className="product_name">Набор свечей из вощины “Forest”</h2>
            <h3 className="product_price">Цена 1200 ₽</h3>
        </div>
        </div>

  );
}

export default Product;