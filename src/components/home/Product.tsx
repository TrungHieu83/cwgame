import React from "react";
import Filter from "./Filter";
import ProductCard from "./ProductCard";

const Product = () => {

    const products = [
        {
            name: 'NFT CLUVENS #067',
            image: '/images/home/ntf-product.png',
            price: 3500,
            quantity: 1000
        },
        {
            name: 'NFT CLUVENS #068',
            image: '/images/home/ntf-product.png',
            price: 3500,
            quantity: 1000
        },
        {
            name: 'NFT CLUVENS #069',
            image: '/images/home/ntf-product.png',
            price: 3500,
            quantity: 1000
        },
        {
            name: 'NFT CLUVENS #070',
            image: '/images/home/ntf-product.png',
            price: 3500,
            quantity: 1000
        },
        {
            name: 'NFT CLUVENS #071',
            image: '/images/home/ntf-product.png',
            price: 3500,
            quantity: 1000
        }
    ]

    return (
        <section className="section-nft-product">
            <div className="container">
                <h2 className="section-title">NFT PRODUCT</h2>
                <div className="section-description">
                    <p>
                        Consumers are also investors who can hold NFTs of the issuing
                        enterprise to benefit from them. Selected product lines listed on
                        the NFTs Market are carefully chosen and screened htmlFor reputable,
                        high quality, and unique brands.
                    </p>
                    <p>
                        These NFTs are called NFT BRAND, with each NFT corresponding to one
                        real product.
                    </p>
                </div>
                <Filter />
                <ProductCard products={products}/>
                <div className="pagination justify-content-center align-items-center">
                    <ul className="d-flex justify-content-center align-items-center">
                        <li className="page-item disabled">
                            <a href="#" title="" className="page-link d-flex align-items-center">
                                <img src="/icons/double-pre.svg" alt="" loading="lazy" />
                            </a>
                        </li>
                        <li className="page-item disabled">
                            <a href="#" title="" className="page-link d-flex align-items-center">
                                <img src="/icons/pre.svg" alt="" loading="lazy" />
                            </a>
                        </li>
                        <li className="page-item active disabled" aria-current="page">
                            <a href="#" title="" className="page-link">1</a>
                        </li>
                        <li className="page-item">
                            <a href="#" title="" className="page-link">2</a>
                        </li>
                        <li className="page-item">
                            <a href="#" title="" className="page-link">3</a>
                        </li>
                        <li className="page-item">
                            <a href="#" title="" className="page-link">4</a>
                        </li>
                        <li className="page-item">
                            <a href="#" title="" className="page-link">5</a>
                        </li>
                        <li className="page-item">
                            <a href="#" title="" className="page-link d-flex align-items-center">
                                <img src="/icons/next.svg" alt="" loading="lazy" />
                            </a>
                        </li>
                        <li className="page-item">
                            <a href="#" title="" className="page-link d-flex align-items-center">
                                <img src="/icons/double-next.svg" alt="" loading="lazy" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Product;