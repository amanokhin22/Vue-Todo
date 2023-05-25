<template>
  <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

  <div class="home">
    <h1 class="title"> Create your own todo list </h1>
    <div class="home__btn">
      <MyButton
          style="width: 90px;margin-top: 30px; align-self: center"
          @click="show = !show"
      >
        Lets go
      </MyButton>
      <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
      >
        <p
            v-if="show"
            style="font-size: 20px; margin-top: 20px; color: darkblue"
        >
          If you need to create todo or check your todo list - put buttons in header</p>
      </transition>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},

  data() {
    return {
      show: false
    }
  }

}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  top: 150px;
}

.title {
  background: linear-gradient(90deg, #e933ff, #ffb400, #ff3333, #334dff, #e933ff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textflow 5s linear infinite;
  font-size: 50px;
}

@keyframes textflow {
  from {
    background-position: 0% center
  }
  to {
    background-position: 200% center
  }
}

.home__btn {
  display: flex;
  flex-direction: column;
}
</style>