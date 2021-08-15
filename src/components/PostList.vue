<template>
  <div v-if="posts.length > 0">
    <transition-group name="list">
      <post-item
        :key="post.id"
        :post="post"
        v-for="post in posts"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <div class="post-empty" v-else>
    <h2 class="post-empty-title">Сохранённых постов пока нет.</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostItem from "@/components/PostItem.vue";

export default defineComponent({
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
});
</script>

<style scoped>
.post-empty {
  margin: 25px 0;
  padding: 0;
}

.post-empty-title {
  font-size: 14px;
  text-align: left;
  color: #333333;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.list-move {
  transition: transform 0.5s ease;
}
</style>
