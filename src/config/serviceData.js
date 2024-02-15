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
export const serviceData = [
    {
        logo: webImg,
        title: "Web",
        subtitle: "Web Development",
        intro: "Nicely developed website is one of the most important steps to tell users about your product. Our web development services encompass the use of cutting-edge technology stacks, including MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js). ",
        detail: "Our web development services are engineered to empower your digital presence, ensuring your online footprint is as robust and dynamic as your business. Dive into the world of cutting-edge web solutions with us.",
        content: "At Armstep, we are not just developers; we are architects of online experiences. Our web development services go beyond conventional coding; they are a meticulous craft aimed at delivering seamless, high-performance websites. From concept to execution, we thrive on turning your ideas into lines of code that resonate with your audience.",
        subcontent: "Websites' and Web Applications' development using MERN and MEAN stacks. Web3 Wallets'  integration into websites",
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
        subtitle: "Mobile Development",
        intro: "In today’s fast-paced digital landscape, a robust mobile presence is not just an option, but a necessity. Our agency specializes in creating dynamic, efficient, and user-friendly mobile applications for both iOS and Android platforms. Leveraging advanced technologies like React Native, Kotlin, Swift, and Java.",
        detail: "Our Mobile Development services are not just about coding; they're about creating intuitive and seamless experiences that leave a lasting impact.",
        content: "Whether you're looking to launch your first app, enhance an existing one, or explore cross-platform solutions, our team of skilled developers is ready to turn your mobile vision into a reality. From sleek interfaces to robust functionalities, we thrive on delivering mobile solutions that go beyond expectations.",
        subcontent: "Mobile applications' development on Android and IOS devices using Kotlin, Swift and React Native",
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
        subtitle: "Blockchain Development",
        intro: "In a previous decade, decentralization showed the highest growth being integrated by most of Fortune 500 companies. Our agency is dedicated to delivering state-of-the-art blockchain solutions, harnessing the power of leading languages and frameworks including Solidity, Rust, Go, Truffle, Hardhat, Foundry, and Alchemy. ",
        detail: "Step into the future with our tailored blockchain services, designed to enhance and secure your digital strategy. Our cutting-edge solutions ensure your venture excels in the decentralized digital world, aligning perfectly with your business goals.",
        content: "Our Blockchain Development services are centered around harnessing the power of distributed ledger technology to create secure, transparent, and immutable solutions. Whether you're a startup exploring blockchain or an enterprise seeking to integrate this transformative technology, our team is here to guide you through every step of the journey.",
        subcontent:"Blockchain Protocols' (new ones or forks of existing blockchains like Ethereum, Solana, Polkadot, etc.) and Smart Contracts' Development on EVM-compatible, (Ethereum, Binance Smart Chain, Polygon, etc.).",
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
        title: "AI and Machine Learning",
        subtitle: "AI and Machine Learning",
        intro: "In the rapidly evolving landscape of technology, harnessing the power of artificial intelligence (AI) is crucial for staying ahead. Our AI development services are designed to seamlessly integrate into your business framework, empowering your products with smart, data-driven solutions. Our commitment is to transform your ideas into intelligent applications that not only enhance user experience but also drive innovation and growth in your industry.",
        detail: "Whether you're a startup looking to implement machine learning or an enterprise seeking to harness the power of artificial intelligence, we're here to make it happen.",
        content: "Our approach involves understanding your unique business challenges and objectives to craft AI solutions that make a real impact. From predictive analytics to natural language processing, our team specializes in turning data into a strategic asset, driving efficiency, and fostering innovation.",
        subcontent: "AI Model Development/Large Language Models Integration/ Training and Testing/Audio Processing/Natural Language Processing (NLP)",
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