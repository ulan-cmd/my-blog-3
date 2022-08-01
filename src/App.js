import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./components/Catalog/Catalog";
import Iphone from "./components/Iphone/Iphone";
import MacBook from "./components/MacBook/MacBook";
import Product from "./pages/product/Product";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main pageName="Главная"/>}/>
                    <Route
                        path="/about"
                        element={<About text="Здесь должна быть инфа о нас"/>}
                    />
                    <Route path="/contacts" element={<Contacts pageName="Контакты"/>}/>
                    <Route path="/menu" element={<Menu pageName="Меню"/>}/>
                    <Route path="/order" element={<Order pageName="Заказы"/>}/>
                    <Route path="/products" element={<Products pageName="Продукты"/>}/>
                    <Route path="/catalog" element={<Catalog/>}>
                        <Route path="iphone" element={<Iphone/>}/>
                        <Route path="macBook" element={<MacBook/>}/>
                    </Route>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

// localhost:3000 / catalog - Catalog
// localhost:3000 / catalog / Iphone - Iphone
// localhost:3000 / catalog / macBook - MacBook

export default App;
