import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import '@vuepic/vue-datepicker/dist/main.css'

app.use(router)

app.mount('#app')
