const express = require('express')
const router = express.Router()

router.get('/:vid', (req, res ,next) => {
  res.json({
    statusCode: 200,
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 2
      },
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1.5
      },
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }]
  })
})

module.exports = router
