import React from "react";
import Modal from 'react-bootstrap/Modal';


interface BuyNowModalProps {
    show: boolean,
    onHide: () => void
}

const BuyNowModal = ({ show, onHide }: BuyNowModalProps) => {
    return (
        <Modal show={show} onHide={onHide} contentClassName="modal-buy-now">
                <div className="modal-body">
                    <div className="text-center">
                        <h3 className="modal-title">Buy now</h3>
                    </div>
                    <form action="">
                        <label htmlFor="address-input" className="label-modal">Your address: </label>
                        <textarea typeof="text" name="address" id="address-input" className="textarea-modal" value=""
                            rows={3}></textarea>
                        <label htmlFor="phone_number-input" className="label-modal">Your phone number:</label>
                        <input type="text" name="phone_number" id="phone_number-input" className="input-modal" value="" />
                        <p className="note">* You have received a physical product associated with an NFT. Please thoroughly
                            check your shipping information and phone number before pressing confirm. The address and
                            phone number cannot be changed once confirmed.</p>
                        <div className="d-flex mb-2">
                            <input type="checkbox" name="isReceive" id="isReceive" className="is-receive" />
                            <label htmlFor="isReceive" className="is-receive"></label>
                            <p className="mb-0 ms-2">I don’t want to receive the physical product</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <label className="label-modal mb-0 me-3">Total payment:</label>
                            <p className="total-payment mb-0">560$USDT</p>
                        </div>
                        <div className="text-center">
                            <button className="button-submit-modal background-danger">Confirm</button>
                        </div>
                    </form>
                </div>
        </Modal >
    )
}

export default BuyNowModal;