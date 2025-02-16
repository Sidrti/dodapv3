<template>
    <v-card class="mt-3 pa-4" variant="flat" color="#FFFFFF">
      <v-row align="center" justify="center" class="text-center">
      <v-col cols="12">
        <v-card-subtitle> <h3 class="headline text-dark"><b>Quick & Easy: How DO DAP Works</b></h3></v-card-subtitle>
       
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" v-for="(step, index) in steps" :key="index">
        <v-card hover class="mx-auto"  :style="{ background: step.color, height: '150px' }">
          <v-row no-gutters align="center" class="mt-2">
            <v-col cols="auto">
              <v-icon :class="step.icon" :size="40" class="ml-1" color="white"></v-icon>
            </v-col>
            <v-col>
              <v-card-title class="caption text-white">
                {{ step.title }}
              </v-card-title>
            </v-col>
          </v-row>
          <v-card-text class="text-sm text-white">{{ step.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </v-card>
    
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
        {
          icon: 'mdi mdi-file-find-outline', 
          title: 'Choose & Submit', 
          color: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient from Option 1
          description: 'Select the service you need and submit your request.'
        },
        {
          icon: 'mdi mdi-face-agent', 
          title: 'We Connect', 
          color: 'linear-gradient(to right, #00c6ff, #0072ff)', // Gradient from Option 1
          description: 'Our team will contact you to discuss your requirements.'
        },
        {
          icon: 'mdi mdi-face-agent', 
          title: 'Schedule', 
          color: 'linear-gradient(to right, #ff9a8b, #ff6a88)', // Gradient from Option 1
          description: 'Set up a time that works best for you.'
        },
        {
          icon: 'mdi mdi-check-circle-outline', 
          title: 'Service Ready', 
          color: 'linear-gradient(to right, #2a5298, #1d8cf8)', // Gradient from Option 1
          description: 'Professional service delivered as scheduled.'
        },
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
  color: black;
}

.card-title {
  font-size: 18px;
  font-weight: 300;
}

.fixed-height-card {
  height: 250px;
  /* Set a fixed height for the cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
