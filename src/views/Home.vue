<template>
  <div class="home">
    <h1 class="home-title">
      Учебный проект по <span class="home-description--style">Vue.js</span>
    </h1>
    <p class="home-description">
      используемые технологии:
      <span class="home-description--style"
        >vue3, vue-router, vuex, vuelidate, typescript, Axios, scss</span
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  margin: 0;
  padding: 0 15px 0 15px;

  &-title {
    font-size: 45px;
    text-transform: uppercase;
  }

  &-description {
    font-size: 15px;
    text-transform: uppercase;
    margin: 25px 0;
    padding: 0;

    &--style {
      font-weight: bold;
      color: #3eaf7c;
    }
  }
}
</style>
