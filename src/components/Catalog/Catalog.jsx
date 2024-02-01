import "./Catalog.css";

function Catalog() {

    return (
        <div className="catalog">
            <h2 className="catalog_header">Каталог</h2>
            <nav className="catalog_filter">
                <p className="catalog_filter-text">Всё</p>
                <p className="catalog_filter-text">Свечи</p>
                <p className="catalog_filter-text">Мыло</p>
                <p className="catalog_filter-text">Саше</p>
                <p className="catalog_filter-text catalog_filter-text_size_big">Бомбочки для ванн</p>
                <p className="catalog_filter-text catalog_filter-text_size_big2">Индивидуальный заказ</p>
            </nav>
        </div>
  );
}

export default Catalog;