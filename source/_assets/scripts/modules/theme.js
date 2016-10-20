/**
 * Replace `.no-js` class with `.js` class on <html> element. Use as a
 * simple method to detect if JavaScript it enabled in the browser.
 */

module.exports = function () {
  const html = document.documentElement
  const now = new Date()
  const theme = now.getHours() > 16 ? 'dark' : 'light'
  html.className += theme
}
