import {createStore} from "vuex";
import {todoModule} from "@/store/todoModule";
import {addModal} from "@/store/addModal";
import {editModal} from "@/store/editModal";

export default createStore({
    state: {
        isAuth: false,
    },
    modules: {
        todo: todoModule,
        addTodoModal: addModal,
        editModalStore: editModal
    }
})
