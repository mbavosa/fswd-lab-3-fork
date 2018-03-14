<template>
    <p v-if="task">Looking at task {{ id }}: {{ name }}</p>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        taskId() {
            return parseInt(this.id)
        },
        task() {
            return this.$store.getters.getTaskById(this.taskId);
        },
        name() {
            return this.task ? this.task.name : '';
        }
    }
};
</script>