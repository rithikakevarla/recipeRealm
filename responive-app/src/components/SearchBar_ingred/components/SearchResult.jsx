import "./SearchResult.css";

export const SearchResult = ({ result,selected_json}) => {
  return (
    <div
      className="search-result"
      onClick={(e) =>{
        console.log(result)
        selected_json(result)
      }}
    >
      <div className="record">
      <div className="record-title">{result.title}</div>
      </div>
    </div>
  );
};
