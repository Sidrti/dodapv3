<template>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title>DODAP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/services">Services</v-btn>
      <v-btn text to="/contact">Contact Us</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Add any custom styles for the navbar here */
  </style>
  