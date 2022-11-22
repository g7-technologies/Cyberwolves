import React from 'react'
import Wrapper from "./Card.styled"

// importing images and icons
import Cardimg1 from "../../images/Cardimages/cardimg1.svg"
import Cardimg2 from "../../images/Cardimages/cardimg2.svg"
import Cardimg3 from "../../images/Cardimages/cardimg3.svg"
import Cardimg4 from "../../images/Cardimages/cardimg4.svg"
import Cardimg5 from "../../images/Cardimages/cardimg5.svg"
import Cardimg6 from "../../images/Cardimages/cardimg6.svg"
import Cardimg7 from "../../images/Cardimages/cardimg7.svg"
import Cardimg8 from "../../images/Cardimages/cardimg8.svg"

const Card = () => {
    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2 side-line-container'>
                        <div className='side-line'>
                            <div className='side-line-filler'></div>
                            <div className='serial-no'>
                                <div>1</div>
                            </div>
                            <div className='serial-no serial-no-2'>
                                <div>2</div>
                            </div>
                            <div className='serial-no serial-no-3'>
                                <div>3</div>
                            </div>
                            <div className='serial-no serial-no-4'>
                                <div>4</div>
                            </div>
                            <div className='serial-no serial-no-5'>
                                <div>5</div>
                            </div>
                            <div className='serial-no serial-no-6'>
                                <div>6</div>
                            </div>
                            <div className='serial-no serial-no-7'>
                                <div>7</div>
                            </div>
                            <div className='serial-no serial-no-8'>
                                <div>8</div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                    <img src={Cardimg1} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>CREATION OF CYBER WOLVES DEN</h5>
                                    <p className='card-text'>A $100,000 fund is allocated towards the development of our project. Our diverse team is dedicated to building a
                                    profitable model for all our members.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg2} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>THE BEGINNING</h5>
                                    <p className='card-text'>900 Wolves will be available to mint for the public on pre-sale, after finalizing our 100 whitelist members.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg3} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>BENEFITS OF BUILDING A HEALTHY COMMUNITY</h5>
                                    <p className='card-text'>Our happy community will meet frequently with incredible masterminds around the globe to share valuable business
                                    secrets and tips. At the same time, it will create a powerful network of successful entrepreneurs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg4} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>INNOVATIVE MARKETING</h5>
                                    <p className='card-text'>Cyber wolves is planning a massive international media tour to promote the collection to millions of people. The goal
                                    is to create a huge hype around our community to make the floor price grow exponentially.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg5} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>OUR PLAY TO EARN GAME</h5>
                                    <p className='card-text'>A Play-To-Earn game will be developed exclusively for our members. The game will allow members, in addition to
                                    playing, to trade unique & customized items.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg6} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>THE CYBER WOLVES DEN</h5>
                                    <p className='card-text'>Our team has allocated funds towards the purchase and build our headquarters in Metaverse. The Cyber Wolves
                                    Den will be the home to all of our members. In addition, to host multiple exclusive events and parties.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg7} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>CYBER WOLVES BREEDING</h5>
                                    <p className='card-text'>Out of 10,000 wolves, breeders are the 1% of Alphas that can breed an exotic pup every 30 days for ¼ floor price. You will need one breeder male and one breeder female for breeding. The pups will be smaller and you will have the option to name them as well! This feature will open once the collection sells out.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row roadmapcard'>
                            <div className='roadmap-card-item'>
                                <div className='roadmap-card-img'>
                                <img src={Cardimg8} alt="someone" />
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title fw-normal text-primary'>OUR 3D WOLVES DISTRIBUTION</h5>
                                    <p className='card-text'>Once the collection sells out, all the members will receive a 3D model of their wolf that will integrate into the Metaverse. In addition, 20% of the collection will be selected randomly, and those holders will receive a physical 3D model of their Cyber wolf. We will also display some of our rare 3D models in Art Galleries and others auctioned at charity events.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Card
