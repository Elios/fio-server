const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res, next) => {
  res.json({
    statusCode: 200,
    content: 'OK'
  })
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('message', (obj) => {
    console.log(obj)
    socket.broadcast.emit('msg', {
      msg: obj.msg
    })
  })
})

module.exports = http
