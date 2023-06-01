<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>
.btn {
  padding: 10px 15px;
  background: royalblue;
  color: white;
  border: none;
  border-radius: 10px;
}

.btn:hover {
  background-color: darkblue;
}
</style>
