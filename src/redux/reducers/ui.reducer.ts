import { UIState, Action, LOADING, SET_ERROR } from '../types';

const initialState: UIState = {
  loading: false,
  error: null,
};

export default (state = initialState, action: Action): UIState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
