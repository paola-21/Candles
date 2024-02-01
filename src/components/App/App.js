
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Catalog from "../Catalog/Catalog";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Product from "../Product/Product";

import './App.css';

export function App() {
  return (
    <div className="app">
      <div className="app_container">
      <Header/>
      <Main/>
      <Catalog/>
      <Product />
      <AboutUs />
      <Blog />
      <Contacts/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
