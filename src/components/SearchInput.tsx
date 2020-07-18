import React, { FC, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

interface SearchInputProps {
  placeholder: string;
  setQuery: Function
}

const SearchInput: FC<SearchInputProps> = ({ placeholder, setQuery }) => {
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <input className='search-input'
      type="search"
      name="query"
      placeholder={placeholder}
      onChange={handleQueryChange}
    />
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default SearchInput;
