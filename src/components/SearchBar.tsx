import React, { useState, FormEvent } from 'react';

// componests
import SearchInput from './SearchInput';
// assets
import logo from '../assets/images/Logo_ML.png';
import searchIcon from '../assets/images/ic_Search.png';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.length) return;
    history.push(`/items?search=${query}`);
  };
  return (
    <header className="search-bar__wrapper">
      <img className="search-bar__img" src={logo} alt="logo_ML" />
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <SearchInput placeholder="Nunca dejes de buscar" setQuery={setQuery} />
        <button type="submit" title="Search this website now">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
