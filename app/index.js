import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import VueRouter from 'vue-router';
import Vuex from 'vuex';

import NewTask from './NewTask.vue';
import Register from './Register.vue';
import TaskList from './TaskList.vue';
import IndividualTask from './IndividualTask.vue';
import CurrentTaskCount from './CurrentTaskCount.vue';
import StoreDemo from './StoreDemo.vue';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuex);

var routes = [
    { path: '/register', component: Register },
    { path: '/welcome', template: '<p>Welcome to the task list!</p>'},
    { path: '/tasks', component: TaskList },
    { path: '/tasks/:id', component: IndividualTask, props: true }
];

var router = new VueRouter({ routes });

var store = new Vuex.Store({
    state: {
        myValue: 15,
        tasks: [],
        isLoggedIn: false
    },
    mutations: {
        incrementValue(state) {
            state.myValue += 1;
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions: {
        getTasks({ commit }) {
            return Vue.axios.get('/tasks')
                .then(response => {
                    commit('setTasks', response.data);
                })
        },
        asyncIncrementValue({ commit }) {
            setTimeout(() => {
                commit('incrementValue');
            }, 2000);
        },
        checkLogin({ commit }) {
            Vue.axios.get('/users/isLoggedIn')
                .then(response => {
                    commit('setLoggedIn', response.data)
                })
        },
        // addNewTask({ state, commit }, newTask) {
        //     commit('setTasks', state.tasks.concat([newTaskFromServer]));
        // }
    },
    getters: {
        taskCount(state) {
            return state.tasks.length;
        },
        getTaskById(state) {
            return id => {

                return state.tasks.find(task => task.id === id);
            }
        }
    }
});

var app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        NewTask,
        Register,
        TaskList,
        CurrentTaskCount,
        StoreDemo
    },
    data: {
        tasks: [],
        user: null
    },
    beforeCreate() {
        this.$store.dispatch('getTasks');
    },
    methods: {
        addNewTask: function(newTask) {
            this.$http.post('/tasks', { name: newTask })
                .then((response) => {
                    this.tasks.push(response.data);
                });
        },
        registerUser: function(details) {
            this.$http.post('/users/register', details)
                .then((response) => {
                    this.user = response.data;
                });
        }
    }
});