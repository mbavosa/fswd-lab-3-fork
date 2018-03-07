import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import Vue from 'vue';
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
});

var app = new Vue({
    el: '#app',
    data: {
        tasks: []
    },
    methods: {
        addNewTask: function(newTask) {
            this.$http.post('/tasks', { name: newTask })
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
    }
});