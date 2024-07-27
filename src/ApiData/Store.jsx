import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './Reducer/Index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['addToCartReducer', 'induadialAddToCartReducer', 'cardReducer', 'currentCardReducer','addressReducer','addressIdReducer','shipingMethodReducer','summeryTotalReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware());
const persistor = persistStore(store);

export { store, persistor };











// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 

// import rootReducer from './Reducer/Index';

// const persistConfig = {
//   key: 'root', 
//   storage, 
//   whitelist: ['addToCartReducer' , 'induadialAddToCartReducer','cardReducer','currentCardReducer','stepReducer'], 
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(persistedReducer, applyMiddleware());

// const persistor = persistStore(store);

// export { store, persistor };
