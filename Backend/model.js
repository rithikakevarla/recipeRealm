// models/Recipe.js
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    unique_id: Number,
    title: String,
    description: String,
    image_url: String,
    ingredients: [String],
    instructions: String,
    prep_time: String,
    cook_time: String,
    total_time: String,
    serving_size: String
},{collection:'Recipes_data'});

const Recipe = mongoose.model("Recipes_data", recipeSchema);

export default Recipe;
