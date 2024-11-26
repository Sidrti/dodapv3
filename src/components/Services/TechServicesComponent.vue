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
                                <span>Certified Technicians: Expert Low-Voltage Services </span>
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
                                <p class="mb-4 subheading">Certified Experts for All Your Low-Voltage Needs</p>
                                Our certified technicians specialize in structured wiring and full low-voltage solutions, from 
installation to troubleshooting and training. If any additional hardware is required, we will 
always consult with you for approval before proceeding—no surprises.
                                <br> <br>
                                Additional hardware costs will be determined on-site.

                              
                                <v-divider class="my-4"></v-divider>
                                <!-- 
                                <h3 class="mb-3 subheading">Pricing</h3> -->
                             
                                <v-row>
                                    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                                        <v-card class="pa-3" color="#F0F4FF">
                                            <v-card-title class="headline text-card-color">Pricing</v-card-title>

                                            <v-list dense style="background-color: #F0F4FF;" lines="two">
  <v-list-item>
    <template v-slot:prepend>
      <v-icon color="blue">mdi-check</v-icon>
    </template>
    <v-list-item-title class="text-black"  style="white-space: normal; word-wrap: break-word;">
      $95/hr
    </v-list-item-title>
  </v-list-item>
  <v-divider color="black" ></v-divider>

  <v-list-item>
    <template v-slot:prepend>
      <v-icon color="blue">mdi-check</v-icon>
    </template>
    <v-list-item-title class="text-black"  style="white-space: normal; word-wrap: break-word;">
      10% discount upon signing up
    </v-list-item-title>
  </v-list-item>
  <v-divider color="black"></v-divider>

  <v-list-item>
    <template v-slot:prepend>
      <v-icon color="blue">mdi-check</v-icon>
    </template>
    <v-list-item-title class="text-black"  style="white-space: normal; word-wrap: break-word;">
      Minimum Requirement: 2 hours
    </v-list-item-title>
  </v-list-item>
  <v-divider color="black" ></v-divider>

  <v-list-item>
    <template v-slot:prepend>
      <v-icon color="blue">mdi-check</v-icon>
    </template>
    <v-list-item-title class="text-black"  style="white-space: normal; word-wrap: break-word;">
      Discounted rates apply after the minimum hours
    </v-list-item-title>
  </v-list-item>
</v-list>


                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" sm="7" md="7" lg="7" xl="7">
                                        <v-row>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto card-equal-height" color="#F9F5E3">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-certificate ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0 white-space-preserve">
                                                                Fully Accredited
                                                            </v-card-title>
                                                        </v-col>
                                                    </v-row>
                                                    <v-card-text class="text-sm">Our tech services are fully accredited to ensure the highest standards of
                                                    quality and reliability.</v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto card-equal-height" color="#F5F0FF">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-account-tie ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0 white-space-preserve">
                                                                Experienced
                                                            </v-card-title>
                                                        </v-col>
                                                    </v-row>
                                                    <v-card-text class="text-sm">Our team is highly experienced, bringing years of expertise to deliver exceptional
                                                        tech services.</v-card-text>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto card-equal-height" color="#F0FFF4">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-lightbulb-on-outline ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0 white-space-preserve">
                                                                Innovative Approach
                                                            </v-card-title>
                                                        </v-col>
                                                    </v-row>
                                                    <v-card-text class="text-sm">Our techs think outside the box to efficiently and promptly install and
                                                        resolve your issues.</v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto card-equal-height" color="#F3FFFF">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-school ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0">
                                                                Unmatched Support
                                                            </v-card-title>
                                                        </v-col>
                                                    </v-row>
                                                    <v-card-text class="text-sm">Our friendly, dedicated techs ensure smooth and stress-free services for
                                                        your home or business.</v-card-text>
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
            <!-- Left Section -->
            <!-- <v-col cols="12" md="6">
                <div class="left-section">
                    <div class="headline text-dark">Tech Services: Professional Low-Voltage Solutions</div>
                    <div class="rating">
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                    </div>
                    <p class="text-dark caption">
                        At DO DAP, we understand that every business has unique technological needs and requires
                        specific solutions to ensure maximum efficiency and productivity. That’s why we offer a
                        complimentary, no-obligation site survey to evaluate your current technology setup and identify
                        areas for improvement.
                    </p>
                    <br>
 
                </div>
            </v-col> -->
            <!-- Right Section -->
            <v-col cols="12" md="6">
                <BookingFormComponent></BookingFormComponent>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SecurityAlarmComponent",
};
</script>

<style>
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
</style>
