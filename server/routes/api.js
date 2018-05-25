var express = require('express');
var { parse } = require('medium-post-parser');
var router = express.Router();

router.get('/posts/author/:author', async function(req, res, next) {
  const posts = await parse({ user: req.params.author });
  res.json(posts);
});

router.get('/posts/publication/:publication', async function(req, res, next) {
  const posts = await parse({ publication: req.params.publication });
  res.json(posts);
});

module.exports = router;
