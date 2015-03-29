var detectNewline = require('detect-newline')

module.exports = function removeWhitespace (file) {
  if (Buffer.isBuffer(file)) file = file.toString()
  var newline = detectNewline(file)

  var lines = file.split(newline)
    .map(function trimTailing (line) {
      return line.replace(/\s+$/g, '')
    })

  return lines.join(newline)
}
