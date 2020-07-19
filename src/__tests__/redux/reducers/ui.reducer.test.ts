import { UIState, Action, LOADING, SET_ERROR } from '../../../redux/types';
import { uiReducer } from '../../../redux/reducers';

const initialState: UIState = {
  loading: false,
  error: null,
};

describe('ui.reducer', () => {
  test('should return default state', () => {
    const action: Action = {
      type: '',
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  test('should set loading to true', () => {
    const action: Action = {
      type: LOADING,
      payload: true,
    };
    const state = uiReducer(initialState, action);
    expect(state.loading).toBeTruthy();
  });
  test('should set error ', () => {
    const action: Action = {
      type: SET_ERROR,
      payload: { message: 'error' },
    };
    const state = uiReducer(initialState, action);
    expect(state.error).toEqual(action.payload);
  });
});
