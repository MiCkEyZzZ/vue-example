<template>
  <div class="spinner">Идёт загрузка...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-spinner",
});
</script>

<style scoped>
.spinner {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 0 0;
  padding: 0;
}
</style>
