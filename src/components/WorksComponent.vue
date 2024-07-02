<template>
    <v-container class="py-5">
        <v-row align="center" justify="center" class="text-center my-5">
      <v-col cols="12">
        <h3 class="display-2">How DO DAP Works</h3>
      </v-col>
    </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="2" v-for="(step, index) in steps" :key="index" class="text-center">
          <v-card flat class="pa-4 fixed-height-card" color="white">
            <v-icon :class="step.icon"  :size="80" class="mb-3" :color="step.color">></v-icon>

            <p class="card-title">{{ step.description }}</p>
            <!-- <p>{{ step.description }}</p> -->
            <!-- <p>{{ step.description }}</p> -->
          </v-card>
    
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mdiAccount } from '@mdi/js'
  
  export default {
    name: 'HowItWorks',
    methods: {
        
    },
    data() {
      return {
        steps: [
          { icon: 'mdi mdi-file-find-outline', description: 'Choose Your Service' ,color:'blue'},
          { icon: 'mdi mdi-form-select', description: 'Fill Service Booking Form',color:'green' },
          { icon: 'mdi mdi-face-agent', description: 'Our Agent will Contact You',color:'pink' },
          { icon: 'mdi mdi-calendar-clock', description: 'Schedule Service Booking',color:'yellow' },
          { icon: 'mdi mdi-check-circle-outline', description: 'Booking complete',color:'green'},
        ]
      };
    }
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
  .v-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: none;
    transition: box-shadow 0.3s ease;
  }
  .v-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .display-2 {
    color:black;
  }
  .card-title {
    font-size: 18px;
    font-weight: 300
  }
  .fixed-height-card {
  height: 250px; /* Set a fixed height for the cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  </style>
  