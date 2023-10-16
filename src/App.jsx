import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function setScrollVar() {
    let htmlElement = document.documentElement;
    addEventListener("scroll", (event) => {
        let percentageScroll = htmlElement.scrollTop / htmlElement.clientHeight * 100;
        console.log(percentageScroll);
    });
}

// next to do: add props (?) containing scroll var data to all components (except header)
//  remove home page down arrow when scroll var != 0

function App() {
    setScrollVar();

    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default App;