<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-button",
});
</script>

<style lang="scss" scoped>
.btn {
  margin: 0 15px 0 0;
  padding: 11px;
  color: #3eaf7c;
  background: transparent;
  border: 1px solid #3eaf7c;
  border-radius: 5px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>
