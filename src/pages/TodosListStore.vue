<template>
  <div style="
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;
    top: 50px;"
  >
    <h1>Todos List</h1>
    <MyInput
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
    </div>
    <TodoList
        :todos="sortedAndSearchedTodos"
        @remove="removeTodo"
        @toggle="toggleTodo"
        v-if="!isTodosLoading"
    />
    <div v-else style="align-self: center; font-size: 25px">Loading in progress...</div>
    <EditModal
        v-if="showEdit"
        :todo="setEditTodo"
        @update="updateTodo"
        @close="hideEditModal"
    ></EditModal>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
import EditModal from "@/components/UI/EditModal.vue";

export default {
  components: {
    EditModal,
    MyInput,
    TodoList,
  },
  methods: {
    ...mapMutations({
      setPage: 'todo/setPage',
      setSearchQuery: 'todo/setSearchQuery',
      hideEditModal: "editModalStore/hideEditModal",
    }),
    ...mapActions({
      fetchTodos: 'todo/fetchTodos',
      removeTodo: 'todo/delete',
      toggleTodo: 'todo/toggle',
      editTitleTodo: 'todo/updateTitle'
    }),
    updateTodo(todo) {
      this.editTitleTodo(todo)
      this.hideEditModal();
    }
  },
  mounted() {
    this.fetchTodos();
  },
  computed: {
    ...mapState({
      todos: state => state.todo.todos,
      isTodosLoading: state => state.todo.isTodosLoading,
      searchQuery: state => state.todo.searchQuery,
      page: state => state.todo.page,
      limit: state => state.todo.limit,
      totalPages: state => state.todo.totalPages,
      showEdit: state => state.editModalStore.show,
      setEditTodo: state => state.editModalStore.todo,
    }),
    ...mapGetters({
      sortedTodos: 'todo/sortedTodos',
      sortedAndSearchedTodos: 'todo/sortedAndSearchedTodos',
    }),
  },
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>
