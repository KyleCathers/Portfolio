function Home({scrollVal, themeState}) { 
    const styleDownArrow = {
        opacity: Math.max(0, 100 - 100*scrollVal/20)/100,
        display: (scrollVal >= 20) ? "none" : "block"
    }

    return (
        <section className="home-container">
            <img className="profile-image" src="./src/assets/ProfilePic.png" alt="Kyle" />
            <h1 className="home-text">
                Hi, <br></br>I&#039;m Kyle
            </h1>
            <h2 className="home-text sub">And this is my website</h2>
            <img style={ styleDownArrow } onClick={() => { document.querySelector('.about-container').scrollIntoView() }} 
                        className="down-arrow" src={ themeState ? "./src/assets/down.png" : "./src/assets/downWhite.png" } alt="down"></img>
        </section>
    )


}

export default Home;