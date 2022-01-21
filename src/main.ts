import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupRouterGuard } from '@/router/guard'
import element from '@/plugins/element/index'
import store, { key } from './store'
import mock from '@/mock/index'
import './style/css/index.css'
import './style/css/index.scss'
import './style/variables.scss'
import { setupI18n } from './locales/setupI18n'
if (process.env.NODE_ENV === 'development') {
  mock()
}
const app = createApp(App)
app.use(element)
app.use(store, key)

const bootstrap = async () => {
  // router-guard
  app.use(router)
  setupRouterGuard(router)
  await setupI18n(app)
  app.mount('#app')
}
bootstrap()
