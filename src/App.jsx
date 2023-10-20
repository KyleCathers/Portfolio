import { useState } from 'react';

import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

// next to do: add props (?) containing scroll var data to all components (except header)
//  remove home page down arrow when scroll var != 0

function App() {
    const [themeState, setThemeState] = useState(true); // react state for down button color

    return (
        <>
            <Header setThemeState={setThemeState}/>
            <Home themeState={themeState}/>
            <About/>
            <Projects/>
            <Contact/>
            <div className={themeState ? "light fade" : "dark fade"}></div>
        </>
    )
}

export default App;