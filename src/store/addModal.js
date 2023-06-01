export const addModal = {
    state: () => ({
        show: false,
    }),

    mutations: {
        showModal(state) {
            state.show = true;
        },
        hideModal(state) {
            state.show = false;
        },
    },
    namespaced: true
}
