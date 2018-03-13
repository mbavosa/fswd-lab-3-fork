<template lang="pug">
div#app
    nav.navbar.navbar-expand-lg.navbar-light.bg-light.mb-2
        router-link.navbar-brand(to='/') FSWD
        ul.navbar-nav
            li.nav-item(v-show='isLoggedIn')
                router-link.nav-link(to='/tasks') Tasks
            li.nav-item(v-show='!isLoggedIn')
                router-link.nav-link(to='/login') Login
            li.nav-item(v-show='!user')
                router-link.nav-link(to='/register') Register
            li.nav-item(v-show='isLoggedin')
                router-link.nav-link(to='/logout') Logout
            span.navbar-text(v-show='isLoggedIn') Hi, {{ username }}!

    div.container
        div.row
            router-view.col-12
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        isLoggedIn: 'isLoggedIn',
        user: 'user',
        username: state => state.user ? state.user.username : ''
    })
    // computed: mapState(['isLoggedIn', 'user']),
    // computed: {
    //     isLoggedIn() { return this.$store.state.isLoggedIn || false; },
    //     user()       { return this.$store.state.user || null;        },
    //     username()   { return this.user ? this.user.username : '';   },
    //     ...mapState([ 'isLoggedIn', 'user' ]),
    // },
}
</script>

<style>
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
</style>