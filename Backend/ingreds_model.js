import mongoose from "mongoose";
const ingred_schema=new mongoose.Schema({
    title: String
})
const ingreds=mongoose.model("ingredients",ingred_schema)
export default ingreds;