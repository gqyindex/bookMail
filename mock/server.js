const http = require('http')
const url = require('url')

/* 引入swiper.js模块 */
const swiper = require('./swiper')

/* 创建server,指定处理客户端请求的函数 */
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  res.setHeader('Content-Type', 'text/html')

  let {pathname} = url.parse(req.url)
  if (pathname === '/swiper') {
    res.end(JSON.stringify(swiper))
  }
}).listen(3000)

console.log('server running...')
