import React from 'react'
import Wrapper from "./Footer.styled"
import { NavHashLink } from 'react-router-hash-link';

// import icons and images
import { FaInstagram } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return (
        <Wrapper>
            <div className='text-center'>
                <h5 className='display-8 fw-bold text-primary'>What are you waiting for?</h5>
                <h5 className='display-6 fw-bold'>OWN YOUR CYBER WOLVES NOW</h5>
                <div className='mt-5 mb-5 footer-button'>
                    <a href='https://discord.gg/T2fNcmRYua' target="blank" className='btn bg-light fw-bold rounded-pill'>JOIN OUR DISCORD</a>
                </div>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='navbar-link'>
                        <NavHashLink to="/#About" scroll={el => scrollWithOffset(el)}>ABOUT</NavHashLink>
                        <NavHashLink to="/#Roadmap" scroll={el => scrollWithOffset(el)}>ROADMAP</NavHashLink>
                        <NavHashLink to="/#Rarity" scroll={el => scrollWithOffset(el)}>RARITY</NavHashLink>
                        <NavHashLink to="/#Team" scroll={el => scrollWithOffset(el)}>TEAM</NavHashLink>
                    </div>
                </div>
                <h4 className='display-8 fw-bold'>CYBER WOLVES</h4>
                <div className='social-icons'>
                    <a href='https://instagram.com/cyberwolvesden' target="blank" ><FaInstagram /></a>
                    <a href='https://twitter.com/cyber__wolves' target="blank" ><FaTwitter /></a>
                    <a href='https://discord.gg/T2fNcmRYua' target="blank" ><FaDiscord /></a>
                </div>
                <div className='mt-5 mb-5'>
                    <p className='text-primary fw-bold'>&copy; 2022 CYBER WOLVES. All right reserved.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer
