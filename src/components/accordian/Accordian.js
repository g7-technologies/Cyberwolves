import React from 'react'
import Wrapper from './Accordian.styled'


const Accordian = () => {
    return (
        <Wrapper>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        WHAT ARE CYBER WOLVES?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        The CYBER WOLVES is a collection of 9,999 Non Fongible Token going absolutely bonkers within the Ethereum block chain.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        HOW MUCH WILL IT COST TO MINT?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                        It will cost 0.07 Eth to mint your Cyber wolf.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        WHEN WILL MINTING BE AVAILABLE?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                        The project is near complete, the date will be released very soon.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        HOW MANY CAN WE MINT PER WALLET?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body">
                        15 Per Wallet. The amount of royalties was fixed at 5% to finance the NFT DEN projects. We have the ambition to
                        organize multiple events around the world in order to strengthen the community, build a network of entrepreneurs,
                        and investors with the same mindset and common interests. The funds collected will benefit the holders. This
                        percentage will decrease over time.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        HOW CAN I USE MY NFT?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div className="accordion-body">
                        You will be able to use your NFT as an avatar in the metaverse and our future video game.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                        WHAT IS THE METAVERSE?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                        <div className="accordion-body">
                        The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often
                        using cryptocurrency. The future phases in the Nft club's roadmap will allow you to join this Metaverse using the
                        assets you own.
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </Wrapper>
    )
}

export default Accordian
