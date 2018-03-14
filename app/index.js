import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';

import store from './store';
import router from './router';

Vue.use(VueAxios, axios);

var app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        App
    },
    template: '<App/>',
    mounted() {
        this.$store.dispatch('start')
            .then(isLoggedIn => {
                if (isLoggedIn) {
                    this.$router.replace('/tasks');
                } else {
                    this.$router.replace({ name: 'login' });
                }
            })
    },

});