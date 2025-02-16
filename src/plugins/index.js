/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import VueTheMask from 'vue-the-mask';
import Vue3Autocounter from 'vue3-autocounter';

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueTheMask)
    .component('vue3-autocounter', Vue3Autocounter)
}
