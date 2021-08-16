<template>
  <div class="post">
    <h1>Пост {{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 600px;
  margin: 60px auto 0 0;
  padding: 30px 15px 30px 15px;
  color: #2c3e50;
}
</style>
