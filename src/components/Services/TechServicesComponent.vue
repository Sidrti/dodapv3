<template>
    <v-container fluid class="cctv-banner" fill-height>
        <!-- First Container -->
    </v-container>
    <v-container class="overlapping-container">

        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12">
                        <v-card class="pa-4 bg-white">
                            <v-card-title class="headline d-flex justify-space-between align-center">
                                <span>Smart Home and Low-Voltage Installation Professionals </span>
                                <div>
                                    <a href="mailto:info@dodap.ca">
                                        <v-btn color="teal" icon="mdi-email" outlined class="mr-3"></v-btn>
                                    </a>
                                    <a href="tel:+16476073829">
                                        <v-btn color="green" icon="mdi-phone" outlined></v-btn>
                                    </a>
                                </div>

                            </v-card-title>
                            <v-card-subtitle>

                                <v-chip class="ma-2 text-white" color="orange" variant="flat" label>
                                    <v-icon icon="mdi-star" start class="text-white"></v-icon>
                                    5
                                </v-chip>
                                <v-chip class="ma-2 text-white" color="#007bff" variant="flat" label>
                                    <v-icon icon="mdi-account-check" start class="text-white"></v-icon>
                                    900 ORDERS DONE
                                </v-chip>

                            </v-card-subtitle>
                            <v-card-text class="text">
                                <p class="mb-4 subheading">Smart, Reliable, and Professional Solutions for Your Home or
                                    Business</p>
                                Our skilled technicians specialize in low-voltage installations, including smart home
                                alarms,
                                Starlink setups, structured wiring, cable fishing, and personalized training on NVRs and
                                DVRs.
                                Our technicians are dedicated to making your setup smooth, professional, and
                                stress-free—no
                                surprises, just results. <br><br>
                                <i>Note: Our technicians specialize in low-voltage systems and are trained in
                                    non-electrical
                                    installations to provide safe and efficient service.
                                    If additional work or hardware is needed, we will always discuss it with you
                                    beforehand—
                                    ensuring transparency and no unexpected costs.</i>
                                <br> <br>
                                Additional hardware costs will be determined on-site.


                                <v-divider class="my-4"></v-divider>

                                <v-card-title class="headline">Why Choose Us ?</v-card-title>

                                <v-row class="fill-height">
    <!-- Pricing Card -->
    <v-col cols="12" sm="5" class="d-flex">
      <v-card class="flex-grow-1 pa-3" color="#EEF2FF">
        <v-card-title class="headline text-primary">Pricing</v-card-title>
        <v-list dense bg-color="#EEF2FF">
          <v-list-item>
            <v-list-item-title class="text-black">
              $ 170 for the first hour
            </v-list-item-title>
            <v-list-item-subtitle class="text-indigo-darken-1">
              Covers travel and initial service
            </v-list-item-subtitle>
          </v-list-item>
          <v-divider color="indigo-lighten-1" class="mt-2 mb-3"></v-divider>

          <v-list-item>
            <v-list-item-title class="text-black">
              $ 95/hour
            </v-list-item-title>
            <v-list-item-subtitle class="text-indigo-darken-1 wrap-text">
              Competitive rates for premium services
            </v-list-item-subtitle>
          </v-list-item>
          <v-divider color="indigo-lighten-1" class="mt-2 mb-3"></v-divider>

          <v-list-item>
            <v-list-item-title class="text-black">
              Exclusive Online Discount
            </v-list-item-title>
            <v-list-item-subtitle class="text-indigo-darken-1 wrap-text">
              <b class="text-indigo-darken-3">Save 10%    !</b><br><br>
              Pay just <b class="text-indigo-darken-3">$153 for the first hour</b> (normally $170) and <b class="text-indigo-darken-3">$85/hour</b> after that
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <!-- Feature Cards -->
    <v-col cols="12" sm="7" class="d-flex">
      <v-row class="flex-grow-1">
        <!-- First Row -->
        <v-col cols="6" class="d-flex">
          <v-card hover class="flex-grow-1" color="#F0F9FF">
            <v-row no-gutters align="center" class="fill-height">
              <v-col cols="auto">
                <v-icon 
                  class="mdi mdi-certificate ml-2 rotate-icon" 
                  :size="iconSize" 
                  color="#0369A1"
                ></v-icon>
              </v-col>
              <v-col>
                <v-card-title class="text mb-0 text-no-wrap">Certified Experts</v-card-title>
                <v-card-text class="text-sm text-sky-darken-1">
                  Trusted, qualified technicians delivering high-quality low-voltage services.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="6" class="d-flex">
          <v-card hover class="flex-grow-1" color="#FDF4FF">
            <v-row no-gutters align="center" class="fill-height">
              <v-col cols="auto">
                <v-icon 
                  class="mdi mdi-account-tie ml-2 bounce-icon" 
                  :size="iconSize" 
                  color="#A21CAF"
                ></v-icon>
              </v-col>
              <v-col>
                <v-card-title class="text mb-0 text-no-wrap">Proven Experience</v-card-title>
                <v-card-text class="text-sm text-fuchsia-darken-1">
                  Years of expertise for reliable and professional results.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Second Row -->
        <v-col cols="6" class="d-flex">
          <v-card hover class="flex-grow-1" color="#ECFDF5">
            <v-row no-gutters align="center" class="fill-height">
              <v-col cols="auto">
                <v-icon 
                  class="mdi mdi-lightbulb-on-outline ml-2 pulse-icon" 
                  :size="iconSize" 
                  color="#059669"
                ></v-icon>
              </v-col>
              <v-col>
                <v-card-title class="text mb-0 text-no-wrap">Smart Solutions</v-card-title>
                <v-card-text class="text-sm text-emerald-darken-1">
                  Efficient, modern methods tailored to your needs.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="6" class="d-flex">
          <v-card hover class="flex-grow-1" color="#FFF7ED">
            <v-row no-gutters align="center" class="fill-height">
              <v-col cols="auto">
                <v-icon 
                  class="mdi mdi-school ml-2 float-icon" 
                  :size="iconSize" 
                  color="#EA580C"
                ></v-icon>
              </v-col>
              <v-col>
                <v-card-title class="text mb-0 text-no-wrap">Dedicated Support</v-card-title>
                <v-card-text class="text-sm text-orange-darken-1">
                  Customer-first service for a stress-free experience.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

                                <v-divider class="my-4"></v-divider>
                                <StepsComponent></StepsComponent>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>

    <v-container class="overlapping-container">
        <v-row>
            <v-col cols="12" md="12">
                <BookingFormComponent></BookingFormComponent>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "TechServiceComponent",
    computed: {
        iconSize() {
            const breakpoint = this.$vuetify?.breakpoint || {};
            if (breakpoint.xsOnly) return '20';
            if (breakpoint.smAndDown) return '27';
            return '35';
        },
    },
};
</script>

<style>

.wrap-text {
    -webkit-line-clamp: unset !important;
}

.my-5 {
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.cctv-banner {
    position: relative;
    background-image: url('@/assets/tech-banner.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
}

@media (max-width: 768px) {
    .cctv-banner {
        height: 300px;
    }
}

@media (max-width: 480px) {
    .cctv-banner {
        height: 200px;
    }
}


.overlapping-container {
    position: relative;
    top: -5%;
    /* Move the container up by 25% of its own height */
    z-index: 1;
}

.left-section {
    padding: 2rem;
}

.rating {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.rating span {
    margin-right: 0.5rem;
}

.rating v-icon {
    margin: 0 0.2rem;
}

.card-equal-height {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.white-space-preserve {
    white-space: preserve-breaks !important;
}
/* Icon Animations */
.rotate-icon {
  animation: rotate 3s infinite linear;
}

.bounce-icon {
  animation: bounce 2s infinite ease-in-out;
}

.pulse-icon {
  animation: pulse 2s infinite;
}

.float-icon {
  animation: float 3s infinite ease-in-out;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}


</style>
