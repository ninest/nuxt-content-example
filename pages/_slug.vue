<template>
  <Default :title="doc.title">
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  async asyncData({$content, params}) {
    const doc = await $content(params.slug).fetch();
    return { doc }
  }
}
</script>