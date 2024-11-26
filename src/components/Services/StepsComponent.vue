<template>
    <v-container class="how-it-works-container pa-5" rounded>
      <v-row>
        <v-col cols="12" class="text-left">
          <v-card-title class="subheading">How it works</v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex">
          <v-avatar class="mr-3" color="black" size="40">
            <span class="white--text headline">1</span>
          </v-avatar>
          <div>
            <p class="font-weight-medium">Submit Your Job Request</p>
            <p class="mb-0 text-sm">Let us know what service you need.</p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex">
          <v-avatar class="mr-3" color="black" size="40">
            <span class="white--text headline">2</span>
          </v-avatar>
          <div>
            <p class="font-weight-medium">Schedule Your Appointment</p>
            <p class="mb-0 text-sm">We’ll contact you to arrange a convenient date and time. </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex">
          <v-avatar class="mr-3" color="black" size="40">
            <span class="white--text headline">3</span>
          </v-avatar>
          <div>
            <p class="font-weight-medium">Match with a Technician</p>
            <p class="mb-0 text-sm">A certified expert will be assigned to complete your job.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HowItWorks'
  }
  </script>
  
  <style scoped>
  .how-it-works-container {
    background-color: #f5f5f5; /* Light gray background */
    border-radius: 8px;
  }
  
  .headline {
    font-size: 24px;
    font-weight: bold;
  }
  
  .white--text {
    color: #ffffff;
  }
  
  .mb-0 {
    margin-bottom: 0;
  }
  </style>
  
