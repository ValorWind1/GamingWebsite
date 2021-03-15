const express = require('express');
const router = express.Router();
const Game = require('../Model/Game');

//Get


//Post
router.post('/', async(req,res) => {
    console.log(req.body);
    const post = new Game({
        GameName: req.body.GameName,
        GameCompany : req.body.GameCompany,
        GamePictureUrl : req.body.GamePictureUrl
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({message : err})
    }
});


// get all posts 
router.get('/' , async (req,res) => {
    try {
        const getAllGames = await Game.find();
        res.json(getAllGames);
    }catch(err){
        console.log({message:err})
    }
});

// get one specific game based on the id 
router.get('/id' , async (req,res) => {
    try {
        const getGamebyid = await Game.findById(req.params.id);
        res.json(getGamebyid)
    }catch(err){
        console.log({message:err})
    }
});

//update post 
router.patch('./id' , async(req,res) => {
    try {
        const updateGameinfo = await Game.updateOne(
            {_id: req.params.id},
            {$set : {GameName : req.body.GameName}},
            {$set : {GameCompany : req.body.GameCompany}},
            {$set : {GamePictureUrl : req.body.GamePictureUrl}}
        )
        res.json(updateGameinfo)
    }catch(err){
        console.log({message:err})
    }
})

//delete 
router.delete('./id' , async (req,res) => {
    try{
        const deleteGame = await Game.deleteOne({_id: req.params.id});
        res.json(deleteGame);
    }catch(err){
        console.log({message:err})
    }
})


module.exports = router ; 