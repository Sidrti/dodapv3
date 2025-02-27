<script setup>
import DescriptionComponent from '@/components/TechServices/DescriptionComponent.vue';
import { ref, onMounted, watch, defineProps } from "vue";
import { useTechStore } from '@/store/modules/techService';
import { useRoute } from 'vue-router';

// Define props for the component
const props = defineProps({
  id: {
    type: [String, Number],
    default: null
  }
});

const route = useRoute();
const techStore = useTechStore();
const serviceDescription = ref({});

const fetchServiceDescription = async (serviceId) => {
  try {
    // Use the provided ID or get it from the route
    const id = serviceId || props.id || route.params.id || route.query.id;
    
    if (!id) {
      console.error("No service ID found in props or URL");
      return;
    }
    
    // Pass the ID to the API call
    const response = await techStore.techServicesDescriptionAPICall(id);
    
    // Check if we have data and assign it
    if (response?.data?.data) {
      serviceDescription.value = response.data.data;
    } else {
      console.error("Invalid response format:", response);
    }
  } catch (error) {
    console.error("Error fetching service description:", error);
  } 
};

// Fetch on component mount
onMounted(() => {
  fetchServiceDescription();
});

// Watch for changes in the ID prop
watch(() => props.id, (newId) => {
  if (newId) {
    fetchServiceDescription(newId);
  }
});
</script>

<template>
  <DescriptionComponent :description="serviceDescription"></DescriptionComponent>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>