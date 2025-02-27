<script setup>
import TechBanner from '@/components/TechServices/TechBanner.vue';
import PricingCard from '@/components/TechServices/PricingCard.vue';
import CustomerTestimonial from '@/components/TechServices/CustomerTestimonial.vue';
import WorksComponent from '@/components/TechServices/WorksComponent.vue';
import TechFooter from '@/components/TechServices/TechFooter.vue';
import { ref, onMounted } from "vue";
import { useTechStore } from '@/store/modules/techService';
import { useLoaderStore } from '@/store/modules/loader';

const techStore = useTechStore();
const services = ref([]);
const banners = ref([]);
const loaderStore = useLoaderStore()
// Update the fetchServices function to use Pinia actions
const fetchHomeData = async () => {
  try {
    const response = await techStore.techServicesAPICall({}); // Use store action directly
    services.value = response.data.data; // Assuming API returns data array

    const bannerResponse = await techStore.bannerAPICall({}); // Use store action directly
    banners.value = bannerResponse.data.data; // Assuming API returns data array
    console.log("Banners:", banners.value);
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

onMounted(fetchHomeData);
</script>

<template>
  <TechBanner :services="services"/>
 
  <v-container class="text-center" fluid>
    <v-card class="pa-5">
      <h2 class="text-h4">🔧 Expert Services at Your Doorstep!</h2>
    <p class="text-body-1 text-grey-darken-1">
      Affordable, Reliable & Quick – Book Your Service Today! 🚀
    </p>
    <v-row class="mt-5">
      <template v-if="loaderStore.isLoading">
          <!-- Skeleton loaders while loading -->
          <v-col v-for="index in 4" :key="'skeleton-' + index" cols="12" sm="6" md="3" lg="3">
            <v-skeleton-loader type="card" />
          </v-col>
        </template>

        <template v-else>
          <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="3" lg="3">
            <PricingCard :service="service" />
          </v-col>
        </template>
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
    <template v-if="loaderStore.isLoading">
      <v-skeleton-loader type="image" />
    </template>
    <template v-else>
      <WorksComponent :banners="banners" />
    </template>
  </v-container>
  <TechFooter></TechFooter>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>