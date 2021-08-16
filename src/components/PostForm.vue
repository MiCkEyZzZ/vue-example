<template>
  <form class="form">
    <h2 class="form-title">Добавить пост</h2>
    <app-input
      v-focus
      v-model.trim="v$.post.title.$model"
      type="text"
      placeholder="Введите название..."
    />
    <div
      class="form-errors"
      v-for="(error, index) of v$.post.title.$errors"
      :key="index"
    >
      <p class="form-errors--msg">{{ error.$message }}</p>
    </div>
    <app-input
      v-model.trim="v$.post.body.$model"
      type="text"
      placeholder="Введите описание..."
    />
    <div
      class="form-errors"
      v-for="(error, index) of v$.post.body.$errors"
      :key="index"
    >
      <p class="form-errors--msg">{{ error.$message }}</p>
    </div>
    <app-button
      style="width: 100%"
      type="submit"
      @click.prevent="addPost"
      :disabled="v$.post.$invalid"
      >Добавить</app-button
    >
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      post: {
        id: 0,
        title: "",
        body: "",
      },
    };
  },
  validations() {
    return {
      post: {
        title: {
          required,
          name_validation: {
            $message: "поле обязательное",
          },
        },
        body: {
          required,
          name_validation: {
            $message: "поле обязательное",
          },
        },
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit("add", this.post);
      this.post = {
        id: 0,
        title: "",
        body: "",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0 15px 0;
  padding: 20px;

  &-title {
    font-size: 20px;
    margin: 0 auto 25px auto;
    padding: 0;
  }

  &-errors {
    display: flex;
    margin: -15px 0 15px 10px;
    padding: 0;

    &--msg {
      color: red;
    }
  }
}
</style>
