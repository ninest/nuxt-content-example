<template>
  <Default title="Posts">
    <!-- loop through each post -->
    <PostContainer 
      v-for="p in posts" v-bind:key="p.slug"
      :title="p.title"
      :desc="p.description"
      :slug="p.slug"
    ></PostContainer>
  </Default>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  head() {
    return {
      title: `Blog`,
      meta: [
        { hid: 'description', name: 'description', content: `My beautiful blog` }
      ]
    }
  },
  async fetch() {
    this.posts = await this.$content('posts').fetch()
  }
}
</script>

<style lang="scss" scoped>
.post-container + .post-container {
  margin-top: 0.5em;
}
</style>