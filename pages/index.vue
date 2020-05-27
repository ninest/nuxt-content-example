<template>
  <Default :title="doc.title">
    <nuxt-content :document="doc" />
  </Default>
</template>


<script>
export default {
  async asyncData({$content, params}) {
    console.log("_slug");
    const doc = await $content('index').fetch();
    return { doc }
  }
}
</script>