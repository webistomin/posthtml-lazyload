'use strict'

const test = require('ava')
const plugin = require('../lib/index')
const { readFileSync } = require('fs')
const path = require('path')
const posthtml = require('posthtml')
const fixtures = path.join(__dirname, 'fixtures')
const options = {
  loading: 'auto',
  class: 'lazyload'
}

test('basic', (t) => {
  return compare(t, 'basic')
})

function compare (t, name) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')

  return posthtml([plugin(options)])
    .process(html)
    .then((res) => {
      console.log(res.html)
      console.log(expected)
      t.truthy(res.html === expected)
    })
}
