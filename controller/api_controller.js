const router = require('express').Router();
const bikeData = require('../models/bikeDB');


router.get('/bikeData', bikeData.searchBikes, function(req,res) {
  console.log("it works")
 res.json(res.filterbike)
});

module.exports= router




