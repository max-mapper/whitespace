# whitespace

CLI tool that trims trailing whitespace from a file and preserves the correct OS newlines.

[![NPM](https://nodei.co/npm/whitespace.png)](https://nodei.co/npm/whitespace/)

[![Build Status](https://travis-ci.org/maxogden/whitespace.svg?branch=master)](https://travis-ci.org/maxogden/whitespace)

### installation

```
npm install whitespace -g
```

### usage

pass a filename or glob as arguments and whitespace will remove trailing whitespace and update them in-place

```
whitespace file.js
# or
whitespace *.js
```
