import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import TodosListStore from "@/pages/TodosListStore.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: TodosListStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router