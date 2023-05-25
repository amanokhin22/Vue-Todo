<template>
  <div class="todo">
    <div> {{ todo.id }})</div>
    <div style="display: flex; ">
      <MyButton> {{ todo.completed }}</MyButton>
      <div>{{ todo.title }}</div>
    </div>
    <div class="todo__btns">

      <MyButton
          class="deleteBtn"
          @click="$emit('remove', todo)"
      >
        Delete
      </MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props: {
    todo: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.todo {
  padding: 15px;
  border: 2px solid teal;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: cornsilk;
}

.todo__btns {
  display: flex;
}

.deleteBtn {
  margin-left: auto;
}

.deleteBtn:hover {
  background-color: red;
}
</style>
