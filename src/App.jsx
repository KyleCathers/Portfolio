import { useState } from 'react';

import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

// next to do: add props (?) containing scroll var data to all components (except header)
//  remove home page down arrow when scroll var != 0

function App() {

    let htmlElement = document.documentElement;
    const [scrollVal, setScrollVal] = useState(0);
    addEventListener("scroll", () => {
        let val = htmlElement.scrollTop / htmlElement.clientHeight * 100;
        setScrollVal(Math.floor(val));
    });

    const [themeState, setThemeState] = useState(true); // react state for down button color

    return (
        <div className="main-page-scroller">
            <Header setThemeState={setThemeState}/>
            <Home scrollVal={scrollVal} themeState={themeState}/>
            <About/>
            <Projects themeState={themeState}/>
            <Contact themeState={themeState}/>
            <div className={themeState ? "light fade" : "dark fade"}></div>
        </div>
    )
}

export default App;