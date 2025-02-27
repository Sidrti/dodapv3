/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
import VueTheMask from 'vue-the-mask';
import Vue3Autocounter from 'vue3-autocounter';
import store from '@/store';

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueTheMask)
    .use(store)
    .component('vue3-autocounter', Vue3Autocounter)
}
