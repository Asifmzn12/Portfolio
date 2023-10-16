import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { AiOutlineSend } from 'react-icons/ai'
import Typewriter from 'typewriter-effect';

function Introduction() {


    return (
        <section>
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5  col-12 order-1 order-md-0">
                    <div className="intro-name d-flex flex-column gap-4">
                        <h1>
                            <Typewriter className="job"
                                options={{
                                    strings: ["Hey! I'm Asif Ali",
                                        "I love coding",
                                        "I develop mobile apps",
                                        // "& i'm a Software Developer passionate and experienced in building Web applications."
                                    ],
                                    autoStart: true,
                                    loop: true,

                                }}
                            /></h1>
                        <button className="contact-me">Hire me <AiOutlineSend /></button>
                        <div>
                            <p>Follow Me</p>
                            <div className=" text-decoration-none">
                                <ul className=" list-unstyled d-flex justify-content-start gap-4 my-3 text-white">
                                    <li> <a className='icon-link'>
                                        <BsFacebook className='icon' size={"20px"} />
                                    </a>
                                    </li>
                                    <li> <a className=''>
                                        <FaXTwitter className='icon' size={"20px"} />
                                    </a>
                                    </li>
                                    <li> <a>
                                        <FaLinkedinIn className='icon' size={"20px"} />
                                    </a>
                                    </li>
                                    <li> <a>
                                        <FaInstagram className='icon' size={"20px"} />
                                    </a>
                                    </li>
                                 </ul>


                            </div>

                        </div>


                    </div>
                </div>
                <div className="col-md-7 col-12 order-0 order-md-1">

                    <img src="./image/me.png" className="img-fluid vert-move"></img>

                </div>
            </div>
        </div>



        </section>
    )
}

export default Introduction
