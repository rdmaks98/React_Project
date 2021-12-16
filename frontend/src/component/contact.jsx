import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="contact section-padding" data-scroll-index="6">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>Get In <span>Touch ?</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5"></div>
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-info">
                                <h3>For Any Query And Support</h3>
                                <div className="contact-info-item">
                                    <i className="bx bx-location-plus"></i>
                                    <h3>Company Location</h3>
                                    <p>199 xyz gali, New Delhi</p>
                                </div>

                                <div className="contact-info-item">
                                    <i className="bx bx-envelope"></i>
                                    <h3>Write to us at</h3>
                                    <p>info@gmail.com</p>
                                </div>

                                <div className="contact-info-item">
                                    <i className="bx bxs-phone-call"></i>
                                    <h3>Call us on</h3>
                                    <p>+91 2222 2222 **</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form">
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" autocomplete="off" placeholder="Your Name"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" autocomplete="off" placeholder="Your email"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="number" autocomplete="off" placeholder="Your Phone"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" autocomplete="off" placeholder="Your Subject"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea autocomplete="off" placeholder="Your Message"
                                                    className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <buttton type="submit" id="custom" className="btn btn-2">Send Message</buttton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Contact
