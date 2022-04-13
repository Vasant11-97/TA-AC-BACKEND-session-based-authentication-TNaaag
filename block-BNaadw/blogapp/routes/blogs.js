var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Blog = require('../models/Blog');
var Comment = require('../models/Comment');
var User = require('../models/User');

// Route for adding blog

router.get('/new', (req, res, next) => {
  res.render('addBlog');
});

// Getting data from form and storing in database

router.post('/new', (req, res, next) => {
  Blog.create(req.body, (err, blog) => {
    if (err) return next(err);
    console.log(blog);
    // res.redirect('/users');
  });
});

module.exports = router;
