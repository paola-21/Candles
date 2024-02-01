import mainBanner from "../../images/banner.png";

import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us">
        <h2 className="about-us_title">О нас</h2>
        <div className="about-us_container">
            <img className="about-us_img" src={mainBanner} alt="о нас" />
            <p className="about-us_text">◌ Создаём ту самую атмосферу в вашем доме <br/>
                                            ◌ Свечи собственного производства<br/>
                                            ◌ Всё для домашнего SPA</p>
        </div>
        </div>
  );
}

export default AboutUs