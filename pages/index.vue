<template>
  <Default :title="doc.title">
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  head() {
    return {
      titleTemplate: `%s`,
      title: 'Nuxt Content Example',
    }
  },
  async asyncData({$content, params}) {
    const doc = await $content('index').fetch();
    return { doc }
  }
}
</script>