import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';


// importing AOS css style globally
import 'aos/dist/aos.css'

//tawk to
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

createApp(App).use(TawkMessengerVue, {
    propertyId : 'property_id',
    widgetId : 'widget_id'
});

import '@fortawesome/fontawesome-free/js/all'
createApp(App).use(router).mount('#app')


import 'bootstrap/dist/js/bootstrap.js';
