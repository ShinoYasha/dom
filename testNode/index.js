let http = require('http')

let server = http.createServer(function (req, res) {
  res.write('<h1>hellow world</h1>')
  res.end()
})

server.listen(9000)
