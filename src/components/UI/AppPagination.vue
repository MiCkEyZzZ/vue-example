<template>
  <ul class="pagination">
    <li
      v-for="number in total"
      :key="number"
      class="pagination-item"
      :class="{ 'current-page': page === number }"
      @click="pagination(number)"
    >
      {{ number }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-pagination",
  props: {
    total: Number,
    page: Number,
  },
  methods: {
    pagination(page: string) {
      this.$emit("update:page", page);
    },
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 25px auto 0 auto;
  padding: 0;
}

.pagination-item {
  margin: 0 5px 0 0;
  padding: 10px;
  border: 1px solid #3eaf7c;
  border-radius: 5px;
}

.pagination-item:hover {
  color: #ffffff;
  background: #3eaf7c;
  border: 1px solid #3eaf7c;
  cursor: pointer;
}

.current-page {
  color: #ffffff;
  background: #3eaf7c;
  border: 1px solid #3eaf7c;
  cursor: default;
}
</style>
