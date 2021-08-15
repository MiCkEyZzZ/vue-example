<template>
  <div class="container">
    <h1>Страница с постами</h1>
    <div class="search">
      <app-input v-model="query" type="text" placeholder="Поиск..." />
    </div>
    <div class="app-btn">
      <app-button style="width: 120px" @click="showModal"
        >Добавить пост</app-button
      >
      <app-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <app-modal v-model:show="modalVisible">
      <post-form @add="addPost" />
    </app-modal>
    <post-list :posts="searchPosts" @remove="removePost" v-if="!loading" />
    <app-spinner v-else />
    <ul class="pagination">
      <li
        v-for="number in totalPages"
        :key="number"
        class="pagination-item"
        :class="{ 'current-page': page === number }"
        @click="changePage(number)"
      >
        {{ number }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { IPost } from "@/types/app";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default defineComponent({
  data() {
    return {
      posts: [] as IPost[],
      modalVisible: false,
      loading: false,
      selectedSort: "",
      query: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "description", name: "По описанию" },
      ],
    };
  },
  methods: {
    addPost(post: never): void {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post: IPost) {
      this.posts = this.posts.filter((p: IPost) => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    changePage(number: number) {
      this.page = number;
    },
    async getPosts() {
      try {
        this.loading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (err) {
        console.log("Произошла ошибка.");
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    sortedPosts(): IPost[] {
      return [...this.posts].sort(
        (a: { [index: string]: any }, b: { [index: string]: any }) =>
          a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    searchPosts(): IPost[] {
      return this.sortedPosts.filter((post: { title: string | string[] }) =>
        post.title.includes(this.query.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.getPosts();
    },
  },
  components: { PostForm, PostList },
});
</script>

<style>
body {
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 200px auto;
  padding: 0;
  color: #2c3e50;
}

.app-btn {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 350px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.search {
  margin: 45px 0 0 0;
  padding: 0;
}

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
