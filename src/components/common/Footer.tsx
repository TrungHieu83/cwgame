import React from 'react'

const Footer = () => {
  return (
    <footer className="footer d-flex flex-column">
        <div className="container footer-content flex-grow-1">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <div className="logo-footer text-center">
                        <a href="./index.html" title="">
                            <img src="/images/layout/logo.png" alt="Logo" className="logo-main" loading="lazy" />
                        </a>
                    </div>
                    <div className="list-socials d-none d-lg-flex justify-content-center">
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-1.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-2.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-3.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-4.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-5.png" alt="" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <form action="#" className="form-contact d-inline-flex flex-column">
                        <label htmlFor="input-email" className="mb-3 d-block text-center text-md-start">Please contact us via
                            Email:</label>
                        <div className="d-inline-block position-relative">
                            <input id="input-email" type="text" placeholder="Contact@cwgame.io" className="input-email" />
                            <button type="submit" className="position-absolute btn-submit">
                                <img src="/images/buttons/btn-submit.svg" alt="Logo" loading="lazy" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col order-3 d-block d-lg-none">
                    <div className="list-socials-mobile">
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-1.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-2.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-3.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-4.png" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="#" title="">
                                <img src="/images/layout/social-5.png" alt="" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright text-center">
            <p className="m-0">Copyright @2024 C·World</p>
        </div>
    </footer>
  )
}

export default Footer;
