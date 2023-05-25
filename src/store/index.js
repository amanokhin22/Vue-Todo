import {createStore} from "vuex";
import {todoModule} from "@/store/todoModule";
import {addModal} from "@/store/addModal";

export default createStore({
    state: {
        isAuth: false,
    },
    modules: {
        todo: todoModule,
        addTodoModal: addModal
    }
})