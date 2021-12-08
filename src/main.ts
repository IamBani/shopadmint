import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import element from '@/plugins/element/index'
import store from './store'

const app = createApp(App)
app.use(element)
app.use(store).use(router)
app.mount('#app')
