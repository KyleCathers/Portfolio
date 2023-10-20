function Header() {
    return (
        <div className="header">
            <button onClick={() => { document.querySelector('.home-container').scrollIntoView() }} className="header-button">
                Home
            </button>
            <button onClick={() => { document.querySelector('.about-container').scrollIntoView() }} className="header-button">
                About
            </button>
            <button onClick={() => { document.querySelector('.projects-container').scrollIntoView() }} className="header-button">
                Projects
            </button>
            <button onClick={() => { document.querySelector('.contact-container').scrollIntoView() }} className="header-button">
                Contact
            </button>
            <button class = 'theme-button'>
                <label>
                    <input type="checkbox"></input>
                    <span className="slider"></span>
                </label>
            </button>
        </div>
    )
}


export default Header;