'use strict'

var FSTrait = require('filesystem-composer').FSTrait
var listing = require('./listing')
var files = require('./files')
var links = require('./links')
var paths = require('./paths')
var directories = require('./directories')
var permissions = require('./permissions')
var tests = require('./tests')
var attributes = require('./attributes')

module.exports = FSTrait.create({
  _list: listing._list,

  _umask: permissions._umask,
  _permissions: permissions._permissions,
  _changePermissions: permissions.changePermissions,

  _size: attributes._size,
  _lastModified: attributes._lastModified,

  _exists: tests._exists,
  _isFile: tests._isFile,
  _isDirectory: tests._isDirectory,
  _isLink: tests._isLink,
  _same: tests._same,
  _sameFilesystem: tests._sameFilesystem,

  _separator: paths._separator,
  workingDirectory: paths.workingDirectory,
  changeWorkingDirectory: paths.changeWorkingDirectory,

  _link: links._link,
  _hardLink: links._hardLink,
  _readLink: links._readLink,

  _removeDirectory: directories._removeDirectory,
  _makeDirectory: directories._makeDirectory,

  _read: files._read,
  _write: files._write,
  _remove: files._remove,
  _touch: files._touch,
  _openRaw: files._openRaw
})
