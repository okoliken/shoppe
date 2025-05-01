import './assets/index.css'
import 'vue3-carousel/carousel.css'
import "nprogress/nprogress.css";
import * as NProgress from "nprogress";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


NProgress.configure({ easing: "ease", speed: 300, showSpinner: false });


app.use(createPinia())
app.use(router)


app.mount('#app')
