'use strict'

var fs = require('fs')

exports._link = fs.symlink
exports._hardLink = fs.link
exports._readLink = fs.readlink
