'use strict'

exports['test path'] = require('./path')
exports['test listing'] = require('./listing')
exports['test working directory'] = require('./working-directory')
exports['test read write'] = require('./read-write')
exports['test directory'] = require('./directory')

if (module == require.main) require('test').run(exports)
