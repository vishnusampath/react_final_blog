var express = require('express');
var router = express.Router();

var Blog_Model = require('../../../models/blog/blog');

router.route('/blog/add')
    .post(function (req, res) {
      var blog_model = new Blog_Model();
      blog_model.title       =   req.body.addTitle;
      blog_model.topic       =   req.body.addTopic;
      blog_model.text        =   req.body.addText;
      blog_model.author_name =   req.body.addAuthor;
      blog_model.poster      =   '/images/' + req.body.addPoster;

      blog_model.save(function (err) {
        if(err){
          res.send(err);
        }
        res.json({message: 'Post Added'});
      });

    });

// Route to get all post by category
router.route('/blog/:topic')
// Get the post by category
    .get(function(req, res) {
      Blog_Model.find({"topic": req.params.topic}, function(err, category_posts) {
        if (err)
          res.send(err);

        res.json(category_posts);
      });
    });

// Route to get a post
router.route('/post/:post_id')
// Get the post by id
    .get(function(req, res) {
      Blog_Model.findById(req.params.post_id, function(err, post) {
        if (err)
          res.send(err);

        res.json(post);
      });
    })

// Route to get all posts
router.route('/blog')
// Get all posts
    .get(function(req, res){
      Blog_Model.find(function(err, blog_posts) {
            if (err)
                res.send(err);
            res.json(blog_posts);
        });
    });


module.exports= router;
