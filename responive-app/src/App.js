import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/Bar';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SearchRecipe from './components/SearchRecipe';
import GenerateRecipe from './components/GenerateRecipe';
function App() {
  return (
    <Router>
    <div className='App'>
      <div className='fixed'>
        <Navbar/>
      </div>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search-recipe" element={<SearchRecipe/>} />
            <Route path="/generate-recipe" element={<GenerateRecipe/>} />
            {/* <Route path="/favourites" component={Favourites} /> */}
            <Route path="/about-us" element={<AboutUs/>} />
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
