<template>
    <p>Looking at task {{ id }}: {{ task.name }}</p>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        task() {
            return this.$store.getters.getTaskById(this.id);
        }
    }
    // created() {
    //     this.$http.get('/tasks/' + this.id)
    //         .then(response => {
    //             this.task = response.data;
    //         });
    // }
};
</script>