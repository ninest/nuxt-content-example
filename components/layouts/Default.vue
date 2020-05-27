<template>
  <div>
    <Navbar />
    <main>
      <BackButton v-if="backLink" :backLink="backLink" />
      <h1 v-if="title">{{ title }}</h1>
      <div v-if="date" class="date">{{ date }}</div>
      <slot></slot>
    </main>
  </div>
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
    },
    date: {
      type: String,
      required: false,
    }
  },
}
</script>

<style lang="scss">
// global styles
@import "@/assets/styles/normalize.css";
@import "@/assets/styles/main.scss";

main {
  margin: 1em var(--side-padding);

  .date {
    font-size: 0.9em;
    color: #777;
  }
}
</style>