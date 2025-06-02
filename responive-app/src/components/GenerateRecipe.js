import React, { useEffect, useState } from 'react';
import "./GenerateRecipe.css";
import SearchBar_ingred from './SearchBar_ingred/SearchBar';
import Recipe_content from './recipe_content.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Bot from './chatbot/App.js';
import 'ldrs/ring'; 

function GenerateRecipe() {
    const [recipe_json, Setrecipe_json] = useState([]);
    const [Btn_clicked, setBtn_clicked] = useState(false);
    const [jsonObj, setJsonObj] = useState({ title: '' });
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [showBot, setShowBot] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        if (jsonObj.title && !selectedIngredients.includes(jsonObj.title)) {
            setSelectedIngredients(prevIngredients => [...prevIngredients, jsonObj.title]);
        }
    }, [jsonObj.title]);

    const handleRemoveIngredient = (ingredient) => {
        setSelectedIngredients(prevIngredients => prevIngredients.filter(item => item !== ingredient));
    };

    const ongeneraterecipe_click = () => {
        let ingred_data = {
            ingreds: selectedIngredients
        };
        if (selectedIngredients.length !== 0) {
            setLoading(true);
            fetch('http://localhost:3000/generaterecipe', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ingred_data)
            }).then((response) => response.json()).then((json) => {
                Setrecipe_json(json);
                setBtn_clicked(true);
                setLoading(false);
            });
        }
    };

    const toggleBot = () => {
        setShowBot(prevShowBot => !prevShowBot);
    };

    return (
        <div className={`Generate-Recipe ${Btn_clicked ? 'expanded' : ''}`}>
            <h1>Search ingredients</h1>
            {/* <h1>{selectedIngredients.join(', ')}</h1> */}
            <SearchBar_ingred selected_json={setJsonObj} />
            <div className='container' id="selected_ingred">
                {selectedIngredients.map((ingredient) => (
                    <div key={ingredient} className="ingredient-button">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert" id='dismissables'>
                            <strong>{ingredient}</strong>
                            <button 
                                type="button" 
                                className="btn-close" 
                                aria-label="Close" 
                                onClick={() => handleRemoveIngredient(ingredient)}
                            ></button>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <l-ring size="60" color="coral"></l-ring>}
            <button type="button" className="btn btn-dark" onClick={ongeneraterecipe_click}>Generate Recipe</button>
            

            <div className='container'>
                <Recipe_content results={recipe_json} showBtn={setShowBtn} showBot={showBot}/>
            </div>
            
            {showBtn && (
                <button className="bot-button" onClick={toggleBot}>
                    <i className="fas fa-robot"></i>
                </button>
            )}
            
            {/* {showBot && <Bot />} */}
        </div>
    );
}

export default GenerateRecipe;