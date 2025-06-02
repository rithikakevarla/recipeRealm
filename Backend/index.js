import router from './routes.js'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(bodyParser)
mongoose.connect('mongodb+srv://Heisenberg_09xd:clashofclanshack@cluster.9enaaqx.mongodb.net/RecipeRealm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
app.listen(3000,(err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("server running")
    }
})