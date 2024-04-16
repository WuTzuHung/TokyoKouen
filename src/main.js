import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

import * as echarts from 'echarts';

const app = createApp(App)

const pinia = createPinia()

app.use(router)

app.use(pinia)

app.mount('#app')
