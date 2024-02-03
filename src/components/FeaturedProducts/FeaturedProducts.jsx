import './FeaturedProducts.css';

import product1 from "../../images/Rectangle 1.png";
import like from "../../images/Heart.svg";

function FeaturedProducts() {

    return (
        <div className="featured">
           <img className="featured__img" src={product1} alt="Логотип"/>
           <div className='featured__container'>
                <h2 className='featured__title'>Свеча в стакане “Bamboo”</h2>
                <p className='featured__text'>Один из популярных ароматов "Bamboo". 
                Свежий древесный аромат бамбука. Свеча сделана из натурального соевого воска и украшена сухоцветами. 
                Объём стакана 200 мл.</p>
                <img className="featured__like" src={like} alt="лайк"/>
                <p className='featured__price'>Цена 500 ₽</p>
           </div>
        </div>
  );
}

export default FeaturedProducts;
