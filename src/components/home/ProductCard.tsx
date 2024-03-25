import React,{ useState } from "react";
import BuyNowModal from "./BuyNowModal";

interface ProductCardProps {
    products: Product[]
}

interface Product {
    name: string,
    image: string,
    price: number,
    quantity: number
}

const ProductCard = ({ products }: ProductCardProps) => {

    const [openBuyNowModal, setOpenBuyNowModal] = useState<boolean>(false);

    return (
        <>
            <div className="row g-4">
                {
                    products.map(product => {
                        return (
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="cart_item box-shadow">
                                    <a href="./pages/product-detail.html" title="" className="cart_item-img">
                                        <img src={product.image} alt="" loading="lazy" />
                                    </a>
                                    <div className="cart_item-content">
                                        <h3 className="cart_item-name">
                                            <a href="./pages/product-detail.html" title="">{product.name}</a>
                                        </h3>
                                        <p className="cart_item-price">{product.price} $USDT</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="cart_item-button" data-bs-toggle="modal" onClick={() => setOpenBuyNowModal(true)}>
                                                <img src="/icons/rocket.png" alt="" loading="lazy" />
                                                <span>Buy now</span>
                                            </button>
                                            <button className="cart_item-button ms-4 ms-sm-2 ms-md-4">
                                                <img src="/icons/add-shopping-cart.png" alt="" loading="lazy" />
                                                <span>Add to cart</span>
                                            </button>
                                            <div
                                                className="d-flex flex-column justify-content-center align-items-center favorite ms-4 ms-sm-2 ms-md-4">
                                                <img src="/icons/favorite.svg" alt="" loading="lazy" />
                                                <span className="count">{product.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <BuyNowModal show={openBuyNowModal} onHide={() =>  setOpenBuyNowModal(false)}/>
        </>
    )
}

export default ProductCard;

