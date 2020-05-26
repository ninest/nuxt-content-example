<template>
  <nuxt-link class="post-container" :to="slug">
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

  padding: 1em;
  border: 1px solid #eee;

  h3 {
    margin-bottom: 0.2em;
  }
}
</style>