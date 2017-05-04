var express = require('express');
var router = express.Router();
var Lake = require('../models/run_time');

/* GET home page. */
router.get('/', function(req, res, next) {
  Lake.find(function(err, lakes){
    if (err) {
      return next(err);
    }
      res.render('index', { lakes: lakes});
  })
});//end of callback

// post to home page and handle the submit form
router.post('/', function(req, res,next){
  console.log(req.body);  //help degugging
    var lake = Lake(req.body);
    lake.save(function(err, newlake){
      if (err) {
        return next(err);
      }
      console.log(newlake);
      return res.redirect('/')
    })
});//end of submit callback

//post for delete
router.post('/deleteRun', function(req, res, next){
  console.log(req.body); //degguing

    }
)
module.exports = router;
