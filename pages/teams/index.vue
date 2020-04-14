<template>
  <div>
    List of all Teams

    <a href="/teams/1">Team 1</a>
    <a href="/teams/2">Team 2</a>

    <v-btn @click="voltar()">
      Inicio
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    voltar () {
      this.$router.push('/')
    }
  }
}
</script>
