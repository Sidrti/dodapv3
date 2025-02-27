<template>
    <div class="gradient-background">
        <v-container>
            <v-form ref="form" v-model="isFormValid">
                <v-stepper :items="['Contact Information', 'Location', 'Schedule','Payment']" class="pa-5 stepper-card"
                    v-model="step">
                    <template v-slot:item.1>
                        <h3 class="text-h5 mb-3 mt-3">{{description}}</h3><br>
                        <v-card class="mb-4 pa-4 elevation-2">
                            <h2 class="text-h6 mb-3 mt-3">What are your contact details ?</h2><br>
                            <v-row>
                                <!-- Full Name Field -->
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.firstName" label="First Name" variant="outlined"
                                        hint="Alex" required prepend-inner-icon="mdi-account"
                                        :rules="[rules.required, rules.name]" class="input-field"></v-text-field>
                                </v-col>


                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.lastName" label="Last Name" variant="outlined"
                                        hint="Smith" required prepend-inner-icon="mdi-account"
                                        :rules="[rules.required, rules.name]" class="input-field"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <!-- Phone Number Field -->
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.phoneNumber" label="Phone number" variant="outlined"
                                        hint="(647) 555-1234" v-mask="'(###) ###-####'" required
                                        prepend-inner-icon="mdi-phone"
                                        :rules="[rules.required, rules.phoneNumber]"></v-text-field>
                                </v-col>


                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.email" label="Email" variant="outlined"
                                        hint="alex@example.com" required prepend-inner-icon="mdi-email"
                                        :rules="[rules.required, rules.email]"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>

                    <template v-slot:item.2>
                        <h3 class="text-h5 mb-3 mt-3">{{description}}</h3><br>
                        <v-card class="mb-4 pa-4 elevation-2">
                            <div class=" mb-3 mt-3">
                                <h2 class="text-h6">What is your location ?</h2><br>
                            </div>

                            <v-row>
                                <!-- Full Name Field -->
                                <v-col cols="12" md="12">
                                    <v-text-field ref="googleAutoComplete" v-model="formData.address"
                                        label="Street Address" variant="outlined" prepend-inner-icon="mdi-map-marker"
                                        required @focus="initializeGoogleAutocomplete"></v-text-field>
                                </v-col>
                                <v-col cols=12 md="12">
                                    <v-text-field v-model="formData.timeSlot" label="Unit or apt #" variant="outlined"
                                        required prepend-inner-icon="mdi-home"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>



                    </template>

                    <template v-slot:item.3>
                        <h3 class="text-h5 mb-3 mt-3">{{description.data}}</h3><br>
                        <v-row align="stretch">
    <!-- Left Column -->
    <v-col cols="12" md="7">
        <v-card class="pa-5 h-100">
            <v-row>
                <!-- Install Date & Time -->
                <v-col cols="12">
                    <h5 class="text-h6 mb-3 mt-5">What is your feasible Date?</h5>
                    <v-text-field v-model="formData.scheduleDate" label="Install Date"
                        variant="outlined" type="date" required prepend-inner-icon="mdi-calendar-clock">
                    </v-text-field>
                </v-col>

                <v-col cols="12">
                    <h5 class="text-h6 mb-3 mt-5">What is your feasible Time Slot?</h5>
                    <v-chip-group v-model="selectedSlot">
                        <v-chip text="10 AM - 1 PM" variant="outlined" filter></v-chip>
                        <v-chip text="1 PM - 4 PM" variant="outlined" filter></v-chip>
                        <v-chip text="4 PM - 7 PM" variant="outlined" filter></v-chip>
                        <v-chip text="7 PM - 11 PM" variant="outlined" filter></v-chip>
                    </v-chip-group>
                </v-col>
            </v-row>
        </v-card>
    </v-col>

    <!-- Right Column (Pricing Details) -->
    <v-col cols="12" md="5">
        <v-card class="h-100">
            <v-card-title class="text-h5 font-weight-bold">
                Pricing Details
            </v-card-title>

            <v-divider class="my-2"></v-divider>

            <v-card-text>
                <div class="d-flex justify-space-between">
                    <span>Service Cost</span>
                    <span class="font-weight-bold">$12/hour</span>
                </div>

                <div class="d-flex justify-space-between mt-2">
                    <span>Wallet Discount</span>
                    <span class="font-weight-bold">$10</span>
                </div>

                <div class="d-flex justify-space-between mt-2">
                    <span>Fixed Charge</span>
                    <span class="font-weight-bold">$100</span>
                </div>

                <v-divider class="my-3"></v-divider>

                <div class="d-flex justify-space-between text-h6 font-weight-bold">
                    <span>Total</span>
                    <span>$112</span>
                </div>
            </v-card-text>
        </v-card>
    </v-col>
</v-row>

                            <v-row>
                            </v-row>
                    </template>
                    <template v-slot:actions>
                        <v-row class="justify-space-between mt-4">
                            <!-- Previous Button -->
                            <v-btn v-if="step > 1" color="primary" variant="tonal" @click="step--">
                                <v-icon start>mdi-arrow-left</v-icon> Previous
                            </v-btn>

                            <v-spacer></v-spacer>

                            <!-- Next or Submit Button -->
                            <v-btn color="primary" variant="tonal" @click="nextStep" :loading=formData.loading
                                :disabled="formData.loading">
                                <template v-if="step === 3">
                                    <v-icon>mdi-credit-card</v-icon> Pay with Card <v-icon end>mdi-arrow-right</v-icon>
                                </template>
                                <template v-else>
                                    Next <v-icon end>mdi-arrow-right</v-icon>
                                </template>
                            </v-btn>
                        </v-row>
                    </template>
                </v-stepper>
            </v-form>

            <v-dialog v-model="dialog" max-width="500px" variant="flat">
                <v-card class="bg-white">
                    <v-card-title class="headline">Submission Successful</v-card-title>
                    <v-card-text>
                        <v-container class="text-center">
                            <v-icon color="green" size="64">mdi-check-circle</v-icon>
                        </v-container>
                        <p class="text-center">Your consultation request has been submitted successfully.</p>
                        <p class="text-center">Our team will contact you shortly.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" text @click="dialog = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
export default {
    components: { VueGoogleAutocomplete },
    name: "BookConsultation",
    setup() {
    const route = useRoute();
    const description = ref(null);

    onMounted(() => {
      if (route.query.data) {
        description.value = JSON.parse(route.query.data);
      }
    });

    return { description };
  },
    data() {
        return {
            formData: {
                loading: false,
                firstName: "",
                email: "",
                phoneNumber: "",
                address: "",
                installDateTime: "12-12-2024 12:12 PM",
                attachFiles: null,
                technicianName: "",
                technicianEmail: "",
                additionalNotes: "",
                route: this.$route.path,
            },

            autocomplete: null,
            dialog: false,
            step: 1,
            recognition: null,
            canProceed: true,
            isFormValid: false,
            rules: {
                required: value => !!value || "This field is required.",
                email: value =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter a valid email address.",
                name: value =>
                    /^[A-Za-z\s]+$/.test(value) || "Name can only contain letters.",
                phoneNumber: value =>
                    /^\(\d{3}\)\s\d{3}-\d{4}$/.test(value) ||
                    "Enter a valid phone number (e.g., (647) 555-1234).",
            },
        };
    },
    methods: {
        nextStep() {
            if (this.step === 3) {
                this.submitForm();
            } else {
                this.step++;
            }
        },

        async submitForm() {
            const isValid = this.$refs.form.validate();

            if (!isValid) {
                console.error("Form validation failed.");
                return;
            }
            try {
                this.formData.loading = true;
                const response = await axios.post("https://api.dodap.ca/api/v2/send-email-cctv-booking", this.formData);
                this.formData.loading = false;
                this.formData = {};
                this.dialog = true;
                console.log("Form submitted successfully:", response.data);
                setTimeout(() => window.location.reload(), 5000)


            } catch (error) {
                console.error("Error submitting form:", error);
                this.formData.loading = false;
            }
        },
        initializeGoogleAutocomplete() {
            const self = this;

            if (!this.googleAutocomplete) {

                const input = this.$refs.googleAutoComplete.$el.querySelector('input');
                this.googleAutocomplete = new google.maps.places.Autocomplete(input, {
                    componentRestrictions: { country: ['ca'] }
                });

                this.googleAutocomplete.addListener('place_changed', () => {
                    const place = this.googleAutocomplete.getPlace();
                    self.formData.address = place.formatted_address;
                });
            }
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.gradient-background {
    /* Calming blue-purple gradient */
    background: linear-gradient(135deg, #6BC6E5, #8B5CF6, #4F46E5, #3B82F6);
    min-height: 100vh;
    padding: 2rem 0;
}

.stepper-card {
    background: rgba(255, 255, 255, 0.95) !important;
    border-radius: 16px !important;
    padding: 30px !important;
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-title {
    color: #1E293B;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem !important;
}

:deep(.input-field) {
    border-radius: 8px;
    transition: all 0.3s ease;
}

:deep(.input-field:hover) {
    transform: translateY(-2px);
}

:deep(.v-field__outline) {
    border-color: rgba(99, 102, 241, 0.6) !important;
}

:deep(.v-field--focused .v-field__outline__start),
:deep(.v-field--focused .v-field__outline__end) {
    border-color: #6366F1 !important;
    /* Indigo primary */
}

:deep(.v-stepper-header) {
    box-shadow: none !important;
    border-radius: 8px !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
    padding: 8px !important;
    margin-bottom: 2rem !important;
}

:deep(.v-stepper-item) {
    color: #64748B !important;
    /* Slate gray for inactive */
}

:deep(.v-stepper-item--selected) {
    color: #3B82F6 !important;
    /* Blue for active */
    font-weight: bold !important;
}

:deep(.v-stepper-item .v-stepper-item__circle) {
    background-color: #E2E8F0 !important;
    /* Light gray for inactive */
    transition: all 0.3s ease;
}

:deep(.v-stepper-item--selected .v-stepper-item__circle) {
    background-color: #3B82F6 !important;
    /* Blue for active */
    transform: scale(1.1);
}

/* Styling for Previous button (when active) */
:deep(.v-stepper-actions .v-btn + .v-btn) {
    background: linear-gradient(135deg, #34D399, #10B981) !important;
    color: white !important;
    transition: all 0.3s ease;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    padding: 0 24px !important;
    height: 42px;
}

:deep(.v-stepper-actions .v-btn--disabled + .v-btn:hover) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(216, 217, 237, 0.3);
    opacity: 0.9;
}

/* Styling for Next button */
:deep(.v-stepper-actions .v-btn--variant-tonal) {
    background: linear-gradient(135deg, #8B5CF6, #6366F1) !important;
    color: white !important;
    transition: all 0.3s ease;
    border-radius: 8px;
    text-transform: none;
    font-weight: 600;
    padding: 0 24px !important;
    height: 42px;
}

:deep(.v-stepper-actions .v-btn--variant-tonal:hover) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    opacity: 0.9;
}

/* Disabled state for Next button */
:deep(.v-stepper-actions .v-btn--variant-tonal:disabled) {
    background: #E2E8F0 !important;
    color: #94A3B8 !important;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
}

/* Disabled state for Previous button */
:deep(.v-stepper-actions .v-btn--disabled) {
    background: #E2E8F0 !important;
    color: #94A3B8 !important;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
}


:deep(.v-field--focused) {
    transform: translateY(-2px);
    transition: all 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(99, 102, 241, 0.1);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.8);
}

/* Additional styles for form validation */
:deep(.v-field--error .v-field__outline__start),
:deep(.v-field--error .v-field__outline__end) {
    border-color: #DC2626 !important;
    /* Red for errors */
}

:deep(.v-messages) {
    color: #64748B !important;
    /* Slate gray for helper text */
}

:deep(.v-field__input) {
    color: #1E293B !important;
    /* Dark slate for input text */
}

:deep(.v-label) {
    color: #64748B !important;
    /* Slate gray for labels */
}

.textarea-with-mic .mic-icon-btn {
    height: 100%;
    /* Make the button span the height of the text area */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    /* Remove padding */
}

.textarea-with-mic .v-input__control {
    position: relative;
}
</style>