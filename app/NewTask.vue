<template>
    <div>
        <input class="form-control" type="text" v-model="newTask" placeholder="New task goes here">
        <button class="btn btn-danger" @click="addNewTask">Add task</button>
    </div>
</template>
  
<script>
export default {
    data: function() {
        return {
            newTask: ''
        };
    },
    methods: {
<<<<<<< HEAD
        addNewTask: function() {
=======
        addNewTask() {
>>>>>>> upstream/master
            this.$emit('addtask', this.newTask);
            this.newTask = '';
        }
    },
<<<<<<< HEAD
=======

>>>>>>> upstream/master
};
</script>

<style>
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> upstream/master
