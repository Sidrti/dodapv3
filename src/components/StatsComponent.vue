<template>
    <v-container>
        <v-card class="py-5" color="white" variant="flat">
      <v-row class="text-center mb-4">
        <!-- <v-col cols="12">
          <h2 class="display-2 font-weight-bold">Our Achievements</h2>
        </v-col> -->
      </v-row>
      <v-row class="text-center mb-4">
        <v-col cols="12" md="4">
          <h3 class="display-4 font-weight-bold">1000+</h3>
          <p class="subheading">Jobs Completed</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="display-4 font-weight-bold">99%</h3>
          <p class="subheading">Customer Satisfaction</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="display-4 font-weight-bold">5★</h3>
          <p class="subheading">Customer Support</p>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <p class="lead">
            Managing your technical service needs has never been easier. Our certified professionals, already in your area, are ready to handle your requirements promptly and efficiently. Enjoy transparent pricing and exceptional service quality, tailored to your convenience.
          </p>
        </v-col>
      </v-row>
    </v-card>
    </v-container>

  </template>
  
  <script>
  export default {
    name: 'StatsSection'
  }
  </script>
  
  <style scoped>
  .py-5 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .display-2 {
    font-size: 2.5rem;
  }
  .display-4 {
    font-size: 2rem;
  }
  .subheading {
    font-size: 1.25rem;
    font-weight: 400;
  }
  .lead {
    font-size: 2rem;
    font-weight: 300;
    margin-top: 1rem;
  }
  </style>
  