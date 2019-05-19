const http = require('http')
const url = require('url')
const fs = require('fs')

/* 引入swiper.js模块 */
const swiper = require('./swiper')
const hotBook = require('./hotbook')

/* 封装readFile和writeFile */
function read (target, callback) {
  fs.readFile(target, 'utf-8', function (err, data) {
    if (err) {
      callback(JSON.parse({}))
    } else {
      callback(JSON.parse(data))
    }
  })
}

function write (target, data, callback) {
  fs.writeFile(target, JSON.stringify(data), callback)
}

/* 创建server,指定处理客户端请求的函数 */
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  res.setHeader('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,xtoken')
  if (req.method.toLowerCase() === 'options') { return res.end() }

  let {pathname, query} = url.parse(req.url, true)
  let id = parseInt(query.id)
  if (pathname === '/swiper') {
    res.end(JSON.stringify(swiper))
  }
  if (pathname === '/hotbook') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end(JSON.stringify(hotBook))
  }
  if (pathname === '/bookList') {
    switch (req.method) {
      case 'GET':
        if (id) {
          read('./bookList.json', function (books) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            books = books.find(item => item.bookId === id)
            res.end(JSON.stringify(books))
          })
        } else {
          read('./bookList.json', function (books) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.end(JSON.stringify(books))
          })
        }
        break
    }
  }
  if (pathname === '/collection') {
    switch (req.method) {
      case 'POST':
        read('./bookList.json', function (data) {
          res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
          data = data.find(item => item.bookId === id)
          read('./collection.json', function (collect) {
            collect.push(data)
            write('./collection.json', collect, function () {
              res.end('collection success')
            })
          })
        })
        break
      case 'GET':
        read('./collection.json', function (data) {
          res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
          res.end(JSON.stringify(data))
        })
        break
      case 'DELETE':
        read('./collection.json', function (data) {
          res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
          data = data.filter(item => item.bookId !== id)
          write('./collection.json', data, function () {
            res.end(JSON.stringify({}))
          })
        })
        break
    }
  }
}).listen(3000)

console.log('server running...')
