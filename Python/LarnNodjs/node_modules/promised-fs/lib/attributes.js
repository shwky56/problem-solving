'use strict'

var fs = require('fs')

var statProperties = {
  _size: 'size',
  _lastModified: 'mtime'
}

Object.keys(statProperties).forEach(function(name) {
  var property = statProperties[name]
  exports[name] = function(path, callback) {
    fs.stat(path, function(e, stats) {
      if (e) return callback(e)
      callback(e, stats[property])
    })
  }
})
