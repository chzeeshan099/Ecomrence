import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import search from '../../imgs/navBarSearch.png';
import boy from '../../imgs/navBarBoy.png';
import tokri from '../../imgs/navBarTokri.png';
import heart from '../../imgs/navBarHeart.png';
import logo from "../../imgs/Logo.svg";
import Burger from '../../imgs/Burger.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRightFromBracket } from "react-icons/fa6";


const NavBar = () => {
    const [show, setShow] = useState(false);
    const [showProtel, setShowPortel] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const cardCounter = useSelector(state =>
        state.cardReducer?.reduce((total, item) => total + item.counter, 0) || 0
    );

    const handleCartClick = () => {
        if (cardCounter > 0) {
            navigate('/addtoCart');
        } else {
            alert('Your cart is empty. Add items to the cart before proceeding.');
        }
    };

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim()) {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                const data = await response.json();
                if (data.products && data.products.length > 0) {
                    setSearchResults(data.products);
                } else {
                    setError('No products found');
                    setSearchResults([]);
                }
            } catch (err) {
                setError('Failed to fetch products');
                setSearchResults([]);
            }
            setLoading(false);
        } else {
            setSearchResults([]);
            setError('');
        }
    };

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const logout=()=>{
        localStorage.removeItem('token')
        navigate('/');
    }

    return (
        <>
            <div className='navBarMain bg-white position-sticky top-0 d-flex align-items-center justify-content-between py-3 px-4'>
                <Link to='/home'>
                    <div className='logoDiv'>
                        <img src={logo} alt="Logo" />
                    </div>
                </Link>
                <div className='searchDiv position-relative' ref={searchRef}>
                    <img src={search} alt="Search" className='position-absolute' style={{ top: '50%', transform: 'translateY(-50%)', left: '10px' }} onClick={() => setShow(prev => !prev)} />
                    <input
                        type='text'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={handleSearch}
                        className='form-control ps-5'
                        onClick={() => setShow(true)}
                    />
                    {show && searchResults.length > 0 && (
                        <div className='search-results position-absolute top-100 start-0 bg-white shadow rounded border' style={{ width: '100%', zIndex: 1050, height: '450px', overflowY: 'scroll' }}>
                            {loading && <p className='p-2'>Loading...</p>}
                            {error && <p className='p-2'>{error}</p>}
                            {searchResults.map(product => (
                                <div key={product.id} className='search-product my-1 d-flex p-2 align-items-center'>
                                    <img src={product.images[0]} alt={product.title} className='me-2' style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                    <div>
                                        <p className='mb-1'>{product.title}</p>
                                        <p className='mb-0'>${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {show && searchResults.length === 0 && !loading && !error && (
                        <div className='search-results position-absolute top-100 start-0 bg-white shadow rounded border' style={{ width: '100%', zIndex: 1050 }}>
                            <p className='p-2'>No products found</p>
                        </div>
                    )}
                </div>
                <div className={show ? "navLink active" : "navLink"}>
                    <Link to="/">Home</Link>
                    <a href="#">About</a>
                    <a href="#">Contact us</a>
                    <a href="#">Blog</a>
                </div>
                <div className='iconDiv position-relative'>
                    <img src={heart} alt="Heart" />
                    <div className='d-inline-block position-relative py-2 tokriDiv' onClick={handleCartClick}>
                        <img src={tokri} alt="Cart" />
                        <p className='position-absolute'>{cardCounter}</p>
                    </div>
                    <img src={boy} alt="User" onClick={()=>setShowPortel(!showProtel)}/>
                    {
                        showProtel&&(
                            <div className='position-absolute py-2 rounded-4 logoutPortel d-flex flex-column align-items-center justify-content-center'>
                        <p>zeeshan</p>
                        <h6 onClick={logout}>log out <FaArrowRightFromBracket /></h6>  
                        {/* <button className='px-3 py-1 border-0 rounded-4' onClick={logout}>Log out</button> */}
                    </div>
                        )
                    }
                </div>
                <div className='burgerDiv'>
                    <img src={Burger} alt="Menu" onClick={() => setShow(!show)} />
                </div>
            </div>
        </>
    );
}

export default NavBar;
















// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import search from '../../imgs/navBarSearch.png';
// import boy from '../../imgs/navBarBoy.png';
// import tokri from '../../imgs/navBarTokri.png';
// import heart from '../../imgs/navBarHeart.png';
// import logo from "../../imgs/Logo.svg";
// import Burger from '../../imgs/Burger.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaArrowRightFromBracket } from "react-icons/fa6";
// import { useMsal } from '@azure/msal-react';

// const NavBar = () => {
//     const [show, setShow] = useState(false);
//     const [showProtel, setShowPortel] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const searchRef = useRef(null);
//     const navigate = useNavigate();
//     const cardCounter = useSelector(state =>
//         state.cardReducer?.reduce((total, item) => total + item.counter, 0) || 0
//     );
//     const { instance } = useMsal();

//     const handleCartClick = () => {
//         if (cardCounter > 0) {
//             navigate('/addtoCart');
//         } else {
//             alert('Your cart is empty. Add items to the cart before proceeding.');
//         }
//     };

//     const handleSearch = async (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         if (query.trim()) {
//             setLoading(true);
//             setError('');
//             try {
//                 const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
//                 const data = await response.json();
//                 if (data.products && data.products.length > 0) {
//                     setSearchResults(data.products);
//                 } else {
//                     setError('No products found');
//                     setSearchResults([]);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch products');
//                 setSearchResults([]);
//             }
//             setLoading(false);
//         } else {
//             setSearchResults([]);
//             setError('');
//         }
//     };

//     const handleClickOutside = (e) => {
//         if (searchRef.current && !searchRef.current.contains(e.target)) {
//             setShow(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const logout = () => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             if (token.startsWith('google')) {
//                 localStorage.removeItem('token');
//                 navigate('/');
//             } else {
//                 instance.logoutPopup({
//                     postLogoutRedirectUri: "http://localhost:3000",
//                 }).then(() => {
//                     localStorage.removeItem('token');
//                     navigate('/');
//                 }).catch(error => {
//                     console.error(error);
//                 });
//             }
//         }
//     };

//     return (
//         <>
//             <div className='navBarMain bg-white position-sticky top-0 d-flex align-items-center justify-content-between py-3 px-4'>
//                 <Link to='/home'>
//                     <div className='logoDiv'>
//                         <img src={logo} alt="Logo" />
//                     </div>
//                 </Link>
//                 <div className='searchDiv position-relative' ref={searchRef}>
//                     <img src={search} alt="Search" className='position-absolute' style={{ top: '50%', transform: 'translateY(-50%)', left: '10px' }} onClick={() => setShow(prev => !prev)} />
//                     <input
//                         type='text'
//                         placeholder='Search'
//                         value={searchQuery}
//                         onChange={handleSearch}
//                         className='form-control ps-5'
//                         onClick={() => setShow(true)}
//                     />
//                     {show && searchResults.length > 0 && (
//                         <div className='search-results position-absolute top-100 start-0 bg-white shadow rounded border' style={{ width: '100%', zIndex: 1050, height: '450px', overflowY: 'scroll' }}>
//                             {loading && <p className='p-2'>Loading...</p>}
//                             {error && <p className='p-2'>{error}</p>}
//                             {searchResults.map(product => (
//                                 <div key={product.id} className='search-product my-1 d-flex p-2 align-items-center'>
//                                     <img src={product.images[0]} alt={product.title} className='me-2' style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
//                                     <div>
//                                         <p className='mb-1'>{product.title}</p>
//                                         <p className='mb-0'>${product.price}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                     {show && searchResults.length === 0 && !loading && !error && (
//                         <div className='search-results position-absolute top-100 start-0 bg-white shadow rounded border' style={{ width: '100%', zIndex: 1050 }}>
//                             <p className='p-2'>No products found</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className={show ? "navLink active" : "navLink"}>
//                     <Link to="/">Home</Link>
//                     <a href="#">About</a>
//                     <a href="#">Contact us</a>
//                     <a href="#">Blog</a>
//                 </div>
//                 <div className='iconDiv position-relative'>
//                     <img src={heart} alt="Heart" />
//                     <div className='d-inline-block position-relative py-2 tokriDiv' onClick={handleCartClick}>
//                         <img src={tokri} alt="Cart" />
//                         <p className='position-absolute'>{cardCounter}</p>
//                     </div>
//                     <img src={boy} alt="User" onClick={() => setShowPortel(!showProtel)} />
//                     {
//                         showProtel && (
//                             <div className='position-absolute py-2 rounded-4 logoutPortel d-flex flex-column align-items-center justify-content-center'>
//                                 <p>zeeshan</p>
//                                 <h6 onClick={logout}>log out <FaArrowRightFromBracket /></h6>
//                             </div>
//                         )
//                     }
//                 </div>
//                 <div className='burgerDiv'>
//                     <img src={Burger} alt="Menu" onClick={() => setShow(!show)} />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default NavBar;