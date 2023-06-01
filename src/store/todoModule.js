import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:5174/todos`,
});
export const todoModule = {
    state: () => ({
        todos: [],
        isTodosLoading: false,
        searchQuery: "",
        selectedSort: "",
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
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
    },
    actions: {
        async fetchTodos({commit}) {
            try {
                commit('setLoading', true);
                const response = await axiosInstance.get(``, {});
                commit('setTodos', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async create({dispatch}, todo) {
            await axiosInstance.post(``, {title: todo.title, completed: false});
            await dispatch('fetchTodos')
        },
        async delete({dispatch}, todo) {
            await axiosInstance.delete(`/${todo.id}`);
            await dispatch('fetchTodos')
        },
        async toggle({dispatch}, todo) {
            await axiosInstance.patch(`/${todo.id}`, {completed: !todo.completed});
            await dispatch('fetchTodos')
        },
        async updateTitle({dispatch}, todo) {
            await axiosInstance.patch(`/${todo.id}`, {title: todo.title});
            await dispatch('fetchTodos')
        },
    },
    namespaced: true
}
