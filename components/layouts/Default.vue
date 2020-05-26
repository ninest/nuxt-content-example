<template>
  <Root>
    <Navbar />
    <main>
      <h1 v-if="title">{{ title }}</h1>
      <slot></slot>
    </main>
  </Root>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  margin: 1em 10%;
}
</style>