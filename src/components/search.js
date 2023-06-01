import axios from "axios";
import { useState } from "react";

const Search = ( ) => {
  const [query, setQuery] = useState("");
  const [jokes, setJokes] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJokes(query);
  };

  const searchJokes = (p) => {
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${p}`)
      .then((res) => {
        setJokes(res.data.value);
      })
     
  };

  return (
    <div >
      
        <label htmlFor="search-input">Search for jokes:</label><input type="radio" name="input" id="" />
        <input
        name="input"
        
          type="text"
          id="search-input"
          value={query}
          onChange={handleChange}
        />

        <button type="button" onClick={handleSubmit}
        >Search</button>
            <p>{jokes}</p>
     
    </div>
  );
};

export default Search;