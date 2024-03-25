import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Donors = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 2
        }
    };

    return (
        <section className="section-donors">
            <div className="container">
                <Carousel
                    containerClass="donor-list donor-slider"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                    responsive={responsive}>
                    <div className="donor-item d-flex align-items-center justify-content-center">
                        <img src="/images/home/donor-1.png" alt="" loading="lazy" />
                    </div>
                    <div className="donor-item d-flex align-items-center justify-content-center">
                        <img src="/images/home/donor-2.png" alt="" loading="lazy" />
                    </div>

                    <div className="donor-item d-flex align-items-center justify-content-center">
                        <img src="/images/home/donor-3.png" alt="" loading="lazy" />
                    </div>
                    <div className="donor-item d-flex align-items-center justify-content-center">
                        <img src="/images/home/donor-4.png" alt="" loading="lazy" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Donors;