import React from 'react'
import NavBar from '../Components/NavBar-Components/NavBar'
import Address from '../Components/AddressPage/Address'
import Footer from '../Components/LandingPageComponents/Footer'
const AddressPage = () => {
    return (
        <>
            <div>
                <NavBar />
                <hr></hr>
            </div>
            <Address />
            <Footer />
        </>
    )
}

export default AddressPage