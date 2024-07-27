export const storeApiData=(data)=>{
    return{
        type:"storeApi",
        payload:data,
    }
}

export const card=(data)=>{
    return{
        type:"ADD_CART",
        payload:data,
    }
}
//////// minus and removeCart is used in addToCet Page //////
export const minus=(data)=>{
    return{
        type:"MINUS",
        payload:data,
    }
    
}
export const removeCart=(data)=>{
    return{
        type:"REMOVE_CART",
        payload:data,
    }
}

//// remove all carts /////
export const clearCart = () => {
    return {
      type:'CLEAR_CART',
    };
  };
//// summery total price /////
export const summeryTotalPrice = (price) => {
    console.log("action",price);
    return {
      type:'SUMMERY_TOTAL_PRICE',
      payload: price,
    };
  };
  ////// store selected card data to show its detail/////
  export const setCurrentCard = (card) => ({
    type: 'SET_CURRENT_CARD',
    payload: card,
});
///////////////
export const addAddress = (address) => ({
    type: 'ADD_ADDRESS',
    payload: address
});

export const editAddress = (address) => ({
    type: 'EDIT_ADDRESS',
    payload: address
});

export const deleteAddress = (id) => ({
    type: 'DELETE_ADDRESS',
    payload: id
});
export const setAddressId = (id) => ({
    type: 'SET_ADDRESS_ID',
    payload: id,
  });
export const shipingMethod = (data) => ({
    type: 'SET_SHIPING_METHOD',
    payload: data,
  });