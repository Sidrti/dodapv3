<template>
  <v-container fluid class="home-banner" fill-height>
    <div class="overlay"></div>
    <v-row align="center" justify="center" class="home-banner__content">
      <v-col cols="12" class="text-center">
        <h1 class="display-1 font-weight-bold mb-3">DO DAP</h1>
        <h1 class="headline-1 font-weight-bold mb-5 typewriter">{{ typewriterText }}</h1>
      </v-col>
      <v-col cols="12">
        <v-autocomplete
          :items="searchItems"
          class="mx-auto"
          density="comfortable"
          menu-icon=""
          placeholder="Search Services at DO DAP"
          prepend-inner-icon="mdi-magnify"
          style="max-width: 60%;"
          theme="light"
          variant="solo"
          auto-select-first
          item-props
          rounded
        ></v-autocomplete>
      </v-col>
      <v-col>
        <div class="d-flex justify-center ga-2">
          <v-chip color="primary" variant="flat">CCTV CAMERAS</v-chip>
          <v-chip color="primary" variant="flat">SECURITY ALARMS</v-chip>
          <v-chip color="primary" variant="flat">TECH SERVICES</v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      fullText: 'Digital On-Demand Access Portal',
      typewriterText: '',
      typingSpeed: 150, // Adjust typing speed as needed
      searchItems: [
        {
          prependIcon: 'mdi-clock-outline',
          title: 'CCTV Camera',
        },
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Security Alarms',
        },
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Tech Services',
        },
      ],
      shortcuts: [
        {
          icon: 'mdi-github',
          title: 'CCTV CAMERAS',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          icon: 'mdi-github',
          title: 'SECURITY ALARMS',
          href: 'https://github.com/vuetifyjs/vuetify/tree/dev',
        },
        {
          icon: 'mdi-github',
          title: 'TECH SERVICES',
          href: 'https://github.com/vuetifyjs/vuetify/tree/v2-stable',
        },
      ],
    };
  },
  mounted() {
    this.typeWriterEffect();
  },
  methods: {
    typeWriterEffect() {
      let i = 0;
      const type = () => {
        if (i < this.fullText.length) {
          this.typewriterText += this.fullText.charAt(i);
          i++;
          setTimeout(type, this.typingSpeed);
        }
      };
      type();
    },
  },
};
</script>

<style scoped>
.home-banner {
  position: relative;
  background-image: url('https://d1gkww9wcphr2z.cloudfront.net/backgrounds/kitchen.jpg'); /* Ensure the image file name matches */
  background-size: cover;
  background-position: center;
  color: white;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Change the tint color and opacity as needed */
}

.home-banner__content {
  position: relative;
  z-index: 1;
  padding: 20px;
}
.display-1 {
    font-size: 4rem;
  }

@media (max-width: 600px) {
  .headline-1 {
    font-size: 1.5rem;
  }
}

@media (min-width: 601px) and (max-width: 960px) {

  .headline-1 {
    font-size: 2rem;
  }
}

@media (min-width: 961px) {
  .headline-1 {
    font-size: 3rem;
  }
}

.typewriter {
  display: inline-block;
  overflow: hidden; /* Ensures the text doesn't break onto the next line */
  white-space: nowrap; /* Keeps the text on a single line */
  border-right: 0.15em solid orange; /* Creates the typewriter cursor effect */
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
