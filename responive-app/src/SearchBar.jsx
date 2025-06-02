import { useState } from "react";

import "./SearchBar.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function SearchBar_func({json_obj,setresult_selected}) {
  const [results, setResults] = useState([]);

  return (
    <div className="SearchBar"> 
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        {results && results.length > 0 && <SearchResultsList results={results} json_obj={json_obj} setresult_selected={setresult_selected}/>}
      </div>
    </div>
  );
}

export default SearchBar_func;
