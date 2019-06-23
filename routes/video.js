const express = require('express')
const router = express.Router()

router.get('/list/:pageSize', (req, res, next) => {
  res.json({
    statusCode: 200,
    list: [
      {
        vid: '1',
        poster: '../../static/video/img1.png',
        title: '我的视频',
        uname: 'csd',
        c_time: '20118/01/02'
      },
      {
        vid: '2',
        poster: '../../static/video/img2.jpg',
        title: '啦啦啦啦啦啦啦',
        uname: 'as',
        c_time: '2018/05/04'
      },
      {
        vid: '3',
        poster: '../../static/video/img3.jpg',
        title: 'ewrdsafvfds撒旦范德萨发',
        uname: 'sd',
        c_time: '2018/3/01'
      },
      {
        vid: '4',
        poster: '../../static/video/img4.jpg',
        title: '但是热舞发生',
        uname: 'sd',
        c_time: '2014/01/30'
      },
      {
        vid: '5',
        poster: '../../static/video/img5.jpg',
        title: 'werewrfsd',
        uname: 'we',
        c_time: '2011/01/02'
      },
      {
        vid: '6',
        poster: '../../static/video/img6.jpg',
        title: 'wersfddsa',
        uname: 'we',
        c_time: '2012/03/01'
      },
      {
        vid: '7',
        poster: '../../static/video/img7.jpg',
        title: 'dsfweffcv',
        uname: 'sdaf',
        c_time: '2017/02/10'
      }
    ]
  })
})

router.get('/banner/', (req, res, next) => {
  res.json({
    statusCode: 200,
    banner: [
      {
        vid: 1,
        poster: '../../static/video/img7.jpg'
      },
      {
        vid: 2,
        poster: '../../static/video/img6.jpg'
      },
      {
        vid: 3,
        poster: '../../static/video/img5.jpg'
      }
    ]
  })
})

router.get('/tags/:vid', (req, res, next) => {
  res.json({
    statusCode: 200,
    tags: ['233', 'awsl', '666', '木大木大木大木大', '前方高能', '欧拉欧拉欧拉欧拉']
  })
})

router.get('/:vid', (req, res, next) => {
  console.log(req.params.vid)
  res.json({
    statusCode: 200,
    vInfo: {
      vid: res.vid,
      uid: 1,
      title: '视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题',
      uname: '作者',
      c_date: '2012/10/20',
      poster: '../../static/video/img1.png',
      src: '../../static/wat.mp4',
      des: '视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介视频简介',
      avatar: '../../static/avatar/avatar.jpg'
    }
  })
})

module.exports = router
