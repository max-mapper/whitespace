#!/usr/bin/env node
var trim = require('./')
var fs = require('fs')
var glob = require('glob')
var isGlob = require('is-glob')

if (process.argv.length === 2) {
  console.error('Usage: whitespace <path or glob>')
  process.exit(1)
}

var input = process.argv[2]

if (isGlob(input)) {
  glob(input, function (er, files) {
    files.forEach(function(f) {
      var file = fs.readFileSync(f)
      fs.writeFileSync(f, trim(file))
    })
  })
}

else {
  var file = fs.readFileSync(input)
  fs.writeFileSync(input, trim(file))
}
