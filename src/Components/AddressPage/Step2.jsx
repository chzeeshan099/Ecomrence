import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { shipingMethod } from '../../ApiData/Action/Index';

const Step2 = ({ setCurrentStepIndex }) => {
    const step2Data = useSelector((state) => state.shipingMethodReducer.data.id);
    const [futureDate10, setFutureDate10] = useState(null);
    const [futureDate5, setFutureDate5] = useState(null);
    const [scheduledDate, setScheduledDate] = useState('');
    const { handleSubmit, control, setValue, getValues, formState: { errors } } = useForm({
        defaultValues: {
            addressType: step2Data || '',
            dateInput: ''
        }
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const date = new Date();
        const date10 = new Date(date);
        date10.setDate(date10.getDate() + 10);
        setFutureDate10(date10);
        const date5 = new Date(date);
        date5.setDate(date5.getDate() + 5);
        setFutureDate5(date5);
    }, []);

    useEffect(() => {
        if (step2Data) {
            setValue('addressType', step2Data);
        }
    }, [step2Data, setValue]);

    const deliveryOptions = [
        {
            id: 1,
            cost: 'Free',
            description: 'Regular shipment',
            date: futureDate10?.toLocaleDateString(),
        },
        {
            id: 2,
            cost: '5.50',
            description: 'Fast delivery',
            date: futureDate5?.toLocaleDateString(),
        },
        {
            id: 3,
            cost: '10',
            description: 'Choose a delivery date.',
            dateInput: true
        }
    ];

    const onSubmit = (data) => {
        const selectedOption = deliveryOptions.find(option => option.id === parseInt(data.addressType));
        if (!selectedOption) {
            return;
        }

        if (selectedOption.id === 3) {
            data.dateInput = scheduledDate;
        }
        dispatch(shipingMethod({
            ...selectedOption,
            dateInput: data.dateInput
        }));
        setCurrentStepIndex(2);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container'>
            <h1 className='my-5'>Shipment Method</h1>
            <form id='step2Form' onSubmit={handleSubmit(onSubmit)}>
                {deliveryOptions.map(option => (
                    <div key={option.id} className='row border rounded py-3 mb-3 d-flex align-items-center'>
                        <div className='col-6 col-sm-8 d-sm-flex'>
                            <Controller
                                name='addressType'
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <input
                                            type='checkbox'
                                            value={option.id}
                                            checked={parseInt(getValues('addressType')) === option.id}
                                            onChange={() => {
                                                setValue('addressType', option.id);
                                                field.onChange(option.id);
                                                if (option.id !== 3) {
                                                    setScheduledDate('');
                                                    setValue('dateInput', '');
                                                }
                                            }}
                                        />
                                        <p className='my-0 mx-sm-3 fw-bold'>${option.cost}</p>
                                        <p className='m-0'>{option.description}</p>
                                    </>
                                )}
                            />
                        </div>
                        <div className='col-6 col-sm-4 d-flex justify-content-end'>
                            {option.dateInput ? (
                                <Controller
                                    name='dateInput'
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type='date'
                                            className='date'
                                            value={scheduledDate}
                                            onChange={(e) => {
                                                setScheduledDate(e.target.value);
                                                field.onChange(e.target.value);
                                            }}
                                        />
                                    )}
                                />
                            ) : (
                                <p className='m-0 text-end'>{option.date}</p>
                            )}
                        </div>
                    </div>
                ))}
                {errors.addressType && <p className='text-danger'>{errors.addressType.message}</p>}
                <input type="hidden" {...control.register("addressType", { required: "Please select an address type." })} />
            </form>
        </div>
    );
};

export default Step2;