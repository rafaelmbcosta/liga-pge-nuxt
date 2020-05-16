<template>
  <v-layout>
    <v-flex class="text-center">
      Meses de Disputa

      <ScoreList />
    </v-flex>
  </v-layout>
</template>

<script>
import ScoreList from '@/components/scores/ScoreList'

export default {
  components: { ScoreList }
}
</script>