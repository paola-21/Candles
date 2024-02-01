import foto1 from "../../images/фото товара.png";
import foto2 from "../../images/фото товара (2).png"; 

import './Blog.css';

function Blog() {
    return (
        <div className="blog">
        <h2 className="blog_title">Блог</h2>
        <div className="blog_container">
        <figure className="blog__figure">
            <img className="blog__img" src={foto1} alt="о нас" />
            <figcaption className="blog__text" >Натуральные материалы - основа для свечей</figcaption>
        </figure>
        <figure className="blog__figure">
            <img className="blog__img" src={foto2} alt="о нас" />
            <figcaption className="blog__text" >Красивое оформление упаковки</figcaption>
        </figure>
        </div>
        </div>
  );
}

export default Blog