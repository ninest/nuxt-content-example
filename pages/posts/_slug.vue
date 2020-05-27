<template>
  <Default 
    :title="doc.title" 
    backLink="/posts"
    :date="doc.date"
  >
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  async asyncData({$content, params}) {
    const doc = await $content(`posts/${params.slug}`).fetch();
    console.log(doc.date);
    return { doc }
  }
}
</script>