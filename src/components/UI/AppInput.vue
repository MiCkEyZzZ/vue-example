<template>
  <input
    :value="modelValue"
    type="text"
    class="form-input"
    placeholder="Введите название..."
    @input="updateInput"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(evt: { target: { value: string } }) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
});
</script>

<style scoped>
.form-input {
  width: 100%;
  margin: 0 10px 20px 0;
  padding: 15px 5px 15px 15px;
  border-radius: 5px;
  border: 1px solid #3eaf7c;
  outline: none;
}

.form-input:focus {
  border: 1px solid #3eaf7c;
}
</style>
