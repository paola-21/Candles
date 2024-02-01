
import mainBanner from "../../images/banner.jpg";

import './Main.css';

function Main() {

    return (
        <div className="main">
            <h2 className="main_text">Создаём ту самую атмосферу в вашем доме</h2>
            <img className="main_banner" src={mainBanner} alt="баннер" />
        </div>
  );
}

export default Main;
