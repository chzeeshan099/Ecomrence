import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Text from '../WebsiteData/Text';
import NavBar from '../Components/NavBar-Components/NavBar';
import Vector from '../imgs/Vector 9.png';
import downArrow from '../imgs/downArrow.png';
import upArrow from '../imgs/upArrow.png';
import Search from '../imgs/navBarSearch.png';
import heart from '../imgs/heart.svg';
import tokri from '../imgs/navBarTokri.png';
import filter from '../imgs/filter.png';
import { card } from '../ApiData/Action/Index';
import leftArrow from '../imgs/LeftArrow.png';
import rightArrow from '../imgs/RightArrow.png';
import Footer from '../Components/LandingPageComponents/Footer';

///////Card Component ///////
const Card = ({ data }) => {
    const [favourite, setFavourite] = useState(null);
    const dispatch = useDispatch();

    const cardCounter = useSelector(state => {
        const cardItem = state.cardReducer.find(item => item.id === data.id);
        return cardItem ? cardItem.counter : 0;
    });

    const add = (data) => { dispatch(card(data)); };

    return (
        <div key={data.id} className="BuyCard BuyCard2 col-sm-8 col-md-5 col-lg-3 mx-md-2 mx-lg-2">
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
            <img src={data.images[0]} className='BuyCardImg' alt="Product" />
            <p>{data.description.slice(0, 35)}...</p>
            <h1>{data.price}$</h1>
            <button className='BuyCardDivBtn px-5' onClick={() => add(data)}>Buy Now</button>
        </div>
    );
};

const ProductsPage = () => {
    const [apiState, setApiState] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const getApiData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products/search?q=phone");
            const receivedData = res.data;
            setApiState(receivedData.products);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getApiData();
    }, []);

    const toggleDiv = () => {
        setToggle(!toggle);
    };

    const { FilterSideBar } = Text();
    const [dropdownStatus, setDropdownStatus] = useState({});

    const changeStatus = (name) => {
        setDropdownStatus(prevStatus => ({
            ...prevStatus,
            [name]: !prevStatus[name]
        }));
    };

    const handleCheckboxClick = (e, name, brand) => {
        const checkboxes = document.getElementsByName(name);
        checkboxes.forEach((checkbox) => {
            if (checkbox !== e.target) {
                checkbox.checked = false;
            }
        });

        if (e.target.checked) {
            setSelectedBrand(brand);
        } else {
            setSelectedBrand(null);
        }
    };

    const [pageIndex, setPageIndex] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (pageIndex - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, apiState.length);

    const filteredProducts = selectedBrand ? apiState.filter(product => product.brand === selectedBrand) : apiState;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    const handleArrowClick = (direction) => {
        let nextPageIndex;
        if (direction === 'right') {
            nextPageIndex = pageIndex + 1;
        } else if (direction === 'left') {
            nextPageIndex = pageIndex - 1;
        }
        nextPageIndex = Math.max(1, Math.min(nextPageIndex, Math.ceil(filteredProducts.length / itemsPerPage)));
        setPageIndex(nextPageIndex);
    };

    const handleClick = (index) => {
        setPageIndex(index);
    };

    return (
        <>
            <div className='border border-bottom'>
                <NavBar />
            </div>
            <div className='container'>
                <div className='d-none d-lg-block my-4'>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center'>
                            <h6><Link to="/" className='link'>Home</Link></h6>
                            <img src={Vector} className='mx-3 h-50' alt="Vector"></img>
                        </div>
                        <div className='d-flex align-items-center mx-5'>
                            <h6><Link to="/" className='link'>Catalog</Link></h6>
                            <img src={Vector} className='mx-3 h-50' alt="Vector"></img>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6>Smartphones</h6>
                        </div>
                    </div>
                </div>
                <div className='d-lg-none my-4'>
                    <div className='d-flex align-items-center justify-content-between filterSection'>
                        <div className='d-flex align-items-center justify-content-between p-1 border filterSection-child-1'>
                            <h3>Filter</h3>
                            <img src={filter} onClick={toggleDiv}></img>
                        </div>
                        <div className='d-flex align-items-center justify-content-between p-1 border filterSection-child-2'>
                            <h3>By rating</h3>
                            <img src={downArrow} className=''></img>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className={`col-md-12 col-lg-3 bigDiv ${toggle ? 'd-block' : 'd-none d-lg-block'}`}>
                        <div className='d-sm-flex d-md-flex flex-lg-column flex-sm-wrap flex-md-wrap'>
                            {FilterSideBar.map((data) => {
                                const isOpen = dropdownStatus[data.name];
                                return (
                                    <div className='my-2 mx-sm-3 mx-md-3 mx-lg-0' key={data.id}>
                                        <div onClick={() => changeStatus(data.name)} className='d-flex justify-content-between border-black border-bottom pb-2'>
                                            <h6 className='filterHeading px-md-2'>{data.name}</h6>
                                            {isOpen ? <img src={upArrow} alt="Up Arrow" className='filterArrow my-sm-2 my-md-2 my-lg-0 px-sm-2 px-md-2' /> : <img src={downArrow} alt="Down Arrow" className='filterArrow my-sm-2 my-md-2 my-lg-0 px-sm-2 px-md-2' />}
                                        </div>
                                        {isOpen && <div className='option my-2'>
                                            {data.items.map((item, index) => (
                                                <div key={index} className='d-flex align-items-center'>
                                                    <input
                                                        name={data.name}
                                                        type='checkbox'
                                                        onClick={(e) => handleCheckboxClick(e, data.name, item.name)}
                                                    />
                                                    <span className='px-1'>{item.name || item.option}</span>
                                                    {item.remainingItems && <span>{item.remainingItems}</span>}
                                                </div>
                                            ))}
                                        </div>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-9 gap-2 row d-flex align-items-center justify-content-end flex-wrap'>
                        {
                            loading ? (
                                <div>
                                    <h1 className='mx-5'>Loading...</h1>
                                </div>
                            ) : (
                                productsToShow.length > 0 ? (
                                    productsToShow.map((data) => <Card key={data.id} data={data} />)
                                ) : (
                                    <div>
                                        <h5 className='text-center'>Products are not available</h5>
                                    </div>
                                )
                            )
                        }

                        {/* Pagination buttons */}
                        <div className='d-flex my-4 justify-content-center'>
                            <div className='mx-1 mx-sm-3'><img src={leftArrow} onClick={() => handleArrowClick('left')}></img></div>
                            {[...Array(Math.min(Math.ceil(filteredProducts.length / itemsPerPage), 5)).keys()].map((index) => (
                                <div className='mx-1 mx-sm-3' key={index}>
                                    <button onClick={() => handleClick(index + 1)} className={`px-3 py-1 border-0 ${pageIndex === index + 1 ? 'activeBtn' : ''}`}>{index + 1}</button>
                                </div>
                            ))}
                            <div className='mx-2 mx-sm-4'><img src={rightArrow} onClick={() => handleArrowClick('right')}></img></div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ProductsPage;














// import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import Text from '../WebsiteData/Text'
// import NavBar from '../Components/NavBar-Components/NavBar';
// import Vector from '../imgs/Vector 9.png';
// import downArrow from '../imgs/downArrow.png';
// import upArrow from '../imgs/upArrow.png';
// import Search from '../imgs/navBarSearch.png';
// import apple from '../imgs/iphone.png';
// import heart from '../imgs/heart.svg';
// import tokri from '../imgs/navBarTokri.png';
// import filter from '../imgs/filter.png';
// import { card } from '../ApiData/Action/Index';
// import leftArrow from '../imgs/LeftArrow.png'
// import rightArrow from '../imgs/RightArrow.png'
// import Footer from '../Components/LandingPageComponents/Footer'
// ///////Card Component ///////
// const Card = ({ data }) => {
//     const [favourite, setFavourite] = useState(null);
//     const dispatch = useDispatch();
//     //////////////// Individual  add_to_cart update function start //////////
//     const cardCounter = useSelector(state => {
//         const cardItem = state.cardReducer.find(item => item.id === data.id);
//         return cardItem ? cardItem.counter : 0;
//     });
//     //////////////// Individual  add_to_cart update function end//////////
//     const add = (data) => { dispatch(card(data)); };

//     return (
//         <div key={data.id} className=" BuyCard BuyCard2  col-sm-8 col-md-5 col-lg-3 mx-md-2 mx-lg-2">
//             <div className='d-flex justify-content-between w-100'>
//                 <div className='cardTokri position-relative '>
//                     <p className='position-absolute'>{cardCounter}</p>
//                     <img src={tokri} alt="Tokri" />
//                 </div>
//                 <img
//                     src={heart}
//                     className={` ${favourite === data.id ? 'heart activeHeart' : 'heart'}`}
//                     alt="Heart"
//                     onClick={() => setFavourite((prevId) => (prevId === data?.id ? null : data?.id))}
//                 />
//             </div>
//             <img src={data.images[0]} className='BuyCardImg' alt="Product" />
//             <p>{data.description.slice(0, 35)}...</p>
//             <h1>{data.price}$</h1>
//             <button className='BuyCardDivBtn px-5' onClick={() => add(data)}>Buy Now</button>
//         </div>
//     );
// };

// const ProductsPage = () => {
//     const [apiState, setApiState] = useState([]);
//     const [toggle, setToggle] = useState(false);
//     const [loading, setLoading] = useState(true)
//     const getApiData = async () => {
//         try {
//             const res = await axios.get("https://dummyjson.com/products/search?q=phone");
//             const receivedData = res.data;
//             setApiState(receivedData.products);
//             setLoading(false)
//         } catch (error) {
//             // console.log(error.message);
//         }
//     };
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         getApiData();
//     }, []);
//     const toggleDiv = () => {
//         setToggle(!toggle);
//     };


//     const { FilterSideBar } = Text();
//     const [dropdownStatus, setDropdownStatus] = useState({});

//     const changeStatus = (name) => {
//         setDropdownStatus(prevStatus => ({
//             ...prevStatus,
//             [name]: !prevStatus[name]
//         }));
//     };
//     const handleCheckboxClick = (e, name) => {
//         const checkboxes = document.getElementsByName(name);
//         checkboxes.forEach((checkbox) => {
//             if (checkbox !== e.target) {
//                 checkbox.checked = false;
//             }
//         });
//     };

//     // pagination to show next cards //
//     const [pageIndex, setPageIndex] = useState(1);
//     const itemsPerPage = 6;
//     const startIndex = (pageIndex - 1) * itemsPerPage;
//     const endIndex = Math.min(startIndex + itemsPerPage, apiState.length);

//     const productsToShow = apiState.slice(startIndex, endIndex);

//     // Handle pagination arrow click
//     const handleArrowClick = (direction) => {
//         let nextPageIndex;
//         if (direction === 'right') {
//             nextPageIndex = pageIndex + 1;
//         } else if (direction === 'left') {
//             nextPageIndex = pageIndex - 1;
//         }
//         nextPageIndex = Math.max(1, Math.min(nextPageIndex, Math.ceil(apiState.length / itemsPerPage)));
//         setPageIndex(nextPageIndex);
//     };

//     const handleClick = (index) => {
//         setPageIndex(index);
//     };


//     return (
//         <>
//             <div className='border border-bottem'>
//                 <NavBar />
//             </div>
//             <div className='container'>
//                 <div className=' d-none d-lg-block my-4'>
//                     <div className='d-flex'>
//                         <div className='d-flex align-items-center'>
//                             <h6><Link to="/" className='link'>Home</Link></h6>
//                             <img src={Vector} className='mx-3 h-50' alt="Vector"></img>
//                         </div>
//                         <div className='d-flex  align-items-center mx-5'>
//                         <h6><Link to="/" className='link'>Catalog</Link></h6>
//                             <img src={Vector} className='mx-3 h-50' alt="Vector"></img>
//                         </div>
//                         <div className='d-flex align-items-center'>
//                             <h6>Smartphones</h6>
//                         </div>
//                     </div>
//                 </div>
//                 {/* //////////////////////// */}
//                 {/* data show on small screen */}
//                 <div className='d-lg-none my-4'>
//                     <div className='d-flex align-items-center justify-content-between filterSection'>
//                         <div className='d-flex align-items-center justify-content-between p-1 border filterSection-child-1'>
//                             <h3>Filter</h3>
//                             <img src={filter} onClick={toggleDiv}></img>
//                         </div>
//                         <div className='d-flex align-items-center justify-content-between p-1 border filterSection-child-2'>
//                             <h3>By rating</h3>
//                             <img src={downArrow} className=''></img>
//                         </div>
//                     </div>
//                 </div>
//                 {/* //////////////////////// */}
//                 <div className='row'>
//                     <div className={`col-md-12 col-lg-3 bigDiv ${toggle ? 'd-block' : 'd-none d-lg-block'}`}>

//                         <div className='border d-sm-flex d-md-flex flex-lg-column flex-sm-wrap flex-md-wrap'>
//                             {FilterSideBar.map((data) => {
//                                 const isOpen = dropdownStatus[data.name];
//                                 return (
//                                     <div className='my-2 mx-sm-3 mx-md-3 mx-lg-0' key={data.id}>
//                                         <div onClick={() => changeStatus(data.name)} className='d-flex justify-content-between border-black border-bottom pb-2'>
//                                             <h6 className='filterHeading px-md-2'>{data.name}</h6>
//                                             {isOpen ? <img src={upArrow} alt="Up Arrow" className='filterArrow my-sm-2 my-md-2 my-lg-0 px-sm-2 px-md-2' /> : <img src={downArrow} alt="Down Arrow" className='filterArrow my-sm-2 my-md-2 my-lg-0 px-sm-2 px-md-2' />}
//                                         </div>
//                                         {isOpen && <div className='option my-2'>
//                                             <div className='border rounded-1 py-2 my-2 d-flex overflow-hidden'>
//                                                 <img src={Search} alt="Search"></img>
//                                                 <input placeholder='Search' className='border-0 px-2'></input>
//                                             </div>
//                                             {data.items.map((item, index) => (
//                                                 <div key={index} className='d-flex align-items-center'>
//                                                     <input name={data.name} type='checkbox' onClick={(e) => handleCheckboxClick(e, data.name)}></input>
//                                                     <span className='px-1'>{item.name || item.option}</span>
//                                                     {item.remainingItems && <span>{item.remainingItems}</span>}
//                                                 </div>
//                                             ))}
//                                         </div>}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                     <div className='col-md-12 col-lg-9 gap-2 row d-flex align-items-center justify-content-end flex-wrap'>
//                         {
//                             loading ? (
//                                 <div>
//                                     <h1 className='mx-5'>Loading...</h1>
//                                 </div>
//                             ) : (

//                                 productsToShow.map((data) => <Card key={data.id} data={data} />)

//                             )
//                         }

//                         {/* Pagination buttons */}
//                         <div className='d-flex my-4 justify-content-center'>
//                             <div className='mx-1 mx-sm-3'><img src={leftArrow} onClick={() => handleArrowClick('left')}></img></div>
//                             {[...Array(Math.min(Math.ceil(apiState.length / itemsPerPage), 5)).keys()].map((index) => (
//                                 <div className='mx-1 mx-sm-3' key={index}>
//                                     <button onClick={() => handleClick(index + 1)} className={`px-3 py-1 border-0 ${pageIndex === index + 1 ? 'activeBtn' : ''}`}>{index + 1}</button>
//                                 </div>
//                             ))}
//                             <div className='mx-2 mx-sm-4'><img src={rightArrow} onClick={() => handleArrowClick('right')}></img></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </>
//     )
// }

// export default ProductsPage
