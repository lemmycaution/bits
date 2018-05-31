<template>
  <div>
    <component 
      v-if="doc"
      class="markdown" 
      :is="doc"
    />
  </div>
</template>

<script>
import { renderErr } from '../lib/utils'
import renderDoc from '../lib/doc'

export default {
  name: 'doc',

  props: {
    path: {
      type: String
    }
  },

  data () {
    return {
      doc: null
    }
  },

  created () {
    this.$watch('path', this.run, {immediate: true})
  },

  methods: {
    run () {
      this.doc = resolve => {
        try {
          resolve(renderDoc(require(`docs/${this.path}`)))
        } catch (err) {
          resolve({
            template: renderErr(err)
          })
        }
      }
    }
  }
}
</script>


<style>
@import "../css/markdown.css";
@import "../css/highlight.css";
</style>
