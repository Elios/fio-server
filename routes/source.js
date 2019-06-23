const express = require('express')
const fs = require('fs')
const mime = require('mime')
const path = require('path')
const router = express.Router()

router.get('/avatar/:file', (req, res, next) => {
  let filePath = path.resolve('upload'+req.url)
  const stream = fs.createReadStream(filePath)
  stream.on('error', (err) => {
    res.json({
      statusCode: 500,
      err: err
    })
  })
  stream.pipe(res)
})

module.exports = router
