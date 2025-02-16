<template>

<v-card class="mb-2" variant="flat">
    <v-container fluid>
        <v-row align="center" justify="center" class="text-center my-2">
          <p class="text-h4 heading"><b>Services</b></p>
    </v-row>
    <v-row>
        <v-col cols="12" md="4">
        <v-card hover class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/cam-service.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Camera Installations</v-card-title>
          <v-card-text class="text">Protect your property with professional, high-quality security camera setups.</v-card-text>
          <v-card-actions>
            <router-link to="/SecurityCamera">
              <v-btn color="primary">Book Now</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" md="4">
        <v-card hover class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/alarm-service.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Alarm System Installations</v-card-title>
          <v-card-text class="text" >Ensure peace of mind with expertly installed and monitored alarm systems.</v-card-text>
          <v-card-actions>
            <router-link to="/SecurityAlarm">
              <v-btn color="primary">Book Now</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" md="4">
        <v-card hover class="service-card" variant="elevated" color="white">
          <v-img src="@/assets/tech-service.jpg" height="200px" cover></v-img>
          <v-card-title class="headline">Certified Technicians</v-card-title>
          <v-card-text class="text">Our skilled technicians deliver reliable, efficient installations tailored to your needs. </v-card-text>
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
.underline--magical {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
}
.heading {
  position: relative;
  display: inline-block;
}

.heading::after {
  content: '';
  position: absolute;
  bottom: 0; /* Position the underline at the bottom of the text */
  left: 0;
  width: 0;
  height: 3px; /* Thickness of the underline */
  background-color: #007bff; /* Customize underline color */
  animation: underline-animation 5s ease-in-out infinite; /* Looping animation */
}

/* Define the underline animation */
@keyframes underline-animation {
  0% {
    width: 0;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-position: 0 88%;
  }
  50% {
    width: 100%; /* Fully expand underline */
  }
  100% {
    width: 0; /* Shrink back to 0 */
  }
}
</style>