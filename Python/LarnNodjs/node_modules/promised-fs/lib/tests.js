'use strict'

var paths = require('path')
var fs = require('fs')

var statMethods = {
  _isFile: 'isFile',
  _isLink: 'isSymbolicLink',
  _isDirectory: 'isDirectory',
  _isBlockDevice: 'isBlockDevice',
  _isCharacterDevice: 'isCharacterDevice',
  _isFifo: 'isFifo',
  _isSocket: 'isSocket'
}

exports._exists = function _exists(path, callback) {
  paths.exists(path, function(exists) {
    return callback(null, exists)
  })
}

exports._same = function _same(source, target, callback) {
  var sourceStats = null
  function collect(error, stats) {
    if (error) return callback(error)
    if (null === sourceStats) return sourceStats = stats
    callback(sourceStats.dev === stats.dev && sourceStats.ino === stats.ino)
  }
  fs.stats(source, collect)
  fs.stats(target, collect)
}

exports._sameFilesystem = function _sameFilesystem(source, target, callback) {
  var sourceStats = null
  function collect(error, stats) {
    if (error) return callback(error)
    if (null === sourceStats) return sourceStats = stats
    callback(sourceStats.dev === stats.dev)
  }
  fs.stats(source, collect)
  fs.stats(target, collect)
}

Object.keys(statMethods).forEach(function(name) {
  var method = statMethods[name]
  exports[name] = function(path, callback) {
    fs.stat(path, function(e, stats) {
      if (e) return callback(e)
      callback(e, stats[method]())
    })
  }
})
