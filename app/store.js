import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        myValue: 15,
        tasks: [],
        isLoggedIn: false
    },
    mutations: {
        incrementValue(state) {
            state.myValue += 1;
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions: {
        getTasks({ commit }) {
            return Vue.axios.get('/tasks')
                .then(response => {
                    commit('setTasks', response.data);
                })
        },
        asyncIncrementValue({ commit }) {
            setTimeout(() => {
                commit('incrementValue');
            }, 2000);
        },
        checkLogin({ commit }) {
            Vue.axios.get('/users/isLoggedIn')
                .then(response => {
                    commit('setLoggedIn', response.data)
                })
        },
        // addNewTask({ state, commit }, newTask) {
        //     commit('setTasks', state.tasks.concat([newTaskFromServer]));
        // }
    },
    getters: {
        taskCount(state) {
            return state.tasks.length;
        },
        getTaskById(state) {
            return id => {

                return state.tasks.find(task => task.id === id);
            }
        }
    }
});
