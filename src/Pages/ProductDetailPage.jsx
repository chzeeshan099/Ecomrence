import React from 'react'
import NavBar from '../Components/NavBar-Components/NavBar'
import ProductSpecification from '../Components/ProductDetailPage-components/ProductSpecification'
import ProductDetail from '../Components/ProductDetailPage-components/ProductDetail'
import Review from '../Components/ProductDetailPage-components/Review'
import RelatedProducts from '../Components/ProductDetailPage-components/RelatedProducts'
import Footer from '../Components/LandingPageComponents/Footer'

const ProductDetailPage = () => {
 
    return (
        <>
            <div>
                <NavBar />
               <ProductSpecification />
               <ProductDetail />
               <Review />
               <RelatedProducts />
               <Footer />
            </div>
        </>
    )
}

export default ProductDetailPage