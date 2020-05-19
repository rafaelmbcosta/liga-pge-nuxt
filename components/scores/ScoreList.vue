<template>
  <div>
    Score Component

    {{ teste }}
  </div>
</template>

<script>
export default {
  computed: {
    teste () {
      return this.$store.state.months
    }
  }
}
</script>