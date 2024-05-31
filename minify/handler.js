'use strict'

const { minify } = require('csso');

module.exports = async (event, context) => {
  const minifiedCss = minify(`${event.body}`).css;

  return context
    .status(200)
    .succeed(minifiedCss)
}
