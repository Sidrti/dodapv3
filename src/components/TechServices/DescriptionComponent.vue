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
                         
                            
                            <v-card-subtitle>
                                <h3 class="headline text-black"><b>CCTV Repairing Techncians</b></h3>
                             
                                <v-chip class="ma-2 text-white" color="orange" variant="flat" label>
                                    <v-icon icon="mdi-star" start class="text-white"></v-icon>
                                    5
                                </v-chip>
                                <v-chip class="ma-2 text-white" color="teal" variant="flat" label>
                                    <v-icon icon="mdi-account-check" start class="text-white"></v-icon>
                                    200 INSTALLATION
                                </v-chip>

                            </v-card-subtitle>
                            <v-card-text class="text">
                                <p class="mb-4 subheading">Boost Your Security with Professional, High-Quality Camera
                                    Installations </p>

                                Secure your home or business with high-quality security cameras installed by experts.
                                Starting
                                at $1650, our 4-camera packages include everything you need for clear, reliable
                                monitoring—
                                day and night. We’ll handle the setup so you can focus on peace of mind.
                                <br>
                                <br>
                                Secure your home or business with high-quality security cameras installed by experts.
                                Starting
                                at $1650, our 4-camera packages include everything you need for clear, reliable
                                monitoring—
                                day and night. We’ll handle the setup so you can focus on peace of mind.

                            </v-card-text>
                            <v-card-actions>

                                <v-spacer></v-spacer>
                                <v-btn
                                   @click="$router.push('/TechServiceCart')"
                                    class="bg-primary"
                                    size="large" rounded="xl" append-icon="mdi-arrow-right" elevated>
                                    Get Started Now
                                   </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <WorksComponent></WorksComponent>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "DescriptionComponent",
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
    color: #fff !important
}

.card-equal-height {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.card-bg-1 {

    background: #FF6F61;
    color: #ffffff;
}

.card-bg-2 {
    background: #6A5ACD;
    color: #ffffff;
}

.card-subheadline {
    padding-left: 16px;
    margin-top: -10px;
    margin-bottom: 10px;
}
</style>