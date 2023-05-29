<template>
  <div class="header">
    <div class="to__home"
         @click="$router.push('/')"
    >
      Home
    </div>
    <div class="header__btns">
      <MyButton @click="$router.push('/list')">Todos List</MyButton>
      <MyButton
          @click="showModal"
          style="width: 90px;margin-left: 10px;"
      >
        Create
      </MyButton>
      <MyDialog
          :show="show"
          @create="createTodo"
          @close="hideModal"
      ></MyDialog>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  components: {MyDialog, MyButton},

  methods: {
    ...mapMutations({
      showModal: "addTodoModal/showModal",
      hideModal: "addTodoModal/hideModal",
    }),
    createTodo(todo) {
      this.addTodo(todo);
      this.hideModal();
    },
    ...mapActions({
      addTodo: 'todo/create'
    }),
  },
  computed: {
    ...mapState({
      show: state => state.addTodoModal.show,
    })
  }
}
</script>

<style>
.header {
  height: 50px;
  background-color: rgb(134, 145, 178);
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
}

.to__home {
  color: white;
}

.to__home:hover {
  color: red;
}
</style>