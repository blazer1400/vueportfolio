import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Unicon from 'vue-unicons'
import { uniAngleLeft, uniAngleDown, uniEstate, uniEye, uniInfo, uniConstructor, uniPhone, uniBars} from 'vue-unicons/dist/icons'

Unicon.add([uniAngleLeft, uniAngleDown, uniEstate, uniEye, uniInfo, uniConstructor, uniPhone, uniBars])

import './assets/main.css'

import button from "@/components/button.vue";
import icon from "@/components/icon.vue";
import container from "@/components/container.vue";

const app = createApp(App)
;
app.use(createPinia())
    .use(router)
    .use(Unicon)

    .component('vButton', button)
    .component('icon', icon)
    .component('container', container)

    .mount('#app')
