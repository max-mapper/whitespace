var fs = require('fs')
var test = require('tape')
var trim = require('./')

test('removes whitespace', function (t) {
  var out = trim(fs.readFileSync('./fixture.js'))
  var expected = fs.readFileSync('./expected.js')
  t.equal(out, expected.toString(), 'output matches')
  t.end()
})
