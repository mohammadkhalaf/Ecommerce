import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducer/productReducers';
import { oneProductReducer } from './reducer/productReducers';

const reducer = combineReducers({
  productList: productReducer,
  productDetail: oneProductReducer,
});
const initalState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
