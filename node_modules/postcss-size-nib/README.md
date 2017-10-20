# PostCSS Size nib [![Build Status][ci-img]][ci]

[PostCSS] plugin that allows the use of "size:" instead of width & height.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/TheSisb/postcss-size-nib.svg
[ci]:      https://travis-ci.org/TheSisb/postcss-size-nib

```css
.foo {
    size: 10px;
}
.bar {
    size: 5px 10px;
}
```

```css
.foo {
    width: 10px;
    height: 10px;
}
.bar {
    width: 5px;
    height: 10px;
}
```

## Usage

```js
postcss([ require('postcss-size-nib') ])
```

See [PostCSS] docs for examples for your environment.
