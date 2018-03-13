import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from './Register.vue';
import TaskList from './TaskList.vue';
import IndividualTask from './IndividualTask.vue';
import Login from './Login.vue';

Vue.use(VueRouter);

var routes = [
    {
        path: '/register',
        component: Register
    },
    { path: '/welcome', component: { template: '<p>Welcome to the task list!</p>'} },
    { path: '/tasks', component: TaskList },
    { path: '/tasks/:id', component: IndividualTask, props: true },
    { name: 'login', path: '/login', component: Login },
    { path: '/logout', component: { template: '<p>Logout here</p>' }}
];

export default new VueRouter({ routes, linkActiveClass: 'active' });