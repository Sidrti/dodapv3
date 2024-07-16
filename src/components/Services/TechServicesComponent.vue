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
                                <span>Tech Services: Professional Low Volatage Services</span>
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
                                <p class="mb-4 subheading">Expert Technicians for All Your Low-Voltage Needs</p>
                                Our efficient technicians are skilled in structured wiring and offer comprehensive solutions from
installation to troubleshooting and training.
                                <br> <br>
                                Additional hardware costs will be determined on-site.

                              
                                <v-divider class="my-4"></v-divider>
                                <!-- 
                                <h3 class="mb-3 subheading">Pricing</h3> -->
                             
                                <v-row>
                                    <v-col cols="5" >
                                        <v-card class="pa-3" color="#F0F4FF">
                                            <v-card-title class="headline text-card-color">Pricing</v-card-title>

                                            <v-list dense style="background-color: #F0F4FF;">
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color">
                                                        $95/hr</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> 10%
                                                        discount upon signing up</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> Minimum Requirment: 
                                                        2 hours</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon color="primary">mdi-check</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content class="text-card-color"> Discounted rates apply
                                                        after the minimum hours</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item></v-list-item>
                                            </v-list>

                                        </v-card>
                                    </v-col>
                                    <v-col cols="7">
                                        <v-row>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto" color="#F9F5E3">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-certificate ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0">
                                                                Fully Accredited
                                                            </v-card-title>
                                                        </v-col>
                                                    </v-row>
                                                    <v-card-text class="text-sm">Our tech services are fully accredited to ensure the highest standards of
                                                    quality and reliability.</v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto" color="#F5F0FF">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-account-tie ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0">
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
                                                <v-card hover class="mx-auto" color="#F0FFF4">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-lightbulb-on-outline ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0">
                                                                Innovative Approach
                                                            </v-card-title>
                                                        </v-col>
                                                    </v-row>
                                                    <v-card-text class="text-sm">Our techs think outside the box to efficiently and promptly install and
                                                        resolve your issues.</v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-card hover class="mx-auto" color="#F3FFFF">
                                                    <v-row no-gutters align="center">
                                                        <v-col cols="auto">
                                                            <v-icon class="mdi mdi-school ml-2" size="35"
                                                                color="black"></v-icon>
                                                        </v-col>
                                                        <v-col>
                                                            <v-card-title class="text mb-0">
                                                                Unmatched Expertise
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

    <v-container>
        <v-row>
            <!-- Left Section -->
            <v-col cols="12" md="6">
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
            </v-col>
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
    background-image: url('https://clearview-communications.com/wp-content/uploads/2022/12/Intruder-Alarms-New.jpg');
    /* Example background image */
    background-size: cover;
    background-position: center;
    height: 500px;
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
</style>