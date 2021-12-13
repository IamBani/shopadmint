import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import element from '@/plugins/element/index'
import store, { key } from './store'
import './style/css/index.css'
import './style/variables.scss'
const app = createApp(App)
app.use(element)
app.use(store, key).use(router)
app.mount('#app')
