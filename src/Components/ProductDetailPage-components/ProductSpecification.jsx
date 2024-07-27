import React, { useEffect, useState } from 'react'
import blackBall from '../../imgs/black-ball.png'
import blueBall from '../../imgs/blue-ball.png'
import redBall from '../../imgs/red-ball.png'
import greenBall from '../../imgs/green-ball.png'
import batteryIcon from '../../imgs/battery-icon.png'
import frontCameraIcon from '../../imgs/front-camera-icon.png'
import backCameraIcon from '../../imgs/back-camera-icon.png'
import screenSizeIcon from '../../imgs/Screensize-icon.png'
import cpuIcon from '../../imgs/cpu-icon.png'
import cpuCoreIcon from '../../imgs/cpu-core-icon.png'
import werrentyIcon from '../../imgs/werrentyIcon.png'
import deleveryIcon from '../../imgs/deleveryIcon.png'
import instockIcon from '../../imgs/instockIcon.png'
import { useSelector ,useDispatch} from 'react-redux';
import { card } from '../../ApiData/Action/Index';
import { Link } from 'react-router-dom';
const ProductSpecification = () => {
    const currentCard = useSelector(state => state.currentCardReducer.currentCard);
    const [selectedColor, setSelectedColor] = useState(null);
    const price = currentCard.price;
    const discountPercentage = currentCard.discountPercentage;
    const oldPrice = price / (1 - discountPercentage / 100);
    const formattedPrice = price.toFixed(2);
    const formattedOldPrice = oldPrice.toFixed(2);
    const [largeImage, setLargeImage] = useState(currentCard?.images[0]);
    useEffect(() => {
        setLargeImage(currentCard?.images[0]);
        window.scrollTo(0, 0);
    }, [currentCard]);
    const renderImages = () => {
        const images = [];
        for (let i = 0; i < currentCard?.images.length; i++) {
            if (currentCard?.images[i]) {
                images.push(
                    <img
                        key={i}
                        src={currentCard.images[i]}
                        className={`w-50 ${i % 2 !== 0 ? 'my-lg-3 mx-2 mx-lg-0' : ''}`}
                        onClick={() => handleImageClick(currentCard.images[i])}
                        alt={`img-${i}`}
                    />
                );
            } else {
                images.push(
                    <div key={i} className={`w-50 ${i % 2 !== 0 ? 'my-lg-3 mx-2 mx-lg-0' : ''}`}>
                        No image available
                    </div>
                );
            }
        }
        return images;
    };
    const handleImageClick = (image) => {
        setLargeImage(image);
    };
    const colors = [
        { color: 'black', src: blackBall, alt: 'Black' },
        { color: 'blue', src: blueBall, alt: 'Blue' },
        { color: 'red', src: redBall, alt: 'Red' },
        { color: 'green', src: greenBall, alt: 'Green' }
    ];
    const storageOptions = ['1 TB', '512 GB', '256 GB', '128 GB'];
    const [selectedStorage, setSelectedStorage] = useState(null);
    const handleStorageClick = (storage) => {
        setSelectedStorage(storage);
    };
    const specs = [
        {
            icon: screenSizeIcon,
            title: 'Screen Size',
            value: '6.7"',
            col: 'col-md-3'
        },
        {
            icon: cpuIcon,
            title: 'CPU',
            value: 'Apple A16 Bionic',
            col: 'col-md-4'
        },
        {
            icon: cpuCoreIcon,
            title: 'Number of Cores',
            value: '6',
            col: 'col-md-4'
        },
        {
            icon: backCameraIcon,
            title: 'Main Camera',
            value: '48-12-12MP',
            col: 'col-md-3'
        },
        {
            icon: frontCameraIcon,
            title: 'Front Camera',
            value: '12MP',
            col: 'col-md-4'
        },
        {
            icon: batteryIcon,
            title: 'Battery Capacity',
            value: '4323mAH',
            col: 'col-md-4'
        }
    ];
    const infoItems = [
        {
            icon: deleveryIcon,
            title: 'Free Delivery',
            subtitle: '1-2 day'
        },
        {
            icon: instockIcon,
            title: currentCard.availabilityStatus,
            subtitle: 'Today'
        },
        {
            icon: werrentyIcon,
            title: 'Guaranteed',
            subtitle: currentCard.warrantyInformation
        }
    ];
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };
    const getBorderStyle = (color) => {
        return selectedColor === color ? '2px solid black' : 'none';
    };
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    const add = (data) => { dispatch(card(data)); }
    const showMoreToggle = () => {
        setShowMore(!showMore);
    };
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='mainImgDivSpecification col-md-8 col-lg-5 d-flex flex-column-reverse flex-lg-row m-auto'>
                        <div className='childImgDiv col-4 col-md-5 col-lg-3 d-flex flex-lg-column my-3 my-lg-auto mx-3 mx-sm-4 mx-lg-0'>
                            {renderImages()}
                        </div>
                        <div className='parentImgDiv col-10 col-lg-9 d-flex align-items-center justify-content-center'>
                            <img src={largeImage} alt="Large" />
                        </div>
                    </div>
                    <div className='col-11 col-lg-7'>
                        <div>
                            <h1 className='productDetailHeading'>{currentCard.title}</h1>
                            <h2 className='productoDetailPrice'>${formattedPrice}<span>${formattedOldPrice}</span></h2>
                            <div className='d-flex align-items-center'>
                                <p className='my-0 mx-0 mx-sm-2'>Select color :</p>
                                <div>
                                    {colors.map(({ color, src, alt }) => (
                                        <img
                                            key={color}
                                            src={src}
                                            className='mx-1 mx-sm-2'
                                            style={{ border: getBorderStyle(color), borderRadius: '20px', padding: '1px' }}
                                            onClick={() => handleColorClick(color)}
                                            alt={alt}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='my-3 productDetailStorage'>
                                {storageOptions.map((storage, index) => (
                                    <button
                                        key={index}
                                        className={`px-2 px-sm-3 py-1 bg-white border-1 rounded ${selectedStorage === storage ? 'border-2' : ''
                                            } ${index % 2 !== 0 ? 'mx-2' : ''}`}
                                        onClick={() => handleStorageClick(storage)}
                                    >
                                        {storage}
                                    </button>
                                ))}
                            </div>
                            <div className='row  gap-1 gap-md-3 justify-content-around'>
                                {specs.map((spec, index) => (
                                    <div key={index} className={`specification border rounded-4 col-5 col-sm-5 ${spec.col} d-flex align-items-center justify-content-center`}>
                                        <div className='mx-0 mx-sm-2'>
                                            <img src={spec.icon} alt={spec.title} />
                                        </div>
                                        <div>
                                            <p className='my-0'>{spec.title}</p>
                                            <h6 className='my-0 fw-bold'>{spec.value}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='my-3 my-lg-2'>
                                <p>
                                    {currentCard.description.slice(0, 100)}<span style={{ cursor: 'pointer', fontWeight: '700', borderBottom: '2px solid black' }} onClick={showMoreToggle}> {showMore ? 'Read Less' : 'Read More...'} </span>{
                                        showMore && (
                                            <span>{currentCard.description.slice(100)}</span>
                                        )
                                    }
                                </p>
                            </div>
                            <div className='d-flex justify-content-around flex-column flex-sm-row'>
                                <button className='px-5 py-3 py-sm-2 border-1 bg-white my-2 my-sm-0' onClick={()=>alert('Sucessfully Added')}>Add to Wishlist</button>
                                <Link to='/addtoCart'>
                                <button className='px-5 py-3 py-sm-2 border-1  bg-black text-white' onClick={() => add(currentCard)}>Add to Card</button>
                                </Link>
                            </div>
                            <div className='d-flex justify-content-between my-4 infoItem-main-div'>
                                {infoItems.map((item, index) => (
                                    <div key={index} className='col-3 d-flex align-items-center justify-content-around infoItemDiv'>
                                        <div className='py-2 px-2 px-lg-3 rounded-3 d-flex align-items-center justify-content-center infoItem-img'>
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <div className=' infoItem-div d-flex flex-column align-items-center justify-content-between text-center'>
                                            <p className='my-0'>{item.title}</p>
                                            <h6 className='my-0'>{item.subtitle}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductSpecification