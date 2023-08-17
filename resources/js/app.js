import Vue from 'vue'
import store from './store'
import axios from 'axios';

import App from './views/app.vue'

const app = new Vue({
    el: '#app',
    store,
    axios,
    components: { App }
});