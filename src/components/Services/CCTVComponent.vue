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
                            <v-card-title class="headline text-break d-flex justify-space-between align-center">
                                <span>CCTV Camera: Security Camera Packages</span>
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
                                    200 INSTALLATION
                                </v-chip>

                            </v-card-subtitle>
                            <v-card-text class="text">
                                <p class="mb-4 subheading">Enhance Your Security with Expertly Installed HD Cameras</p>
                                Boost your security with our high-definition CCTV camera packages. Our expert
                                technicians
                                ensure seamless installation using high-quality wiring.
                                <h3 class="mb-4 mt-2 font-weight-regular">Contact us today for a personalized quote!</h3>
                                <v-divider class="my-4"></v-divider>

                                <h3 class="mb-3 subheading">Packages</h3>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                                        <v-card class="pa-3 card-equal-height" color="#F0F4FF">
                                            <v-card-title class="headline text-card-color">4-Camera NVR
                                                Package</v-card-title>

                                            <v-list dense style="background-color: #F0F4FF;">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> 4MP
                                                        Resolution</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> Price Starting at
                                                        $1650</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> 10% Discount
                                                        Available</v-list-item-content>
                                                </v-list-item>
                                            </v-list>

                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                                        <v-card class="pa-3 card-equal-height" color="#F0FFF4">
                                            <v-card-title class="headline text-card-color">Customized
                                                Packages</v-card-title>
                                            <v-list style="background-color: #F0FFF4" dense>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> Tailored to your
                                                        needs</v-list-item-content>
                                                </v-list-item>
                                             
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> Additional Discounts
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                  
                                                </v-list-item>
                                            </v-list>

                                        </v-card>
                                    </v-col>
                                </v-row>
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
                    <div class="headline text-dark">Comprehensive CCTV Installation Services</div>
                    <div class="rating">
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                    </div>
                    <p class="text-dark caption">
                        At DO DAP, we understand that every premises is unique and requires a specific CCTV installation
                        solution to ensure maximum security. That’s why we offer a complimentary, no-obligation site
                        survey to determine the vulnerable areas of your property.
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
    name: "CCTVComponent",
};
</script>

<style>
.my-5 {
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.cctv-banner {
    position: relative;
    background-image: url('@/assets/cam-banner.jpg');
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
.margin-top-negative {
    top: -5%;
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

.text-dark {
    color: black;
}

.text-card-color {
    color: #333333
}
.card-equal-height {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>