<template>
  <v-container class="py-5">
    <v-row align="center" justify="center" class="text-center my-5">
      <v-col cols="12">
        <h3 class="headline text-dark">Quick & Easy: How DO DAP Works</h3>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" v-for="(step, index) in steps" :key="index">
        <v-card hover class="mx-auto" :color="step.color">
          <v-row no-gutters align="center" class="mt-2">
            <v-col cols="auto">
              <v-icon :class="step.icon" :size="40" class="ml-1" ></v-icon>
            </v-col>
            <v-col>
              <v-card-title class="caption">
                {{ step.title }}
              </v-card-title>
            </v-col>
          </v-row>
          <v-card-text class="text-sm">{{ step.description }}</v-card-text>
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
        { icon: 'mdi mdi-file-find-outline', title: 'Choose & Submit', color: '#F3FFFF', description:'Select your service and submit your request easily.' },
        { icon: 'mdi mdi-face-agent', title: 'We Connect', color: '#F0FFF4', description:'Our team will promptly reach out to discuss your needs.' },
        { icon: 'mdi mdi-face-agent', title: 'Schedule & Confirm', color: '#F5F0FF',description: 'Agree on a convenient time and confirm your booking.' },
        { icon: 'mdi mdi-check-circle-outline', title: 'Service Ready', color: '#F9F5E3', description:'Enjoy our professional service delivered as scheduled.' },
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
  font-weight: 300
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