import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results , selected_json}) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult result={result} selected_json={selected_json}/>;
      })}
    </div>
  );
};
