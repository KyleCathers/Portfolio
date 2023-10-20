function Header({setThemeState}) {

    const setTheme = () => {
        let root = document.querySelector(":root");
        let themeButton = document.querySelector(".theme-select");

        let mode = themeButton.checked; // false = dark, true = light

        mode ? (root.style.colorScheme = "light") : (root.style.colorScheme = "dark");
        setThemeState(mode);
    }

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
            <button className="theme-button">
                <label>
                    <input className="theme-select" onClick={ setTheme } type="checkbox" defaultChecked></input>
                    <span className="slider"></span>
                </label>
            </button>
        </div>
    )
}


export default Header;