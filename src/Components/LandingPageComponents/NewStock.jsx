import React, { useState } from 'react'
import Text from '../../WebsiteData/Text'
import Button2 from '../Button/Button2'
const NewStock = () => {
    const [bgColor, setBgColor] = useState(null);
    const gbChangeFun = (id) => {
        setBgColor(id);
    }
    const { BuyCard2 } = Text();

    return (
        <>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-around flex-wrap'>
                    {
                        BuyCard2.map((data) => {
                            return (
                                <div className={` ${bgColor === data.id ? 'BuyCardDiv2 activeDiv' : 'BuyCardDiv2'}`} id={data.class} onClick={() => gbChangeFun(data.id)}>
                                    <img className='BuyCardImg2 img-fluid' src={data.img} alt={data.name} />
                                    <div>
                                        <h1>{data.name}</h1>
                                        <p>{data.desc}</p>
                                        <Button2 name="Shop Now" bgColor="white" bgColor2={bgColor === data.id} />
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default NewStock