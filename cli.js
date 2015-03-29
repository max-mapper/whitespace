#!/usr/bin/env node
var trim = require('./')
var fs = require('fs')

if (process.argv.length === 2) {
  console.error('Usage: whitespace <files>')
  process.exit(1)
}

var files = process.argv.slice(2)

files.map(function each (f) {
  var file = fs.readFileSync(f)
  fs.writeFileSync(f, trim(file))
})
