<template>
  <v-container>
    <v-card class="pa-4 bg-white">
      <v-card-title class="headline-bold mb-5">Book Consultation</v-card-title>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.firstName" label="First name" variant="outlined" hint="Alex" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.lastName" label="Last name" variant="outlined" hint="Smith" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="formData.email" label="Email" variant="outlined" hint="alex@example.com" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="formData.phoneNumber" label="Phone number" variant="outlined" hint="(647) 555-1234" v-mask="'(###) ###-####'" required></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary" class="mt-4" :loading="formData.loading">Book Now</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookConsultation',
  data() {
    return {
      formData: {
        loading:false,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        route:this.$route.path
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        this.formData.loading = true;
        const response = await axios.post('https://api.dodap.ca/api/v2/send-mail', this.formData);
        this.formData.loading = false;
        this.formData.firstName='';
        this.formData.lastName='';
        this.formData.email = '';
        this.formData.phoneNumber = '';
        console.log('Form submitted successfully:', response.data);
        // Handle success (e.g., show a success message, clear the form, etc.)
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show an error message)
      }
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>