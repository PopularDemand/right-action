var express = require('express');
var router = express.Router();

router.get('/posts', async function(req, res, next) {
  await Promise.resolve(true);
  res.json({
    '1234': {
      id: 1234,
      content: 'hello world'
    }
  });
});

module.exports = router;
