import React, { useState, useEffect } from 'react';
import Pencile from '../../imgs/pencile.png';
import close from '../../imgs/Close.png';
import add from '../../imgs/plus-icon.png';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { addAddress, editAddress, deleteAddress, setAddressId } from '../../ApiData/Action/Index';

const Step1 = ({ setCurrentStepIndex }) => {
    const addresses = useSelector(state => state.addressReducer);
    const addressId = useSelector(state => state.addressIdReducer.number);
    const dispatch = useDispatch();
    
    const { handleSubmit, control, setValue, formState: { errors } } = useForm();
    
    const [show, setShow] = useState(false);
    const [newAddress, setNewAddress] = useState({
        id: null,
        label: '',
        type: '',
        address: '',
        phone: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(addressId);

    useEffect(() => {
        setValue('selectedAddress', selectedAddressId);
    }, [selectedAddressId, setValue]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    const handleSave = () => {
        if (editMode) {
            dispatch(editAddress(newAddress));
        } else {
            const newId = addresses.length + 1;
            dispatch(addAddress({ ...newAddress, id: newId }));
        }
        setNewAddress({ id: null, label: '', type: '', address: '', phone: '' });
        setEditMode(false);
        handleClose();
    };

    const handleEdit = (address) => {
        setNewAddress(address);
        setEditMode(true);
        handleShow();
    };

    const handleDelete = (id) => {
        dispatch(deleteAddress(id));
    };

    const handleSelect = (id) => {
        setSelectedAddressId(id);
        setValue('selectedAddress', id);
    };

    const onSubmit = (data) => {
        if (!data.selectedAddress) {
            console.log('Please select an address.');
            return;
        }
        dispatch(setAddressId(data.selectedAddress)); 
        setCurrentStepIndex(1);
    };

    return (
        <>
            <div className='container'>
                <h3>Select Address</h3>
                <form id='step1Form' onSubmit={handleSubmit(onSubmit)}>
                    {addresses && addresses.map((address) => (
                        <div key={address.id} className='adrressDiv row my-3 py-3 justify-content-between'>
                            <div className='col-8 d-flex align-items-start'>
                                <input
                                    className='me-3 mt-1'
                                    type='checkbox'
                                    name='address'
                                    checked={selectedAddressId === address.id}
                                    onChange={() => handleSelect(address.id)}
                                />
                                <div>
                                    <h5 className='m-0 fs-6'>
                                        {address.label} <span className='fs-6 rounded-4 py-1 px-2 bg-black text-white '>{address.type}</span>
                                    </h5>
                                    <p className='my-1 fw-semibold'>{address.address}</p>
                                    <p>{address.phone}</p>
                                </div>
                            </div>
                            <div className='col-3 d-flex align-items-center justify-content-end'>
                                <img src={Pencile} className='me-3' alt='edit' onClick={() => handleEdit(address)}></img>
                                <img src={close} alt='delete' onClick={() => handleDelete(address.id)}></img>
                            </div>
                        </div>
                    ))}
                    {errors.selectedAddress && <p className='text-danger'>{errors.selectedAddress.message}</p>}
                    <input type="hidden" {...control.register("selectedAddress", { required: "Please select an address." })} />
                </form>

                <div className='lineDivParent my-4'>
                    <h1 className='line'></h1>
                    <div onClick={handleShow} className='lineDiv d-flex flex-column align-items-center justify-content-center'>
                        <img src={add} className='lineImg'></img>
                        <p className='fw-medium mb-0 mt-1'>Add New Address</p>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editMode ? 'Edit Address' : 'Add New Address'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label>Label</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter label'
                                    name='label'
                                    value={newAddress.label}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter type'
                                    name='type'
                                    value={newAddress.type}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter address'
                                    name='address'
                                    value={newAddress.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter phone'
                                    name='phone'
                                    value={newAddress.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant='primary' onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default Step1;