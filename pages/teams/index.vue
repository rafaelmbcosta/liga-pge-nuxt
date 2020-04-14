<template>
  <div>
    List of all Teams

    <a href="/teams/1">Team 1</a>
    <nuxt-link to="/teams/2">Team 2</nuxt-link>

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
