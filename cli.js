#!/usr/bin/env node
var trim = require('./')
var fs = require('fs')

var file = process.argv[2]
if (!file) {
  console.error('Usage: whitespace <file>')
  process.exit(1)
}

process.stdout.write(trim(fs.readFileSync(file)))
