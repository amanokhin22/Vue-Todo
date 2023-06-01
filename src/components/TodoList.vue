<template>
  <div
      v-if="todos?.length  > 0"
  >
    <h3>List of todos</h3>
    <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @toggle="$emit('toggle', todo)"
        @remove="$emit('remove', todo)"
    />
  </div>
  <h2 v-else style="color:red; align-self: center">
    Todo list is empty
  </h2>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {TodoItem},
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
}
</script>

<style>
</style>
