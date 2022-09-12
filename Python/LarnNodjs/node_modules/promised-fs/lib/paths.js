'use strict'

exports._separator = 0 > process.cwd().indexOf('/') ? '\\' : '/'
exports.workingDirectory = process.cwd
exports.changeWorkingDirectory = process.chdir
