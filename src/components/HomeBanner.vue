<template>
  <v-container fluid class="home-banner" fill-height>
    <div class="overlay"></div>
    <v-row align="center" justify="center" class="home-banner__content">
      <v-col md="7" cols="12" class="text-left">
        <!-- <h1 class="display-1 font-weight-bold mb-3 text-shadow">DO DAP</h1>
        <h1 class="headline-2 font-weight-bold mb-3 text-shadow">Residential & Commercial Security and Technician Services</h1>
        <h3 class="headline-3 font-weight-bold mb-5 typewriter text-shadow">{{ typewriterText }}</h3> -->
        <h1 class="headline-1 font-weight-bold mb-5 text-shadow">Connecting you to Security and Technician Experts</h1>
        <h1 class="headline-2 font-weight-bold text-shadow mt-10 trusted-text typewriter"> {{ typewriterText }} </h1>

        <!-- <h3 class="headline-3 font-weight-bold mb-5 typewriter text-shadow">{{ typewriterText }}</h3> -->
      </v-col>
      <v-col md="5" cols="0"></v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      searchQuery:null,
      fullText: 'Trusted Services on Demand',
      typewriterText: '',
      typingSpeed: 150, // Adjust typing speed as needed
      searchItems: [
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Camera Installations',
          route: '/SecurityCamera',
        },
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Alarm System Installations',
          route: '/SecurityAlarm',
        },
        {
          prependIcon: 'mdi-clock-outline',
          title: 'Certified Technicians',
          route: '/TechServices',
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
    onSearchEvt(item) {
      if (item && item.route) {
        this.$router.push(item.route);
      }
    }
  },
  watch: {
    searchQuery(val) {
      const item = this.searchItems.find(item => item.title === val);
      this.onSearchEvt(item)
    }
  }
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
}
/* .mt10 {
  margin-top: 200px;
} */
.home-banner {
  position: relative;
  background-image: url('@/assets/home-banner.jpg'); /* Ensure the image file name matches */
  background-size: cover;
  background-position: right;
  color: white;
  height: 500px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* padding-top: 60px; */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Change the tint color and opacity as needed */
}

:deep(.home-banner__content) {
  position: relative;
  z-index: 1;
  /* padding: 20px 40px;
  margin-top: -50px; */
}
.display-1 {
    font-size: 4rem;
    margin-bottom: 10px; 
  }

@media (max-width: 600px) {
  .headline-1 {
    font-size: 2rem;
  }
}

@media (min-width: 601px) and (max-width: 960px) {

  .headline-1 {
    font-size: 2.4rem;
  }
}

@media (min-width: 961px) {
  .headline-1 {
    font-size: 3rem;
  }
}

@media (max-width: 600px) {
  .headline-2 {
    font-size: 1.8rem;
  }
}

@media (min-width: 601px) and (max-width: 960px) {

  .headline-2 {
    font-size: 2rem;
  }
}

@media (min-width: 961px) {
  .headline-2 {
    font-size: 2.6rem;
  }
}

@media (max-width: 600px) {
  .headline-3 {
    font-size: 1rem;
  }
}

@media (min-width: 601px) and (max-width: 960px) {

  .headline-3 {
    font-size: 1.2rem;
  }
}

@media (min-width: 961px) {
  .headline-3 {
    font-size: 2rem;
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
.trusted-text {
  color: #f5a623; /* Change to a contrasting color (e.g., soft yellow or orange) */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7); /* Stronger shadow for better readability */
  background: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background */
  padding: 10px 20px; /* Add padding to make the text stand out */
  border-radius: 8px; /* Rounded corners for aesthetics */
  display: inline-block; /* Ensures padding doesn't break layout */
  font-size: 2.2rem; /* Adjust font size if needed */
}

@media (max-width: 600px) {
  .trusted-text {
    font-size: 1.6rem; /* Responsive font size */
    margin-top: 80px !important;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .trusted-text {
    font-size: 1.8rem; /* Responsive font size */
    margin-top: 80px !important;
  }
}

@media (min-width: 961px) {
  .trusted-text {
    font-size: 2.2rem; /* Default font size */
  }
}
.trusted-text:hover {
  color: #ffffff;
  background: #f5a623;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
}


</style>
