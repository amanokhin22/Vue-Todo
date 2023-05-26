<template>
  <div class="todo">
    <div style="display: flex; gap: 10px ">
      <div> {{ todo.id }})</div>
      <label class="switch">
        <input
            type="checkbox"
            :checked="todo.completed"
            @change="$emit('toggle')"

        />
        <span class="slider"></span>
      </label>
      <label for="switch" class="switch-label">{{ todo.completed }}</label>
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
  min-width: 700px;
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

.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 19px;
}

.switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 0;
  bottom: 1px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.switch input[type="checkbox"]:checked + .slider {
  background-color: #2196F3;
}

.switch input[type="checkbox"]:checked + .slider:before {
  transform: translateX(26px);
}

.switch-label {
  margin-left: 10px;
}
</style>
