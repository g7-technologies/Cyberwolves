import styled from "styled-components";

const Wrapper = styled.div`
    .carousel-container {
        div {
            div {
                .carousel-card {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 10px;
                    background: #000000;
                    text-align: center;
                    border: 1px solid grey;
                    border-radius: 5px;
                    overflow: hidden;
                    @media (max-width: 600px) {
                        margin: 5px;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
    .hero-area {
        @media (max-width: 768px) {
            text-align: center;
        }
    }
    .gif-container {
        max-width: 464px;
        max-height: 464px;
        width: 100%;
        height: 100%;
        z-index: 1000;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .counter {
        width: 150px;
        @media (max-width: 768px) {
            margin: auto;
        }
        button {
            border-radius: 0 50px 50px 0;
            :first-child {
                border-radius: 50px 0 0 50px;
            }
        }
    }
    .about-title-border {
        width: 200px;
        height: 0;
        border: 1px solid #0d6efd;
        margin-top: 10px;
        margin-left: 20px;
    }
    .trait-parity-button-groups {
        text-align: center;
        a {
            text-decoration: none;
            color: grey;
            display: inline-block;
            padding: 15px;
            border-bottom: 1px solid grey;
            :not(:first-child) {
                margin-left: 20px;
                @media (max-width: 500px) {
                    padding: 10px;
                }
            }
            @media (max-width: 500px) {
                padding: 10px;
            }
        }
        .active {
            color: #ffffff;
            border-bottom: 1px solid #fff;
        }
    }
    
`


    
    


export default Wrapper;