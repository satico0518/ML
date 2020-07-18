// types
import {
  Action,
  GET_ITEMS_SUCCESS,
  SET_QUERY,
  SET_CURRENT_ITEM,
} from '../types';
import { ProductDetail } from '../../types';
// redux
import { Dispatch } from 'redux';
import { setErrorAction, loadingAction } from './ui.actions';
// config
import { ITEMS_URL } from '../../config';
// axios
import axios from 'axios';

export const setQueryAction = (query: string): Action => ({
  type: SET_QUERY,
  payload: query,
});

export const setItemsAction = (items: any): Action => {
  return {
    type: GET_ITEMS_SUCCESS,
    payload: items.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        state_name: item.address.state_name,
        free_shipping: item.shipping.free_shipping,
      };
    }),
  };
};

export const getProductDetailByIdAction = (productId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const item = await getFulldata(productId);
      dispatch(setCurrentItem(item));
    } catch (error) {
      dispatch(setErrorAction(error));
    } finally {
      dispatch(loadingAction(false));
    }
  };
};

const setCurrentItem = (detail: ProductDetail): Action => {
  return {
    type: SET_CURRENT_ITEM,
    payload: detail,
  };
};

const getFulldata = async (productId: string): Promise<ProductDetail> => {
  const itemDetailUrl = `${ITEMS_URL}/${productId}`;
  const itemDescriptionUrl = `${itemDetailUrl}/description`;
  const detailResultAsync = axios(itemDetailUrl);
  const descResultAsync = axios(itemDescriptionUrl);
  const [detail, description] = await Promise.all([
    detailResultAsync,
    descResultAsync,
  ]);
  const {
    id,
    title,
    price,
    currency_id,
    pictures,
    condition,
    seller_address: {
      state: { name },
    },
    shipping: { free_shipping },
    sold_quantity,
  } = detail.data;
  const { plain_text } = description.data;
  return {
    author: {
      name: 'David',
      lastname: 'Gomez',
    },
    item: {
      id,
      title,
      price: {
        amount: price,
        currency: currency_id,
        decimals: 0,
      },
      picture: pictures[0].url,
      condition,
      state_name: name,
      free_shipping,
      sold_quantity,
      description: plain_text,
    },
  };
};
