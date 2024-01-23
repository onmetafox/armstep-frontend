import React from 'react';
import CommonBtn from 'src/components/button/CommonBtn';
import CommonCard from 'src/components/button/card/CommonCard';
import WebImg from 'src/assets/images/commons/Web.png';
import BlockchainImg from 'src/assets/images/commons/Blockchaince.png';
import AIImg from 'src/assets/images/commons/AI and ML.png';
import MobileImg from 'src/assets/images/commons/Mobile.png';

const Services = () => {
    return <div className='services-section'>
        <div className='container row'>
            <div className='col-lg-12 col-sm-12 col-md-12 d-flex align-items-end m-2 justify-content-between'>
                <div className='services-title col-8'>
                    <div className='fs-h2 color-white m-5 text-start'>Services</div>
                    <div className='fs-s1 color-white m-5 text-start'>
                        Elevate your digital presence with our expertise in diverse technological domains
                    </div>
                </div>
                <div className='m-5'>
                    <CommonBtn title={"See all"} className={"color-white"}/>
                </div>
            </div>
            <div className='col-lg-12 col-sm-12 col-md-12 d-flex align-items-end m-2 justify-content-between card-container'>
                <div className='row card-group'>
                    <div className='card-subContainer'>
                        <CommonCard 
                            img={WebImg}
                            title={"Web Development"} 
                            content={"Websites' and Web Applications' development using MERN and MEAN stacks. Web3 Wallets'  integration into websites"}
                        />
                    </div>
                    <div className='card-subContainer'>
                        <CommonCard 
                            img={MobileImg}
                            title={"Mobile Development"} 
                            content={"Mobile applications' development on Android and IOS devices using Kotlin, Swift and React Native"}
                        />
                    </div>

                    <div className='card-subContainer'>
                        <CommonCard 
                            img={BlockchainImg}
                            title={"Blockchain Development"} 
                            content={"Blockchain Protocols' (new ones or forks of existing blockchains like Ethereum, Solana, Polkadot, etc.) and Smart Contracts' Development on EVM-compatible, (Ethereum, Binance Smart Chain, Polygon, etc.)."}
                        />
                    </div>
                    <div className='card-subContainer'>
                        <CommonCard 
                            img={AIImg}
                            title={"AI and Machine Learning"} 
                            content={"AI Model Development/Large Language Models Integration/ Training and Testing/Audio Processing/Natural Language Processing (NLP)"}
                        />
                    </div>
                </div>
            </div>
            {/* <div className='services-content col-lg-12 col-sm-12 col-md-12'>
                <div className='fs-h2 color-white m-5 text-start'>About Armstep</div>
                <div className='fs-s1 color-white m-5 text-start'>
                    With expertise in crafting comprehensive software solutions from inception to implementation, we are proficient in various programming languages, including JavaScript, Python, Solidity, C++ and Java. <br></br><br></br>
                    Our skills extend to front-end frameworks like React.js, Angular.js and we excel in back-end development using technologies such as Node.js, Django, and Flask.
                </div>
                <div className='m-5'>
                </div>
            </div> */}
        </div>
    </div>
}

export default Services;