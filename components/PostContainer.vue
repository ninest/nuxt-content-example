<template>
  <nuxt-link class="post-container" :to="`/posts/${slug}`">
    <h3>{{ title }}</h3>
    <div>{{ desc }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    desc: {
      type: String,
      default: "Description"
    },
    slug: {
      type: String,
      default: "/"
    }
  },
}
</script>

<style lang="scss" scoped>
.post-container {
  display: block;
  color: unset;
  text-decoration: unset;

  padding: 1.3em;
  border: 1px solid #eee;
  border-radius: 0.4em;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
}
</style>