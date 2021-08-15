<template>
  <form class="form">
    <h2 class="form-title">Добавить пост</h2>
    <app-input
      v-model.trim="post.title"
      type="text"
      placeholder="Введите название..."
    />
    <app-input
      v-model.trim="post.body"
      type="text"
      placeholder="Введите описание..."
    />
    <app-button type="submit" @click.prevent="addPost">Добавить</app-button>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit("add", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0 15px 0;
  padding: 20px;
}

.form-title {
  font-size: 20px;
  margin: 0 auto 25px auto;
  padding: 0;
}
</style>
