import React from "react";
import Modal from 'react-bootstrap/Modal';

interface PoolModalProps {
    show: boolean,
    onHide: () => void
}

const PoolModal = ({ show, onHide }: PoolModalProps) => {
    return (
        <Modal show={show} onHide={onHide} contentClassName="modal-pool">
            <div className="modal-body d-flex flex-column">
                <div className="row flex-grow-1 g-5">
                    <div className="col-xl-6 d-flex flex-column justify-content-center align-items-center">
                        <h3 className="modal-title">NFT MARKET POOL</h3>
                        <p>20% profit are shared</p>
                        <button className="btn-market background-danger">00 $ USDT</button>
                    </div>
                    <div className="col-xl-6 d-flex flex-column justify-content-center align-items-center text-center">
                        <h3 className="modal-title">NFT MARKET POOL</h3>
                        <div className="btn-branch button-list">
                            <button className="button-item background-danger">CLUVENS 0000 $USDT</button>
                            <button className="button-item background-secondary">GIMI COCKPIT 0000 $ USDT</button>
                            <button className="button-item background-warning">LOUISA 0000 $ USDT</button>
                            <button className="button-item background-white">GRAVASTART 0000 $USDT</button>
                            <button className="button-item background-danger">CLUVENS 0000 $USDT</button>
                            <button className="button-item background-secondary">GIMI COCKPIT 0000 $ USDT</button>
                            <button className="button-item background-warning">LOUISA 0000 $ USDT</button>
                            <button className="button-item background-white">GRAVASTART 0000 $USDT</button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <button className="background-secondary btn-count-timer">
                        Time: <span className="days"></span> D <span className="hours"></span> H
                    </button>
                </div>
            </div>
        </Modal >
    )
}

export default PoolModal;