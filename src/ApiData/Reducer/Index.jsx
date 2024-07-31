import { combineReducers } from 'redux';
import { storeApiReducer } from './Reducer';
import { addToCartReducer } from './Reducer';
import { individualAddToCartReducer } from './Reducer';
import { cardReducer } from './Reducer';
import { currentCardReducer } from './Reducer';
import { addressReducer } from './Reducer';
import { addressIdReducer } from './Reducer';
import { shipingMethodReducer } from './Reducer';
import { summeryTotalReducer } from './Reducer';
import { tokenReducer } from './Reducer';

const rootReducer = combineReducers({
    storeApiReducer,
    cardReducer,
    summeryTotalReducer,
    currentCardReducer,
    addressReducer,
    addressIdReducer,
    shipingMethodReducer,
    tokenReducer,
});

export default rootReducer;
