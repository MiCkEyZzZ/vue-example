<template>
  <div class="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { Navbar },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap");

body {
  width: 100%;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

.app {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
