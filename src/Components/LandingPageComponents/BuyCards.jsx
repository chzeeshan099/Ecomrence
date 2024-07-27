import React, { useEffect, useState } from 'react'
import axios from 'axios'
import heart from '../../imgs/heart.svg'
import tokri from '../../imgs/navBarTokri.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getApiData } from '../../ApiData/ApiFetch'
import { useDispatch } from 'react-redux';
import { addToCart, indudialaddToCart,setCurrentCard, card } from '../../ApiData/Action/Index';
///////Card Component ///////
const Card = ({ data }) => {

    const [favourite, setFavourite] = useState(null);
    const dispatch = useDispatch();

    //////////////// Individual  add_to_cart update function start //////////
    const cardCounter = useSelector(state => {
        const cardItem = state.cardReducer.find(item => item.id === data.id);
        return cardItem ? cardItem.counter : 0;
    });
    //////////////// Individual  add_to_cart update function end//////////
    /////////
    const add = (data) => { dispatch(card(data)); }


    /////////
    const handleCardClick = (data) => {
        dispatch(setCurrentCard(data));
    }

    return (
        <div key={data.id} className="col-3 BuyCardDiv " >
            <div className='d-flex justify-content-between w-100  '>
                <div className='cardTokri position-relative '>
                    <p className='position-absolute'>{cardCounter}</p>
                    <img src={tokri}></img>
                </div>
                <img
                    src={heart}
                    className={` ${favourite === data.id ? 'heart activeHeart' : 'heart'}`}
                    onClick={() => setFavourite((prevId) => (prevId === data?.id ? null : data?.id))}
                />
            </div>
            <Link to="/productDetailPage" onClick={() => handleCardClick(data)}>
            <img src={data.images[0]} className='BuyCardImg' 
             />
             </Link>
            <p>{data.description.slice(0, 50)}...</p>
            <h1>{data.price}$</h1>
            <button className='BuyCardDivBtn' onClick={() => add(data)}>Add To Cart</button>
        </div>
    )
}

///////// Main Componenet Start here /////////////
const BuyCards = () => {
    const [apiState, setApiState] = useState([]); // Initialize as an empty array
    const [filters, setFilters] = useState([]);
    const [activeLink, setActiveLink] = useState('a-one');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
    const getApiData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products/search?q=phone');
            const receivedData = res.data;
            const limitedProducts = receivedData.products.slice(0, 16);
            setApiState(receivedData);
            setFilters(limitedProducts);
        } catch (error) {
            // console.log(error.message);
        }

    };
    useEffect(() => {
        getApiData();
    }, []);
    ///////// Filter data /////////////

    const filterItem = (category) => {
        const updatedList = apiState?.products?.filter((curElem) => {
            return curElem.category === category;
        });
        setFilters(updatedList);
    };


    return (
        <>
            <div className='container my-5'>

                <div className='buyCardsHeadingDiv mb-5'>
                    <a className={`a-one pb-2 ${activeLink === 'a-one' ? 'a-oneActive' : ''}`} onClick={() => { handleLinkClick('a-one'); getApiData(); }}>All Product</a>
                    <a  className={`a-two pb-2 ${activeLink === 'a-two' ? 'a-twoActive' : ''}`} onClick={() => { handleLinkClick('a-two'); filterItem("smartphones"); }}>Mobile</a>
                    <a  className={`a-three pb-2 ${activeLink === 'a-three' ? 'a-threeActive' : ''}`} onClick={() => { handleLinkClick('a-three'); filterItem("mobile-accessories"); }}>Accessories</a>
                </div>

                <div className='row d-flex justify-content-around BuyCardRow'>

                    {filters?.length > 0 &&
                        filters.map((data) => <Card data={data} />)
                    }


                </div>
                <div className='my-3 d-flex justify-content-center'>
                    <Link to='/productsPage' className='BuyCardDivBtn mx-auto'>See All</Link>
                </div>
            </div>


        </>
    )
}

export default BuyCards