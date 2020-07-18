import React from 'react';
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

const SearchResults: React.FC<RouteComponentProps> = ({
  location: { search },
}) => {
  const query = queryString.parse(search).search;
  const { data, loading, error } = useSearch((query as string) || '');
  
  return (
    <main className="search-results__wrapper">
      <SearchBar />
      <section className="search-results__content">
        <Breadcrumb />
        {/* {loading ? <Loader /> : <ResultList items={data} />} */}
        <Loader />
      </section>
    </main>
  );
};

export default SearchResults;
