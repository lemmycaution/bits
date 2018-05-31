<template>
  <div class="flex flex-column">
    <header class="flex-none px-3 py-2 mb-3">
      <a 
        href="#"
        class="mr-2 icon icon--menu hide-desktop" 
        @click.prevent="sidebar = !sidebar">
      </a
>
      <i class="logo">BITS</i>
    </header>

    <section class="flex flex-auto">
      <aside 
        class="flex-none px-3 mt-3" 
        :class="{'hide-phone hide-tablet': !sidebar}">

        <toc 
          class="tree-list" 
          @click.native.prevent="open"
        />
      </aside>

      <main 
        class="flex-auto px-3 container container--centered" 
        role="main">

        <router-view :key="$route.path" />
      </main>
    </section>
  </div>
</template>

<script>
import toc from 'docs/toc.md'
import marked from 'marked'

const LNK_ACTV_CLS = 'router-link-exact-active'
const HOST = window.location.host

export default {
  name: 'app',

  components: {
    Toc: resolve => resolve({
      template: marked(toc)
    })
  },

  data () {
    return {
      sidebar: false
    }
  },

  methods: {
    open (e) {
      const { target } = e
      const { href } = target

      if (href) {
        const oldActive = this.$el.querySelector(`.${LNK_ACTV_CLS}`)

        if (oldActive) oldActive.classList.toggle(LNK_ACTV_CLS, false)

        target.classList.toggle(LNK_ACTV_CLS, true)
        this.$router.push(href.split(HOST)[1])
      }
    }
  }
}
</script>

<style>
@import "../css/bits.css";
@import "../css/tree-list.css";
</style>
