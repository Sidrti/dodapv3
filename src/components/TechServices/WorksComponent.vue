<template>
    <v-container fluid class="mounting-section">
      <v-row no-gutters>
        <v-col cols="12" class="position-relative">
          <v-img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730813300631-fc044e.jpeg"
            cover
            class="mounting-image"
            alt="Technician mounting TV">
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MountingSection'
  }
  </script>
  
  <style scoped>
  .mounting-section {
    position: relative;
  }
  
  .mounting-image {
    width: 100%;
  }
  
  .info-card-overlay {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 2;
  }
  
  .info-card {
    background: rgba(255, 255, 255, 0.98) !important;
  }
  
  @media (max-width: 600px) {
    .info-card-overlay {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      max-width: 100%;
      margin: 20px;
    }
  
    /* .mounting-section {
      min-height: auto;
    } */
  }
  </style>