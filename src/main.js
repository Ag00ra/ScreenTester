import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

var app= createApp(App)
app.config.productionTip = false


app.use(router)
app.use(store)
app.use(i18n)
console.log(app.config.globalProperties)
console.log(i18n.global.messages.value)
app.mount('#app')
