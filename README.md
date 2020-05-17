# posthtml-lazyload <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
![npm](https://img.shields.io/npm/dm/posthtml-lazyload.svg)
[![Deps][deps]][deps-url]
[![DevDeps][dev-deps]][dev-deps-url]
[![Build][build]][build-badge]

 It is possible to natively lazy load content through the `loading="lazy"` attribute on images and iframes, and [it’s already possible](https://caniuse.com/#feat=loading-lazy-attr) on last 2 versions modern browsers except Safari. This plugin will do it for you!
 
 Read more in [Addy Osmani Blog](https://addyosmani.com/blog/lazy-loading/).
 
 **⭐️ Star me on GitHub — it helps!**
 
Before:
``` html
 <img 
   src="http://posthtml.github.io/posthtml/logo.svg" 
   alt="PostHTML" 
   width="220"
   heigth="200" 
   class="lazyload"
 > 

<iframe 
   src="video-player.html" 
   class="lazyload"
>
</iframe>
```

After:
``` html
 <img 
   src="http://posthtml.github.io/posthtml/logo.svg" 
   alt="PostHTML" 
   width="220"
   heigth="200" 
   class="lazyload"
   loading="lazy" <---
 > 

<iframe 
   src="video-player.html" 
   class="lazyload"
   loading="lazy" <---
>
</iframe>
```

## Demo
[**DEMO**](https://mathiasbynens.be/demo/img-loading-lazy)

If you are using Chrome lower than 76 make sure you turn on both the `Enable lazy frame loading` and `Enable lazy image loading` flags.

[**CAN I USE**](https://caniuse.com/#feat=loading-lazy-attr)

## Install

```npm
npm i posthtml-lazyload --save-dev
```

## Usage

### Gulp

```npm
npm i gulp-posthtml posthtml-lazyload --save-dev
```

```js
const gulp = require('gulp');
const postHTML = require('gulp-posthtml');
const postHTMLLazyLoad = require('posthtml-lazyload');

const config = () => ({
  plugins: [
    postHTMLLazyLoad({
      loading: 'eager',
      class: 'lazy',
    }),
  ],
});

gulp.task('posthtml', () => gulp.src('./build/*.html')
  .pipe(postHTML(config))
  .pipe(gulp.dest('./build')));
```

### Webpack
```npm
npm i html-loader posthtml-loader posthtml-lazyload --save-dev
```

```js
module: {
  rules: [
    {
      test: /\.html$/,
      use: [
        'html-loader',
        {
          loader: 'posthtml-loader',
          options: {
            plugins: [
              require('posthtml-lazyload')({
                 loading: 'eager',
                 class: 'lazy',
               })
            ]
          }
        }
      ]
    }
  ]
}
```

## Options

| Option | Type | description | Possible subsets | Default value |
| ------ | ------ | ------ | ------ | ------ |
 loading | `string` | Describes loading attribute. | `auto`, `eager`, `lazy` | `lazy` |
 class | `string` | Class of the elements to load lazily | Any valid CSS class name | `lazyload` |

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

### License [MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-lazyload.svg
[npm-url]: https://npmjs.com/package/posthtml-lazyload

[deps]: https://david-dm.org/posthtml/posthtml.svg
[deps-url]: https://david-dm.org/webistomin/posthtml-lazyload

[dev-deps]: https://david-dm.org/webistomin/posthtml-lazyload/dev-status.svg
[dev-deps-url]: https://david-dm.org/webistomin/posthtml-lazyload?type=dev

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: https://travis-ci.com/webistomin/posthtml-lazyload.svg?token=CqDseQbTs4cMwNAwVsgp&branch=master
[build-badge]: https://travis-ci.com/webistomin/posthtml-lazyload
