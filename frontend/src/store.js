import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducer/productReducers';
import { oneProductReducer } from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducer';
import { userReducer } from './reducer/userReducers';
import { userCreateReducer } from './reducer/userReducers';
import { userDetailsReducer } from './reducer/userReducers';
import { userUpdateReducer } from './reducer/userReducers';

const reducer = combineReducers({
  productList: productReducer,
  productDetail: oneProductReducer,
  cart: cartReducer,
  userLogin: userReducer,
  userRegister: userCreateReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateReducer,
});
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const initalState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userLogin: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
