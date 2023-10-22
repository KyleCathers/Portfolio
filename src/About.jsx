import JavaScriptLogo from "./assets/JavaScriptLogo.png";
import CSSLogo from "./assets/CSSLogo.png";
import HTMLLogo from "./assets/HTMLLogo.png";
import ReactLogo from "./assets/ReactLogo.png";
import CppLogo from "./assets/C++Logo.png";
import PythonLogo from "./assets/PythonLogo.png";
import ViteLogo from "./assets/ViteLogo.png";
import WebpackLogo from "./assets/WebpackLogo.png";
import JestLogo from "./assets/JestLogo.png";
import npmLogo from "./assets/npmLogo.png";
import GitLogo from "./assets/GitLogo.png";
import DesignLogo from "./assets/DesignLogo.png";
import SimulationLogo from "./assets/SimulationLogo.png";
import TestingLogo from "./assets/TestingLogo.png";
import ReworkLogo from "./assets/ReworkLogo.png";
import AltiumLogo from "./assets/AltiumLogo.png";
import FPGALogo from "./assets/FPGALogo.png";


function SkillBox({link, title, image}) {
    return (
        <a href={link} className="skillbox" target="_blank">
            <img className={`${title} skillbox-img`} src={image} alt={title} />
            <div className="skillbox-title">{title}</div>
        </a>
    )
}

function About({background, boxShadow}) {
    return (
        <section style={{background, boxShadow}} className="about-container">
            <h1>About Me</h1>
            <p>Electrical engineer with practical skills in front end web development, hardware design and testing, 
                FPGAs, and scripting.</p>
            <h2 className="skills" >Skills</h2>
            <section className='software'>
                <h3>Software</h3>
                <div className="skills-list">
                    <SkillBox link="https://www.javascript.com/" title="JavaScript" image={JavaScriptLogo}></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/CSS" title="CSS" image={CSSLogo}></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/HTML" title="HTML" image={HTMLLogo}></SkillBox>
                    <SkillBox link="https://react.dev/" title="React" image={ReactLogo}></SkillBox>
                    <SkillBox link="https://cplusplus.com/" title="C++" image={CppLogo}></SkillBox>
                    <SkillBox link="https://www.python.org/" title="Python" image={PythonLogo}></SkillBox>
                    <SkillBox link="https://vitejs.dev/" title="Vite" image={ViteLogo}></SkillBox>
                    <SkillBox link="https://webpack.js.org/" title="Webpack" image={WebpackLogo}></SkillBox>
                    <SkillBox link="https://jestjs.io/" title="Jest" image={JestLogo}></SkillBox>
                    <SkillBox link="https://www.npmjs.com/" title="npm" image={npmLogo}></SkillBox>
                    <SkillBox link="https://git-scm.com/" title="Git" image={GitLogo}></SkillBox>
                </div>
            </section>
            <section>
                <h3>Hardware</h3>
                <div className="skills-list">
                    <SkillBox link="https://en.wikipedia.org/wiki/Circuit_design" title="Design" image={DesignLogo}></SkillBox>
                    <SkillBox link="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html" title="Simulation" image={SimulationLogo}></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/In-circuit_testing" title="Testing" image={TestingLogo}></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/Soldering" title="Rework" image={ReworkLogo}></SkillBox>
                    <SkillBox link="https://www.altium.com/" title="Altium" image={AltiumLogo}></SkillBox>
                    <SkillBox link="https://github.com/KyleCathers/Processor-Design-Project" title="FPGA" image={FPGALogo}></SkillBox>
                </div>
            </section>
        </section>
    )
}


// add board rework skill to HW
export default About;