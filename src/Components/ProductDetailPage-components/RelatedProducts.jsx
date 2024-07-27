import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import heart from '../../imgs/heart.svg';
import tokri from '../../imgs/navBarTokri.png';
import { card } from '../../ApiData/Action/Index';
import { Link } from 'react-router-dom';
import {setCurrentCard } from '../../ApiData/Action/Index';

/////////// Card Component ////////////
const Card = ({ data }) => {
    const [favourite, setFavourite] = useState(null);
    const dispatch = useDispatch();
    //////////////// Individual  add_to_cart update function start //////////
    const cardCounter = useSelector(state => {
        const cardItem = state.cardReducer.find(item => item.id === data.id);
        return cardItem ? cardItem.counter : 0;
    });
    //////////////// Individual  add_to_cart update function end//////////
    const add = (data) => { dispatch(card(data)); };
    const handleCardClick = (data) => {
        dispatch(setCurrentCard(data));
    }

    return (
        <div key={data.id} className=" BuyCard col-sm-8 col-md-5 col-lg-3 mx-md-2 mx-lg-0">
            <div className='d-flex justify-content-between w-100'>
                <div className='cardTokri position-relative '>
                    <p className='position-absolute'>{cardCounter}</p>
                    <img src={tokri} alt="Tokri" />
                </div>
                <img
                    src={heart}
                    className={` ${favourite === data.id ? 'heart activeHeart' : 'heart'}`}
                    alt="Heart"
                    onClick={() => setFavourite((prevId) => (prevId === data?.id ? null : data?.id))}
                />
            </div>
            {/* <img src={data.images[0]} className='BuyCardImg' alt="Product" /> */}
            <Link to="/productDetailPage" onClick={() => handleCardClick(data)}>
            <img src={data.images[0]} className='BuyCardImg' alt="Product" 
             />
             </Link>
            <p>{data.description.slice(0, 35)}...</p>
            <h1>{data.price}$</h1>
            <button className='BuyCardDivBtn px-5' onClick={() => add(data)}>Add To Cart</button>
        </div>
    );
};

const RelatedProducts = () => {
    const [apiState, setApiState] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentCard = useSelector(state => state.currentCardReducer.currentCard);
    const currentCategory=currentCard.category;
    const getApiData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products/search?q=phone');
            const receivedData = res.data;
            const filteredProducts = receivedData.products.filter(product => product.category === currentCategory);
            const limitedProducts = filteredProducts.slice(0, 4);
            setApiState(limitedProducts);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className='container'>
            <div className='row my-5'>
                <h1 className='mb-4'>Related Products</h1>
                {loading ? (
                    <div>
                        <h1 className='mx-5'>Loading...</h1>
                    </div>
                ) : (
                    apiState.map((data) => <Card key={data.id} data={data} />)
                )}
            </div>
        </div>
    );
}

export default RelatedProducts;
