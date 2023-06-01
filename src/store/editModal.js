export const editModal = {
    state: () => ({
        show: false,
        todo: {
            id: null,
            title: ' '
        }
    }),

    mutations: {
        showEditModal(state, todo) {
            state.show = true;
            state.todo = todo
        },
        hideEditModal(state) {
            state.show = false;
        },
    },
    namespaced: true
}
