import foto3 from "../../images/smm.svg";
import foto4 from "../../images/smm1.svg";


import './Footer.css';

function Footer() {
    return (
        <div className="footer">
        <h5 className="footer_title">Handle Home - Товары для дома</h5>
        <nav className="footer_container">
            <img className="footer_link" src={foto3} alt="Вконтакте"/>
            <img className="footer_link" src={foto4} alt="Телефон"/>
        </nav>
        </div>
  );
}

export default Footer