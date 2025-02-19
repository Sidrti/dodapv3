<template>
    <div class="gradient-background">
        <v-container>
            <v-form ref="form" v-model="isFormValid">
                <v-stepper :items="['Information', 'Cart Items', 'Appointment Information']"
                class="pa-5 stepper-card" v-model="step">
                <template v-slot:item.1>
                    <h3 class="text-h5 mb-3 mt-3">Your Information</h3><br>
                    <v-card class="mb-4 pa-4 elevation-2">
                        <h5 class="text-h6 mb-3 mt-3">👋 Welcome to DO DAP !</h5><br>
                            <v-row>
                                <!-- Full Name Field -->
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.firstName" label="Full Name" variant="outlined"
                                        hint="Alex Smith" required prepend-inner-icon="mdi-account"  :rules="[rules.required, rules.name]"
                                        class="input-field"></v-text-field>
                                </v-col>

                                <!-- Email Field -->
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.email" label="Email" variant="outlined"
                                        hint="alex@example.com" required prepend-inner-icon="mdi-email"  :rules="[rules.required, rules.email]"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <!-- Phone Number Field -->
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.phoneNumber" label="Phone number" variant="outlined"
                                        hint="(647) 555-1234" v-mask="'(###) ###-####'" required
                                        prepend-inner-icon="mdi-phone"  :rules="[rules.required, rules.phoneNumber]"></v-text-field>
                                </v-col>

                                <!-- Address Field -->
                                <v-col cols="12" md="6">
                                    <v-text-field ref="googleAutoComplete" v-model="formData.address" label="Address"
                                        variant="outlined" prepend-inner-icon="mdi-map-marker" required
                                        @focus="initializeGoogleAutocomplete"></v-text-field>
                                    <!-- <v-text-field
                                        v-model="formData.address"
                                        label="Address"
                                        variant="outlined"
                                        hint="Search Address"
                                        required
                                        prepend-inner-icon="mdi-map-marker"
                                        @focus="initializeAutocomplete"
                                    ></v-text-field> -->
                                    <!-- <v-text-field v-model="formData.address" label="Address" variant="outlined"
                                        hint="16th Avenue" required prepend-inner-icon="mdi-map-marker"></v-text-field> -->
                                </v-col>
                            </v-row>
                    </v-card>
                </template>

                <template v-slot:item.2>
                    <h3 class="text-h5 mb-3 mt-3">Camera Information</h3><br>
                    <CameraList @update-cameras="handleCamerasUpdate"></CameraList>
                </template>

                <template v-slot:item.3>
                    <h3 class="text-h5 mb-3 mt-3">Appointment Information</h3><br>
                    <v-card class="mb-4 pa-4 elevation-2">
                        <h5 class="text-h6 mb-3 mt-5">⏱️ Schedule and Technician Contact Details</h5> <br>
                        <v-row>
                            <!-- Install Date & Time -->
                            <v-col cols="12" md="6">
                                <v-text-field v-model="formData.scheduleDate" label="Install Date" variant="outlined"
                                    type="date" required prepend-icon="" append-inner-icon=""
                                    prepend-inner-icon="mdi-calendar-clock" append-icon=""></v-text-field>
                            </v-col>

                            <!-- Attach Files -->
                            <v-col cols="12" md="6">
                                <v-file-input v-model="formData.attachFiles" label="Attach Files" variant="outlined"
                                    prepend-icon="" hint="Upload your files" prepend-inner-icon="mdi-file-upload"
                                    required multiple></v-file-input>
                            </v-col>
                        </v-row>
                        <v-row>

                            <v-col cols="12" md="6">
                                <v-text-field v-model="formData.timeSlot" label="Time Slot" variant="outlined" required
                                    prepend-inner-icon="mdi-clock-time-four-outline"></v-text-field>
                            </v-col>

                            <!-- Technician Phone -->
                            <v-col cols="12" md="6">
                                <v-text-field v-model="formData.technicianEmail" label="Technician Email"
                                    variant="outlined" type="email" hint="example@domain.com"
                                    prepend-inner-icon="mdi-email" :rules="[rules.required, rules.email]"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <!-- Additional Notes -->
                            <v-col cols="12" md="12">
                                <v-textarea v-model="formData.additionalNotes" label="Additional Notes"
                                    variant="outlined" hint="Provide any additional details here"
                                    prepend-inner-icon="mdi-note-text" class="textarea-with-mic" outlined>
                                    <!-- Append Microphone Icon -->
                                    <template v-slot:append-inner>
                                        <v-btn icon @click="startSpeechToText" color="primary" class="pa-0">
                                            <v-icon>mdi-microphone</v-icon>
                                        </v-btn>
                                    </template>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
                <template v-slot:actions>
                    <v-row class="justify-space-between mt-4">
                        <!-- Previous Button -->
                        <v-btn v-if="step > 1" color="primary" variant="tonal" @click="step--">
                            <v-icon start>mdi-arrow-left</v-icon> Previous
                        </v-btn>

                        <v-spacer></v-spacer>

                        <!-- Next or Submit Button -->
                        <v-btn  color="primary" variant="tonal" @click="nextStep" :loading=formData.loading :disabled="formData.loading">
                            <template v-if="step === 3">
                                Submit <v-icon end>mdi-check</v-icon>
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

export default {
    components: { VueGoogleAutocomplete },
    name: "BookConsultation",
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
                setTimeout(()=>window.location.reload(),5000)
             
               
            } catch (error) {
                console.error("Error submitting form:", error);
                this.formData.loading = false;
            }
        },
        handleCamerasUpdate(updatedCameras) {
            this.formData.cameras = updatedCameras
        },
        startSpeechToText() {
            // Check for browser compatibility
            if (!('webkitSpeechRecognition' in window)) {
                alert('Speech Recognition is not supported in this browser.');
                return;
            }

            // Initialize speech recognition
            if (!this.recognition) {
                const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
                this.recognition = new SpeechRecognition();
                this.recognition.lang = 'en-US'; // Set language
                this.recognition.continuous = false; // Stop after one sentence
                this.recognition.interimResults = false; // Only final results
            }

            // Handle recognition results
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript; // Get recognized text
                this.formData.additionalNotes += transcript + " "; // Append to textarea
            };

            // Handle errors or end
            this.recognition.onerror = (event) => {
                console.error('Speech Recognition Error:', event.error);
            };

            this.recognition.onend = () => {
                console.log('Speech Recognition Ended');
            };

            // Start recognition
            this.recognition.start();
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