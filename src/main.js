import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/assets/style.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

createApp(App).use(router).mount('#app')
