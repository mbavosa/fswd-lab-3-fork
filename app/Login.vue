<template>
    <form @submit.prevent="sendLogin">
        <div class="form-group">
            <label for="username">Username</label>
            <input class="form-control" type="text" name="username" v-model="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control" type="password" name="password" v-model="password">
        </div>
        <button class="btn btn-primary">Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        sendLogin() {
            this.$store.dispatch('login', { username: this.username, password: this.password })
                .then(() => this.$router.push('/welcome'))
                .catch(response => console.log(response.data));
        }
    }
}
</script>