<template>
<v-card class="pa-4 bg-white">
    <v-card-title class="headline-bold mb-5">Book Consulation </v-card-title>
    <v-form>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="First name" variant="outlined" hint="Alex"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Last name" variant="outlined" hint="Smith"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field label="Email" variant="outlined" hint="alexsmith@example.com"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field label="Phone number" variant="outlined"
                    hint="(647) 555-1234"></v-text-field>
            </v-col>
        </v-row>
        <v-btn color="primary" class="mt-4">Book Now</v-btn>
    </v-form>
    <!-- <v-card-text class="subheading mt-5">
        Rest assured, quality service comes as standard:
        <v-row>
            <v-col cols="6">
                <v-list  class="bg-white text">
                  <v-list-item class="d-flex align-center">
                    <v-icon color="black" size="20" class="mdi mdi-check"></v-icon>
                    <span class="ml-2">Extended Warranties</span>
                  </v-list-item>
                  <v-list-item class="d-flex align-center">
                    <v-icon color="black" size="20" class="mdi mdi-check"></v-icon>
                    <span class="ml-2">Highly accredited</span>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6">
                <v-list class="bg-white text">
                  <v-list-item class="d-flex align-center">
                    <v-icon color="black" size="20" class="mdi mdi-check"></v-icon>
                    <span class="ml-2">Free estimates</span>
                  </v-list-item>
                  <v-list-item class="d-flex align-center">
                    <v-icon color="black" size="20" class="mdi mdi-check"></v-icon>
                    <span class="ml-2">100% satisfaction</span>
                  </v-list-item>
                </v-list>
        </v-col>
        </v-row>


    </v-card-text> -->
</v-card>
</template>
