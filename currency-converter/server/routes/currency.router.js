const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/:q', (req, res) => {

  let currency = req.params.q;
  console.log('search text', currency);

  axios.get('http://data.fixer.io/api/', {
    params: {
      api_key: process.env.FIXER_API_KEY,
      //send the search item to GIPHY
      q: currency,
      limit: 10
    }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log('error getting currency', error)
    })
});

module.exports = router;