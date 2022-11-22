import React from 'react'
import Wrapper from './Dencard.styled'

// import images and icons
import Wulfhead1 from "../../images/wulfhead1.gif"
import Wulfhead2 from "../../images/wulfhead2.gif"
import Wulfhead3 from "../../images/wulfhead3.gif"


const Dencard = () => {
    return (
        <Wrapper>
            <div className='card-item'>
                <div className='card-img'>
                    <img src={Wulfhead1} alt="wulf Head" />
                </div>
                <div className="card-body text-center pb-5">
                    <h4 className="card-title fs-5 fw-bold mt-5">DOWNLOAD METAMASK</h4>
                    <p className="card-text">The Chrome Metamask extension will allow you to make purchases with Ethereum. If you are on mobile, please use the Metamask app..</p>
                    <a href="https://metamask.io/" target="blank" className="btn btn-primary w-50">METAMASK</a>
                </div>
            </div>
            <div className='card-item'>
                <div className='card-img'>
                    <img src={Wulfhead2} alt="wulf Head" />
                </div>
                <div className="card-body text-center pb-5">
                    <h4 className="card-title fs-5 fw-bold mt-5">ADD ETH</h4>
                    <p className="card-text">You can purchase Ethereum through your Metamask wallet using Wyre or send Ethereum from an exchange like Coinbase.</p>
                    <a href="https://www.coinbase.com/de/" target="blank" className="btn btn-primary w-50">COINBASE</a>
                </div>
            </div>
            <div className='card-item'>
                <div className='card-img'>
                    <img src={Wulfhead3} alt="wulf Head" />
                </div>
                <div className="card-body text-center pb-5">
                    <h4 className="card-title fs-5 fw-bold mt-5">MINT A CYBER WOLF</h4>
                    <p className="card-text">Connect your Metamask to our website. Once connected, you will be able to mint your Meta Rich and approve the transaction.</p>
                    <a className="btn btn-primary w-50">COMING SOON</a>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dencard
