import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Text from '../../WebsiteData/Text'
import Button1 from '../Button/Button1';
const Gallery = () => {
    const { GalleryData } = Text();
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const mobileImage = GalleryData.section4imgMobile;
    const desktopImage = GalleryData.section4imgDesktop;
  
    return (
        <>
            <div className='galleryMainDiv'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        {/* ///////////  Section 1  /////////////// */}
                        <div className='row sec1Row'>
                            <div className='col-6 sec1ImgDiv'>
                                <img className='img-fluid sec1Img' src={GalleryData.section1img}></img>
                            </div>
                            <div className='col-6 d-flex flex-column justify-content-center sec1data'>
                                <h1>{GalleryData.section1H1}</h1>
                                <p className='sec1P'>{GalleryData.section1p}</p>
                            </div>
                        </div>
                        <div className='row'>
                            {/* ///////////  Section 2  /////////////// */}
                            <div className='col-md-12 col-lg-6 sec2MainDiv'>
                                <div className='row sec2Div'>
                                    <div className='col-5'>
                                        <img className='gallerySec2Img' src={GalleryData.section2img} ></img>
                                    </div>
                                    <div className='col-7 d-flex flex-column align-items-center justify-content-center'>
                                        <div className='sec2Data'>
                                            <h1 className='section2H1'>{GalleryData.section2H1} <span>{GalleryData.section2H1Span}</span></h1>
                                            <p className='section2p'>{GalleryData.section2p}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* ///////////  Section 3  /////////////// */}
                            <div className='col-md-12 col-lg-6  sec3MainDiv'>
                                <div className='row sec3Row'>
                                    <div className='col-5 sec3col1'>
                                        <img className='sec3Img' src={GalleryData.section3img}></img>
                                    </div>
                                    <div className='col-6 my-auto sec3col2'>
                                        <h1 className='sec3H1'>{GalleryData.section3H1} <span>{GalleryData.section3H1Span}</span></h1>
                                        <p className='sec3P'>{GalleryData.section3p}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////  Section 4  /////////////// */}
                    <div className='col-md-12 col-lg-6 border sec4MainDiv'>
                        <div className='row sec4ChildDiv'>
                            <div className='col-7 m-auto p-4 sec4Data'>
                                <h1 className='sec4H1'>{GalleryData.section4H1} <span>{GalleryData.section4H1Span}</span></h1>
                                <p className='sec4P'>{GalleryData.section4p}</p>
                                <Button1 name="Shop Now" bgColor="transparent" border="1px solid black" color="black" fontWeight="500"/>
                            </div>
                            <div className='col-5 section4imgDiv '>
                                <img className='section4img img-fluid' src={isMobile ? mobileImage : desktopImage} alt="Section 4"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery