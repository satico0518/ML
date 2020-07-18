import { ItemsState, Action, GET_ITEMS_SUCCESS, SET_CURRENT_ITEM, SET_QUERY } from '../types';

const initialState: ItemsState = {
  query: '',
  itemsArray: [],
  selectedItem: null,
};

export default (state = initialState, action: Action): ItemsState => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        itemsArray: [...action.payload],
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      };

    default:
      return state;
  }
};
