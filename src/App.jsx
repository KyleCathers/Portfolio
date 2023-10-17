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

    return (
        <>
            <Header/>
            <Home scrollVal={ scrollVal }/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default App;