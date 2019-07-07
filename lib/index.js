'use strict'

module.exports = function (options = {
  loading: 'lazy',
  class: 'lazyload'
}) {
  return function lazyLoad (tree) {
    tree.match({ attrs: { class: options.class } }, function (node) {
      node.attrs.loading = options.loading
      return node
    })
  }
}
