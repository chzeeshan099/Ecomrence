import React, { useState } from 'react'
import downArrow from '../../imgs/downArrow.png'
import upArrow from '../../imgs/upArrow.png'
import { useSelector } from 'react-redux';

const screenDetails = [
    {
        category: "Screen",
        details: [
            {
                name: "Screen diagonal",
                value: "6.7\""
            },
            {
                name: "The screen resolution",
                value: "2796x1290"
            },
            {
                name: "The screen refresh rate",
                value: "120 Hz"
            },
            {
                name: "The pixel density",
                value: "460 ppi"
            },
            {
                name: "Screen type",
                value: "OLED"
            },
            {
                name: "Additionally",
                value: [
                    "Dynamic Island",
                    "Always-On display",
                    "HDR display",
                    "True Tone",
                    "Wide color (P3)"
                ]
            }
        ]
    }
];
const cameraDetails = [
    {
        category: "Camera",
        details: [
            {
                name: "Back Camera",
                value: "48-12-12mp"
            },
            {
                name: "Front Camera",
                value: "12mp"
            },
            {
                name: "Sensor",
                value: "Soney"
            },
        ]
    }
];
const batteryDetails = [
    {
        category: "Battery",
        details: [
            {
                name: "Battery Capacity",
                value: "4323mah"
            },
            {
                name: "Battery Type",
                value: "Lithiom"
            },
            {
                name: "Charger",
                value: "25 watt"
            },
        ]
    }
];

const ProductDetail = () => {
    const [showMore, setShowMore] = useState(false)
    const currentCard = useSelector(state => state.currentCardReducer.currentCard);
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <>
            <div>
                <div className='container py-5'>
                    <h1>Details</h1>
                    <p className='py-2'>{currentCard.description}</p>
                    <div className='my-5'>
                        <h3>{screenDetails[0].category}</h3>
                        {screenDetails[0].details.map((detail, index) => (
                            <div key={index} className='border-bottom my-2 d-flex justify-content-between'>
                                <h6>{detail.name}</h6>
                                {Array.isArray(detail.value) ? (
                                    <div>
                                        {detail.value.map((item, idx) => (
                                            <h6 key={idx}>{item}</h6>
                                        ))}
                                    </div>
                                ) : (
                                    <h6>{detail.value}</h6>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* ///////// */}
                    <div className=''>
                        <h3 className='my-2'>CPU</h3>
                        <div className='border-bottom my-2 d-flex justify-content-between'>
                            <h6>CPU</h6>
                            <h6>A16 Bionic</h6>
                        </div>
                        <div className='border-bottom my-2 d-flex justify-content-between'>
                            <h6>Number of cores</h6>
                            <h6>6</h6>
                        </div>
                    </div>
                    {showMore && (
                        <div>
                            {/* Camera Details */}
                            <div className='my-5'>
                                <h3 className='my-2'>{cameraDetails[0].category}</h3>
                                {cameraDetails[0].details.map((detail, index) => (
                                    <div key={index} className='border-bottom my-2 d-flex justify-content-between'>
                                        <h6>{detail.name}</h6>
                                        <h6>{detail.value}</h6>
                                    </div>
                                ))}
                            </div>

                            {/* Battery Details */}
                            <div className='my-5'>
                                <h3 className='my-2'>{batteryDetails[0].category}</h3>
                                {batteryDetails[0].details.map((detail, index) => (
                                    <div key={index} className='border-bottom my-2 d-flex justify-content-between'>
                                        <h6>{detail.name}</h6>
                                        <h6>{detail.value}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div onClick={toggleShowMore} className='border border-black p-2 m-auto d-flex align-items-center justify-content-around ProductDetailBtnDiv'>
                        {showMore ? (
                            <>
                                Show Less
                                <img src={upArrow} alt="Show Less" style={{ width: '20px', marginRight: '5px' }} />
                            </>
                        ) : (
                            <>
                                Show More
                                <img src={downArrow} alt="Show More" style={{ width: '20px', marginRight: '5px' }} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail