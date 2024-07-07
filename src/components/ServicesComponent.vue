<template>

<v-card color="primary" class="mb-5">
    <v-container fluid>
        <v-row align="center" justify="center" class="text-center my-5">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold">Our Services</h1>
        <h2 class="subheading font-weight-light">We offer a variety of top-notch technical services to meet your needs
        </h2>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="4">
      <v-hover v-slot:default="{ isHovering }">
        <v-card :elevation="isHovering ? 12 : 2" class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">CCTV Cameras</v-card-title>
          <v-card-text>Secure your property with top-notch HD CCTV installations.</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="4">
      <v-hover v-slot:default="{ isHovering }">
        <v-card :elevation="isHovering ? 12 : 2" class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/alarm.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Security Alarms</v-card-title>
          <v-card-text>Stay protected with our advanced alarm systems and monitoring.</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="4">
      <v-hover v-slot:default="{ isHovering }">
        <v-card :elevation="isHovering ? 12 : 2" class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cctv.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Tech Services</v-card-title>
          <v-card-text>Get expert tech solutions and seamless installations at your tips.</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
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