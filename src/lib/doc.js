import marked from 'marked'
import { escapeHtml, highlight } from './utils'

const examples = []

const renderer = new marked.Renderer()

renderer.code = (code, directive) => {
  let [ lang, mod ] = directive 
    ? directive.split(':') 
    : [ null, false ]

  if (mod === 'example') {
    examples.push({ code, lang })

    const id = examples.length - 1

    return `<example 
      :value="examples[${id}].code" 
      :lang="examples[${id}].lang" 
    />`
  }

  return highlight(lang, code)
}

marked.setOptions({ renderer })

export default function renderDoc (markdown) {
  examples.length = 0
  const template = marked(markdown)

  return {
    template: `<article>
      ${marked(markdown)}
    </article>`,

    data () {
      return {
        examples,
        error: null
      }
    }
  }
}
