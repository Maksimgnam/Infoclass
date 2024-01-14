import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import News from '../News/News';
import Lessons from '../Lessons/Lessons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {

    const [isTheme, setIsTheme] = useState(false);
    const themeChange = () => {
        setIsTheme((prevTheme) => !prevTheme)
    }
    return (


        <BrowserRouter>

            <div className='Main' style={{
                backgroundColor: isTheme ? '#333' : '#fff',
                color: isTheme ? 'white' : '#333',

            }}>
                {/* <button onClick={switchThemeChange}>fff</button> */}

                <Header isTheme={isTheme} themeChange={themeChange} />

                <Routes>

                    <Route path="/" element={<Home />} excist />
                    <Route path="/news" element={<News />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/lessons" element={<Lessons />} />

                </Routes>

            </div>
            <Footer />
        </BrowserRouter >




    )
}

export default Main