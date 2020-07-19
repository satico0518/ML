import { Item, ProductDetail } from '../types';

// UI TYPES
export const LOADING = '[UI] LOADING';
export const SET_ERROR = '[UI] SET_ERROR';

// ITEMS TYPES
export const SET_QUERY = '[ITEMS] SET_QUERY';
export const GET_ITEMS_SUCCESS = '[ITEMS] GET_ITEMS_SUCCESS';
export const SET_CURRENT_ITEM = '[ITEMS] SET_CURRENT_ITEM';

// interfaces
export type Action = {
  type: string;
  payload?: any | null;
};

// States
export type AppState = {
  ui: UIState;
  items: ItemsState;
}
export type UIState = {
  loading: boolean;
  error: any
};
export type ItemsState = {
  query: string;
  itemsArray: Item[];
  selectedItem: ProductDetail | null
};
