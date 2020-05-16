<template>
  <div>
    Score Component

    {{ teste }}
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store)
  },
  computed: {
    teste () {
      return this.$store.getters.getTeste
    }
  }
}
</script>