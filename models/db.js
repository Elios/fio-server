const MongoClient = require('mongodb').MongoClient
const URL = 'mongodb://localhost:27017/fio'

const open = () => {
  return MongoClient.connect(URL, { useNewUrlParser: true })
}

const get_id = (seq, seq_id, callback) => {
  open()
    .then((db) => {
      db.db('fio').collection(seq).findOneAndUpdate({_id: seq_id}, {$inc:{seq_val:1}}, callback)
    })
}

module.exports = {
  insertOne(collection, data, seq, seq_id, callback){
    get_id(seq, seq_id,(err, res) => {
      console.log(res)
      Reflect.set(data, seq_id, res.value.seq_val)
      open()
        .then((db) => {
          console.log('打开连接')
          console.log(data)
          db.db('fio').collection(collection).insertOne(data)
            .then((res) => {
              console.log(res.result.n)
              callback(res.result.n)
            })
            .catch((e) => {
              console.log(e)
              callback(0)
            })
            .finally(() => {
              console.log('连接关闭')
              db.close()
            })
        })
        .catch((e) => {
          console.log(e)
        })
    })
  },
  find(collection, filter, callback){
    open()
      .then((db) => {
        console.log('打开连接')
        db.db('fio').collection(collection).findOne(filter)
          .then((res) => {
            callback(res)
          })
          .catch((e) => {
            console.log(e)
            callback(null)
          })
          .finally(() => {
            db.close()
            console.log('连接关闭')
          })
      })
  },
  findByUname(collection, uname, callback){

  },
  findByUnameAndPwd(collection, data, callback){
    open()
      .then((db) => {
        console.log('打开连接')
        db.db('fio').collection(collection).findOne(data, {fields: {uid: 1, uname: 1, avatar: 1}})
          .then((res) => {
            callback(res)
          })
          .catch((e) => {
            console.log(e)
            callback(null)
          })
          .finally(() => {
            console.log('连接关闭')
            db.close()
          })
      })
      .catch((e) => {
        console.log(e)
      })
  },
  update(collection, filter, update, callback){
    open()
      .then((db) => {
        console.log('打开连接')
        console.log(filter, update)
        db.db('fio').collection(collection).updateOne(filter, update)
          .then((res) => {
            console.log(res)
            callback(res.result.nModified)
          })
          .catch((e) => {
            console.log(e)
            callback(0)
          })
          .finally(() => {
            console.log('连接关闭')
            db.close()
          })
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
