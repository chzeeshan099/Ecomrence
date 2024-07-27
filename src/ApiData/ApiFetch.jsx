import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {storeApiData} from './Action/Index'

const ApiFetch = ({limit}) => {
    const dispatch = useDispatch();
    const getApiData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products?limit=8");
            // console.log(res.data)
            dispatch(storeApiData(res.data.products));
        }
        catch (error) {
            // console.log(error.message);
        }
    }
    useEffect(() => {
        getApiData();
    }, [])

    return (
        <>
        </>
    )
}




export default ApiFetch;






























// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { storeApiData } from './Action/Index';

// const ApiFetch = ({ limit }) => {
//     const dispatch = useDispatch();

//     const getApiData = async () => {
//         try {
//             const res = await axios.get(`https://dummyjson.com/products?limit=${limit || 8}`);
//             dispatch(storeApiData(res.data.products));
//         } catch (error) {
//             console.error('Error fetching API data:', error.message);
//         }
//     };

//     useEffect(() => {
//         getApiData();
//     }, [limit]); 

//     return null; 
// };

// export default ApiFetch;
