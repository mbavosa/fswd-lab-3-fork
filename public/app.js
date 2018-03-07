Vue.component('Task', {
    props: ['task'],
    template: '<li><button @click="clicked">x</button> #{{ task.id }} {{ task.name }}</li>',
    methods: {
        clicked: function() {
            alert('Clicked on task ' + this.task.name);
            this.$http.delete('/tasks/' + this.task.id)
<<<<<<< HEAD
                .then(() => {
                    console.log('test')
=======
                .then(function() {
>>>>>>> upstream/master
                    this.$emit('deletedMyself');
                })
        }
    }
});

Vue.component('TaskList', {
    props: ['tasks'],
<<<<<<< HEAD
    template: '<ul><task v-for="task in tasks" :task="task" @deletedMyself="taskDeleted"></task></ul>',
=======
    template: '<ul><task v-for="task in tasks" :task="task" @deletedMyself=taskDeleted></task></ul>',
>>>>>>> upstream/master
    methods: {
        taskDeleted: function() {
            alert('a task was deleted');
            this.$http.get('/tasks')
<<<<<<< HEAD
                .then((response) => {
=======
                .then(function(response) {
>>>>>>> upstream/master
                    this.tasks = response.body;
                });
        }
    }
});

<<<<<<< HEAD
Vue.component('TaskList', {
    props: ['tasks'],
    template: '<ul><task v-for="task in tasks" :task="task"></task></ul>'
});

=======
>>>>>>> upstream/master
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
<<<<<<< HEAD
        tasks: []
=======
        tasks: [],
        user: null
>>>>>>> upstream/master
    },
    methods: {
        addNewTask: function(newTask) {
            this.$http.post('/tasks', { name: newTask })
<<<<<<< HEAD
                .then((response) => {
                    this.tasks.push(response.body);
                });
=======
                .then(function(response) {
                    this.tasks.push(response.body);
                });
        },
        registerUser: function(details) {
            this.$http.post('/users/register', details)
                .then(function(response) {
                    this.user = response.body;
                });
>>>>>>> upstream/master
        }
    },
    created: function() {
        this.$http.get('/tasks')
<<<<<<< HEAD
            .then((response) => {
=======
            .then(function(response) {
>>>>>>> upstream/master
                this.tasks = response.body;
            })
    }
});