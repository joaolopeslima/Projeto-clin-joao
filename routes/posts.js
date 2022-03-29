const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');

const router = express.Router();

const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        Nome: req.body.Nome,
        Sobrenome: req.body.Sobrenome,
        Peso: req.body.Peso,
        Altura: req.body.Altura,
        PressaoArterial: req.body.PressaoArterial,
        Saturacao: req.body.Saturacao,
        Cpf: req.body.Cpf,
        Nascimento: req.body.Nascimento
    });
    try {
   const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
        res.json ({ message: err });
    }
});

//Specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
    } catch (err) {
        res.json({ message: err })
    }
});

//Delete Post
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
      } catch (err) {
          res.json({ message: err });
      }
});

//Update a post
router.patch('/:postId', async (req, res) =>{
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } }
        );
        req.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;