import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
//import PrimeVue from 'primevue/config';
//import PrimeVueStyled from 'primevue/styled';
import PrimeVue from 'primevue/config';
//import PrimeOne from 'primevue/themes/primeone';
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
