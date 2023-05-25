import axios from "axios";

export const todoModule = {
    state: () => ({
        todos: [],
        isTodosLoading: false,
        searchQuery: "",
        selectedSort: "",
        page: 1,
        limit: 10,
        totalPages: 0,

    }),
    getters: {
        sortedTodos(state) {
            return [...state.todos].sort((todo1, todo2) => todo1[state.selectedSort]?.localeCompare(todo2[state.selectedSort]))
        },
        sortedAndSearchedTodos(state, getters) {
            return getters.sortedTodos.filter(todo => todo.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos;
        },
        setLoading(state, bool) {
            state.isTodosLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        removeTodo(state, todo) {
            state.todos = state.todos.filter(t => t.id !== todo.id)
        },
        addTodo(state, todo) {
            state.todos.push(todo);
        },
    },
    actions: {
        async fetchTodos({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {});
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setTodos', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMoreTodos({state, commit}) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {});
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setTodos', [...state.todos, ...response.data]);
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}
