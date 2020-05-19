<template>
  <v-layout>
    <v-flex class="text-center">
      Meses de Disputa

      {{ months }}
      <ScoreList />
    </v-flex>
  </v-layout>
</template>

<script>
import ScoreList from '@/components/scores/ScoreList'

export default {
  //replate to middleware
  created () {
    this.$store.dispatch('getDisputeMonths')
  },
  computed: {
    months () {
      this.$store.state.months
    }
  },
  components: { ScoreList },
}
</script>