'use strict'

module.exports = function (options = {
  loading: 'lazy',
  class: 'lazyload'
}) {
  return function lazyLoad (tree) {
    const tags = ['img', 'iframe']
    tree.match({ attrs: { class: options.class } }, function (node) {
      if (tags.includes(node.tag.toLowerCase())) {
        node.attrs.loading = options.loading
      }
      return node
    })
  }
}
