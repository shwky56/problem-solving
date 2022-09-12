'use strict'

var fs = require('fs')

exports._makeDirectory = function _makeDirectory(path, permissions, callback) {
  fs.mkdir(path, permissions.toUnix(), callback)
}
exports._removeDirectory = fs.rmdir
