import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Catalog from "../Catalog/Catalog";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Product from "../Product/Product";

import './App.css';
import Favorites from '../Favorites/Favorites';

export function App() {
  return (
    <div className="app">
      <div className="app_container">
      <Header/>
      <Routes>
          <Route path="/d" element={
            <>
              <Main />
              <Catalog/>
              <Product />
              <AboutUs />
              <Blog />
              <Contacts/>
            </>
          } />

          <Route path="/favorite" element={
              <Favorites/>
          } />
      </Routes>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
