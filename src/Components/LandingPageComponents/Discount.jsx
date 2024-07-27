import React, { useEffect, useState } from 'react';
import axios from 'axios';
import heart from '../../imgs/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import tokri from '../../imgs/navBarTokri.png';
import { card } from '../../ApiData/Action/Index';
import { Link } from 'react-router-dom';
import { setCurrentCard} from '../../ApiData/Action/Index';

// Discount Component and BuyCardDiv Component css are same
const Discount = () => {
    const dispatch = useDispatch();
    const [apiState, setApiState] = useState([]); 

    const getApiData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products/search?q=phone");
            const receivedData = res.data;
            const limitedProducts = receivedData.products.slice(4, 8);
            setApiState(limitedProducts);
        } 
        catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const add = (data) => {
        dispatch(card(data));
    }

    const Card = ({ data }) => {
        const [favourite, setFavourite] = useState(null);
        ///////////////
        const cardCounter = useSelector(state => {
            const cardItem = state.cardReducer.find(item => item.id === data.id);
            return cardItem ? cardItem.counter : 0;
        });
        const handleCardClick = (data) => {
            dispatch(setCurrentCard(data));
        }
        ///////////////

        return (
            <div className='col-3 discountBuyDiv1 my-2'>
                <div className='d-flex justify-content-between w-100 '>
                    <div className='cardTokri position-relative'>
                        <p className='position-absolute'>{cardCounter}</p>
                        <img src={tokri} alt="Cart" />
                    </div>
                    <img
                        className={` ${favourite === data.id ? 'heart activeHeart' : 'heart'}`}
                        onClick={() => setFavourite((prevId) => (prevId === data?.id ? null : data?.id))}
                        src={heart} alt="Favourite" />
                </div>
                <Link to="/productDetailPage" onClick={() => handleCardClick(data)}>
                <img className='img-fluid' src={data.images[0]} alt="Product" />
             </Link>
                <p className='text-center m-0'>{data.description.slice(0, 50)}...</p>
                <h1 className=' m-0'>{data.price}</h1>
                <button className='BuyCardDivBtn' onClick={()=>add(data)}>Add To Cart</button>
            </div>
        );
    };

    return (
        <>
            <div className='container my-5'>
                <h1 className='discountHeading my-3'>Discounts up to -50%</h1>
                <div className='row justify-content-around'>
                    {
                        Array.isArray(apiState) && apiState.map((data) => <Card key={data.id} data={data} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Discount;
