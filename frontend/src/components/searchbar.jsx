import React, { useState, useRef } from "react";
import Trie from "../utils/trie.js";
import { dictionary,Teamlist,Playerlist,Leaguelist } from "../utils/dictionary.js";
import searchImg from "../assets/search.png";
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const inputRef = useRef(null);
  const [showDiv, setShowDiv] = useState(false);
  const navigate = useNavigate();
  const [prefix, setPrefix] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  var myTrie = new Trie();
  (async () => {
    const words = dictionary.words;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      myTrie.insert(word);
    }
  })();

  // search function to direct to different pages
  const handleSearch = (event) => {
    event.preventDefault();
    const found = {
      type: null,
      id: null,
    };
  
    // Search in leagues
    for (const [leagueId, leagueName] of Object.entries(Leaguelist)) {
      if (leagueName.toLowerCase() === prefix.toLowerCase()) {
        found.type = "league";
        found.id = leagueId;
        break;
      }
    }
  
    // Search in teams
    if (!found.id) {
      for (const [teamId, teamName] of Object.entries(Teamlist)) {
        if (teamName.toLowerCase() === prefix.toLowerCase()) {
          found.type = "team";
          found.id = teamId;
          break;
        }
      }
    }
  
    // Search in players
    if (!found.id) {
      for (const [playerId, playerName] of Object.entries(Playerlist)) {
        if (playerName.toLowerCase() === prefix.toLowerCase()) {
          found.type = "player";
          found.id = playerId;
          break;
        }
      }
    }

    if(!found.id){
      navigate('/error-page')
      alert("No such search exists");
    }
// Redirect to search page 

const url = `search/${found.type}/:${found.id}`
navigate(url);

    
  };

  const handleSuggestionClick = (value) => {
    setPrefix(value);

    var words = value.split(" ");
    var trie_prefix = words[words.length - 1].toLowerCase();
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    console.log("found words\n", found_words);
    setSuggestions(found_words);
    console.log("suggested words", suggestions);
  };

  const handleChange = (event) => {
    var value = event.target.value;
    setPrefix(value);

    var words = value.split(" ");
    var trie_prefix = words[words.length - 1].toLowerCase();
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    console.log("found words\n", found_words);
    setSuggestions(found_words);
    console.log("suggested words", suggestions);

    // console.log(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab" && suggestions.length > 0) {
      setPrefix(suggestions[0]);
      setSuggestions([]);
    } else if (event.key === "Enter") {
      // Handle search query here (e.g., navigate to search results page)
      handleSearch(event);
    }
  };

  const handleFocus = () => {
    setShowDiv(true);
  };

  const handleBlur = () => {
    setShowDiv(false);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-[10px]">
      <div className="flex items-center bg-[#2604ED] rounded-[10px] h-[6vh] min-h-[25px] w-[43vw] md:w-[35vw] px-4 py-2">
        <div className="text-[#898989] font-semibold ">
          <img src={searchImg} alt="search" className="h-[24px] w-[24px]" />
        </div>
        <input
          type="text"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
          value={prefix}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="h-[24px] text-white bg-transparent font-serif outline-none w-full placeholder-gray-500 ml-[22px] cursor-pointer"
        />
      </div>

      {showDiv && suggestions.length > 0 && (
        <div className=" bg-sfs5 rounded-md w-[64vw] md:w-[25vw] shadow-md px-2 py-3  absolute top-[10vh] left-[10vw] md:left-[13vw]">
          <ul className="list-style-none w-[54vw] md:w-[25vw] flex flex-col text-[14px] overflow-y-auto">
            {suggestions.map((suggestion) => {
              return (
                <li
                  key={suggestion}
                  className="hover:text-black hover:font-[500] text-[14px] text-[#132B47] font-serif "
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
