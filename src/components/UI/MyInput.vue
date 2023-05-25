<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  max-width: 400px;
  font-size: 16px;
  line-height: 19px;
  padding: 14px 16px;
  background: rgb(243, 244, 245);
  border-radius: 8px;
  border: 1px solid rgb(243, 244, 245);
  font-family: Inter, sans-serif;
  color: rgb(33, 33, 33);
  outline: none;
  margin: 8px 0 0;
  font-weight: 400;
  overflow: visible;
}
</style>