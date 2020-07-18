import { Action, LOADING, SET_ERROR } from '../types';

export const loadingAction = (show: boolean): Action => {
    return {
        type: LOADING,
        payload: show
    }
}
export const setErrorAction = (error: any): Action => {
    return {
        type: SET_ERROR,
        payload: error
    }
}