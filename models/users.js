const DB = require('./db')

const users = {
  add(user, callback){
    DB.insertOne('user', user, 'u_seq', 'uid',(n) => {
      callback(n > 0)
    })
  },
  login(user, callback){
    DB.findByUnameAndPwd('user', user, (res) => {
      callback(res)
    })
  },
  getUInfo(uid, callback){
    DB.find('user', {uid: parseInt(uid)}, (res) => {
      callback(res)
    })
  }
}

module.exports = users
