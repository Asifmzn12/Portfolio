import { useState } from "react";
import emailjs from "emailjs-com";

import { Container } from "react-bootstrap";
import { contactapi } from "./config/contactcustomapi";
function Contact() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.user_name.trim()) {
            errors.user_name = "This field is required";
            isValid = false;
        }

        if (!formData.user_email.trim()) {
            errors.user_email = "This field is required";
            isValid = false;
        } else if (!isValidEmail(formData.user_email)) {
            errors.user_email = "Invalid email address";
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = "This field is required";
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = "This field is required";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            emailjs.sendForm("service_req", "template_01xbp3a", e.target, "m0vWn-8VGOdFYFC_k")
            .then((result) => {
                console.log(result.text);
                alert("thank you for Your Message")
            }, (error) => {
                console.error(error.text);
            });


            setFormData({
                user_name: "",
                user_email: "",
                subject: "",
                message: "",
            });
        }
    };

    return (
        <Container className="py-5">
            <h1 className="text-center fw-bold mb-5">Contact</h1>

            <div className="row justify-content-md-around justify-content-center  gap-md-2 gap-lg-0 gap-4  ">
                <div className="col-md-5 d-flex flex-column gap-lg-5">
                    {
                        contactapi.map((contactinfo, index) =>
                            <div key={index} className="d-flex contact-info align-items-center">
                                <div>
                                    <i>{<contactinfo.icon />}</i>
                                </div>
                                <div>
                                    <h5>{contactinfo.heading}</h5>
                                    <h6>{contactinfo.text}</h6>
                                </div>



                            </div>

                        )
                    }

                </div>
                <div className="col-md-7">
                    <form onSubmit={sendEmail} className="contact-form">
                        <div className="row email-me">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    placeholder="Enter Your Name"
                                    value={formData.user_name}
                                    onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                />
                                {formErrors.user_name && <span className="error-message">{formErrors.user_name}</span>}
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    placeholder="Enter Your Email"
                                    value={formData.user_email}
                                    onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                                />
                                {formErrors.user_email && <span className="error-message">{formErrors.user_email}</span>}
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter Subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                            </div>
                            <div className="col-md-12 mb-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="60"
                                    rows="8"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                            </div>
                            <div className="col-md-12">
                                <button className="contact-me" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </Container>
    );
}

export default Contact;
