<template>
    <ul>
        <task v-for="task in tasks" :task="task" :key="task.id" @deletedMyself='taskDeleted'></task>
    </ul>
</template>

<script>
import Task from './Task.vue';

export default {
    components: {
        Task
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        }
    },
    methods: {
        taskDeleted: function() {
            alert('a task was deleted');
            this.$http.get('/tasks')
                .then((response) => {
                    this.tasks = response.data;
                });
        }
    }
};
</script>