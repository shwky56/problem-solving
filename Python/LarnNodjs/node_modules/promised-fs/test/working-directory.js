'use strict'

var fs = require('promised-fs')

module.exports = require('filesystem-composer/test').workingDirectory.create(fs)

if (module == require.main) require('test').run(module.exports)
