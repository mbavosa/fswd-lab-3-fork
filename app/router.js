import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from './Register.vue';
import TaskList from './TaskList.vue';
import IndividualTask from './IndividualTask.vue';
<<<<<<< HEAD
import Marathonmap from './Marathonmap.vue';
=======
import Login from './Login.vue';
>>>>>>> upstream/master

Vue.use(VueRouter);

var routes = [
    {
        path: '/register',
        component: Register
    },
    { path: '/welcome', component: { template: '<p>Welcome to the task list!</p>'} },
    { path: '/tasks', component: TaskList },
    { path: '/tasks/:id', component: IndividualTask, props: true },
<<<<<<< HEAD
    { path: '/marathonmap', component: Marathonmap }
=======
    { name: 'login', path: '/login', component: Login },
    { path: '/logout', component: { template: '<p>Logout here</p>' }}
>>>>>>> upstream/master
];

export default new VueRouter({ routes, linkActiveClass: 'active' });