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
                                <span>Alarm System Installations </span>
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
                                    700 INSTALLATION
                                </v-chip>

                            </v-card-subtitle>
                            <v-card-text class="text">
                                <p class="mb-4 subheading">Reliable Alarm System Installations for Peace of Mind </p>

                                Protect your home or business with expertly installed alarm systems. Whether you need
                                new
                                installations or upgrades to your existing system, our certified technicians ensure your
                                security
                                setup is optimized and connected to a trusted monitoring provider.
                                <div class="mb-4 mt-2">
                                    <h3 class="font-weight-regular">Contact us today for a personalized quote! </h3>
                                    <h3 class="font-weight-regular">We are here to help secure your home, business, or
                                        any other property.</h3>
                                </div>

                                <v-divider class="my-4"></v-divider>

                                <h3 class="mb-3 subheading">Monitoring Plans</h3>
                                <v-row>
                                    <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                                        <v-card class="pa-3 card-equal-height card-bg-1">
                                            <v-card-title class="headline text-card-color">Basic
                                                Monitoring</v-card-title>

                                            <v-list dense style="background-color: transparent;">
                                                <v-list-item>
                                                    <template v-slot:prepend>
                                                        <v-icon color="white">mdi-check</v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-white">
                                                        Starting at $25.95/month + Tax
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-divider color="white" class="mt-2 mb-3"></v-divider>

                                                <v-list-item>
                                                    <template v-slot:prepend>
                                                        <v-icon color="white">mdi-check</v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-white">
                                                        Requires Standard Line Connection
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>

                                                </v-list-item>
                                                <v-list-item>
                                                    
                                                </v-list-item>
                                                <v-list-item>
                                                    
                                                </v-list-item>
                                            </v-list>


                                        </v-card>
                                    </v-col>
                                    <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                                        <v-card class="pa-3 card-equal-height card-bg-2">
                                            <v-card-title class="headline text-card-color">Cellular
                                                Monitoring</v-card-title>
                                            <v-list dense style="background-color: transparent">
                                                <v-list-item>
                                                    <template v-slot:prepend>
                                                        <v-icon color="white">mdi-check</v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-white">
                                                        $39.95/month + Tax
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-divider color="white" class="mt-2 mb-3"></v-divider>

                                                <v-list-item>
                                                    <template v-slot:prepend>
                                                        <v-icon color="white">mdi-check</v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-white">
                                                        Includes 2 doors & 1 motion sensor
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-divider color="white" class="mt-2 mb-3"></v-divider>

                                                <v-list-item>
                                                    <template v-slot:prepend>
                                                        <v-icon color="white">mdi-check</v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-white">
                                                        Wireless connection and remote control via mobile app
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-divider color="white" class="mt-2 mb-3"></v-divider>

                                                <v-list-item>
                                                    <template v-slot:prepend>
                                                        <v-icon color="white">mdi-check</v-icon>
                                                    </template>
                                                    <v-list-item-title class="text-white">
                                                        Integrates with smart home devices
                                                    </v-list-item-title>
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
                    <div class="headline text-dark">Comprehensive Security Alarm & Installation Services</div>
                    <div class="rating">
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                        <v-icon icon="mdi-star" class="text-white" color="green"></v-icon>
                    </div>
                    <p class="text-dark caption">
                        At DO DAP, we understand that every premises is unique and requires a specific security alarm solution to ensure maximum protection. That’s why we offer a complimentary, no-obligation site survey to determine the vulnerable areas of your property.
                    </p>
                    <br>
                    <p class="text-dark caption">
                        Our expert team will assess your security needs and recommend the best alarm systems tailored to your specific requirements. Whether you need intrusion alarms, fire alarms, or integrated security systems, we ensure that every component is installed to provide the highest level of security. Trust us to safeguard your property with state-of-the-art security alarms that offer peace of mind.
                    </p>
                </div>
            </v-col> -->
            <!-- Right Section -->
            <v-col cols="12" md="12">
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
    background-image: url('@/assets/alarm-banner.jpg');
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
.card-bg-1 {
   
   background: #FF6F61 ;
   color: #ffffff ;
}
.card-bg-2 {
   background: #6A5ACD;
   color: #ffffff ;
}
.card-subheadline {
   padding-left: 16px;
   margin-top: -10px;
   margin-bottom: 10px;
}
</style>