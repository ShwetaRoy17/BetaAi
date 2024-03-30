import React, { useState, useDispatch } from "react";
import Trie from "../utils/trie.js";
import dictionary from "../utils/dictionary.js";
import search from "../assets/search.png";
// import { useHistory } from "react-router-dom";
// import { searchAction } from "../redux/searchSlice";
// Import search action

const SearchBar = () => {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  var myTrie = new Trie();
  (async () => {
    const words = dictionary.words;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      myTrie.insert(word);
    }
  })();

  // const [query, setQuery] = useState("");
  // const dispatch = useDispatch();
  // const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    alert("hello");
    // if (query) {
    //   dispatch(searchAction(query)); // Dispatch search action with query
    // }
    // history.push(`/search?q=${query}`); // Redirect to search page
  };

  const handleChange = (event) => {
    var value = event.target.value;
    setPrefix(value);
    var words = value.split(" ");
    var trie_prefix = words[words.length - 1].toLowerCase();
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    var first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== ""
    ) {
      if (first_word != null) {
        var remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    } else {
      setSuggestion(value);
    }
    setQuery(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
  };

  return (
    <div className="flex items-center bg-[#2604ED] rounded-[10px] h-[6vh] w-[43vw] px-4 py-2">
      <button className="text-[#898989] font-semibold " onClick={handleSearch}>
        <img src={search} alt="search" className="h-[24px] w-[24px]" />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={prefix}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="h-[24px] text-white bg-transparent font-serif outline-none w-full placeholder-gray-500 ml-[22px]"
      />
      <input
        type="text"
        name="search-bar"
        className="-z-1 text-gray-400 cursor-none font-serif h-[24px] w-full ml-[22px]"
        id="search-bar2"
        value={suggestion}
      />
    </div>
  );
};

export default SearchBar;
