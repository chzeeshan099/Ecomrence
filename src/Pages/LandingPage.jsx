import React from 'react'
import NavBar from '../Components/NavBar-Components/NavBar'
import Main from '../Components/LandingPageComponents/Main'
import Gallery from '../Components/LandingPageComponents/Gallery'
import Categories from '../Components/LandingPageComponents/Category'
import BuyCards from '../Components/LandingPageComponents/BuyCards'
import NewStock from '../Components/LandingPageComponents/NewStock'
import Discount from '../Components/LandingPageComponents/Discount'
import SecondLast from '../Components/LandingPageComponents/SecondLast'
import Footer from '../Components/LandingPageComponents/Footer'
import ApiFetch from '../ApiData/ApiFetch'
const LandingPage = () => {
    return (
        <>
            <NavBar/>
            <Main/>
            <Gallery/>
            <Categories/>
            <BuyCards/>
            <NewStock/>
            <Discount/>
            <SecondLast/>
            <Footer/>
            <ApiFetch limit={8} />
        </>
    )
}

export default LandingPage