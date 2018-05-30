import { combineReducers,createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dealingToken from './reducer_dealingToken';
import uploadProduct from './reducer_uploadProduct';
import getProduct from './reducer_getProduct';
import getPicture from './reducer_getPicture';
const rootReducer= combineReducers({
    Token:dealingToken,
    UploadProduct:uploadProduct,
    GetProduct:getProduct,
    GetPicture:getPicture
})
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);
export default store;