'use strict'

var fs = require('promised-fs')

module.exports = require('filesystem-composer/test')['read write'].create(fs)

if (module == require.main) require('test').run(exports)
