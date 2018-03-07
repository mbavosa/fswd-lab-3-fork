import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import Vue from 'vue';
<<<<<<< HEAD
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.component('Task', {
    props: ['task'],
    template: '<li><button @click="clicked">x</button> #{{ task.id }} {{ task.name }}</li>',
    methods: {
        clicked: function() {
            alert('Clicked on task ' + this.task.name);
            this.$http.delete('/tasks/' + this.task.id)
                .then(function() {
                    console.log('test')
                    this.$emit('deletedMyself');
                })
        }
    }
});

Vue.component('TaskList', {
    props: ['tasks'],
    template: '<ul><task v-for="task in tasks" :task="task" @deletedMyself=taskDeleted></task></ul>',
    methods: {
        taskDeleted: function() {
            alert('a task was deleted');
            this.$http.get('/tasks')
                .then(function(response) {
                    this.tasks = response.body;
                });
        }
    }
});

Vue.component('TaskList', {
    props: ['tasks'],
    template: '<ul><task v-for="task in tasks" :task="task"></task></ul>'
});

Vue.component('NewTask', {
    data: function() {
        return {
            newTask: ''
        };
    },
    methods: {
        addNewTask: function() {
            this.$emit('addtask', this.newTask);
            this.newTask = '';
        }
    },

    template: '<div><input class="form-control" type="text" v-model="newTask" placeholder="New task goes here"><button class="btn btn-danger" @click="addNewTask">Add task</button></div>'
=======
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
            Vue.axios.get('/tasks')
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
        getTaskById: (state) => (id) => {
            console.log('searching tasks for ' + id);
            return state.tasks.find(task => task.id === id);
        }
    }
>>>>>>> upstream/master
});

var app = new Vue({
    el: '#app',
<<<<<<< HEAD
    data: {
        tasks: []
=======
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
    created() {
        this.$store.dispatch('getTasks');
>>>>>>> upstream/master
    },
    methods: {
        addNewTask: function(newTask) {
            this.$http.post('/tasks', { name: newTask })
<<<<<<< HEAD
                .then(function(response) {
                    this.tasks.push(response.body);
                });
        }
    },
    created: function() {
        this.$http.get('/tasks')
            .then((response) => {
                this.tasks = response.data;
            })
=======
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
>>>>>>> upstream/master
    }
});