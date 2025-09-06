//import './assets/main.css'//
import 'uno.css'           // если используешь UnoCSS
import '@fontsource/inter/index.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head';
import App from './App.vue'
import router from './router'
const head=createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
