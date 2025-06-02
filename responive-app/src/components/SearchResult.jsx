import "./SearchResult.css";

export const SearchResult = ({ result ,json_obj,setresult_selected}) => {
  const handleImageError = (e) => {
    e.target.src = 'https://static.thenounproject.com/png/3381255-200.png'; // Set the path to your alternate image here
  }
  const handleClick = (e) => {
    // alert(`You selected ${result.title}!`);
    json_obj(result);
    setresult_selected(true);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div
      className="search-result"
      onClick={handleClick}
    >
      <div className="record">
      <img src={result['image-url']} alt="img" onError={handleImageError}/>
      <div className="record-title">{result.title}</div>
      
      </div>
    </div>
  );
};
