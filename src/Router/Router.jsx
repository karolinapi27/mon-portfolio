import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Apartment from "../Pages/Apartment"
import Error from "../Pages/Error"
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


const Router = () => {
    return (
        <BrowserRouter>
       <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Apartment/:id" element={<Apartment />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
};
export default Router;