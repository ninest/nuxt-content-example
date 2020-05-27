<template>
  <!-- 
    Note: This is not a typical Nuxt template
    It is just a custom vue component with a slot (https://vuejs.org/v2/guide/components-slots.html)
    I prefer components with slots over Nuxt's layouts becaise custom components are more versatile"
      - they support passing of props
      - they can be chained (you can make nested layouts)
    Check out his answer: https://stackoverflow.com/a/62035321/8677167
  -->
  <div>
    <Navbar />
    <main>
      <!-- only posts have the back button -->
      <BackButton v-if="backLink" :backLink="backLink" />

      <!-- page does not have to have a title -->
      <h1 v-if="title">{{ title }}</h1>

      <!-- not all pages have dates, only posts do -->
      <div v-if="date" class="date">
        Last updated:
        <b>{{ dateDisplay }}</b>
      </div>

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
  computed: {
    dateDisplay() {
      // convert the long date to an easy to read date
      const date = new Date(this.date);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
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