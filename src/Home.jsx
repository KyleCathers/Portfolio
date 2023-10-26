import { useState } from 'react';
import profilePic from "./assets/ProfilePic.png";
import downArrowWhite from "./assets/downWhite.png";
import downArrowBlack from "./assets/down.png";

function Home({scrollVal, themeState, background, boxShadow}) { 
    let [windowHeight, setWindowHeight] = useState(window.innerHeight);

    addEventListener("resize", () => {
        setWindowHeight(window.innerHeight);
    });

    const styleDownArrow = {
        opacity: Math.max(0, 100 - 100*scrollVal/20)/100,
        display: ((scrollVal >= 20) || (windowHeight <= 730)) ? "none" : "block"
    }

    return (
        <section style={{background, boxShadow}} className="home-container">
            <img className="profile-image" src={profilePic} alt="Profile Picture" />
            <div>
                <h1 className="home-text">Hi,</h1>
                <h1 className="home-text">I&#039;m Kyle</h1>
                <h2 className="home-text sub">And this is my website</h2>
            </div>
            <img style={ styleDownArrow } onClick={() => { document.querySelector('.about-container').scrollIntoView() }} 
                        className="down-arrow" src={ themeState ? downArrowBlack : downArrowWhite } alt="down"></img>
        </section>
    )


}

export default Home;