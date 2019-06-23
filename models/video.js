const DB = require('./db')

module.exports = {
  upload(video, callback){
    DB.insertOne('video', video, 'u_seq','vid', (n) => {
      if(n > 0){
        DB.update('user', {uid: parseInt(video.uid)}, {$inc: {upVideo: 1}}, (ok) => {
          callback(ok)
        })
      }else{
        callback(0)
      }
    })
  }
}
