var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express', isAdminBudget : req.session.user.infos.forBudget});
});

module.exports = router;
