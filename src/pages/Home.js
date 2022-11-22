import React, { useState } from 'react'
import Wrapper from '../containers/Home.styled'
import { Routes, Route } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';
// importing components
import Navbar from '../components/navbar/Navbar'
import Card from '../components/card/Card'
import Rankings from "../containers/rankingspage/Rankings"
import Colorpage from '../containers/colorspage/Colorpage'
import Backgrounds from '../containers/backgroundpage/Backgrounds'
import Gender from '../containers/genderpage/Gender'
import Dencard from '../components/dencard/Dencard'
import Accordian from '../components/accordian/Accordian'
import Footer from '../components/footer/Footer'
// importing icons and images
import Firstgif from "../images/firstgif.gif"
import Secondgif from "../images/second.gif"
import Slider from "react-slick"
import { SlidesData } from "../components/slidesData/Slide.data"
// import Particles from "react-tsparticles"

const Home = () => {

    // counter function
const [ counter, setCounter ] = useState(1)
function decrementCounter () {
    if(counter <= 1) {
        setCounter(1);
    }else {
        setCounter(counter - 1);
    }
}

// slider settings
const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <Wrapper>
            <Navbar />
            <div className='container'>
                <div className='row mt-5'>
                    <h1 className='display-6 text-primary text-center fw-bold'>PRE SALE COMING SOON</h1>
                </div>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <div className='gif-container'>
                            <img src={Firstgif} alt="woulves"/>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center hero-area'>
                        <div>
                            <h1 className='mb-5'>CYBER WOLVES</h1>
                            {/*<div className='input-group counter'>
                                <button className="input-group-text bg-light" onClick={decrementCounter}>-</button>
                                <input type="number" className="form-control text-center" min="1" step="1" id="nft_amount" value={counter} onChange={(e) => {setCounter(e.target.value)}} />
                                <button className="input-group-text bg-light" onClick={() => {setCounter(counter + 1)}}>+</button>
                            </div>
                            <div>
                                <button className='btn btn-primary w-75 mt-5 p-2 rounded-pill fs-4 fw-bold'>MINT</button>
                            </div>*/}
                            <p className='text-secondary fs-6 fw-bold'>Soon you will be able to mint your Cyber Wolves NFT's.</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <div className='col text-center'>
                    Welcome to our community. Being part of the Cyber Wolves Den introduces you to a community of world wide entrepreneurs. It will give you the opportunity to get in touch with masters of e-commerce, real-estate, stocks, crypto and much more. Many IRL meetup events and online events will be organized between holders so they can exchange their network, discuss marketing strategies and all subjects related to their business, so we can grow up and improve together.
                    </div>
                </div>
                <div className='row' id="About">
                    <div className='col-md-6 d-flex justify-content-end'>
                        <div className='gif-container'>
                            <img src={Secondgif} alt="woulves" />
                        </div>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <div>
                            <div className='d-flex'>
                                <h4 className='fs-6 fw-bold text-primary'>ABOUT</h4><span className='about-title-border'></span>
                            </div>
                            <div>
                                <h2 className='mt-3'>9,999 UNIQUE HAND DESIGNED CYBER WOLVES</h2>
                            </div>
                            <div>
                                <p>Cyber wolves is a collection of 9,999 unique NFT backed by diverse entrepreneur utility.
                                <br />
                                Each wolf is hand designed with its own individual traits, comes with access to Cyber Wolves Den in Metaverse, exclusive events, community giveaways, raffles and to use in our upcoming play to earn game.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='row mt-5' id='Roadmap'>
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>LAUNCH ROADMAP</h4>
                </div>
                <div className='row'>
                    <Card />
                </div>
                <div className='row mt-5' id="Rarity">
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>TRAIT RARITY</h4>
                </div>
                <div className='row'>
                    <div className='trait-parity-button-groups'>
                        <NavHashLink to="" >Hierarchy</NavHashLink>
                        <NavHashLink to="color" >Fur</NavHashLink>
                        <NavHashLink to="background" >Background</NavHashLink>
                        <NavHashLink to="gender" >Gender</NavHashLink>
                    </div>
                </div>
                <div className='row mt-5'>
                    <Routes>
                        <Route index element={<Rankings />} />
                        <Route path="color" element={<Colorpage />} />
                        <Route path="background" element={<Backgrounds />} />
                        <Route path="gender" element={<Gender />} />
                    </Routes>
                </div>
                <div className='row mt-5' id='Team'>
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>OUR TEAM</h4>
                    <p className="text-center">We are committed to delivering a cutting-edge experience and making this project a success. Our team is formed by the investors specialized in marketing , expert blockchain and extremely talented artist as well as all community managers.</p>
                </div>
                <div className='row mt-5 mb-5 text-light carousel-container'>
                    <Slider {...settings}>
                        {SlidesData.map( (item) => (
                            <div key={item.id}>
                                <div className='card carousel-card'>
                                    <img src={item.pic} alt='wulf' />
                                    <div className='card-body'>
                                        <h4 className='card-title'>{item.title}</h4>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='row mt-5 text-center'>
                    <h4 className='display-6 fw-bold text-primary mt-5'>HOW TO JOIN THE DEN?</h4>
                    <p>New to NFTs? No worries, here are some steps on what you need to do to get your Cyber Wolf.</p>
                </div>
                <div className='row'>
                    <Dencard />
                </div>
                <div className='row mt-5'>
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>FREQUENTLY ASKED QUESTIONS</h4>
                </div>
                <div className='row'>
                    <Accordian />
                </div>
                <div className='row'>
                    <Footer />
                </div>
            </div>
        </Wrapper>
    )
}

export default Home


