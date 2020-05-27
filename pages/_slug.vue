<template>
  <Default :title="doc.title">
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  head() {
    return {
      title: `${this.doc.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.doc.description}` }
      ]
    }
  },
  async asyncData({$content, params}) {
    const doc = await $content(params.slug).fetch();
    return { doc }
  }
}
</script>