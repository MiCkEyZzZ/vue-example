<template>
  <div class="posts">
    <h1>Страница с постами</h1>
    <div class="posts-search">
      <app-input
        v-if="posts.length"
        v-model.trim="query"
        v-focus
        type="text"
        placeholder="Поиск постов..."
      />
    </div>
    <div class="posts-btn">
      <app-button style="width: 120px" @click="showModal"
        >Добавить пост</app-button
      >
      <app-select
        v-if="posts.length"
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <app-modal v-model:show="modalVisible">
      <post-form @add="addPost" />
    </app-modal>
    <post-list :posts="searchPosts" @remove="removePost" v-if="!loading" />
    <app-spinner v-else />
    <app-pagination
      v-if="posts.length"
      @page="changePage"
      v-model:total="totalPages"
      v-model:page="page"
    />
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
        { value: "title", name: "по названию" },
        { value: "body", name: "по описанию" },
      ],
    };
  },
  methods: {
    addPost(post: IPost): void {
      if (post.title === "" || post.body === "") {
        return;
      }
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

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  min-height: 600px;
  text-align: center;
  margin: 60px auto 0 auto;
  padding: 30px 15px 30px 15px;
  color: #2c3e50;

  &-btn {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 350px;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  &-search {
    margin: 45px 0 0 0;
    padding: 0;
  }
}
</style>
