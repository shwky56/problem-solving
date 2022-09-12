'use strict'

var fs = require('fs')
var Flags = require('./permissions').Flags

exports._read = fs.readFile
exports._write = fs.writeFile
exports._remove = fs.unlink

exports._touch = function _touch(path, callback) {
  fs._openRaw(path, Flags('write'), this.defaultPermissions(), callback)
}

exports._openRaw = function _openRaw(path, mode, permissions, callback) {
  permissions = this.Permissions(permissions).toUnix()
  fs.open(path, Flags(mode), permissions, callback)
}
