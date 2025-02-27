<template>
  <v-container fluid class="tech-banner" fill-height>
    <v-icon class="floating-icon rotate-icon" style="top: 10%; left: 50%;">mdi-cog</v-icon>
    <v-row align="center" justify="center" class="tech-banner__content">
      <v-col md="12" cols="12" style="max-width: 60%;">
        <h1 class="headline-1 mb-5 text-center mb-10">
          Connecting you to Security and Technician Experts
        </h1>
        <v-autocomplete
          class="mx-auto mt-10"
          menu-icon=""
          :placeholder="currentPlaceholder"
          prepend-inner-icon="mdi-magnify"
          theme="light"
          variant="solo"
          auto-select-first
          item-title="name"
          item-value="id"
          :items="services"
          v-model="selectedService"
          @update:model-value="handleServiceSelect"
          return-object
        >
          <!-- Custom item template -->
          <template v-slot:item="{ item, props }">
            <v-list-item v-bind="props">
              <template v-slot:prepend>
                <v-avatar size="40" rounded>
                  <v-img :src="item.raw.card_image" cover></v-img>
                </v-avatar>
              </template>
             
            </v-list-item>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TechBanner',
  props: {
    services: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedService: null,
      searchQuery: null,
      placeholders: [
        "Search for CCTV Technician...",
        "Search for Alarm Technician...",
        "Search for Security Expert...",
        "Search for Smart Home Installer...",
      ],
      currentPlaceholder: "Search for CCTV Technician...",
      placeholderIndex: 0
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      setInterval(() => {
        this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholders.length;
        this.currentPlaceholder = this.placeholders[this.placeholderIndex];
      }, 2500); // Change placeholder every 2.5 seconds
    },
    handleServiceSelect(service) {
      if (service) {
        console.log("Selected service:", service);
        // You can navigate to service details page here
        this.$router.push(`/service/${service.id}`);
      }
    }
  }
};
</script>

<style scoped>
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

.tech-banner {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  color: rgb(20, 27, 34);
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(to bottom, #1E3A8A, #ffffff);
}

/* Typography with Montserrat */
.headline-1 {
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color: #36454F ;
}

@media (max-width: 600px) {
  .headline-1 {
    font-size: 2rem;
  }
}

/* Floating Illustration */
.technician-illustration {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 400px;
  z-index: 1;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 960px) {
  .technician-illustration {
    width: 300px;
    opacity: 0.5;
  }
}

@media (max-width: 600px) {
  .technician-illustration {
    width: 200px;
    opacity: 0.4;
  }
}

.floating-icon {
  position: absolute;
  font-size: 50px; /* Adjust size */
  opacity: 0.2; /* Make it subtle */
  animation: floatAnimation 6s infinite alternate ease-in-out;
}

@keyframes floatAnimation {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-15px); }
}

.rotate-icon {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>