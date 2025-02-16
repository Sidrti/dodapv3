<template>
  <v-card color="#FFFFFF" class="relative">
    <v-row no-gutters>
      <v-col cols="12" md="4" class="d-flex guarantee-text white--text gradient-bg">
        <div class="text-content pa-5 justify-cente align-center">
        <v-row class="align-center">
            <v-avatar size="110" class="mb-5 bg-primary pulse-avatar ml-5">
              <v-icon size="80" color="white">mdi-medal</v-icon>
            </v-avatar>
            <!-- Icons Next to Avatar -->
<div class="d-flex align-center ml-5">
  <v-icon size="36" color="cyan lighten-1" class="mr-2">mdi-shield-check</v-icon>
  <span class="text-subtitle-2 font-weight-medium cyan--text">Secure</span>
</div>
<div class="d-flex align-center ml-5">
  <v-icon size="36" color="lime accent-3" class="mr-2">mdi-star</v-icon>
  <span class="text-subtitle-2 font-weight-medium lime--text">Reliable</span>
</div>

          </v-row>
         
          <h1 class="headline mt-10">Expert Services, Guaranteed Quality</h1>
          <p class="text mt-5">
            We are committed to delivering exceptional quality and reliability in every project. With 
            competitive pricing and a focus on excellence, every job is completed to the highest standard.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="8" class="relative">
        <v-img src="@/assets/happy-family.jpg" class="fill-height" cover></v-img>
        <!-- Badge -->
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'GuaranteeComponent',
};
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
  max-height: 100%;
}
.badge-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
}
.gradient-bg {
  background: linear-gradient(135deg, #E3F2FD 0%, #EDE7F6 100%);
}
.pulse-avatar {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(var(--v-theme-primary), 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(var(--v-theme-primary), 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(var(--v-theme-primary), 0);
  }
}
</style>
