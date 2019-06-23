const express = require('express')
const querystring = require('querystring')
const router = express.Router()

router.get('/:vid', (req, res, next) => {
  console.log(req.params.vid)
  res.json({
    statusCode: 200,
    comments: [{
      "uid": "1",
      "commentid": "1",
      "uname": "666",
      "c_date": "2012-10-17",
      "avatar": "../../static/avatar/avatar.jpg",
      "content": "666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666"
    },
      {
        "uid": "2",
        "commentid": "2",
        "uname": "欧拉欧拉欧拉",
        "c_date": "2017-08-20",
        "avatar": "../../static/avatar/avatar.jpg",
        "content": "欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉"
      },
      {
        "uid": "3",
        "commentid": "3",
        "uname": "DIO哒",
        "c_date": "2017-09-22",
        "avatar": "../../static/avatar/avatar.jpg",
        "content": "木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大木大"
      },
      {
        "uid": "4",
        "commentid": "4",
        "uname": "FAQ",
        "c_date": "2018-10-07",
        "avatar": "../../static/avatar/avatar.jpg",
        "content": "FAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQFAQ"
      },
      {
        "uid": "5",
        "commentid": "5",
        "uname": "BOYNEXTDOOR",
        "c_date": "2014-08-11",
        "avatar": "../../static/avatar/avatar.jpg",
        "content": "BOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOORBOYNEXTDOOR"
      },
      {
        "uid": "6",
        "commentid": "6",
        "uname": "局座",
        "c_date": "2015-04-06",
        "avatar": "../../static/avatar/avatar.jpg",
        "content": "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
      }
    ]
  })
})

module.exports = router
