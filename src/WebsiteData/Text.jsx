import React from 'react'
import MainDataIphoneImg from '../imgs/main Iphone Image.png'
import PlayStationImg from '../imgs/PlayStation.png'
import glassesImg from '../imgs/glasses.png'
import macBookImgDesktop from '../imgs/MacBook Pro 14.svg'
import macBookImgMobile from '../imgs/MacBook Pro 14.png'
import headPhoneImg from '../imgs/headPhone.png'
///////////
import RightArrow from '../imgs/RightArrow.png'
import LeftArrow from '../imgs/LeftArrow.png'
import phoneImg from '../imgs/PhoneImg.png'
import watchImg from '../imgs/watchImg.png'
import gamingImg from '../imgs/GamingImg.png'
import headPhone2Img from '../imgs/HeadphoneImg.png'
import cameraImg from '../imgs/CameraImg.png'
import computerImg from '../imgs/ComputerImg.png'
/////////
import SecondLastLaptop1 from '../imgs/secondLastComponentlaptop (1).png'
import SecondLastLaptop2 from '../imgs/secondLastComponentlaptop (2).png'
import SecondLastLaptop3 from '../imgs/secondLastComponentlaptop (3).png'
import SecondLastphone from '../imgs/secondLastComponentPhone.png'
import SecondLastwatch from '../imgs/secondLastComponentWatch.png'
///////// BuyCard ///////
import heartImg from '../imgs/heart.svg'
import Iphone14pro from '../imgs/iphone.png'
import Zflip from '../imgs/z-flip.png'
////////////// Discount ////////
import newWatch from '../imgs/newWatch.png'
import airpodWatch from '../imgs/airpodWatch.png'
import tab from '../imgs/tab.svg'
import macbook from '../imgs/Macbook 1.svg'

const Text = () => {
    //////////////////  Main Component Data/////////////////
    const MainData = {
        firstHeading: "Pro.Beyond.",
        name: "IPhone 14",
        nameSpan: "Pro",
        para: "Created to change everything for the better. For everyone",
        img: MainDataIphoneImg,
    }
    //////////////////  Gallery Component Data/////////////////
    const GalleryData = {
        ///////// section 1 data ////////
        section1img: PlayStationImg,
        section1H1: "Playstation 5",
        section1p: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
        ///////// section 2 data ////////
        section2img: headPhoneImg,
        section2H1: "Apple AirPods ",
        section2H1Span: "Max",
        section2p: "Computational audio. Listen, it's powerful",
        ///////// section 3 data ////////
        section3img: glassesImg,
        section3H1: "Apple Vision ",
        section3H1Span: "Pro",
        section3p: "An immersive way to audio entertainment.",
        ///////// section 4 data ////////
        section4imgDesktop: macBookImgDesktop,
        section4imgMobile: macBookImgMobile,
        section4H1: "Macbook ",
        section4H1Span: "Air ",
        section4p: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. ",
    }

    const SecondLast = {
        img1: SecondLastLaptop1,
        img2: SecondLastLaptop2,
        img3: SecondLastLaptop3,
        img4: SecondLastphone,
        img5: SecondLastwatch,
    }

    ///////////////////////////// BuyCard component  /////////////////////////////
    const BuyCard = [
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
        {
            img1: heartImg,
            img2: Iphone14pro,
            desc: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: "$999"
        },
    ]
    ///////////////////////////// New stock component  /////////////////////////////
    const BuyCard2 = [
        {
            id: "1",
            class: "one",
            img: airpodWatch,
            name: "Popular Products",
            desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",

        },
        {
            id: "2",
            class: "two",
            img: tab,
            name: "Ipad Pro",
            desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",

        },
        {
            id: "3",
            class: "three",
            img: Zflip,
            name: "Samsung Glaxy",
            desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",

        },
        {
            id: "4",
            class: "four",
            img: macbook,
            name: "Macbook Pro",
            desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",

        },
    ]
    ////////////////////////////// Discount ///////////////////
    const Discount = [
        {
            id: "1",
            img1: heartImg,
            img2: newWatch,
            desc: "Apple watch Pro Max 32GB Deep Purple",
            price: "$123"
        },
        {
            id: "2",
            img1: heartImg,
            img2: newWatch,
            desc: "Apple watch Pro Max 32GB Deep Purple",
            price: "$123"
        },
        {
            id: "3",
            img1: heartImg,
            img2: newWatch,
            desc: "Apple watch Pro Max 32GB Deep Purple",
            price: "$123"
        },
        {
            id: "4",
            img1: heartImg,
            img2: newWatch,
            desc: "Apple watch Pro Max 32GB Deep Purple",
            price: "$123"
        }
    ]
    /////////////////// Filter section in productPage //////////////
    const FilterSideBar = [
        {
            id: "1",
            name: "Brand",
            items: [
                { name: "Apple", remainingItems: '10' },
                { name: "Samsung", remainingItems: '20' },
                { name: "Xiaomi", remainingItems: '30' },
                { name: "Poco", remainingItems: '60' },
                { name: "Oppo", remainingItems: '33' },
                { name: "Realme", remainingItems: '11' },
                { name: "Infinix", remainingItems: '25' },
                { name: "Techno", remainingItems: '88' },
                { name: "Htc", remainingItems: '83' },
                { name: "Itel", remainingItems: '100' }
            ],
        },
        {
            id: "2",
            name: "Battery capacity",
            items: [
                { option: "6000mah" },
                { option: "5000mah" },
                { option: "4000mah" }
            ]
        },
        {
            id: "3",
            name: "Screen type",
            items: [
                { option: "OLED" },
                { option: "AMOLED" },
                { option: "LCD display" },
                { option: "TFT LCD" }
            ]
        },
        {
            id: "4",
            name: "Screen diagonal",
            items: [
                { option: '7"' },
                { option: '6"' },
                { option: '5"' },
                { option: '4"' }
            ]
        },
        {
            id: "5",
            name: "Protection class",
            items: [
                { option: "Ceramic" },
                { option: "Plastic" },
                { option: "Liquid" },
                { option: "Tempered" }
            ]
        },
        {
            id: "6",
            name: "Built-in memory",
            items: [
                { option: "1 TB" },
                { option: "512 GB" },
                { option: "256 GB" },
                { option: "128 GB" },
                { option: "64 GB" },
                { option: "32 GB" },
                { option: "16 GB" }
            ]
        }
    ];
    ///////////// specificions in productDetailPage ////////////////




    return { MainData, GalleryData, SecondLast, BuyCard, BuyCard2, Discount, FilterSideBar }
}
export const CategoryData = [
    {
        img: phoneImg,
        name: "Phones"
    },
    {
        img: watchImg,
        name: "Smart Watches"
    },
    {
        img: cameraImg,
        name: "Cameras"
    },
    {
        img: headPhone2Img,
        name: "Head Phones"
    },
    {
        img: computerImg,
        name: "Computers"
    },
    {
        img: gamingImg,
        name: "Games"
    },
]


export default Text