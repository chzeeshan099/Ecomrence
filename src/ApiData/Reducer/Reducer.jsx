const initialState = {}
export const storeApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "storeApi":
      return action.payload;
    default:
      return state;
  }
}
//////////
const initialState3 = {
  price: 0,
};

export const summeryTotalReducer = (state = initialState3, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SUMMERY_TOTAL_PRICE':
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};
/////////////////////////////////////////////////
const initialState4 = [];

export const cardReducer = (state = initialState4, action) => {
  switch (action.type) {
    case "ADD_CART":
      const { payload } = action;

      const existingCardIndex = state.findIndex(card => card.id === payload.id);

      if (existingCardIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingCardIndex] = {
          ...updatedState[existingCardIndex],
          counter: updatedState[existingCardIndex].counter + 1
        };
        return updatedState;
      } else {
        const newCard = { ...payload, counter: 1 };
        return [...state, newCard];
      }
    //////////////////////////////////
    case "MINUS":
      const { id } = action.payload;

      const cardIndex = state.findIndex(card => card.id === id);

      if (cardIndex !== -1) {
        const updatedState = [...state];
        const card = updatedState[cardIndex];

        if (card.counter > 1) {
          updatedState[cardIndex] = {
            ...card,
            counter: card.counter - 1
          };
          return updatedState;
        } else {
          return updatedState.filter(card => card.id !== id);
        }
      }
      return state;
    case "REMOVE_CART":
      return state.filter(card => card.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

////// store selected card data to show its detail/////
const initialState5 = {
  currentCard: {},
};

export const currentCardReducer = (state = initialState5, action) => {
  switch (action.type) {
      case 'SET_CURRENT_CARD':
          return {
              ...state,
              currentCard: action.payload,
          };
      default:
          return state;
  }
};
////////////// Adreess component ///////////
const initialState6 = {
  addresses: [],
  selectedAddressId: null,
};

export const addressReducer = (state = initialState6, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    case 'EDIT_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map(addr => 
          addr.id === action.payload.id ? action.payload : addr
        ),
      };
    case 'DELETE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(addr => addr.id !== action.payload),
      };
    default:
      return state;
  }
};
const initialState7 = {
  number: 0,
};

export const addressIdReducer = (state = initialState7, action) => {
  switch (action.type) {
    case 'SET_ADDRESS_ID':
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};

const initialState8 = {
  data: {},
};

export const shipingMethodReducer = (state = initialState8, action) => {
  switch (action.type) {
    case 'SET_SHIPING_METHOD':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};