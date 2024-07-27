import React, { useState } from 'react';
import shiping from '../../imgs/shiping.png';
import location from '../../imgs/location.png';
import payment from '../../imgs/payment.png';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Button3 from './Button3';

const Address = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const steps = [
        { step: 'Step 1', title: 'Address', imgSrc: location },
        { step: 'Step 2', title: 'Shipping', imgSrc: shiping },
        { step: 'Step 3', title: 'Payment', imgSrc: payment }
    ];

    const handleStepClick = (index) => {
        setCurrentStepIndex(index);
    };

    const handleNextClick = () => {
        const formId = `step${currentStepIndex + 1}Form`;
        const form = document.getElementById(formId);

        if (form) {
            const event = new Event('submit', { cancelable: true, bubbles: true });
            form.dispatchEvent(event);
            
            if (!event.defaultPrevented) {
                setCurrentStepIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
            }
        }
    };

    const handleBackClick = () => {
        setCurrentStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const currentStep = steps[currentStepIndex];

    return (
        <>
            <div className='container mt-4'>
                <div className='row justify-content-around'>
                    {steps.map((item, index) => (
                        <div
                            key={item.title}
                            className='col-3 d-flex align-items-center justify-content-center addressDiv'
                            onClick={() => handleStepClick(index)}
                        >
                            <img 
                                className='rounded-4 me-1' 
                                src={item.imgSrc} 
                                alt={item.title} 
                                style={{ backgroundColor: currentStepIndex === index ? 'black' : '#F5F5F5' }} 
                            />
                            <div style={{ color: currentStepIndex === index ? 'black' : '#F5F5F5' }}>
                                <p className='m-0 p-0'>{item.step}</p>
                                <h6 className='m-0 p-0'>{item.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    {currentStepIndex === 0 && <Step1 setCurrentStepIndex={setCurrentStepIndex} />}
                    {currentStepIndex === 1 && <Step2 setCurrentStepIndex={setCurrentStepIndex} />}
                    {currentStepIndex === 2 && <Step3 setCurrentStepIndex={setCurrentStepIndex} />}
                </div>
                <div className='d-flex gap-3 my-5 justify-content-end'>
                    <Button3 
                        onClick={handleBackClick} 
                        name={"Back"} 
                        bgColor={"white"} 
                        disabled={currentStepIndex === 0} 
                    />
                    <Button3 
                        onClick={handleNextClick} 
                        name={"Next"} 
                        bgColor={"black"} 
                        color={"white"} 
                        type='button'  // Keep as button type
                        disabled={currentStepIndex === steps.length - 1} 
                    />
                </div>
            </div>
        </>
    );
};

export default Address;










// import React, { useState } from 'react';
// import shiping from '../../imgs/shiping.png';
// import location from '../../imgs/location.png';
// import payment from '../../imgs/payment.png';
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Button3 from './Button3';

// const Address = () => {
//     const [currentStepIndex, setCurrentStepIndex] = useState(0);

//     const steps = [
//         { step: 'Step 1', title: 'Address', imgSrc: location },
//         { step: 'Step 2', title: 'Shipping', imgSrc: shiping },
//         { step: 'Step 3', title: 'Payment', imgSrc: payment }
//     ];

//     const handleStepClick = (index) => {
//         setCurrentStepIndex(index);
//     };

//     const handleNextClick = () => {
//         const formId = `step${currentStepIndex + 1}Form`;
//         const form = document.getElementById(formId);

//         if (form) {
//             form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
//         }
//     };

//     const handleBackClick = () => {
//         setCurrentStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const currentStep = steps[currentStepIndex];

//     return (
//         <>
//             <div className='container mt-4'>
//                 <div className='row justify-content-around'>
//                     {steps.map((item, index) => (
//                         <div
//                             key={item.title}
//                             className='col-3 d-flex align-items-center justify-content-center addressDiv'
//                             onClick={() => handleStepClick(index)}
//                         >
//                             <img 
//                                 className='rounded-4 me-1' 
//                                 src={item.imgSrc} 
//                                 alt={item.title} 
//                                 style={{ backgroundColor: currentStepIndex === index ? 'black' : '#F5F5F5' }} 
//                             />
//                             <div style={{ color: currentStepIndex === index ? 'black' : '#F5F5F5' }}>
//                                 <p className='m-0 p-0'>{item.step}</p>
//                                 <h6 className='m-0 p-0'>{item.title}</h6>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="mt-4">
//                     {currentStepIndex === 0 && <Step1 setCurrentStepIndex={setCurrentStepIndex} />}
//                     {currentStepIndex === 1 && <Step2 setCurrentStepIndex={setCurrentStepIndex} />}
//                     {currentStepIndex === 2 && <Step3 />}
//                 </div>
//                 <div className='d-flex gap-3 my-5 justify-content-end'>
//                     <Button3 
//                         onClick={handleBackClick} 
//                         name={"Back"} 
//                         bgColor={"white"} 
//                         disabled={currentStepIndex === 0} 
//                     />
//                     <Button3 
//                         onClick={handleNextClick} 
//                         name={"Next"} 
//                         bgColor={"black"} 
//                         color={"white"} 
//                         type='button'  // Change type to button
//                         disabled={currentStepIndex === steps.length - 1} 
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Address;
