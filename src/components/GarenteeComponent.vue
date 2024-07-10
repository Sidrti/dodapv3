<template>
    <v-card color="#FFFFFF">
      <v-row no-gutters >
        <v-col cols="12" md="4" class="d-flex align-center justify-center guarantee-text white--text">
          <div class="text-content pa-4">
            <v-img src="@/assets/guarantee.png" class="mb-4" contain width="120"></v-img>
            <h1 class="headline">Expert Services, Guaranteed Quality</h1>
            <p class="text mt-4">
              Experience top-tier services with our skilled professionals. We pride ourselves on delivering
exceptional quality and reliability. With competitive pricing and a commitment to excellence, we
ensure your needs are met with the highest standards. </p>
            <!-- <v-btn text class="white--text mt-5">Learn more</v-btn> -->
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <v-img src="@/assets/happy-family.jpg" class="fill-height" cover></v-img>
        </v-col>
      </v-row>
  
    </v-card>

  </template>
  
  <script>
  export default {
    name: 'GuaranteeComponent'
  }
  </script>
  
  <style scoped>
  .guarantee-section {
    height: 100vh;
  }
  .guarantee-text {
    padding: 2rem;
  }
  .text-content {
    max-width: 500px;
  }
  .fill-height {
    height: 100%;
  }
  </style>
  