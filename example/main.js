var __vite_style__ = document.createElement('style')
__vite_style__.innerHTML = `.js-badge{position:fixed;bottom:32px;right:32px;border-radius:16px;background-color:#add8e6;color:#000;padding:8px;display:flex;justify-content:center;align-items:center}
`
document.head.appendChild(__vite_style__)
;(function (e) {
  typeof define == 'function' && define.amd ? define(e) : e()
})(function () {
  'use strict'
  var e = ''
  const t = document.createElement('div')
  t.classList.add('js-badge'),
    (t.innerText = 'It works!'),
    document.body.appendChild(t),
    console.log('it works!')
})
