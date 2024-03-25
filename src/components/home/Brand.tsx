import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Brand = () => {

    const brands = [
        {
            name: 'GRAVASTAR',
            image: '/images/home/branch-1.png'
        },
        {
            name: 'GRAVASTAR',
            image: '/images/home/branch-2.png'
        },
        {
            name: 'GRAVASTAR',
            image: '/images/home/branch-3.png'
        },
        {
            name: 'GRAVASTAR',
            image: '/images/home/branch-4.png'
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
        <section className="section-nft-brands">
            <div className="container">
                <h2 className="section-title">NFT BRANDS</h2>
                <div className="section-description">
                    <p>Please take some time to learn about the brands here</p>
                </div>
                <Carousel
                    focusOnSelect={true}
                    transitionDuration={1200}
                    customTransition="transform 1200ms ease-in-out"
                    containerClass="brands-slider owl-carousel"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    removeArrowOnDeviceType={["0", "1", "2", "3"]}
                    responsive={responsive}>
                    {
                        brands.map(brand => {
                            return (
                                <div className="cart_item box-shadow">
                                    <a href="./pages/branch-1.html" title="" className="cart_item-img">
                                        <img src={brand.image} alt="" loading="lazy" />
                                    </a>
                                    <div className="cart_item-content text-center">
                                        <h3 className="cart_item-name">
                                            <a href="./pages/branch-1.html" title="">{brand.name}</a>
                                        </h3>
                                        <a href="./pages/branch-1.html" title="">
                                            <button className="btn-danger-default btn-small m-auto">
                                                See more
                                            </button>
                                        </a>
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

export default Brand;