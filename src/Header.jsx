function Header() {

    const pageJump = (val) => {
        let htmlElement = document.documentElement;
        htmlElement.scrollTop = val * htmlElement.clientHeight;
    }

    return (
        <div className="header">
            <button onClick={ () => { pageJump(0.95) } } className="header-button">
                About
            </button>
            <button className="header-button">
                Projects
            </button>
            <button className="header-button">
                Contact
            </button>
            <button className="theme-button">
                Theme
            </button>
        </div>
    )
}

export default Header;