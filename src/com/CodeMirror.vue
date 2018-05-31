<script>
import CodeMirror from 'codemirror'
// import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/vue/vue'
import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/jsx/jsx'
// import 'codemirror/mode/markdown/markdown'

import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/xml-fold'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/markdown-fold'
import 'codemirror/addon/fold/comment-fold'

const DEFAULT_OPTIONS = {
  lineNumbers: true,
  mode: 'text/html',
  theme: 'github-light',
  tabSize: 2,
  extraKeys: {
    'Alt-F': 'findPersistent'
  },
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
}

export default {
  name: 'code-mirror',

  props: ['value', 'options', 'active'],

  render (h) {
    const { active } = this

    return h(
      'div', 
      { class: {'code-mirror': true, 'hide': !active} }, 
      [ h('textarea', { ref: 'textarea' }, this.value) ]
    )
  },

  mounted () {
    this.currentOptions = Object.assign({}, DEFAULT_OPTIONS, this.options)
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, this.currentOptions)
    this.editor.on('change', this.handleChange)
  },

  watch: {
    value (val) {
      val !== this.editor.getValue() && this.editor.setValue(val)
    },

    active (val) {
      if (val) {
        this.editor.focus()
        this.editor.setValue(this.editor.getValue())

        const lineCount = this.editor.doc.lineCount()

        if (lineCount < 30) {
          this.editor.setSize(null, this.editor.defaultTextHeight() * (lineCount+1))
        }
      }
    }
  },

  methods: {
    handleChange () {
      /* istanbul ignore next */
      this.$emit('change', this.editor.getValue())
    }
  }
}
</script>

<style>
@import "~codemirror/lib/codemirror.css";
@import "../css/codemirror.css";
</style>
