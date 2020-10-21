var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 'SELECT * FROM upload_files_statistics ORDER BY timestamp ASC LIMIT 20';

  db.query(query, (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }

      res.send(result)
})
});


module.exports = router;
