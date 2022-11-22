import styled from "styled-components";


const Wrapper = styled.div`
    .roadmapcard {
        padding: 50px;
        border: 1px solid #ffffff;
        border-radius: 15px;
        :not(:first-child) {
            margin-top: 30px;
        }
        @media (max-width: 500px) {
            padding: 30px 10px;
        }
        
        .roadmap-card-item  {
            background: #000000;
            display: flex;
            @media (max-width: 767px) {
                flex-direction: column;
            }
            .roadmap-card-img {
                background: #000;
                width: 150px;
                margin: auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .card-body {
                width: calc( 100% - 150px);
                padding-left: 50px;
                @media (max-width: 767px) {
                    width: 100%;
                    padding-left: 0;
                }
            }
        }
    }
    .side-line-container {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
            display: none;
        }
        .side-line {
            width: 2px;
            height: 88%;
            background: #fff;
            position: relative;
            .serial-no {
                position: absolute;
                left: -50%;
                top: 0;
                transform: translateX(-50%);
                width: 50px;
                height: 50px;
                border: 2px solid #fff;
                border-radius: 50%;
                background: #000000;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }
            .serial-no-2 {
                top: 13%;
            }
            .serial-no-3 {
                top: 27%;
            }
            .serial-no-4 {
                top: 42%;
            }
            .serial-no-5 {
                top: 56%;
            }
            .serial-no-6 {
                top: 70%;
            }
            .serial-no-7 {
                top: 85%;
            }
            .serial-no-8 {
                top: 100%;
            }
            .side-line-filler {
                width: 100%;
                background: red;
                height: 0%;
            }
        }
    }
    
    
`
export default Wrapper