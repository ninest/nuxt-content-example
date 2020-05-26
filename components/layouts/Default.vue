<template>
  <Root>
    <Navbar />
    <main>
      <BackButton v-if="backLink" :backLink="backLink" />
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
    backLink: {
      type: String,
      required: false,
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  margin: 1em var(--side-padding);
}
</style>