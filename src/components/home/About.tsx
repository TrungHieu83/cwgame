import React from 'react'

const About = () => {
    return (
        <section className="section-about-us d-md-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="section-title text-start">ABOUT US</h2>
                        <div className="section-description text-start">
                            <p>
                                We are a team from Vietnam. We work harder every day to create a
                                perfect Metaverse.
                            </p>
                        </div>
                        <a href="" title="">
                            <button className="btn-danger-default btn-large m-auto">
                                Start your search
                            </button>
                        </a>
                    </div>
                    <div className="col-md-7 position-relative">
                        <div className="hive-container m-auto">
                            <div className="hive-shadow">
                                <div className="box box1">
                                    <img src="/images/home/about-1.png" alt="" loading="lazy" />
                                </div>
                            </div>
                            <div className="hive-shadow">
                                <div className="box box2">
                                    <img src="/images/home/about-2.png" alt="" loading="lazy" />
                                </div>
                            </div>
                            <div className="hive-shadow">
                                <div className="box box3">
                                    <img src="/images/home/about-3.png" alt="" loading="lazy" />
                                </div>
                            </div>
                            <div className="hive-shadow">
                                <div className="box box4">
                                    <img src="/images/home/about-4.png" alt="" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;