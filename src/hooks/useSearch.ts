import { useState, useEffect } from 'react';
// axios
import axios from 'axios';
// redux
import { useDispatch } from 'react-redux';
import { loadingAction, setErrorAction } from '../redux/actions/ui.actions';
// config
import { SEARCH_URL } from '../config';

export default (query: string) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const doRequest = async () => {
    try {
      dispatch(loadingAction(true));
      const result = await axios(`${SEARCH_URL}/search?q=${query}`);
      if (result.status !== 200) throw new Error(result.statusText);
      setData(result.data.results.slice(0, 4));
      dispatch(setErrorAction(null));
    } catch (error) {
      dispatch(setErrorAction(error));
    } finally {
      dispatch(loadingAction(false));
    }
  };

  useEffect(() => {
    if (query.length > 0) doRequest();
    // eslint-disable-next-line
  }, [query]);

  return {
    data
  };
};
