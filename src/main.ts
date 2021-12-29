import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupRouterGuard } from '@/router/guard'
import element from '@/plugins/element/index'
import store, { key } from './store'
import mock from '@/mock/index'
import './style/css/index.css'
import './style/variables.scss'
if (process.env.NODE_ENV === 'development') {
  mock()
}
const app = createApp(App)
app.use(element)
app.use(store, key).use(router)

const bootstrap = () => {
  // router-guard
  setupRouterGuard(router)
  app.mount('#app')
}
bootstrap()
