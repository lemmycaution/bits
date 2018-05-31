<template>
  <div class="example">
    <div 
      class="preview" 
      v-html="html">
    </div>

    <code-mirror 
      :active="editing" 
      :value="value" 
      @change="run($event)"
    />
    <a 
      class="editor-toggle" 
      :class="{'editor-toggle--active': editing}"
      @click="editing = !editing"
    >
      <svg 
        fill="currentColor" 
        height="24" 
        width="24" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'example',

  props: {
    value: {
      type: String
    },
    lang: {
      type: String
    }
  },

  data () {
    return {
      html: this.value,
      editing: false
    }
  },

  watch: {
    editing: function (editing) {
      if (editing) {
        const {requestAnimationFrame} = window
        const sEl = document.scrollingElement
        const dest = this.$el.offsetTop - 64
        const step = () => {
          const scrollTop = sEl.scrollTop
          const dist = () => dest - scrollTop

          sEl.scrollTop += dist() / 2

          if (Math.abs(dist()) > 1) {
            requestAnimationFrame(step)
          }
        }
        if (sEl.scrollTop > 0) {
          requestAnimationFrame(step)
        }
      }
    }
  },

  created () {
    this.$watch('value', this.run, {immediate: true})
  },

  methods: {
    run (code) {
      try {
        this.html = code
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
.example {
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
}

.preview {
  width: 100%;
  height: 100%;
  border: 0;
  padding: .5rem;
}

/deep/ .preview *:last-child {
  margin-bottom: 0;
}

.editor-toggle {
  display: inline-block;
  padding: .5rem;
  vertical-align: middle;
  cursor: pointer;
}

.editor-toggle svg {
  vertical-align: middle;
}

/deep/ .CodeMirror {
  height: 33vh;
}
</style>
