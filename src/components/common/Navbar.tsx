import React, { useState } from 'react'
import Image from 'next/image'
import PoolModal from '../home/PoolModal';

const Navbar = () => {

  const [openPoolModal, setOpenPoolModal] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-header p-0">
        <div className="container">
          <a href="#" title="">
            <img src="/images/layout/logo.png" alt="Logo" className="logo-main" loading="lazy" />
          </a>
          <div className="justify-content-center d-none d-lg-block" id="navbarCollapse">
            <ul className="navbar-nav position-relative">
              <li className="nav-item nav-item-link">
                <a className="nav-link active" href="#" title="">NFT BRANDS</a>
              </li>
              <li className="nav-item nav-item-link">
                <a className="nav-link" href="#" title="">NFT GAME FI</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center right-nav-wrapper">
            <button className="background-dark btn-pool d-none d-lg-flex align-items-center" onClick={() => setOpenPoolModal(true)}>
              <Image src="/icons/pool.png" width={10} height={10} alt="" loading="lazy" />
              <span>Pool</span>
            </button>
            <a href="#" title="" className="d-none d-lg-block btn-login">Login</a>
            <a href="#" title="" className="d-none d-lg-block btn-wallet">Wallet</a>
            <a href="#" title="" className="btn-cart position-relative">
              <span className="count position-absolute">5</span>
              <img src="/icons/favorite-cart.png" alt="" loading="lazy" />
            </a>
            <div className="dropdown">
              <a href="#" title="" className="btn-user" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/icons/male-user.png" alt="" loading="lazy" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-user">
                <li className="profile-infomation d-flex align-items-center">
                  <a href="#" title="" className="box-avatar">
                    <img src="/icons/male-user-large.png" alt="" loading="lazy" className="avatar" />
                  </a>
                  <div>
                    <a href="#" title="" className="full-name d-block">YOUR NAME HERE</a>
                    <span className="user-id">user ID: 123456789</span>
                  </div>
                </li>
                <li>
                  <a href="#" title="" className="dropdown-item">
                    <img src="/icons/contact.png" alt="" loading="lazy"
                      className="dropdown-item-icon" />
                    <span className="dropdown-item-content">Account details</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="dropdown-item">
                    <img src="/icons/wallet.png" alt="" loading="lazy" className="dropdown-item-icon" />
                    <span className="dropdown-item-content">Wallet</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="dropdown-item">
                    <img src="/icons/sell.png" alt="" loading="lazy" className="dropdown-item-icon" />
                    <span className="dropdown-item-content">My NFTS details</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="dropdown-item">
                    <img src="/icons/chat-bubble.png" alt="" loading="lazy"
                      className="dropdown-item-icon" />
                    <span className="dropdown-item-content">Inbox</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="dropdown-item">
                    <img src="/icons/logout-rounded.png" alt="" loading="lazy"
                      className="dropdown-item-icon" />
                    <span className="dropdown-item-content">Log out</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mobile-menu-open d-block d-lg-none">
              <img src="/icons/menu.svg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </nav>
      <PoolModal show={openPoolModal} onHide={() => setOpenPoolModal(false)}/>
    </>
  )
}

export default Navbar;

