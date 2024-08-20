import React, { useState,useEffect } from 'react';
import card1 from '../../imgs/card (1).png';
import card2 from '../../imgs/card (2).png';
import card3 from '../../imgs/card (3).png';
import Input from '../Input';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { clearCart } from '../../ApiData/Action/Index';
import { useNavigate } from 'react-router-dom';

const Step3 = ({ setCurrentStepIndex }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const addedCards = useSelector(state => state.cardReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productTotals = addedCards.map(product => ({
        ...product,
        totalPrice: (product.counter * product.price).toFixed(2),
    }));
    const addresses = useSelector(state => state.addressReducer.addresses);
    const addressId = useSelector(state => state.addressIdReducer.number);
    const matchingAddress = addresses.find(address => address.id === addressId);
    const step2DataPrice = useSelector(state => state.shipingMethodReducer.data) || {};
    const subtotalPrice = useSelector(state => state.summeryTotalReducer.price) || 0;
    const [subtotal, setSubtotal] = useState(subtotalPrice);
    const [step2Data, setStep2Data] = useState(step2DataPrice);
    const [activePayment, setActivePayment] = useState('Credit Card');
    const paymentOptions = [
        'Credit Card',
        'PayPal',
        'PayPal Credit'
    ];

    const handlePaymentClick = (option) => {
        setActivePayment(option);
    };

    const onSubmit = (data) => {
        Swal.fire({
            title: "Successfully Checkout",
            text: "Your payment has been deducted from your account",
            icon: "success"
        }).then(() => {
            dispatch(clearCart());
            setSubtotal(0);
            setStep2Data({});
            navigate('/home');
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Ensure shippingCost is a number
    const shippingCost = Number(step2Data.cost) || 0;
    const total = (Number(subtotal) + shippingCost).toFixed(2);

    return (
        <>
            <form id="step3Form" onSubmit={handleSubmit(onSubmit)}>
                <div className='container my-5'>
                    <div className='row '>
                        <div className='col-12 col-md-6 py-2 mb-4 mb-md-0'>
                            <h4 className='mx-2'>Summery</h4>
                            {
                                productTotals.map((data) => (
                                    <div key={data.name} className='summeryDiv row rounded my-2 mx-sm-1 py-2 d-flex align-items-center justify-content-center'>
                                        <div className='col-2'>
                                            <img src={data.images[0]} className='w-50' alt={data.title}></img>
                                        </div>
                                        <div className='col-7'>
                                            <p className='m-0'>{data.title}</p>
                                        </div>
                                        <div className='col-3 text-end pe-3'>
                                            <h6 className='m-0'>${data.totalPrice}</h6>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='my-4 mx-2'>
                                <div>
                                    <p className='fw-medium'>Address</p>
                                    <p className='fw-medium'>{matchingAddress.address}</p>
                                </div>
                                <div>
                                    <p>Shipment method</p>
                                    <p className='fw-medium'>{step2Data.description}</p>
                                </div>
                                <div className='d-flex justify-content-between fw-bold'>
                                    <p>Subtotal</p>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Estimated shipping & Handling</p>
                                    <p>${shippingCost.toFixed(2)}</p>
                                </div>
                                <div className='d-flex justify-content-between fw-bold'>
                                    <p>Total</p>
                                    <p>${total}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 border rounded'>
                            <h4>Payment</h4>
                            <div>
                                {paymentOptions.map(option => (
                                    <button
                                        key={option}
                                        className={`px-sm-2 py-1 me-2 me-sm-3 fw-medium bg-white border-0 border-black step3-card-nav ${activePayment === option ? 'border-bottom' : ' border-0'}`}
                                        style={{
                                            color: activePayment === option ? 'black' : '#909090'
                                        }}
                                        onClick={() => handlePaymentClick(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <div className='mt-4'>
                                {activePayment === 'Credit Card' && <img className='w-75' src={card1} alt="Card 1" />}
                                {activePayment === 'PayPal' && <img className='w-75' src={card2} alt="Card 2" />}
                                {activePayment === 'PayPal Credit' && <img className='w-75' src={card3} alt="Card 3" />}
                            </div>
                            <div className='d-flex flex-column gap-2 my-3'>
                                <Input
                                    placeholder={"Cardholder Name"}
                                    {...register('cardholderName', { required: 'Cardholder name is required' })}
                                />
                                {errors.cardholderName && <p className='text-danger warning'>{errors.cardholderName.message}</p>}
                                <Input
                                    placeholder={"Card Number"}
                                    {...register('cardNumber', {
                                        required: 'Card number is required',
                                        pattern: {
                                            value: /^\d{16}$/,
                                            message: 'Card number must be exactly 16 digits'
                                        }
                                    })}
                                />
                                {errors.cardNumber && <p className='text-danger warning'>{errors.cardNumber.message}</p>}
                                <div className='d-flex justify-content-between'>
                                    <div className='w-50'>
                                        <Input
                                            placeholder={"Exp.Date"}
                                            width={"80%"}
                                            {...register('expiryDate', {
                                                required: 'Expiry date is required',
                                                pattern: {
                                                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                                                    message: 'Expiry date must be in MM/YY format'
                                                }
                                            })}
                                        />
                                        {errors.expiryDate && <p className='text-danger warning'>{errors.expiryDate.message}</p>}
                                    </div>
                                    <div className='w-50 d-flex flex-column align-items-end'>
                                        <Input
                                            placeholder={"CVV"}
                                            width={"80%"}
                                            {...register('cvv', {
                                                required: 'CVV is required',
                                                pattern: { value: /^\d{3}$/, message: 'CVV must be exactly 3 digits' }
                                            })}
                                        />
                                        {errors.cvv && <p className='text-danger warning'>{errors.cvv.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox'></input>
                                <p className='m-0 fw-medium'>Same as billing address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Step3;