import React, { useState, useDispatch } from 'react';
import { useHistory } from 'react-router-dom';
import { searchAction } from '../redux/searchSlice'; // Import search action

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchAction(query)); // Dispatch search action with query
    const encodedQuery = encodeURIComponent(query); // Encode query for URL
    history.push(`/search?q=${encodedQuery}`); // Redirect to search page
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex items-center bg-[#2604ED] rounded-[10px] h-[6vh] w-[43vw] px-4 py-2">
    <button
      className="text-[#898989] font-semibold "
      onClick={handleSearch}
    >
      <img src={search} alt="search" className="h-[24px] w-[24px]" />
    </button>
    <input
      type="text"
      placeholder="Search"
      value={query}
  onChange={handleChange}
      className="h-[24px] bg-transparent font-serif outline-none w-full placeholder-gray-500 ml-[22px]"
    />
  </div>
  );
};

export default SearchBar;

