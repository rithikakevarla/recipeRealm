import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, json_obj,setresult_selected }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        // console.log(result.title)
        return <SearchResult result={result} json_obj={json_obj} setresult_selected={setresult_selected}/>;
      })}
    </div>
  );
};
