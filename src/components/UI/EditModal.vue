<template>
  <div class="wrapper" @click.stop="hideEditModal">
    <div class="dialog">
      <div @click.stop class="dialog_content">
        <form @submit.prevent>
          <h4 class="create__title"
          >EDIT TODO</h4>
          <MyInput
              v-model="title"
              type="text"
          />
          <MyButton
              class="dialog__btn"
              @click="updateTodo"
              style="align-self: center; margin-top: 15px"
          >
            Update
          </MyButton>
        </form>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: 'edit-modal',
  components: {MyButton, MyInput},
  data() {
    return {
      title: this.todo.title
    }
  },
  props: {
    todo: {
      title: "",
      id: null
    }
  },
  methods: {
    hideEditModal() {
      this.$emit("close")
    },
    updateTodo() {
      this.$emit("update", {title: this.title, id: this.todo.id});
    }
  },
}
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 33, 33, 0.3);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  opacity: 1;
  transition: opacity 0.3s ease 0s;
  pointer-events: all;
}

.dialog {
  max-width: 489px;
  padding: 32px;
  width: 100%;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%);
  border-radius: 36px;
  transform: scale(1);
  transition: transform 0.3s ease 0s;
}

.dialog_content {

  padding: 48px 48px 40px;
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  transform: scale(1);
  transition: transform 0.3s ease 0s;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
}

.create__title {
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  color: rgb(33, 33, 33);
  margin: 0 0 32px;
}

.dialog__btn {
  --btn-width: 56px;
  font-size: 20px;
  line-height: 25px;
  width: 210px;
  height: 56px;
  display: block;
  position: relative;
  background: rgb(255, 71, 77);
  border-radius: 18px;
  padding: 0;
  margin: 0 auto 14px;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  outline: 0;
  transition: all 0.3s ease 0s;
  animation: 0s ease 0s 1 normal none running none;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
}

.dialog__btn:hover {
  background-color: green;
}
</style>
