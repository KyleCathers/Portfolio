function Header() {

    const pageJump = (val) => {
        let htmlElement = document.documentElement;
        htmlElement.scrollTop = val * htmlElement.clientHeight;
    }

    return (
        <div className="header">
            <button onClick={() => {pageJump(1)}} className="header-button">
                About
            </button>
            <button onClick={() => {pageJump(2)}} className="header-button">
                Projects
            </button>
            <button onClick={() => {pageJump(3)}} className="header-button">
                Contact
            </button>
            <button className="theme-button">
                Theme
            </button>
        </div>
    )
}

export default Header;