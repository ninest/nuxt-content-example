<template>
  <div>
    <nuxt-link :to="backLink">&lt; back</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    backLink: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  color: #777;
  text-decoration: unset;

  border: 1px solid #ccc;
  padding: 0.5em 1.2em;

  border-radius: 1000em;

  &:hover {
    color: black;
    border: 1px solid black;
  }
}
</style>