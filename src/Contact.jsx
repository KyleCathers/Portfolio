import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact({themeState}) {

    let buttonStyle = {
        backgroundColor: themeState ? "#6ee0ab" : "var(--theme-green"
    }

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
  
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ encrypt IDs later
    emailjs.sendForm(
        "service_h859sou",      // "YOUR_SERVICE_ID"
        "template_idievs7",     // "YOUR_TEMPLATE_ID"
        form.current,
        "NTthhMh14Mlf7kcP8" )   // "YOUR_USER_ID"
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
            alert("Email failed to send, please try again.\nError message: " + error.text);
        });
        e.target.reset();
    };
  
    return (
        <section className="contact-container">
            <h1>Contact</h1>

            <p>See my information below:</p>

            <div className="resume contact">
                <a className="contact-icon-wrapper" href="./src/assets/Resume.pdf" target="blank_">
                    <img src="./src/assets/ResumeIcon.png" alt="Resume Download" />
                </a>
                <a href="./src/assets/Resume.pdf" target="blank_">Resume</a>
            </div>
            
            <div className="email contact">
                <a href="mailto:kyle_c@live.ca" className="contact-icon-wrapper">
                    <img src="./src/assets/gmailIcon.png" alt="Email Icon" />
                </a>
                <a href="mailto:kyle_c@live.ca">Email: kyle_c@live.ca</a>
            </div>

            <div className="phone contact">
                <div className="contact-icon-wrapper">
                    <img src="./src/assets/PhoneIcon.png" alt="Phone Icon" />
                </div>
                <div>Phone: (250) 802-5009</div>
            </div>

            <div className="linkedin contact">
                <a className="contact-icon-wrapper" href="https://www.linkedin.com/in/kyle-cathers-189098195/" target="blank_">
                    <img src="./src/assets/LinkedInIcon.png" alt="LinkedIn Link" />
                </a>
                <a href="https://www.linkedin.com/in/kyle-cathers-189098195/" target="blank_">LinkedIn</a>
            </div>

            <div className="github contact">
                <a className="contact-icon-wrapper" href="https://github.com/KyleCathers" target="blank_">
                    <img src="./src/assets/GithubIcon.png" alt="Github Link" />
                </a>
                <a href="https://github.com/KyleCathers" target="blank_">Github</a>
            </div>

            <p>Or you can write me an email right here!</p>

            <form ref={form} onSubmit={sendEmail}>
                <div className="form-row">
                    <label htmlFor="form-email-field">Email</label>
                    <input id="form-email-field" type="email" name="user_email" placeholder="e.g. JohnDoe@gmail.com" />
                </div>

                <div className="form-row">
                    <label htmlFor="form-name-field">Name</label>
                    <input id="form-name-field" type="text" name="user_name" placeholder="e.g. John Doe"  />
                </div>

                <div className="form-row">
                    <label htmlFor="form-message-field">Message</label>
                    <textarea name="message" id="form-message-field" cols="30" rows="5" placeholder="e.g. Love your website, keep it up!" ></textarea>
                </div>
                <button style={buttonStyle} type="submit" value="Send">Submit</button>
            </form>
            <script></script>
        </section>
    )
}

export default Contact;