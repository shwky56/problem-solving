'use strict'

var fs = require('promised-fs')

module.exports = require('filesystem-composer/test').directory.create(fs)

if (module == require.main) require('test').run(module.exports)
