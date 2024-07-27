import React from 'react'
import Text from '../../WebsiteData/Text'
import Button1 from '../Button/Button1';
const Main = () => {
    const { MainData } = Text();
    return (
        <>
            <div className=' main'>
                <div className='row'>
                    <div className='col-md-12 col-lg-7 d-flex flex-column align-items-center justify-content-center'>
                        <div className='mx-md-5 mx-sm-5 p-5 mainHeadingDataDiv'>
                            <h6 className="mainh6">{MainData.firstHeading}</h6>
                            <h1 className='mainh1'>{MainData.name} <span className='mainSpan'>{MainData.nameSpan}</span></h1>
                            <p className='mainPara'>{MainData.para}</p>
                            <Button1 name="Shop Now" bgColor="transparent" border="1px solid white" color="white" />
                        </div>

                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-5 px-5 mainImgDiv d-sm-flex d-md-flex align-items-center justify-content-center'>
                        <img className='img-fluid mianImg' src={MainData.img}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main