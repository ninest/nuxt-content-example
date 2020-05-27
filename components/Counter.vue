<template>
  <div>
    <button>-</button>
    <div>{{ count }}</div>
    <button>+</button>
  </div>
</template>

<script>
export default {
  date() {
    return {
      count: 0
    }
  },
  methods: {
    change(val) {
      count += val;
    }
  },
}
</script>
