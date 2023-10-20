function Contact() {

    let sendEmail = () => {
        Email.send({
            Host : "smtp.live.ca",
            Username : "kyle_c@live.ca",
            Password : "password",
            To : 'kyle_c@live.ca',
            From : document.getElementById(form-email-field).value,
            Subject : "Portfolio Contact Form Inquiry",
            Body : `Name: ${document.getElementById(form-name-field).value}<br> Email: ${document.getElementById(form-message-field).value}`
        }).then(
          message => alert(message)
        );
    }

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
                <div className="contact-icon-wrapper">
                    <img src="./src/assets/gmailIcon.png" alt="Email Icon" />
                </div>
                <div>Email: kyle_c@live.ca</div>
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

            <form onSubmit={() => { sendEmail();
                                    reset();
                                    return false;} }>
                <div className="form-row">
                    <label htmlFor="form-email-field">Email</label>
                    <input id="form-email-field" type="email" placeholder="e.g. JohnDoe@gmail.com" />
                </div>

                <div className="form-row">
                    <label htmlFor="form-name-field">Name</label>
                    <input id="form-name-field" type="text" placeholder="e.g. John Doe"  />
                </div>

                <div className="form-row">
                    <label htmlFor="form-message-field">Message</label>
                    <textarea name="email-message" id="form-message-field" cols="30" rows="5" placeholder="e.g. Love your website, keep it up!" ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script>
                
            </script>

        </section>
    )

    // add form for email?
    // email address
    // resume PDF
    // phone number
    // github
    // linkedin
}

export default Contact;