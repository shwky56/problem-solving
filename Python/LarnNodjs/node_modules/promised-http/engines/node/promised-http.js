'use strict'

var q = require('q'), when = q.when, defer = q.defer
,   http = require('http')
,   URL = require('url')

var GET = 'GET'
,   POST = 'POST'
,   CONTENT_TYPE = 'Content-type'
,   HEADERS = { 'Content-type': 'application/x-www-form-urlencoded' }

function encode(data) {
  var message = ''
  for (var key in data) {
    message += '&' + encodeURIComponent(key) 
    message += '=' + encodeURIComponent(data[key])
  }
  return message.substr(1)
}

exports.request = function request(options) {
  if ('string' == typeof options) options = { url: options }
  var deferred = defer()
  ,   url = options.url || ''
  ,   headers = options.headers || HEADERS
  ,   data = options.data || null
  ,   message = data ? encode(data) : null
  ,   method = String(options.method).toUpperCase() == POST ? POST : GET

  ,   urlOptions = URL.parse(options.url)
  ,   port = urlOptions.port || 80
  ,   host = urlOptions.hostname
  ,   secure = urlOptions.protocol == 'https:'
  ,   path = urlOptions.pathname || ''
  ,   search = urlOptions.search || ''
  ,   hash = urlOptions.hash || ''
  

  if (POST == method) {
    if (!(CONTENT_TYPE in headers))
      headers[CONTENT_TYPE] = HEADERS[CONTENT_TYPE]
    if (message)  headers['Content-Length'] = message.length
    url = path + hash
  } else {
    url = path + search + hash
  }

  var client = http.createClient(port, host, secure, urlOptions.auth)
  var request = client.request(method, url, headers)
  request.on('response', function (response) {
    response.on('data', function (chunk) {
      deferred.resolve(chunk.toString())
    })
  })
  request.end()
  
  return deferred.promise
}
