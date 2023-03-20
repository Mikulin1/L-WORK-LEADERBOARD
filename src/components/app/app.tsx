import React from 'react';
import Header from "../header/header";
import MainContent from "../main-content/main-content";
import HeaderContent from "../header-content/header-content";
import Footer from "../footer/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Route, Routes} from "react-router-dom"; // You can also use <link> for styles
// ..

function App() {
    AOS.init();

    return (
        <Routes>
            <Route path={"*"} element={
                <div>
                    <Header/>
                    <HeaderContent/>
                    <MainContent/>
                    <Footer/>
                </div>
            }/>
        </Routes>

    );
}

export default App;
