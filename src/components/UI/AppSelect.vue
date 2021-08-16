<template>
  <select v-model="$props.modelValue" class="select" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(evt: { target: { value: string } }) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
});
</script>

<style lang="scss" scoped>
.select {
  margin: 0;
  padding: 10px;
  color: #3eaf7c;
  background: transparent;
  border: 1px solid #3eaf7c;
  border-radius: 5px;
}
</style>
