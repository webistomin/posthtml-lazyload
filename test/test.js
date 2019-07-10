'use strict'

const test = require('ava')
const plugin = require('../lib/index')
const { readFileSync } = require('fs')
const path = require('path')
const posthtml = require('posthtml')
const fixtures = path.join(__dirname, 'fixtures')

const customOptions = {
  loading: 'eager',
  class: 'lazy'
}

test('basic', (t) => {
  return compare(t, 'basic')
})

test('ignore all tags except img and iframe', (t) => {
  return compare(t, 'ignore')
})

test('set custom class and loading option', (t) => {
  return compare(t, 'custom', customOptions)
})

function compare (t, name, options = {
  loading: 'lazy',
  class: 'lazyload'
}) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')

  return posthtml([plugin(options)])
    .process(html)
    .then((res) => {
      t.truthy(res.html === expected)
    })
}
