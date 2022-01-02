import axios from 'axios';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from '../variables/variables';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products/');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: PRODUCT_LIST_FAIL, payload: err.response });
  }
};
export const productDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: PRODUCT_FAIL, payload: err.response });
  }
};
