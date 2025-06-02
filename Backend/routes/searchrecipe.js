const searchrecipe = (req, res) => {
    console.log(req.body); 
    res.send("Search Recipe reached");
};

export default searchrecipe