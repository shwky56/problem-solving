'use strict'

var MODES = [
  'read',
  'write',
  'append',
  'update'
]
var FLAG_NAMES = {
  exclusive: process.O_EXCL,
  truncate: process.O_TRUNC,
  create: process.O_CREAT,
  sync: process.O_SYNC,
  noControlTty: process.O_NOCTTY,
  noFollow: process.O_NOFOLLOW,
  directory: process.O_DIRECTORY,
}
var PATTERNS = {
  'read': process.O_RDONLY,
  'write': process.O_CREAT | process.O_TRUNC | process.O_WRONLY,
  'append': process.O_APPEND | process.O_CREAT | process.O_WRONLY,
  'read|update': process.O_RDWR,
  'write|update': process.O_CREAT | process.O_TRUNC | process.O_RDWR,
  'append|update': process.O_APPEND | process.O_CREAT | process.O_RDWR
}

exports.Flags = function Flags(mode) {
  var pattern = MODES.filter(function (key) {
    return mode[key]
  }).join('|')
  var flags = PATTERNS[pattern]
  if (undefined === flag) throw new Error('Unknown mode: ' + pattern)

  return flags | Object.keys(FLAG_NAMES).map(function (flagName) {
    return mode[flagName] && FLAG_NAMES[flagName]
  })
}

exports._umask = process.umask
exports._permissions = function permissions(path, callback) {
  fs.stat(path, function(error, stats) {
    if (error) return callback(error)
    callback(error, this.Permissions(stats.mode))
  })
}

exports._changePermissions = function changePermissions(path, permissions, callback) {
  fs.chmod(path, permissions.toUnix(), callback)
}
