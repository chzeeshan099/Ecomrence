import React from 'react'
import Text from '../../WebsiteData/Text'
import Button1 from '../Button/Button1';

const SecondLast = () => {
    const { SecondLast } = Text();
    return (
        <>
            <div className='container-fluid secondLastMainDiv'>
                <div className='secondLastMainDivrow row'>
                    {/* /////// col1 //////// */}
                    <div className='col-4 secondLastCol1'>
                        <img src={SecondLast.img3} className='secondLastImg1 img-fluid'></img>
                        <img src={SecondLast.img2} className='secondLastImg2 img-fluid'></img>
                        <img src={SecondLast.img1} className='secondLastImg3 img-fluid'></img>
                    </div>
                    {/* /////// col2 //////// */}
                    <div className='col-5 secondLastHeading d-flex flex-column align-items-center justify-content-center'>
                        <div className='text-center'>
                            <h1>Big Summer <span>Sale</span></h1>
                            <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                            <Button1 name="Shop Now" bgColor="transparent" border="1px solid white" color="white" />
                        </div>
                    </div>
                    {/* /////// col3 //////// */}
                    <div className='col-3 secondLastCol3'>
                        <img src={SecondLast.img4} className='secondLastImg4 img-fluid'></img>
                        <img src={SecondLast.img5} className='secondLastImg5 img-fluid'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondLast