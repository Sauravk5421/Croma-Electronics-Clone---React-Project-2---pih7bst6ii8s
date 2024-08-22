import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

import { Box } from "@mui/material";
import '../styles/App.css'
import BankSticker from "./BankSticker/BankSticker";
import Category from "./AvailableCategory/Category";
import Product from "./ProductRow/Product";
import ProductList from "./ProductRow/ProductList";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter, BrowserRouter } from 'react-router-dom';
import ProductCategory from "./ProductCategory/ProductCategory";
import HomePage from './HomePage/HomePage'
import TataSticker from "./BankSticker/TataSticker";
import ProductDetail from "./ProductCategory/ProductDetail";
import SearchPage from "./SearchPage/SearchPage";
import ProfilePage from "./LoginRegister/ProfilePage";
import CartPage from "./CartPage/CartPage";
import CheckOutPage from "./CheckOut/CheckOutPage";
import MenuProduct from "./MenuList/MenuProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path='/productCategory' element = {<ProductCategory/>}></Route>
          <Route path='/productDetail' element = {<ProductDetail/>}></Route>
          <Route path='/SearchPage' element = {<SearchPage/>}></Route>
          <Route path='/profilePage' element = {<ProfilePage/>}></Route>
          <Route path='/cartPage' element = {<CartPage/>}></Route>
          <Route path='/checkOutPage' element = {<CheckOutPage/>}></Route>
          <Route path='/MenuProduct' element = {<MenuProduct/>}></Route>
        </Routes>
        {/* <TataSticker/> */}
        <Footer/>
        {/* <SearchPage/> */}
     
      </BrowserRouter>
    </>
  );
}

export default App;
