import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from 'primevue/themes/aura';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';

const app = createApp({})
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.use(PrimeVue, {
    theme: {
        ripple: true,
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
