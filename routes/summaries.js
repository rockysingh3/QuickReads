'use strict';
const express = require('express');
const router = express.Router();



router.get('/summaries', (req, res) => {
      res.render('summaries');
});



module.exports = {
  router: router
}
