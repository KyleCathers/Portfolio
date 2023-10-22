import { useState } from 'react';
import backgroundWhite from './assets/background_white.jpg';
import backgroundBlack from './assets/background_black.jpg';

import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function App() {

    let htmlElement = document.documentElement;
    const [scrollVal, setScrollVal] = useState(0);
    addEventListener("scroll", () => {
        let val = htmlElement.scrollTop / htmlElement.clientHeight * 100;
        setScrollVal(Math.floor(val));
    });

    const [themeState, setThemeState] = useState(true); // react state for down button color

    if(themeState) {    // light background
        htmlElement.style.backgroundImage = `url(${backgroundWhite})`;
    } else {            // dark background
        htmlElement.style.background = `url(${backgroundBlack})`;
    }

    let background;
    let boxShadow;
    if(themeState) {    // light background
        background = `url(${backgroundWhite})`;
        boxShadow = `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
                    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, 
                    rgba(0, 0, 0, 0.09) 0px -3px 5px`;

    } else {            // dark background
        background = `url(${backgroundBlack})`;
        boxShadow = `rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px,
                rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, 
                rgba(255, 255, 255, 0.09) 0px -3px 5px`;
    }

    return (
        <div className="main-page-scroller">
            <Header setThemeState={setThemeState}/>
            <Home background={background} boxShadow={boxShadow} scrollVal={scrollVal} themeState={themeState}/>
            <About background={background} boxShadow={boxShadow} themeState={themeState}/>
            <Projects background={background} boxShadow={boxShadow} themeState={themeState}/>
            <Contact background={background} boxShadow={boxShadow} themeState={themeState}/>
            <div className={themeState ? "light fade" : "dark fade"}></div>
        </div>
    )
}

export default App;