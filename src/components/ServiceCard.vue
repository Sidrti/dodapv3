<template>
    <v-col cols="12" md="4">
      <v-hover v-slot:default="{ isHovering }">
        <v-card :elevation="isHovering ? 12 : 2" class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" class="img-fluid"></v-img>
          <v-card-title class="headline">CCTV Technician</v-card-title>
          <v-card-text>Expert CCTV installation and support services.</v-card-text>
          <v-card-actions>
            <router-link to="/SecurityCamera">
              <v-btn color="primary">Book Now</v-btn>
            </router-link>

          
          </v-card-actions>
        </v-card>
      </v-hover> 
    </v-col>
    <v-col cols="12" md="4">
      <v-hover v-slot:default="{ isHovering }">
        <v-card :elevation="isHovering ? 12 : 2" class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" class="img-fluid"></v-img>
          <v-card-title class="headline">CCTV Technician</v-card-title>
          <v-card-text>Expert CCTV installation and support services.</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="4">
      <v-hover v-slot:default="{ isHovering }">
        <v-card :elevation="isHovering ? 12 : 2" class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" class="img-fluid"></v-img>
          <v-card-title class="headline">CCTV Technician</v-card-title>
          <v-card-text>Expert CCTV installation and support services.</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
  </template>
  
  <script>
  export default {
    name: 'ServiceCard',
    props: {
      title: String,
      description: String,
      image:Image
    },
    computed: {
    resolvedImage() {
      return `${this.image}`;
    }
  }
  }
  </script>
  
  <style scoped>
  .service-card {
    transition: transform 0.3s, box-shadow 0.3s;
    transform: scale(1);
  }
  .service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  </style>
  