<template>
  <div>
    <nuxt-link :to="backLink">back</nuxt-link>
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