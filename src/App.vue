<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <div>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
  background-size: cover;
  -webkit-animation: slidein 100s;
  animation: slidein 100s;

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-webkit-keyframes slidein {
  from {
    background-position: top;
    background-size: 1515px;
  }
  to {
    background-position: -100px 0;
    background-size: 2750px;
  }
}

@keyframes slidein {
  from {
    background-position: top;
    background-size: 1515px;
  }
  to {
    background-position: -100px 0;
    background-size: 2750px;
  }

}

</style>
