<template>
  <Default :title="doc.title" backLink="/posts">
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  async asyncData({$content, params}) {
    const doc = await $content(`posts/${params.slug}`).fetch();
    return { doc }
  }
}
</script>