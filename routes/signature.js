const express = require('express')
const querystring = require('querystring')
const router = express.Router()

router.get('/', (req, res, next) => {
  const query = querystring.parse(req.body)
  console.log(query)
  res.json({
    uid: '1',
    uname: 'a',
    signature: 'r'
  })
})

module.exports = router
