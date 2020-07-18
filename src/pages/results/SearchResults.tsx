import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// helpers
import queryString from 'query-string';
// components
import { Breadcrumb } from '../../components/Breadcrumb';
import SearchBar from '../../components/SearchBar';
import ResultList from '../../components/ResultList';
import Loader from '../../components/Loader';
// hooks
import useSearch from '../../hooks/useSearch';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  setItemsAction,
  setQueryAction,
} from '../../redux/actions/item.actions';

const SearchResults: React.FC<RouteComponentProps> = ({
  location: { search },
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.ui);
  const { itemsArray } = useSelector((state: any) => state.items);
  const query = queryString.parse(search).search;
  const { data } = useSearch((query as string) || '');
  useEffect(() => {
    if (data.length > 0) dispatch(setItemsAction(data));
    // eslint-disable-next-line
  }, [data]);
  useEffect(() => {
    if (query && query.length > 0) dispatch(setQueryAction(query as string));
    // eslint-disable-next-line
  }, [query]);
  return (
    <main className="search-results__wrapper">
      <SearchBar />
      <section className="search-results__content">
        <Breadcrumb />
        {loading ? <Loader /> : <ResultList items={itemsArray} />}
      </section>
    </main>
  );
};

export default SearchResults;
