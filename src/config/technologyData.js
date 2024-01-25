import webImg from "../assets/logos/service-web.svg";
import mobileImg from "../assets/logos/service-mobile.svg";
import blockchainImg from "../assets/logos/service-blockchain.svg";
import aiImg from "../assets/logos/service-ai.svg";
import mongoLogo from "../assets/logos/mongodb.svg";
import expressLogo from "../assets/logos/express.svg";
import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/node.svg";
import swiftLogo from "../assets/logos/swift.svg";
import javaLogo from "../assets/logos/java.svg";
import kotlinLogo from "../assets/logos/kotlin.svg";
import solidityLogo from "../assets/logos/solidity.svg";
import rustLogo from "../assets/logos/rust.svg";
import goLogo from "../assets/logos/go.svg";
import tensorLogo from "../assets/logos/tensor.svg";
import pytorchLogo from "../assets/logos/pytorch.svg";
import scikitLogo from "../assets/logos/scikit.svg";
import opencvLogo from "../assets/logos/opencv.svg";
import gptLogo from "../assets/logos/gpt-4.svg";
import huggingLogo from "../assets/logos/hugging.svg";
export const technologyData = [
    {
        logo: webImg,
        title: "Web",
        category: [
            {
                title: "MERN Stack",
                detail: "This stack provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.",
                icons:[
                    {
                        title: "MongoDB",
                        icon: mongoLogo
                    },
                    {
                        title: "Express.js",
                        icon: expressLogo
                    },
                    {
                        title: "React",
                        icon: reactLogo
                    },
                    {
                        title: "Node.js",
                        icon: nodeLogo
                    }
                ]
            },
            {
                title: "MEAN Stack",
                detail: "MEAN enables developers to build dynamic and scalable web applications entirely in JavaScript, making it a versatile choice for creating modern, real-time, and single-page applications.",
                icons:[
                    {
                        title: "MongoDB",
                        icon: mongoLogo
                    },
                    {
                        title: "Express.js",
                        icon: expressLogo
                    },
                    
                    {
                        title: "Node.js",
                        icon: nodeLogo
                    }
                ]
            }
        ]
    },
    {
        logo: mobileImg,
        title: "Mobile",
        category: [
            {
                title: "IOS",
                detail: "Whether it's iOS or Android, our team transforms ideas into engaging, high-performance mobile experiences, ensuring your presence in the palm of your users' hands is nothing short of exceptional",
                icons:[
                    {
                        title: "Swift",
                        icon: swiftLogo
                    },
                    {
                        title: "React Native",
                        icon: reactLogo
                    },
                    
                ]
            },
            {
                title: "Android",
                detail: "Our expertise includes programming languages like Java and Kotlin, Android Studio (the official integrated development environment), XML for layout design, and various Android libraries and frameworks.",
                icons:[
                    {
                        title: "React Native",
                        icon: reactLogo
                    },
                    {
                        title: "Kotlin",
                        icon: kotlinLogo
                    },
                    {
                        title: "Java",
                        icon: javaLogo
                    },
                    
                ]
            }
        ],
        
    },
    {
        logo: blockchainImg,
        title: "Blockchain",
        category: [
            {
                title: "Blockchain",
                detail: "Embrace innovation with our blockchain development services and redefine the way you engage with trust, transparency, and immutability",
                icons:[
                    {
                        title: "Solidity",
                        icon: solidityLogo
                    },
                    {
                        title: "Rust",
                        icon: rustLogo
                    },
                    {
                        title: "Go(Golang)",
                        icon: goLogo
                    },
                    
                ]
            },
            {
                title: "WEB3",
                detail: "We are experts in Web3 technologies, paving the way for the decentralized and blockchain-powered future of the internet. Our proficiency includes blockchain platforms, smart contract development, decentralized applications (DApps), IPFS for decentralized file storage and building blockchain-based solutions.",
                icons:[
                    {
                        title: "Alchemy",
                        icon: solidityLogo
                    },
                    {
                        title: "Hardhat",
                        icon: rustLogo
                    },
                    
                ]
            }
        ],
        
    },
    {
        logo: aiImg,
        title: "AI & ML",
        category: [
            {
                title: "AI & ML",
                detail: "Embrace a future-driven approach with our AI and Machine Learning development services, and unlock the potential for data-driven insights, automation, and unparalleled innovation",
                icons:[
                    {
                        title: "TensorFlow",
                        icon: tensorLogo
                    },
                    {
                        title: "PyTorch",
                        icon: pytorchLogo
                    }, 
                    {
                        title: "Scikit-Learn",
                        icon: scikitLogo
                    },
                    {
                        title: "OpenCV",
                        icon: opencvLogo
                    },
                    
                ]
            },
            {
                title: "Generative AI",
                detail: "Our expertise enables us to create AI-driven systems that autonomously generate diverse content, from realistic text and images to innovative applications across various domains.",
                icons:[
                    {
                        title: "GPT4",
                        icon: gptLogo
                    },
                    {
                        title: "HuggingFace",
                        icon: huggingLogo
                    },
                    
                ]
            }
        ],
        
    },
]