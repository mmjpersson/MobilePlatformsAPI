var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 'SELECT temperature, unix_timestamp FROM measurement ORDER BY unit_id DESC LIMIT 5';

  db.query(query, (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }

      res.send(result)
})
});


module.exports = router;
