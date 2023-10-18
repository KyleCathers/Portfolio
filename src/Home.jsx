function Home({scrollVal}) {

    console.log(scrollVal);

    const styleObject = {
        opacity: Math.max(0, 100 - scrollVal * 5)/100,
        display: (scrollVal <= 20) ? "inline" : "none"
    }

    const pageDown = () => {
        let htmlElement = document.documentElement;
        htmlElement.scrollTop = htmlElement.clientHeight;
    }

    return (
        <section className="home-container">
            <img className="profile-image" src="./src/assets/ProfilePic.jpg" alt="Kyle" />
            <div className="home-text">
                <div>Hi,</div>
                <div>I&#039;m Kyle</div>
            </div>
            <div className="home-text sub">And this is my website</div>
            <img style={ styleObject } onClick={ pageDown } className="down-arrow" src="./src/assets/downWhite.png" alt="down"></img>
        </section>
    )
}

export default Home;