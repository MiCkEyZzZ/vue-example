<template>
  <div class="navigation">
    <div class="navigation-logo">
      <router-link class="navigation-logo__link" to="/">Логотип</router-link>
    </div>
    <nav class="navigation-nav">
      <ul class="navigation-nav__list">
        <li class="navigation-nav__item">
          <router-link class="navigation-nav__item-link" to="/"
            >Главная</router-link
          >
        </li>
        <li class="navigation-nav__item">
          <router-link class="navigation-nav__item-link" to="/posts"
            >Посты</router-link
          >
        </li>
        <li class="navigation-nav__item">
          <router-link class="navigation-nav__item-link" to="/about"
            >О нас</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  margin: 0;
  padding: 0 15px 0 15px;
  background: #ffffff;
  box-shadow: 2px 2px 4px #333333;

  &-logo {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 80px 0 0;
    padding: 0;

    &__link {
      color: #2c3e50;
      text-decoration: none;
    }
  }

  &-nav {
    display: flex;
    width: 100%;
    max-width: 500px;
    height: 50px;
    align-items: center;
    margin: 0;
    padding: 10px;

    &__list {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      text-transform: uppercase;
      margin: 0 10px 0 0;
      padding: 0;

      &-link {
        font-size: 12px;
        font-weight: bold;
        text-decoration: none;
        color: #2c3e50;

        &:hover {
          color: #3eaf7c;
        }
      }
    }
  }
}
</style>
