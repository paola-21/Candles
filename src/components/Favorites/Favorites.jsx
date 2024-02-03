import './Favorites.css';
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.jsx";

function Favorites() {

    return (
        <div className="favorites">
            <h2 className="favorites_title">Избранное</h2>
            <div className="favorites__container">
              <FeaturedProducts />

            </div>
      </div>
  );
}

export default Favorites;
