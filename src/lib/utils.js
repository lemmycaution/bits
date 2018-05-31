import hljs from 'highlight.js'

export const escapeHtml = (html, encode) => {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export const highlight = (lang, code) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return '<pre class="hljs" v-pre><code v-pre>' +
        hljs.highlight(lang, code, true).value +
      '</code></pre>'
    } catch (__) {}
  } else {
    return '<pre class="hljs" v-pre><code v-pre>' +
      escapeHtml(code) +
    '</code></pre>'
  }
}

export function renderErr (err) {
  return `<article class="p3">
  <h1>${err.name}</h1>
  <p>${err.message}</p>
  <pre>${escapeHtml(err.stack)}</pre>
</article>`
}
