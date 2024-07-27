import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar-Components/NavBar'
import Footer from '../Components/LandingPageComponents/Footer'
import iphone from '../imgs/iphone.png'
import close from '../imgs/Close.png'
import addImg from '../imgs/add.svg'
import minusImg from '../imgs/minus.svg'
import { useSelector, useDispatch } from 'react-redux';
import { card, minus, removeCart, clearCart, summeryTotalPrice } from '../ApiData/Action/Index';
import { Link, useNavigate } from 'react-router-dom'

const AddToCartPage = () => {
  const addedCards = useSelector(state => state.cardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Import useNavigate

  const add = (data) => { dispatch(card(data)); }
  const dec = (data) => { dispatch(minus(data)); }
  const remove = (data) => { dispatch(removeCart(data)); }

  const productTotals = addedCards.map(product => ({
    ...product,
    totalPrice: (product.counter * product.price).toFixed(2),
  }));

  const subTotal = addedCards.reduce((acc, product) => acc + (product.counter * product.price), 0);
  const taxAmount = useSelector(state =>
    (state.cardReducer?.reduce((total, item) => total + item.counter, 0) || 0) * 5
  );
  const shippingAmount = useSelector(state =>
    (state.cardReducer?.reduce((total, item) => total + item.counter, 0) || 0) * 3
  );

  const TotalAmount = taxAmount + subTotal;

  const [promoCode, setPromoCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState(TotalAmount);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const handleApplyDiscount = () => {
    const specificPromoCode = 'zeeshan';
    const specificCardNumber = '12345';

    if (isDiscountApplied) {
      alert('Discount has already been applied.');
      return;
    }
    if (promoCode === specificPromoCode && cardNumber === specificCardNumber) {
      const discount = totalAmount * 0.05;
      setTotalAmount(totalAmount - discount);
      setIsDiscountApplied(true);
      alert('5% discount applied!');
    } else {
      alert('Invalid promo code or card number.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updatedTotal = subTotal + taxAmount + shippingAmount;
    setTotalAmount(updatedTotal);
  }, [subTotal, taxAmount, shippingAmount]);

  useEffect(() => {
    if (productTotals.length === 0) {
      navigate('/home');
    }
  }, [productTotals, navigate]);

  const handleClick = () => {
    dispatch(summeryTotalPrice(totalAmount));
  }

  return (
    <>
      <div>
        <div className='border-b'>
          <NavBar />
        </div>
        <div className='container px-5'>
          <div className='row'>
            {/* /////////// Add to cart items ////////////// */}
            <div className='col-12 col-lg-7'>
              <h2>Shopping Cart</h2>
              {/* ///// 1 ///// */}
              {
                productTotals.map((product) => {
                  return (
                    <div key={product.id} className='border-bottom d-flex my-4 addToCardDiv'>
                      <div className=''>
                        <img className='addToCartImg me-1' src={product.images[0]} alt={product.title}></img>
                      </div>
                      <div className='col-10 col-lg-8 d-flex addToCardChildDiv'>
                        <div className=' col-sm-10 col-md-6 col-lg-8'>
                          <h6 className='fs-6 cartProductName'>{product.title}</h6>
                          <p className='cartProductNumber'>{product.sku}</p>
                        </div>
                        <div className='col-9 col-sm-10 col-md-6 col-lg-7 d-flex align-items-center justify-content-around'>
                          <img src={addImg} onClick={() => add(product)} className='addToCartSign' alt='Add'></img>
                          <button className='bg-white border px-1 px-sm-3 py-1 countBtn'>{product.counter}</button>
                          <img src={minusImg} onClick={() => dec(product)} className='addToCartSign' alt='Minus'></img>
                          <h6 className='m-0 productAmount'>${product.totalPrice}</h6>
                          <img src={close} onClick={() => remove(product.id)} className='addToCartSign' alt='Remove'></img>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* /////////////////////// total items price form /////////////// */}
            <div className='col-sm-12 col-md-12 col-lg-5 border rounded-3 p-5 w-sm-full h-100 mt-4 totalFormDiv'>
              <h2>Order Summary</h2>
              <div>
                <div>
                  <p className='my-0'>Discount code / Promo code</p>
                  <input
                    placeholder='Code'
                    className='w-100 border p-2'
                    onChange={(e) => setPromoCode(e.target.value)}
                  >
                  </input>
                </div>
                <div className='my-4'>
                  <p className='my-0'>Your bonus card number</p>
                  <div className='border d-flex justify-content-between w-sm-full'>
                    <input
                      placeholder='Enter Card Number'
                      className='border-0 p-2 w-75 w-md-100'
                      onChange={(e) => setCardNumber(e.target.value)}
                    ></input>
                    <button onClick={handleApplyDiscount} className=' px-3 bg-white border rounded mx-md-0 mx-lg-0 my-2'>Apply</button>
                  </div>
                </div>
              </div>
              <div>
                <div className='d-flex justify-content-between'>
                  <h6>Subtotal</h6>
                  <h6>${subTotal.toFixed(2)}</h6>
                </div>
                <div className='d-flex justify-content-between my-2'>
                  <h6>Estimated Tax</h6>
                  <h6>${taxAmount}</h6>
                </div>
                <div className='d-flex justify-content-between'>
                  <h6>Discount</h6>
                  <h6>5%</h6>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                  <h6>Total</h6>
                  <h6>${totalAmount.toFixed(2)}</h6>
                </div>
              </div>
              <Link to="/addressPage">
                <button className='w-100 py-2 rounded border-0 my-3 text-white bg-black' onClick={handleClick}>Check out</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default AddToCartPage