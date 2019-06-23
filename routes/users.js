const express = require('express')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const UsersModel = require('../models/users')

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, './upload/avatar')
  },
  filename (req, file, cb) {
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
    const md5 = crypto.createHash('md5')
    name = md5.update(name).digest('hex')
    cb(null, name + '.' + file.originalname.slice(file.originalname.indexOf('.')+1))
  }
})
const upload = multer({storage})


router.post('/login',(req, res, next) => {
  const user = req.body
  const md5 = crypto.createHash('md5')
  Reflect.set(user, 'pwd', md5.update(user.pwd).digest('hex'))
  console.log(user)
  UsersModel.login(user, (data) => {
    console.log(data)
    if(!data){
      res.status(500)
      res.json({
        statusCode: 500,
        result: ''
      })
    }else{
      res.status(200)
      res.json({
        statusCode: 200,
        result: data
      })
    }
  })
})

router.post('/logon',upload.single('avatar'), (req, res, next) => {
  let user = req.body
  const md5 = crypto.createHash('md5')
  Reflect.set(user, 'avatar', req.file.destination + '/' + req.file.filename)
  Reflect.set(user, 'pwd', md5.update(user.pwd).digest('hex'))
  Reflect.set(user, 'upVideo', parseInt(user.upVideo))
  Reflect.set(user, 'upArticle', parseInt(user.upArticle))
  Reflect.set(user,'gender', parseInt(user.gender))
  Reflect.deleteProperty(user, 'repwd')
  UsersModel.add(user, (ok) => {
    console.log(ok)
    if (ok) {
      res.status(200)
      res.json({
        statusCode: 200,
        resText: '添加成功'
      })
    } else {
      res.status(500)
      res.json({
        statusCode: 500,
        resText: '添加失败'
      })
    }
  })
})

router.post('/', (req, res, next) => {
  const uid = req.body.uid
  console.log(uid)
  UsersModel.getUInfo(uid, (re) => {
    if (re) {
      res.status(200)
      res.json({
        statusCode: 200,
        result: re
      })
    } else {
      res.status(500)
      res.json({
        statusCode: 500,
        result: ''
      })
    }
  })
});

module.exports = router;
