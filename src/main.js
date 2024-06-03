import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from 'primevue/themes/aura';


const app = createApp({})
app.use(PrimeVue, {
    theme: {
        base: Aura,
        preset: Aura,
        options: {
            prefix: 'structure',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
app.component('structure-app', App)
app.mount('#structureApp')
