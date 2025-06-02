import { useState } from "react";

import "./SearchBar.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function SearchBar_ingred({selected_json}) {
  const [results, setResults] = useState([]);

  return (
    <div className="App"> 
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} selected_json={selected_json}/>}
      </div>
    </div>
  );
}

export default SearchBar_ingred;
