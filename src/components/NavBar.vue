<template>
  <v-app-bar app color="dark" dark>
    <router-link to="/" class="v-toolbar-title-link ml-3">
      <v-toolbar-title>DO DAP</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.v-toolbar-title-link {
  color: inherit; /* Keep the text color the same */
  text-decoration: none; /* Remove underline */
}
</style>
