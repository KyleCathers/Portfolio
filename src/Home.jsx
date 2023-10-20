function Home({scrollVal}) {

    console.log(scrollVal);

    const styleDownArrow = {
        opacity: Math.max(0, 100 - 100*scrollVal/80)/100,
        display: (scrollVal <= 90) ? "inline" : "none"
    }

    const styleProfileImage = {
        opacity: Math.max(0, 100 - 100*scrollVal/50)/100
    }

    const styleHomeText = {
        opacity: Math.max(0, 100 - 100*scrollVal/70)/100
    }

    const styleHomeSubText = {
        opacity: Math.max(0, 100 - 100*scrollVal/80)/100
    }

    return (
        <section className="home-container">
            <img style={ styleProfileImage } className="profile-image" src="./src/assets/ProfilePic.png" alt="Kyle" />
            <div style={ styleHomeText } className="home-text">
                <div>Hi,</div>
                <div>I&#039;m Kyle</div>
            </div>
            <div style={ styleHomeSubText } className="home-text sub">And this is my website</div>
            <img style={ styleDownArrow } onClick={() => { document.querySelector('.about-container').scrollIntoView() }} className="down-arrow" src="./src/assets/downWhite.png" alt="down"></img>
        </section>
    )
}

export default Home;