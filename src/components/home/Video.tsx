import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Video = () => {

    const videos = [
        {
            name: '>OKX - P2P Trading [Mua và Bán cơ bản]',
            url: 'https://www.youtube.com/embed/khDn_kFXBec',
            date: '18 September, 2023'
        },
        {
            name: '>OKX - P2P Trading [Mua và Bán cơ bản]',
            url: 'https://www.youtube.com/embed/khDn_kFXBec',
            date: '18 September, 2023'
        },
        {
            name: '>OKX - P2P Trading [Mua và Bán cơ bản]',
            url: 'https://www.youtube.com/embed/khDn_kFXBec',
            date: '18 September, 2023'
        },
        {
            name: '>OKX - P2P Trading [Mua và Bán cơ bản]',
            url: 'https://www.youtube.com/embed/khDn_kFXBec',
            date: '18 September, 2023'
        },
        {
            name: '>OKX - P2P Trading [Mua và Bán cơ bản]',
            url: 'https://www.youtube.com/embed/khDn_kFXBec',
            date: '18 September, 2023'
        }
    ]

    const responsive = {
        0: {
            breakpoint: { max: 3000, min: 1400 },
            items: 4
        },
        1: {
            breakpoint: { max: 1400, min: 991 },
            items: 3
        },
        2: {
            breakpoint: { max: 991, min: 576 },
            items: 2
        },
        3: {
            breakpoint: { max: 576, min: 0 },
            items: 1
        }
    };

    return (
        <section className="section-related-video">
            <div className="container">
                <h2 className="section-title">RELATED VIDEOS</h2>
                <div className="section-description">
                    <p>Discover the brands with C·World through live videos here</p>
                </div>

                <Carousel
                    focusOnSelect={true}
                    transitionDuration={1200}
                    customTransition="transform 1200ms ease-in-out"
                    containerClass="related-video-slider owl-carousel"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    removeArrowOnDeviceType={["0", "1", "2", "3"]}
                    responsive={responsive}>
                    {
                        videos.map(video => {
                            return (
                                <div className="cart_item box-shadow">
                                    <div className="cart_item-img position-relative" >
                                        <img src="/images/home/related-video.png" alt="" loading="lazy" />
                                        <div className="play-now">
                                            <img src="/icons/play.svg" alt="" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="cart_item-content">
                                        <h3 className="cart_item-name">
                                            <a href={video.url} title="" target="_blank">{video.name}</a>
                                        </h3>
                                        <div className="related-video-date d-flex justify-content-between">
                                            <p className="date mb-0">{video.date}</p>
                                            <img src="/icons/simulation.svg" alt="" loading="lazy" className="icon" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Video;