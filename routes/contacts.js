const express = require('express')
const querystring = require('querystring')
const router = express.Router()

router.get('/:uid', (req, res, next) => {
  res.json({
    statusCode: 200,
    cata: [
      {
        cid: 1,
        name: '我的好友',
        contacts: [
          {
            uid: 2,
            uname: 'DIO',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 3,
            uname: 'FAQ',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 4,
            uname: '欧拉',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 5,
            uname: '局座',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 6,
            uname: 'boynextdoor',
            avatar: '../../static/avatar/avatar.jpg'
          }
        ]
      },
      {
        cid: 2,
        name: '我的家人',
        contacts: [
          {
            uid: 7,
            uname: '恶魔人',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 8,
            uname: '假面骑士的末日',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 9,
            uname: '奥特曼',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 10,
            uname: '俾斯麦',
            avatar: '../../static/avatar/avatar.jpg'
          }
        ]
      },
      {
        cid: 3,
        name: '我的同学',
        contacts: [
          {
            uid: 11,
            uname: '巴拉拉',
            avatar: '../../static/avatar/avatar.jpg'
          },
          {
            uid: 12,
            uname: '花Q',
            avatar: '../../static/avatar/avatar.jpg'
          }
        ]
      }
    ]
  })
})

// router.get('/cata', (req, res, next) => {
//   res.json({
//     statusCode: 200,
//     cata: [
//       {
//         cid: 1,
//         name: '我的好友'
//       },
//       {
//         cid: 2,
//         name: '我的家人'
//       },
//       {
//         cid: 3,
//         name: '我的同学'
//       }
//     ]
//   })
// })
//
// router.get('/:uid/:cid', (req, res, next) => {
//   const uid = req.params.uid
//   const cid = req.params.cid
//   if (cid === 1){
//     res.json({
//       statusCode: 200,
//       contacts: [
//         {
//           uid: 2,
//           uname: 'DIO',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 3,
//           uname: 'FAQ',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 4,
//           uname: '欧拉',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 5,
//           uname: '局座',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 6,
//           uname: 'boynextdoor',
//           avatar: '../../static/avatar/avatar.jpg'
//         }
//       ]
//     })
//   } else if(cid === 2){
//     res.json({
//       statusCode: 200,
//       contacts: [
//         {
//           uid: 7,
//           uname: '恶魔人',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 8,
//           uname: '假面骑士的末日',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 9,
//           uname: '奥特曼',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 10,
//           uname: '俾斯麦',
//           avatar: '../../static/avatar/avatar.jpg'
//         }
//       ]
//     })
//   }else{
//     res.json({
//       statusCode: 200,
//       contacts: [
//         {
//           uid: 11,
//           uname: '巴拉拉',
//           avatar: '../../static/avatar/avatar.jpg'
//         },
//         {
//           uid: 12,
//           uname: '花Q',
//           avatar: '../../static/avatar/avatar.jpg'
//         }
//       ]
//     })
//   }
// })

module.exports = router
