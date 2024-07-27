import React from 'react'
import Logo from '../../imgs/footerLogo.png';
import facebookImg from '../../imgs/facebook.png'
import instagramImg from '../../imgs/Instagram.png'
import tiktokImg from '../../imgs/tiktok.png'
import twitterImg from '../../imgs/Twitter.png'

const Footer = () => {
    return (
        <>
            <div className='footerMainDiv'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-5 col-lg-5 footerc1'>
                            <img src={Logo} className='footerImg'></img>
                            <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                        </div>
                        <div className='col-md-3 col-lg-3 footerc2 my-5 my-md-0 my-lg-0'>
                            <div className='footerc2Child'>
                                <h1>Services</h1>
                                <a>Bonus program</a>
                                <a>Gift cards</a>
                                <a>Credit and payment</a>
                                <a>Service contracts</a>
                                <a>Non-cash account</a>
                                <a>Payment</a>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-3 footerc3 '>
                            <div className='footerc3Child'>
                                <h1>Assistance to the buyer</h1>
                                <a>Find an order</a>
                                <a>Terms of delivery</a>
                                <a>Exchange and return of goods</a>
                                <a>Guarantee</a>
                                <a>Frequently asked questions</a>
                                <a>Terms of use of the site</a>
                            </div>
                        </div>

                    </div>
                    {/* ////// row 2////// */}
                    <div className='row'>
                        <div className='col-1'>
                            <img src={twitterImg}></img>
                        </div>
                        <div className='col-1'>
                            <img src={facebookImg}></img>
                        </div>
                        <div className='col-1'>
                            <img src={tiktokImg}></img>
                        </div>
                        <div className='col-1'>
                            <img src={instagramImg}></img>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer