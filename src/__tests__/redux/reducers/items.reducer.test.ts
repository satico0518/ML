import { itemsReducer } from '../../../redux/reducers';
import {
  SET_QUERY,
  Action,
  GET_ITEMS_SUCCESS,
  SET_CURRENT_ITEM,
  ItemsState,
} from '../../../redux/types';
const initialState: ItemsState = {
  query: '',
  itemsArray: [],
  selectedItem: null,
};
describe('items.reducer', () => {
  test('should return default state', () => {
    const action: Action = {
      type: '',
    };
    const state = itemsReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  test('should set que current query param', () => {
    const action: Action = {
      type: SET_QUERY,
      payload: 'celulares',
    };
    const state = itemsReducer(initialState, action);
    expect(state.query).toBe(action.payload);
  });
  test('should set items', () => {
    const action: Action = {
      type: GET_ITEMS_SUCCESS,
      payload: [
        { id: 1, title: 'title 1', price: 1500 },
        { id: 2, title: 'title 2', price: 2500 },
        { id: 3, title: 'title 3', price: 3500 },
      ],
    };
    const state = itemsReducer(initialState, action);
    expect(state.itemsArray).toEqual(action.payload);
  });
  test('should set the selected item', () => {
    const currentItem = { id: 2, title: 'title 2', price: 2500 };
    const action: Action = {
      type: SET_CURRENT_ITEM,
      payload: currentItem,
    };
    const state = itemsReducer(initialState, action);
    expect(state.selectedItem).toBe(action.payload);
  });
});
