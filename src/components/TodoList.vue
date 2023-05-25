<template>
  <div
      v-if="todos?.length  > 0"
  >
    <h3>List of todos</h3>
    <transition-group name="todos-list">
      <TodoItem
          v-for="todo in todos"
          :todo="todo"
          :key="todo.id"
          @remove="$emit('remove', todo)"
      />
    </transition-group>
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
  }
}
</script>

<style>

</style>