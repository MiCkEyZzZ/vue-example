<template>
  <div class="post">
    <div class="post-name"><strong>Название:</strong> {{ post.title }}</div>
    <div class="post-description">
      <strong>Описание:</strong> {{ post.body }}
    </div>
    <div class="post-btn">
      <app-button @click="$emit('remove', post)">Удалить</app-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IPost } from "@/types/app";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
});
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #3eaf7c;
  border-radius: 5px;
}

.post-name {
  width: 100%;
  max-width: 200px;
  margin: 0;
  padding: 0;
}

.post-description {
  margin: 0;
  padding: 0;
}
</style>
