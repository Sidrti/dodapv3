<template>

<v-card color="#f0f0f0" class="mb-5">
    <v-container fluid>
        <v-row align="center" justify="center" class="text-center my-5">
      <v-col cols="12">
        <h1 class="headline">Services</h1>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="4">
        <v-card hover class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">CCTV Cameras</v-card-title>
          <v-card-text class="text">Secure your property with top-notch HD CCTV installations.</v-card-text>
          <v-card-actions>
            <router-link to="/CCTVCamera">
              <v-btn color="primary">Book Now</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" md="4">
        <v-card hover class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/alarm.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Security Alarms</v-card-title>
          <v-card-text class="text" >Stay protected with our alarm systems and monitoring.</v-card-text>
          <v-card-actions>
            <router-link to="/SecurityAlarm">
              <v-btn color="primary">Book Now</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" md="4">
        <v-card hover class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Tech Services</v-card-title>
          <v-card-text class="text">Get expert tech solutions and seamless installations.</v-card-text>
          <v-card-actions>
            <router-link to="/TechServices">
              <v-btn color="primary">Book Now</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
    </v-col>
      <!-- <ServiceCard title="CCTV Technician" description="Expert CCTV installation and support services."
        image="@/assets/cctv-security-camera.jpg" />
      <ServiceCard title="Security & Alarms" description="Expert CCTV installation and support services."
        image="@/assets/alarm.jpg" />
      <ServiceCard title="Technicians" description="Expert CCTV installation and support services."
        image="@/assets/cctv-security-camera.jpg" /> -->
    </v-row>
    </v-container>

  </v-card>
</template>
<script>
export default {
  name: 'ServicesComponent'
}
</script>

<style scoped>
/* Add any custom styles for the navbar here */
</style>