import Vue from 'vue'
import Router from 'vue-router'
import App from './src/com/App'
import Doc from './src/com/Doc'
import Example from './src/com/Example'
import CodeMirror from './src/com/CodeMirror'
import { renderErr } from './src/lib/utils'

Vue.component(CodeMirror.name, CodeMirror)
Vue.component(Example.name, Example)
Vue.use(Router)

const README = 'README.md'

const router = new Router({
  routes: [{
    path: '/**',
    component: {
      render (h) {
        try {
          let path = this.$route.params[0] || README

          return h(Doc, {
            props: { path }
          })
        } catch (err) {
          return h('div', renderErr(err))
        }
      }
    }
  }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
