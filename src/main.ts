import './assets/main.css'

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')