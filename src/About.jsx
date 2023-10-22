function SkillBox({link, title}) {
    return (
        <a href={link} className="skillbox" target="_blank">
            <img className={`${title} skillbox-img`} src={`./src/assets/${title}Logo.png`} alt={title} />
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
                    <SkillBox link="https://www.javascript.com/" title="JavaScript"></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/CSS" title="CSS"></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/HTML" title="HTML"></SkillBox>
                    <SkillBox link="https://react.dev/" title="React"></SkillBox>
                    <SkillBox link="https://cplusplus.com/" title="C++"></SkillBox>
                    <SkillBox link="https://www.python.org/" title="Python"></SkillBox>
                    <SkillBox link="https://vitejs.dev/" title="Vite"></SkillBox>
                    <SkillBox link="https://webpack.js.org/" title="Webpack"></SkillBox>
                    <SkillBox link="https://jestjs.io/" title="Jest"></SkillBox>
                    <SkillBox link="https://www.npmjs.com/" title="npm"></SkillBox>
                    <SkillBox link="https://git-scm.com/" title="Git"></SkillBox>
                </div>
            </section>
            <section>
                <h3>Hardware</h3>
                <div className="skills-list">
                    <SkillBox link="https://en.wikipedia.org/wiki/Circuit_design" title="Design"></SkillBox>
                    <SkillBox link="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html" title="Simulation"></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/In-circuit_testing" title="Testing"></SkillBox>
                    <SkillBox link="https://en.wikipedia.org/wiki/Soldering" title="Rework"></SkillBox>
                    <SkillBox link="https://www.altium.com/" title="Altium"></SkillBox>
                    <SkillBox link="https://github.com/KyleCathers/Processor-Design-Project" title="FPGA"></SkillBox>
                </div>
            </section>
        </section>
    )
}


// add board rework skill to HW
export default About;