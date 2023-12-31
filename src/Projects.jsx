import githubIconBlack from "./assets/githubIconBlack.png";
import githubIconWhite from "./assets/githubIconWhite.png";

import liveIconBlack from "./assets/liveIconBlack.png";
import liveIconWhite from "./assets/liveIconWhite.png";

import RestarauntGif from "./assets/Restaraunt.gif";
import WeatherGif from "./assets/Weather.gif";
import TasklistGif from "./assets/Tasklist.gif";
import CalculatorGif from "./assets/Calculator.gif";


function GithubButton({link, themeState}) {
    
    let buttonStyle = {
        backgroundColor: themeState ? "#e6e6e6" : "var(--theme-grey)",
        border: themeState ? "1px solid #231b1b" : "1px solid #9e9e9e"
    }

    let githubImage = themeState ? githubIconBlack : githubIconWhite;

    return (
        <button style={buttonStyle} className="github project-button">
            <a href={link} target="_blank">
                <img className="project-button-icon" src={githubImage} alt="Visit Github repo" />
                <div>GitHub</div>
            </a>
        </button>
    )
}

function LiveButton({link, themeState}) {

    let buttonStyle = {
        backgroundColor: themeState ? "#e6e6e6" : "var(--theme-grey)",
        border: themeState ? "1px solid #231b1b" : "1px solid #9e9e9e"
    }

    let liveImage = themeState ? liveIconBlack : liveIconWhite;

    return (
        <button style={buttonStyle} className="project-button">
            <a href={link} target="_blank">
                <img className="project-button-icon" src={liveImage} alt="Visit live site" />
                <div>Live</div>
            </a>
        </button>
    )
}

function ProjectBox({title, gifLink, description, tools, githubLink, liveLink, themeState}) {

    let style = {
        borderBottom: themeState ? "solid black 3px" : "solid white 3px"
    }

    return (
        <div style={style} className="project-box">
            <h2 className="project-title">{title}</h2>
            <div className="project-gif-wrapper">
                <img className="project-gif" src={gifLink} alt={`Visit ${title} page`} />
            </div>
            <p className="project-description">
                {description}
            </p>
            <p className="project-tools">
                Tools used:<br></br>{tools}
            </p>
            <div className="project-buttons">
                <GithubButton themeState={themeState} link={githubLink}></GithubButton>
                <LiveButton themeState={themeState} link={liveLink}></LiveButton>
            </div>
        </div>
    )
}

function Projects({themeState, background, boxShadow}) {
    return (
        <section style={{background, boxShadow}} className="projects-container">
            <h1>Projects</h1>
            <div className="projects-list">
                <ProjectBox themeState={themeState} title="Kyle's Burgers" gifLink={RestarauntGif}
                    tools="JS, CSS, HTML, Webpack"
                    description="My most delicious website yet, a burger style restaraunt page.
                        Generated dynamically with Webpack and Javascript. Features a protein 
                        packed and juicy menu, a home page with totally relevant information,
                         and a contact page."
                    githubLink="https://github.com/KyleCathers/RestarauntPage"
                    liveLink="https://kylecathers.github.io/RestarauntPage/"></ProjectBox>

                <ProjectBox themeState={themeState} title="Weather App" gifLink={WeatherGif}
                    tools="JS, CSS, HTML, WeatherAPI.com, Webpack"
                    description="An app for looking up the weather from anywhere in the world! 
                        Gives weather for today, an hourly forecast, and the next 3 days 
                        including high and low temperatures, humidity, wind, UV, and rain."
                    githubLink="https://github.com/KyleCathers/WeatherApp"
                    liveLink="https://kylecathers.github.io/WeatherApp/"></ProjectBox>

                <ProjectBox themeState={themeState} title="Task Tracker" gifLink={TasklistGif}
                    tools="JS, CSS, HTML, Webpack"
                    description="A handy little app to help you keep track of your chores. Sort your tasks into projects,
                                then assign due dates and priorities to help you stay organized!"
                    githubLink="https://github.com/KyleCathers/ToDoList"
                    liveLink="https://kylecathers.github.io/ToDoList/"></ProjectBox>

                <ProjectBox themeState={themeState} title="Calculator" gifLink={CalculatorGif}
                    tools="JS, CSS, HTML"
                    description="A fully functioning calculator made with Javascript! Comes out of the box with
                                a 10-digit 7-seven segment display, tactile buttons, and a robust case more solid 
                                than a Nokio cellphone. Also features signed floating point operations, clear, and undo."
                    githubLink="https://github.com/KyleCathers/Calculator"
                    liveLink="https://kylecathers.github.io/Calculator/"></ProjectBox>
            </div>
            <p>For other projects, please see my Github page.</p>
        </section>
        
    )
}

export default Projects;