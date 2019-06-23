const express = require('express')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const VideoModel = require('../models/video')

const storage = multer.diskStorage({
  destination(req, file, cb){
    if (/^video\//ig.test(file.mimetype)){
      cb(null, './upload/video')
    }else if(/^image\//ig.test(file.mimetype)){
      cb(null, './upload/poster')
    }
  },
  filename(req, file, cb){
    const md5 = crypto.createHash('md5')
    const date = new Date()
    let name = req.body.uid +
      date.getFullYear() +
      (date.getMonth() + 1) +
      date.getDate() +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds() +
      Math.floor(Math.random() * 1000) +
      ''
    name = md5.update(name).digest('hex')
    cb(null, name + '.' + file.originalname.slice(file.originalname.indexOf('.')+1))
  }
})
const upload = multer({storage})

router.post('/', upload.fields([{name: 'video', maxCount: 1}, {name: 'poster', maxCount: 1}]),(req, res, next) => {
  const data = req.body
  Reflect.set(data, 'poster', req.files.poster[0].destination + '/' + req.files.poster[0].filename)
  Reflect.set(data, 'video', req.files.video[0].destination + '/' + req.files.video[0].filename)
  Reflect.set(data, 'tags', data.tags.split(','))
  VideoModel.upload(data, (ok) => {
    if(!ok){
      res.status(500)
      res.json({
        statusCode: 500,
      })
    }else{
      res.status(200)
      res.json({
        statusCode: 200
      })
    }
  })
})

router.post('/bg', upload.single('bg'), (req, res, next) => {
  res.status(200)
  res.json({
    statusCode: 200
  })
})

module.exports = router
