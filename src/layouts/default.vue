<template>
  <v-app>
    <v-main class="bg-light">
      <NavBar></NavBar>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style scoped>
.bg-light {
  background-color: #fafafa;
}
</style>
<script setup>
  //
</script>
