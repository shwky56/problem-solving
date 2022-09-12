var mustache = require('mustache')

function addListener(element, type, listener, capture) {
  if ('addEventListener' in element)
    element.addEventListener(type, listener, !!capture)
  else element.attachEvent('on' + type, listener)
}
function removeListener(element, type, listener, capture) {
  if ('removeEventListener' in element)
    element.removeEventListener(type, listener, !!capture)
  else element.detachEvent('on' + type, listener)
}

exports.main = function main() {
  if ('complete' !== document.readyState) addListener(window, 'load', main)
  else {
    removeListener(window, 'load', main)
    document.getElementsByTagName('body')[0].innerHTML =
             mustache.to_html('Hello {{name}}', { name: 'world' })
  }
}
// Executing main function if module loaded as a program.
if (module == require.main) exports.main()
