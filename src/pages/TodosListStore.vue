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
        @edit="editTodo"
        v-if="!isTodosLoading"
    />
    <div v-else style="align-self: center; font-size: 25px">Loading in progress...</div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
  components: {
    MyInput,
    TodoList,
  },
  methods: {
    ...mapMutations({
      setPage: 'todo/setPage',
      setSearchQuery: 'todo/setSearchQuery',
    }),
    ...mapActions({
      fetchTodos: 'todo/fetchTodos',
      removeTodo: 'todo/delete',
      toggleTodo: 'todo/toggle',
      editTodo: 'todo/edit'
    }),
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