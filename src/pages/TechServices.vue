<script setup>
import TechBanner from '@/components/TechServices/TechBanner.vue';
import PricingCard from '@/components/TechServices/PricingCard.vue';
import CustomerTestimonial from '@/components/TechServices/CustomerTestimonial.vue';
import WorksComponent from '@/components/TechServices/WorksComponent.vue';
import TechFooter from '@/components/TechServices/TechFooter.vue';

// Sample Services Array
const services = [
  {
    title: 'Mounting TV',
    image: 'https://loremflickr.com/320/240/tv?random=1',
    hoverImage: 'https://loremflickr.com/320/240/dog',
    originalPrice: 1500,
    discountedPrice: 999,
    rating: 4,
    reviews: 120,
    time: '45 min'
  },
  {
    title: 'CCTV Installation',
    image: 'https://loremflickr.com/320/240/cctv?random=2',
    hoverImage: 'https://loremflickr.com/320/240/security',
    originalPrice: 3000,
    discountedPrice: 2499,
    rating: 5,
    reviews: 98,
    time: '1 hr'
  },
  {
    title: 'Plumbing Repair',
    image: 'https://loremflickr.com/320/240/plumber?random=3',
    hoverImage: 'https://loremflickr.com/320/240/repair',
    originalPrice: 1200,
    discountedPrice: 899,
    rating: 4,
    reviews: 85,
    time: '1 hr'
  },
  {
    title: 'AC Servicing',
    image: 'https://loremflickr.com/320/240/ac?random=4',
    hoverImage: 'https://loremflickr.com/320/240/cooling',
    originalPrice: 2000,
    discountedPrice: 1599,
    rating: 5,
    reviews: 76,
    time: '1 hr'
  },
  {
    title: 'Electrician Service',
    image: 'https://loremflickr.com/320/240/electrician?random=5',
    hoverImage: 'https://loremflickr.com/320/240/tools',
    originalPrice: 1000,
    discountedPrice: 799,
    rating: 4.5,
    reviews: 110,
    time: '30 min'
  },
  {
    title: 'Furniture Assembly',
    image: 'https://loremflickr.com/320/240/furniture?random=6',
    hoverImage: 'https://loremflickr.com/320/240/home',
    originalPrice: 2500,
    discountedPrice: 1999,
    rating: 5,
    reviews: 95,
    time: '2 hrs'
  },
  {
    title: 'Carpet Cleaning',
    image: 'https://loremflickr.com/320/240/carpet?random=7',
    hoverImage: 'https://loremflickr.com/320/240/cleaning',
    originalPrice: 1800,
    discountedPrice: 1399,
    rating: 3,
    reviews: 60,
    time: '1 hr'
  },
  {
    title: 'Pest Control',
    image: 'https://loremflickr.com/320/240/pest?random=8',
    hoverImage: 'https://loremflickr.com/320/240/insects',
    originalPrice: 3500,
    discountedPrice: 2999,
    rating: 2,
    reviews: 130,
    time: '2 hrs'
  },
];
</script>

<template>
  <TechBanner />
 
  <v-container class="text-center" fluid>
    <v-card class="pa-5">
      <h2 class="text-h4">🔧 Expert Services at Your Doorstep!</h2>
    <p class="text-body-1 text-grey-darken-1">
      Affordable, Reliable & Quick – Book Your Service Today! 🚀
    </p>
    <v-row class="mt-5">
      <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="4" lg="3">
        <PricingCard :service="service" />
      </v-col>
    </v-row>
      </v-card>

  </v-container>
  <v-container class="testimonial-section text-center" fluid>
    <v-card class="pa-5">
      <h2 class="text-h4  mb-3">💬 What Our Customers Say</h2>
      <p class="text-body-1 text-grey-darken-1 mb-6">Real experiences from our happy clients!</p>
      <CustomerTestimonial  class=""/>
    </v-card>
  </v-container>
  <v-container class="text-center" fluid>
      <WorksComponent />
  </v-container>
  <TechFooter></TechFooter>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>
